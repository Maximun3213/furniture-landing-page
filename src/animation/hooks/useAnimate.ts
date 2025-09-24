import { useGSAP } from "@gsap/react";
import { Signal, useSignal, useSignalEffect } from "@preact/signals-react";
import { RefObject, useLayoutEffect } from "react";

interface UseAnimateProps {
  elementRef: RefObject<HTMLElement | null>;
  onInit?: () => void;
  onStart: () => void;
  threshold?: number;
  root?: HTMLElement | null;
  rootMargin?: string;
}

const useAnimate = ({
  elementRef,
  onInit,
  onStart,
  threshold = 0.5,
  root = null,
  rootMargin = "0px",
}: UseAnimateProps): {
  isVisible: Signal<boolean>;
} => {
  const isVisible = useSignal(false);

  const { contextSafe } = useGSAP(() => {
    onInit?.();
  });

  const startAnimation = contextSafe(() => {
    onStart();
  });

  useLayoutEffect(() => {
    const element = elementRef.current;

    const visible = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("entry.isIntersecting", entry.isIntersecting);
            isVisible.value = true;
            visible.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    if (element) {
      visible.observe(element);
    }

    return () => {
      if (element) {
        visible.unobserve(element);
      }
    };
  });

  useSignalEffect(() => {
    if (isVisible.value) {
      startAnimation();
    }
  });

  return { isVisible };
};

export default useAnimate;
