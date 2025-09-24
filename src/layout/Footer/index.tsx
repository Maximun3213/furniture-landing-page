import { Container, GridContainer } from "@Components/Container";
import React from "react";

import LinkEffect from "@/components/LinkEffect";
import Heading from "@/components/Typo/Heading";
import Label from "@/components/Typo/Label";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";

function Footer(): React.JSX.Element {
  return (
    <Box bgColor={"var(--black)"} pt={"15.2rem"}>
      <Container pb={"5.2rem"}>
        <GridContainer>
          <Box gridColumn={"span 4"}>
            <Heading
              size={36}
              fontWeight={500}
              color={TypoColor.white}
              fontFamily={"var(--font-roboto)"}
              textTransform={"uppercase"}
              letterSpacing={"rem(5.94px)"}
            >
              Detroa.
            </Heading>
            <Paragraph
              size={18}
              fontWeight={500}
              color={TypoColor.white}
              mt={"5rem"}
              maxWidth={"45.6rem"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              condimentum adipiscing sapien proin. Aliquet amet non enim, ut
              aliquet in pulvinar eu. er condimentum adipiscing sapien proin.
              Aliquet amet
            </Paragraph>
          </Box>
          <Box gridColumn={"span 8"}>
            <Flex justifyContent={"space-between"} paddingLeft={"5rem"}>
              <Box>
                <Label
                  size={24}
                  fontWeight={500}
                  color={TypoColor.milk}
                  pb={"3.7rem"}
                  display={"block"}
                >
                  Get in Touch
                </Label>
                <Flex gap={"2rem"} flexDirection={"column"}>
                  <a href="tel:0-8-888-0001">
                    <Label size={18} fontWeight={500} color={TypoColor.milk}>
                      0-8-888-0001
                    </Label>
                  </a>
                  <Label size={18} fontWeight={500} color={TypoColor.milk}>
                    Santa Clara, Mexico
                  </Label>
                  <a href="mailto:info@domain.com">
                    <Label size={18} fontWeight={500} color={TypoColor.milk}>
                      info@domai.com
                    </Label>
                  </a>
                </Flex>
              </Box>
              <Box>
                <Label
                  size={24}
                  fontWeight={500}
                  color={TypoColor.milk}
                  pb={"3.7rem"}
                  display={"block"}
                >
                  Quick Link
                </Label>
                <Flex gap={"2rem"} flexDirection={"column"}>
                  <LinkEffect href="/pages">
                    <Label size={18} fontWeight={500} color={TypoColor.milk}>
                      Pages
                    </Label>
                  </LinkEffect>
                  <LinkEffect href="/gallery">
                    <Label size={18} fontWeight={500} color={TypoColor.milk}>
                      Gallery
                    </Label>
                  </LinkEffect>
                  <LinkEffect href="/spaces">
                    <Label size={18} fontWeight={500} color={TypoColor.milk}>
                      Spaces
                    </Label>
                  </LinkEffect>
                </Flex>
              </Box>
              <Box>
                <Label
                  size={24}
                  fontWeight={500}
                  color={TypoColor.milk}
                  pb={"3.7rem"}
                  display={"block"}
                >
                  Maps
                </Label>
                <Box width={"31.3rem"} height={"13.1rem"}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9892.063499889782!2d106.6853463164804!3d10.776134718990642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2s!4v1758705647029!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    loading="lazy"
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </GridContainer>
      </Container>
      <Box borderTop={"1px solid #747474"} py={"4.1rem"} pb={"5rem"}>
        <Container>
          <Label
            size={18}
            fontWeight={500}
            textAlign={"center"}
            display={"block"}
            style={{
              color: "#949494",
            }}
          >
            Copyright © 2025 Detroa. All rights reserved.
          </Label>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
