"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.15,
        smoothWheel: true,
        anchors: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
