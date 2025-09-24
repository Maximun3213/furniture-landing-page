"use client";

import useAnimate from "@/animation/hooks/useAnimate";
import Label from "@/components/Typo/Label";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import SlotCounter, { SlotCounterRef } from "react-slot-counter";

interface NumCircleProps {
  num: number;
  title: string;
  description: string;
}

function NumCircle({
  num,
  title,
  description,
}: NumCircleProps): React.JSX.Element {
  const counterRef = useRef<SlotCounterRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimate({
    elementRef: containerRef,
    onStart: () => {
      counterRef.current?.startAnimation();
    },
  });

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      maxWidth={"24.8rem"}
      textAlign={"center"}
      ref={containerRef}
    >
      <Box
        w={"21.1rem"}
        h={"21.1rem"}
        position={"relative"}
        css={{
          "& svg": {
            width: "100%",
            height: "100%",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="211"
          height="211"
          viewBox="0 0 211 211"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M105.5 211C163.766 211 211 163.766 211 105.5C211 47.234 163.766 0 105.5 0C47.2339 0 0 47.234 0 105.5C0 163.766 47.2339 211 105.5 211ZM105.5 192C153.273 192 192 153.273 192 105.5C192 57.7274 153.273 19 105.5 19C57.7274 19 19 57.7274 19 105.5C19 153.273 57.7274 192 105.5 192Z"
            fill="#E7C437"
          />
        </svg>

        <Label
          size={48}
          fontWeight={700}
          fontFamily={"var(--font-libre-baskerville)"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
        >
          <SlotCounter
            value={num}
            ref={counterRef}
            startValue={0}
            duration={1}
            dummyCharacterCount={1}
            direction="bottom-up"
            autoAnimationStart={false}
          />
        </Label>
      </Box>
      <Label
        size={24}
        fontWeight={700}
        fontFamily={"var(--font-libre-baskerville)"}
        mt={"2rem"}
        mb={"3.5rem"}
      >
        {title}
      </Label>
      <Paragraph size={18} fontWeight={500} color={TypoColor.gray}>
        {description}
      </Paragraph>
    </Flex>
  );
}

export default NumCircle;
