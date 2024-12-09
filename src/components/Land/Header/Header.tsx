import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="flex gap-10 justify-evenly p-10 ">
        <h1 className="md:hidden lg:hidden xl:flex lg:text-2xl md:text-xl font-semibold text-gray-600 dark:text-gray-400">
          MarketMates
        </h1>
        <ul className="flex flex-row gap-6 text-gray-600 text-lg items-center">
          <li className="landing-nav">
            <a>Home</a>
          </li>
          <li className="landing-nav">
            <a>Sobre</a>
          </li>
          <li className="landing-nav">
            <a>Recursos</a>
          </li>
          <li className="landing-nav">
            <a>Suporte</a>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-4">
          <button className="text-gray-600 p-2">Entrar</button>
          <button className="bg-green-600 p-2 rounded-xl text-gray-100 font-semibold">
            Cadastrar-se
          </button>
        </div>
      </nav>
    </div>
  );
}
