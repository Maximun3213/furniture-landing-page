import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { PropsWithChildren, useRef } from "react";

type FadeTextProps = PropsWithChildren & {};

function FadeText({ children }: FadeTextProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const splitText = new SplitText(containerRef.current, {
      type: "words",
    });

    gsap.set(splitText.words, {
      y: 100,
    });

    gsap.to(splitText.words, {
      y: 0,
      duration: 1,
      stagger: 0.075,
      ease: "power3.in",
    });
  });

  if (!React.isValidElement(children)) {
    return <div>Error: Invalid children element</div>;
  }

  return (
    <Box className={"fade-text"} overflow={"hidden"} ref={containerRef}>
      {children}
    </Box>
  );
}

export default FadeText;
