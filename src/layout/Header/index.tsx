import React from "react";

import LinkEffect from "@/components/LinkEffect";
import { Box, Flex, Text } from "@chakra-ui/react";
import s from "./styles.module.scss";

function Header(): React.JSX.Element {
  return (
    <Box className={s.header}>
      <Flex gap={4}>
        <LinkEffect href="/">
          <Text fontSize={"5rem"}>Home</Text>
        </LinkEffect>
        <LinkEffect href="/about">
          <Text fontSize={"5rem"}>About</Text>
        </LinkEffect>
      </Flex>
    </Box>
  );
}

export default Header;
