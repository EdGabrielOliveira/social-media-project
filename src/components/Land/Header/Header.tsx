"use client";

import React from "react";

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
      <nav className="flex gap-10 justify-evenly p-10  w-full bg-white fixed z-50">
        <a
          href="/landing"
          className="md:hidden lg:hidden xl:flex lg:text-2xl md:text-xl font-semibold text-gray-600 dark:text-gray-400 cursor-pointer"
        >
          MarketMates
        </a>
        <ul className="flex flex-row gap-6 text-gray-600 text-lg items-center">
          <li className="landing-nav">
            <a href="inicio" onClick={(e) => handleClick(e, "inicio")}>
              Inicio
            </a>
          </li>
          <li className="landing-nav">
            <a href="#benefits" onClick={(e) => handleClick(e, "benefits")}>
              Recursos
            </a>
          </li>
          <li className="landing-nav">
            <a href="#benefits" onClick={(e) => handleClick(e, "feedback")}>
              Feedback
            </a>
          </li>
          <li className="landing-nav">
            <a href="/landing/suport">Suporte</a>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-4">
          <a href="/login" className="button-underline">
            Entrar
          </a>
          <a href="/register" className="button-call">
            Cadastrar-se
          </a>
        </div>
      </nav>
    </div>
  );
}
