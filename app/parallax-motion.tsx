"use client";

import { useEffect } from "react";

export function ParallaxMotion() {
  useEffect(() => {
    let layers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const currentOffsets = new Map<HTMLElement, number>();
    let animationFrame = 0;

    const render = () => {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;
      const motionScale = window.innerWidth < 700 ? 0.42 : 1;
      let needsAnotherFrame = false;

      layers.forEach((layer) => {
        const bounds = layer.getBoundingClientRect();

        if (bounds.bottom < -bounds.height || bounds.top > viewportHeight + bounds.height) {
          return;
        }

        const strength = Number(layer.dataset.parallax ?? 14);
        const distanceFromCenter =
          (bounds.top + bounds.height / 2 - viewportHeight / 2) /
          (viewportHeight + bounds.height);
        const targetOffset =
          Math.max(-1, Math.min(1, distanceFromCenter)) *
          -strength *
          motionScale;
        const currentOffset = currentOffsets.get(layer) ?? targetOffset;
        const nextOffset = currentOffset + (targetOffset - currentOffset) * 0.1;

        currentOffsets.set(layer, nextOffset);
        layer.style.setProperty("--parallax-y", `${nextOffset.toFixed(2)}px`);

        if (Math.abs(targetOffset - nextOffset) > 0.05) {
          needsAnotherFrame = true;
        }
      });

      if (needsAnotherFrame) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const scheduleRender = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const observer = new MutationObserver(() => {
      layers = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
      scheduleRender();
    });

    scheduleRender();
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", scheduleRender);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", scheduleRender);
    };
  }, []);

  return null;
}
