import Animation from "@/animation";
import { Provider } from "@/components/ui/provider";
import GridDebug from "@Components/GridDebug";
import LenisScroll from "@Components/ReactLenis";
import Header from "@Layout/Header";
import React, { PropsWithChildren } from "react";

export default function MainLayout({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <Provider>
      <Animation>
        <Header />
        <LenisScroll>{children}</LenisScroll>
        <GridDebug />
      </Animation>
    </Provider>
  );
}
