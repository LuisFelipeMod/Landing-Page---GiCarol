"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMemo, useRef } from "react";

gsap.registerPlugin(useGSAP);

export function MainTitle({ title }) {
  const container = useRef();

  const characteres = useMemo(() => {
    const char = title.split("").map((item, index) => {
      return (
        <span key={index} className="main_title--char inline-block mr-[.3vw]">
          {item}
        </span>
      );
    });

    return char;
  }, [title]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".main_title--char",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6, stagger: 0.05, ease: "power1.inOut" }
      );
    },
    { scope: container }
  );

  return (
    <h1
      ref={container}
      className="main_title text-[10.8vw] font-extrabold tracking-[.4vw] indent-[-.5vw] mb-[-1vw]"
    >
      {characteres}
    </h1>
  );
}

export default MainTitle;
