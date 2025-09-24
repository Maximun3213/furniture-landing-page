"use client";

import useAnimate from "@/animation/hooks/useAnimate";
import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { PropsWithChildren, useRef } from "react";

gsap.registerPlugin(SplitText);

function LineMaskText({ children }: PropsWithChildren) {
  const elementRef = useRef<HTMLElement>(null);
  const splitText = useRef<SplitText | null>(null);

  const initAnimation = () => {
    splitText.current = new SplitText(elementRef.current, {
      type: " lines",
      linesClass: "lineChild",
    });

    new SplitText(elementRef.current, {
      type: "lines",
      linesClass: "lineParent",
    });

    // new SplitText(elementRef.current, {
    //   type: "lines",
    //   lineClass: "lineParent",
    // });

    gsap.set(splitText.current?.lines || [], {
      yPercent: 200,
    });
  };

  const startAnimation = () => {
    // gsap.to(splitText.current?.lines || [], {
    //   yPercent: 0,
    //   duration: 1,
    //   stagger: 0.05,
    //   delay: 0.5,
    // });

    gsap.to(splitText.current?.lines || [], {
      duration: 1,
      yPercent: 0,
      stagger: 0.05,
      ease: "power3.out",
    });
  };

  useAnimate({
    elementRef,
    onInit: initAnimation,
    onStart: startAnimation,
  });

  return (
    <Box
      ref={elementRef}
      css={{
        "& .lineParent": {
          overflow: "hidden",
        },
        // "& .lineChild": {
        //   yPercent: 100,
        // },
      }}
    >
      {children}
    </Box>
  );
}

export default LineMaskText;
