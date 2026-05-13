"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(
      ".animate-on-scroll, .animate-scale, .animate-slide-left"
    );
    elements.forEach((el) => {
      el.classList.remove("is-visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
