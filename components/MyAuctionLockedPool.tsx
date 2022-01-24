import React, { useMemo } from "react";
import { Box, Link, Text } from "@chakra-ui/react";

import { useAuctionPools } from "modules/auction";

import CardHeader from "components/CardHeader";
import Card from "components/Card";
import PoolTable from "components/table/PoolTable";
import PoolNameTd from "components/table/PoolNameTd";
import LockEndTd from "components/table/LockEndTd";
import NumberInUstTd from "components/table/NumberInUstTd";
import AuctionActionsTd from "components/table/AuctionActionsTd";

const MyAuctionLockedPool = () => {
  const auctionPools = useAuctionPools();

  const columns = useMemo(
    () => [
      {
        Header: "Pool Name",
        Cell: ({ row }: any) => (
          <PoolNameTd
            assets={row.original.assets}
            pairType={row.original.pairType}
          />
        ),
        width: 250,
        accessor: "sortingAssets",
      },
      {
        Header: "Total Liquidity",
        Cell: ({ row }: any) => (
          <NumberInUstTd value={row.original.totalLiquidityInUst} />
        ),
        width: 125,
        accessor: "totalLiquidityInUst",
      },
      {
        Header: "My Initial Liquidity",
        Cell: ({ row }: any) => (
          <NumberInUstTd value={row.original.myLiquidityInUst} />
        ),
        width: 125,
        accessor: "myLiquidityInUst",
      },
      {
        Header: "Unlockable Liquidity",
        Cell: ({ row }: any) => (
          <NumberInUstTd value={row.original.myUnlockableLiquidityInUst} />
        ),
        width: 150,
        accessor: "myUnlockableLiquidityInUst",
      },
      {
        Header: "Fully Unlocks On",
        Cell: ({ row }: any) => <LockEndTd row={row} />,
        width: 150,
        accessor: "lockEnd",
      },
      {
        id: "pool-actions",
        Cell: ({ row }: any) => <AuctionActionsTd row={row} />,
        accessor: "actions",
        flex: 1,
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <Box>
      <CardHeader label="My Locked LP Tokens from Phase 2: ASTRO-UST Bootstrapping pool" />
      <Card>
        <Text textStyle="small" variant="secondary">
          Your ASTRO-UST LP tokens unlock linearly over 3 months after the end
          of the phase 2 deposit window.
        </Text>
      </Card>
      <Card mt={6} noPadding>
        <PoolTable
          columns={columns}
          data={auctionPools}
          emptyMsg="You didn't lock any positions."
          sortBy="totalUnlockedLiquidity"
        />
      </Card>
    </Box>
  );
};

export default MyAuctionLockedPool;
