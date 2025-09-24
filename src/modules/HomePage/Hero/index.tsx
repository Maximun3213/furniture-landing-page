"use client";

import FadeText from "@/animation/components/FadeText";
import LineMaskText from "@/animation/components/LineMaskText";
import ArrowEffect from "@/components/ArrowEffect";
import { TypoColor, TypoTagHeading, TypoTagParagraph } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import ImagePlaceHolder from "@Components/ImagePlaceHolder";
import Heading from "@Components/Typo/Heading";
import Paragraph from "@Components/Typo/Paragraph";
import React from "react";

function Hero(): React.JSX.Element {
  return (
    <Box className={"home"} position={"relative"}>
      <Box>
        <ImagePlaceHolder
          src={"/img/hero_home.jpg"}
          alt={"unsplash"}
          width={1920}
          height={1080}
        />
      </Box>
      <Flex
        flexDirection={"column"}
        gap={"5rem"}
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        left={"16.8rem"}
      >
        <FadeText>
          <Heading
            size={48}
            fontWeight={400}
            maxWidth={"52.7rem"}
            as={TypoTagHeading.h1}
            color={TypoColor.white_primary}
          >
            Decorate Your Home With Furniture
          </Heading>
        </FadeText>
        <LineMaskText>
          <Paragraph
            size={18}
            fontWeight={500}
            maxWidth={"71.8rem"}
            as={TypoTagParagraph.p}
            color={TypoColor.white_primary}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            condimentum adipiscing sapien proin. Aliquet amet non enim, ut
            aliquet in pulvinar eu. er condimentum adipiscing sapien proin.
            Aliquet amet entum adipiscing sapien proin.
          </Paragraph>
        </LineMaskText>

        <ArrowEffect />
      </Flex>
    </Box>
  );
}

export default Hero;
