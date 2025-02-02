import {
  FC,
  ReactNode,
  useMemo,
  Context,
  createContext,
  useContext,
  Consumer,
  Provider,
} from "react";
import { Coin, Dec, LCDClient, Account } from "@terra-money/terra.js";
import { useWallet, NetworkInfo } from "@terra-money/wallet-provider";
import { useQuery } from "react-query";
import useAddress from "hooks/useAddress";
import { DEFAULT_NETWORK } from "constants/constants";

type TerraWebapp = {
  network: NetworkInfo;
  client: LCDClient;
  taxCap: Coin | undefined;
  taxRate: Dec | undefined;
  accountInfo: Account | undefined;
};

type Config = {
  lcdClientUrl?: string;
};

const TerraWebappContext: Context<TerraWebapp> = createContext<TerraWebapp>({
  network: DEFAULT_NETWORK,
  client: new LCDClient({
    URL: DEFAULT_NETWORK.lcd,
    chainID: DEFAULT_NETWORK.chainID,
  }),
  taxCap: undefined,
  taxRate: undefined,
  accountInfo: undefined,
});

type Props = {
  children: ReactNode;
  config?: Config;
};

export const TerraWebappProvider: FC<Props> = ({ children, config }) => {
  const { network } = useWallet();
  const address = useAddress();

  const client = useMemo(() => {
    if (config?.lcdClientUrl) {
      return new LCDClient({
        URL: config?.lcdClientUrl,
        chainID: network.chainID,
        isClassic: true,
      });
    }

    return new LCDClient({
      URL: network.lcd,
      chainID: network.chainID,
      isClassic: true,
    });
  }, [network]);

  const { data: taxCap } = useQuery(
    ["taxCap", network.chainID],
    () => {
      return client.treasury.taxCap("uusd");
    },
    { refetchOnWindowFocus: false }
  );

  const { data: taxRate } = useQuery(
    ["taxRate", network.chainID],
    () => {
      return client.treasury.taxRate();
    },
    { refetchOnWindowFocus: false }
  );

  const { data: accountInfo } = useQuery(
    ["accountInfo", network.chainID],
    () => {
      return client.auth.accountInfo(address || "");
    },
    { refetchOnWindowFocus: false }
  );

  const value = useMemo(() => {
    return {
      network,
      client,
      taxCap,
      taxRate,
      accountInfo,
    };
  }, [network, client, taxCap, taxRate, accountInfo]);

  const TerraWebappProvider: Provider<TerraWebapp> =
    TerraWebappContext.Provider;

  return <TerraWebappProvider value={value}>{children}</TerraWebappProvider>;
};

export function useTerraWebapp(): TerraWebapp {
  return useContext(TerraWebappContext);
}
export const TerraWebappConsumer: Consumer<TerraWebapp> =
  TerraWebappContext.Consumer;

export default TerraWebappContext;
