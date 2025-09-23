"use client";

import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor, TypoTagHeading, TypoTagParagraph } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import ImagePlaceHolder from "@Components/ImagePlaceHolder";
import Heading from "@Components/Typo/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import splitType from "split-type";

function HomePage(): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const text = new splitType(".home h1", {
        types: "chars",
      });

      gsap.set(text.chars, {
        y: 50,
      });

      gsap.to(text.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power3.in",
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box className={"home"} ref={containerRef} position={"relative"}>
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
        <Heading
          size={48}
          overflow={"hidden"}
          fontWeight={400}
          maxWidth={"52.7rem"}
          as={TypoTagHeading.h1}
          color={TypoColor.white_primary}
        >
          Decorate Your Home With Furniture
        </Heading>
        <Paragraph
          size={18}
          fontWeight={500}
          maxWidth={"71.8rem"}
          as={TypoTagParagraph.p}
          color={TypoColor.white_primary}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet
          in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet
          entum adipiscing sapien proin.
        </Paragraph>
      </Flex>
    </Box>
  );
}

export default HomePage;
