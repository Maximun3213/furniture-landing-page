"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
interface LinkEffectProps {
  href: string;
  children: React.ReactNode;
}

function LinkEffect({ href, children }: LinkEffectProps) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const slideInOut = () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        { clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)" },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === pathname) {
      return;
    }

    router.push(href, {
      onTransitionReady: slideInOut,
    });
  };

  return (
    <a href={href} onClick={(e) => handleClick(e, href)}>
      {children}
    </a>
  );
}

export default LinkEffect;
