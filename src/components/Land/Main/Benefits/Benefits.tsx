import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";

export default function Benefits() {
  return (
    <div className="flex w-full flex-col flex-1 gap-10 bg-white pr-40 pl-40 p-20 shadow-md shadow-gray-200 rounded-2xl">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-gray-600">Beneficios</h1>
        <p className="text-gray-500">
          Veja todos os benefios disponiveis para você e para seu négocio!
        </p>
        <span className="border border-gray-200 h-0 w-[80%] mt-10" />
      </div>

      <div className="flex items-center justify-around gap-28">
        <div className="p-10 w-[28rem] h-[30rem] items-center justify-center  bg-gray-100 rounded-2xl shadow-lg shadow-gray-400">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl text-yellow-500">
                <FaStar />
              </span>
              <h1 className="text-center text-2xl text-gray-600 font-semibold">
                Influencer
              </h1>
            </div>
            <h2 className="text-center text-gray-500">Beneficios para Influencer</h2>
          </div>
          <ul className="p-2 mt-4 border-t border-b border-gray-300 text-gray-500 gap-2 flex flex-col pl-4 list-disc list-inside">
            <li> Oportunidade de Ganhos </li>
            <li> Visibilidade Profissional </li>
            <li> Plataforma Fácil de Usar </li>
            <li> Colaboração com Marcas de Destaque </li>
            <li> Crescimento da Reputação </li>
            <li> Comunidade de Criadores </li>
          </ul>
          <div className="flex flex-col gap-2 justify-center items-center p-4">
            <h1 className="text-gray-600">Tranforme sua carreira!</h1>
            <button className="flex p-2 pr-4 pl-4 rounded-2xl text-white font-semibold bg-green-600 hover:bg-green-700">
              Comece agora!
            </button>
          </div>
        </div>
        <div className="p-10 w-[28rem] h-[30rem] items-center justify-center bg-gray-100 rounded-2xl shadow-lg shadow-gray-400">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl text-blue-600">
                <FaUserGroup />
              </span>
              <h1 className="text-center text-2xl text-gray-600 font-semibold">
                Empresa
              </h1>
            </div>
            <h2 className="text-center text-gray-500">Beneficios para Empresa</h2>
          </div>
          <ul className="p-2 mt-4 border-t border-b border-gray-300 text-gray-500 gap-2 flex flex-col pl-4 list-disc list-inside">
            <li> Acesso a Criadores Relevantes </li>
            <li> Gestão Simplificada </li>
            <li> Personalização de Campanhas </li>
            <li> Resultados Mensuráveis </li>
            <li> Economia de Tempo e Recursos </li>
            <li> Fortalecimento da Marca </li>
          </ul>
          <div className="flex flex-col gap-2 justify-center items-center p-4">
            <h1 className="text-gray-600">Tansforme sua empresa!</h1>
            <button className="flex p-2 pr-4 pl-4 rounded-2xl text-white font-semibold bg-green-600 hover:bg-green-700">
              Comece agora!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
