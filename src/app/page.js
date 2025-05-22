"use client";

import { MainTitle } from "@/app/_components/title_main";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Header from "./_components/header";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".line_wrapper > span",
        { y: 50 },
        {
          y: 0,
          duration: 2,
          delay: 0.4,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        ".line_wrapper2 > span",
        { y: 50 },
        {
          y: 0,
          duration: 2,
          delay: 1,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        ".line_wrapper3 > span",
        { y: 50 },
        {
          y: 0,
          duration: 2,
          delay: 1.6,
          ease: "power1.inOut",
        }
      );
    },
    { scope: container }
  );
  return (
    <>
      <Header/>
      <section ref={container} className="hero_banner h-screen">
        <div className="hero_banner--content h-full flex justify-end flex-col ">
          <div className="hero_banner--sub self-start ml-[5.9vw]">
            <h2 className="text-[1.8vw] flex flex-col">
              <div className="line_wrapper overflow-hidden">
                <span className="inline-block">Para você que escolhe</span>
              </div>
              <div className="line_wrapper2 overflow-hidden">
                <span className="inline-block">se sentir incrível</span>
              </div>
              <div className="line_wrapper3 overflow-hidden">
                <span className="inline-block">todos os dias.</span>
              </div>
            </h2>
          </div>
          <div className="hero_banner--main flex flex-col gap-[1rem] self-start ml-auto mr-auto">
            <MainTitle title="Viva  sua  beleza"></MainTitle>
          </div>
        </div>
      </section>
    </>
  );
}
