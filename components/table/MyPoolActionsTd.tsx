import React, { FC } from "react";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";

type Props = {
  contract: string;
};

const MyPoolActionsTd: FC<Props> = ({ contract }) => {
  return (
    <ButtonGroup isAttached>
      <Link href={`/pools/${contract}`} passHref>
        <Button as="a" variant="primary" size="sm" px="0" minW="20">
          Manage
        </Button>
      </Link>
      <Link href={`/pools/${contract}/stake`} passHref>
        <Button
          as="a"
          variant="primary"
          size="sm"
          px="0"
          minW="20"
          borderLeft="2px"
          borderLeftColor="brand.deepBlue"
        >
          Stake
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default MyPoolActionsTd;
