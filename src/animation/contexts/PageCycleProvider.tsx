"use client";

import { PageStatus } from "@/constants/animations";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";
import { createContext, ReactNode, useContext } from "react";

interface PageCycleContextType {
  pageStatus: PageStatus;
  pageEnter: () => void;
  pageEntered: () => void;
  pageExiting: () => void;
  pageExited: () => void;
  pageEntering: () => void;
  pageIdle: () => void;
  isPageIdle: boolean;
  isPageLoading: boolean;
  isPageEntering: boolean;
  isPageEntered: boolean;
  isPageExiting: boolean;
  isPageExited: boolean;
}

const PageCycleContext = createContext<PageCycleContextType | undefined>(
  undefined
);

export function PageCycleProvider({ children }: { children: ReactNode }) {
  const pageStatus = useSignal(PageStatus.ENTERING);

  const pageEnter = () => {
    pageStatus.value = PageStatus.ENTERING;
  };

  const pageEntered = () => {
    pageStatus.value = PageStatus.ENTERED;
  };

  const pageExiting = () => {
    pageStatus.value = PageStatus.EXITING;
  };

  const pageExited = () => {
    pageStatus.value = PageStatus.EXITED;
  };

  const pageEntering = () => {
    pageStatus.value = PageStatus.ENTERING;
  };

  const pageIdle = () => {
    pageStatus.value = PageStatus.IDLE;
  };

  const isPageIdle = useComputed(() => pageStatus.value === PageStatus.IDLE);
  const isPageLoading = useComputed(() => pageStatus.value === PageStatus.IDLE);
  const isPageEntering = useComputed(
    () => pageStatus.value === PageStatus.ENTERING
  );
  const isPageEntered = useComputed(
    () => pageStatus.value === PageStatus.ENTERED
  );
  const isPageExiting = useComputed(
    () => pageStatus.value === PageStatus.EXITING
  );
  const isPageExited = useComputed(
    () => pageStatus.value === PageStatus.EXITED
  );

  useSignalEffect(() => {
    console.log("pageStatus", pageStatus.value);
  });

  const contextValue = {
    pageStatus: pageStatus.value,
    pageEnter,
    pageEntered,
    pageExiting,
    pageExited,
    pageEntering,
    pageIdle,
    isPageIdle: isPageIdle.value,
    isPageLoading: isPageLoading.value,
    isPageEntering: isPageEntering.value,
    isPageEntered: isPageEntered.value,
    isPageExiting: isPageExiting.value,
    isPageExited: isPageExited.value,
  };

  return (
    <PageCycleContext.Provider value={contextValue}>
      {children}
    </PageCycleContext.Provider>
  );
}

export function usePageCycle() {
  const context = useContext(PageCycleContext);
  if (context === undefined) {
    throw new Error("usePageCycle must be used within a PageCycleProvider");
  }
  return context;
}
