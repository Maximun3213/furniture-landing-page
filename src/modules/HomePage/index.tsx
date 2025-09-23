"use client";

import { TypoTagHeading } from "@/enums/typo";
import { Box } from "@chakra-ui/react";
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
      <Box
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        left={"16.8rem"}
      >
        <Heading size={72} overflow={"hidden"} as={TypoTagHeading.h1}>
          Home Page
        </Heading>
      </Box>
    </Box>
  );
}

export default HomePage;
