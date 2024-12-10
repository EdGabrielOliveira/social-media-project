"use client";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
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
    <div className="flex flex-col justify-center items-center text-gray-500 pt-20 pb-8 w-full bg-white pr-72 pl-72">
      <div className="flex w-full justify-between items-center gap-8">
        <div className="flex justify-center items-center gap-8">
          <a href="/register" className="button-call">
            Cadastrar-se agora mesmo!
          </a>
          <a href="/login" className="button-underline">
            Entrar
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <ul className="flex gap-4 items-center">
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, "inicio");
                }}
                className="button-underline"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, "benefits");
                }}
                className="button-underline"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, "feedback");
                }}
                className="button-underline"
              >
                Feedback
              </a>
            </li>
            <li className="button-underline">
              <a href="/landing/suport">Suporte</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between w-full border-t border-t-gray-200 pt-4 mt-4 pb-4">
        <p>© 2024 MarketMates. Todos os direitos reservados.</p>
        <div className="flex gap-2 text-xl text-gray-600  items-center justify-end">
          <FaFacebook className="hover:scale-95 text-blue-800" />
          <FaInstagram className="hover:scale-95 p-[0.6px] rounded-md text-white bg-gradient-to-tr to-fuchsia-600 from-orange-400" />
          <FaLinkedinIn className="hover:scale-95 text-blue-600" />
          <FaGithub className="hover:scale-95 text-black" />
          <FaYoutube className="hover:scale-95 text-red-600" />
          <FaTelegram className="hover:scale-95 text-sky-400" />
          <FaTwitter className="hover:scale-95 text-blue-500" />
        </div>
      </div>
    </div>
  );
}
