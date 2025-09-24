"use client";

import useAnimate from "@/animation/hooks/useAnimate";
import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { PropsWithChildren, useRef } from "react";

type MotionTypeProps = {
  delay?: number;
  duration?: number;
};

interface FadeBoxProps {
  motion?: MotionTypeProps;
}

function FadeBox({
  children,
  motion = { delay: 0 },
}: PropsWithChildren<FadeBoxProps>) {
  const elementRef = useRef<HTMLElement>(null);

  const initAnimation = () => {
    gsap.set(elementRef.current, {
      opacity: 0,
      y: 50,
    });
  };

  const startAnimation = () => {
    gsap.to(elementRef.current, {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "power3.inOut",
      ...motion,
    });
  };

  useAnimate({
    elementRef,
    onInit: initAnimation,
    onStart: startAnimation,
  });

  return <Box ref={elementRef}>{children}</Box>;
}

export default FadeBox;
