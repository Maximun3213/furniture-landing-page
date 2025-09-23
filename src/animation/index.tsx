import { AssetsProvider } from "@Animation/contexts/AssetsProvider";
// import { PageCycleProvider } from "@Animation/contexts/PageCycleProvider";
// import PageLoader from '@Animation/PageLoader';
// import PageTransition from "@Animation/PageTransition";
import React from "react";

export default function Animation({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    // <PageCycleProvider>
    <AssetsProvider>
      {/* <PageLoader /> */}
      {children}
      {/* <PageTransition /> */}
    </AssetsProvider>
    // </PageCycleProvider>
  );
}
