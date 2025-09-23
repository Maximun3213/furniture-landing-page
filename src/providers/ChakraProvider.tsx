"use client";

import type { ReactElement, ReactNode } from "react";

import {
  ChakraProvider as Chakra,
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const minimalConfig = defineConfig({
  // cssVarsPrefix: "ck",
  theme: {
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
});

const optimizedSystem = createSystem(defaultBaseConfig, minimalConfig);

function ChakraProvider({ children }: Props): ReactElement {
  return <Chakra value={optimizedSystem}>{children}</Chakra>;
}

export default ChakraProvider;
