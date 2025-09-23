"use client";

import ChakraProvider from "@/providers/ChakraProvider";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider>
      <ColorModeProvider defaultTheme="light" {...props} />
    </ChakraProvider>
  );
}
