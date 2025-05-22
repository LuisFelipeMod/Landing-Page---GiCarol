"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

function Header() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { transform: "translateY(-10vw)", opacity: 0 },
        {
          transform: "translateY(0)",
          opacity: 1,
          duration: 1,
          delay: 1.5,
          ease: "power1.inOut",
        }
      );
    },
    { scope: container }
  );

  return (
    <header
      ref={container}
      className=" h-[4rem] pl-[8.4rem] pr-[8.4rem] absolute left-[0] w-full bg-foreground/5 backdrop-blur-md border-b-1 border-t-1 border-foreground/25 flex items-center justify-between"
    >
      <nav className="navbar flex gap-[2rem] items-center self-center">
        <Image src="/logo_sem_fundo_fonte_branca.png" width={120} height={120} alt="logotipo da marca"></Image>
        <Link className="text-[1.1vw] leading-[1.2vw]" href="#about">
          Sobre nós
        </Link>
        <Link className="text-[1.1vw] leading-[1.2vw]" href="#produtos">
          Nossos produtos
        </Link>
        <Link className="text-[1.1vw] leading-[1.2vw]" href="#resultados">
          Resultados e benefícios
        </Link>
        <Link className="text-[1.1vw] leading-[1.2vw]" href="#galeria">
          Galeria
        </Link>
      </nav>
      <Link
        className="text-[1.1vw] leading-[1.2vw] border-1 p-[0.8rem] rounded-2xl"
        href="#"
      >
        Compre seu produto
      </Link>
    </header>
  );
}
export default Header;
