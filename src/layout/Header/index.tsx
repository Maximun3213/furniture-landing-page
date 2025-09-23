import React from "react";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Container } from "@/components/Container";
import LinkEffect from "@/components/LinkEffect";
import Label from "@/components/Typo/Label";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import Heading from "@Components/Typo/Heading";

function Header(): React.JSX.Element {
  return (
    <Box>
      <Box bgColor={"var(--black)"} py={"3.5rem"}>
        <Container>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading
              size={36}
              fontWeight={500}
              fontFamily={"var(--font-roboto)"}
              color={TypoColor.white}
            >
              DETROA.
            </Heading>
            <Paragraph size={20} fontWeight={500} color={TypoColor.white}>
              Street Glatik, San Diego 098829
            </Paragraph>
          </Flex>
        </Container>
      </Box>
      <Box bgColor={"var(--white)"} py={"2.2rem"}>
        <Container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex alignItems={"center"} textTransform={"capitalize"} gap={"3rem"}>
            <LinkEffect href="/">
              <Label size={20}>Home</Label>
            </LinkEffect>
            <LinkEffect href="/about">
              <Label size={20}>About Us</Label>
            </LinkEffect>
            <LinkEffect href="/spaces">
              <Label size={20}>spaces</Label>
            </LinkEffect>
            <LinkEffect href="/gallery">
              <Label size={20}>Gallery</Label>
            </LinkEffect>
            <LinkEffect href="/contact">
              <Label size={20}>Contact Us</Label>
            </LinkEffect>
          </Flex>
          <PrimaryButton
            color={"dark"}
            text={"Join Us"}
            height={"6.7rem"}
            width={"22.7rem"}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
