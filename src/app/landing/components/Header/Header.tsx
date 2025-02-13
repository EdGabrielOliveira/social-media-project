"use client";

import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <div>
      <nav className="flex gap-10 items-center justify-evenly md:p-10 xs:p-8 w-full bg-white md:fixed llg:fixed xl:fixed  z-10 xl:flex">
        <div className="md:hidden sm:flex xs:flex">
          <MobileMenu />
        </div>
        <Link
          href="../"
          className="xl:flex xs:fllex hidde lg:text-2xl md:text-xl font-semibold text-gray-600 dark:text-gray-400 cursor-pointer"
        >
          MarketMates
        </Link>
        <ul className="md:flex sm:hidden xs:hidden flex-row gap-6 text-gray-600 text-lg items-center">
          <li className="landing-nav">
            <Link href="inicio" onClick={(e) => handleClick(e, "inicio")}>
              Inicio
            </Link>
          </li>
          <li className="landing-nav">
            <Link href="#benefits" onClick={(e) => handleClick(e, "benefits")}>
              Recursos
            </Link>
          </li>
          <li className="landing-nav">
            <Link href="#benefits" onClick={(e) => handleClick(e, "feedback")}>
              Feedback
            </Link>
          </li>
          <li className="landing-nav">
            <Link href="/landing/suport">Suporte</Link>
          </li>
          <li className="landing-nav">
            <Link href="/auth/admin/">Admin</Link>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/auth/login"
            className="button-underline underline text-green-600 gap-2 xs:flex md:hidden"
          >
            Entrar
          </Link>
          <Link href="/auth/login" className="button-underline xs:hidden md:flex">
            Entrar
          </Link>
          <Link href="/auth/register" className="button-call xs:hidden md:flex">
            Cadastrar-se
          </Link>
        </div>
      </nav>
    </div>
  );
}
