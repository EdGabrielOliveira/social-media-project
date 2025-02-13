import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import {
  VscDashboard,
  VscEye,
  VscFlame,
  VscGraph,
  VscGraphLeft,
  VscGraphLine,
  VscLink,
  VscMegaphone,
  VscOrganization,
  VscSettings,
  VscUnlock,
  VscVm,
} from "react-icons/vsc";

export default function Benefits() {
  return (
    <div className="flex w-full flex-col flex-1 gap-10 bg-white md:pr-40 md:pl-40 md:p-20 md:pt-24 md:pb-24 xs:pr-0 xs:pl-0 xs:pt-10 xs:pb-8 shadow-md shadow-gray-200">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-gray-600">Beneficios</h1>
        <p className="text-gray-500 xs:text-sm md:w-full md:text-lg xs:w-[20rem] xs:text-center">
          Veja todos os benefios disponiveis para você e para seu négocio!
        </p>
        <span className="border border-gray-200 h-0 md:w-[80%] xs:w-[60%] md:mt-10 xs:mt-6" />
      </div>

      <div className="flex md:flex-row xs:flex-col items-center justify-around md:gap-28 xs:gap-24">
        <div className="p-10 md:w-[28rem] md:h-[30rem] xs:w-[22rem] xs:h-[28rem] items-center justify-center bg-gray-100 rounded-2xl shadow-lg shadow-gray-400">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <span className="md:text-2xl xs:text-xl text-yellow-500">
                <FaStar />
              </span>
              <h1 className="text-center xs:text-xl md:text-2xl text-gray-600 font-semibold">
                Influencer
              </h1>
            </div>
            <h2 className="text-center text-gray-500 md:text-base xs:text-sm">
              Beneficios para Influencer
            </h2>
          </div>
          <ul className="p-2 mt-4 border-t border-b xs:text-sm md:text-base border-gray-300 text-gray-500 gap-2 flex flex-col pl-4 list-disc list-inside">
            <li className="flex gap-2 items-center">
              <VscGraphLine /> Oportunidade de Ganhos
            </li>
            <li className="flex gap-2 items-center">
              <VscEye /> Visibilidade Profissional
            </li>
            <li className="flex gap-2 items-center">
              <VscVm /> Plataforma Fácil de Usar
            </li>
            <li className="flex gap-2 items-center">
              <VscLink />
              Colaboração com Marcas de Destaque
            </li>
            <li className="flex gap-2 items-center">
              <VscGraphLeft className="rotate-180" />
              Crescimento da Reputação
            </li>
            <li className="flex gap-2 items-center">
              <VscOrganization />
              Comunidade de Criadores
            </li>
          </ul>
          <div className="flex flex-col gap-2 justify-center items-center p-4">
            <h1 className="text-gray-600">Tranforme sua carreira!</h1>
            <Link href="/auth/register" className="button-call">
              Comece agora!
            </Link>
          </div>
        </div>
        <div className="p-10 md:w-[28rem] md:h-[30rem] xs:w-[22rem] xs:h-[28rem] items-center justify-center bg-gray-100 rounded-2xl shadow-lg shadow-gray-400">
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
          <ul className="p-2 mt-4 border-t border-b xs:text-sm md:text-base border-gray-300 text-gray-500 gap-2 flex flex-col pl-4 list-disc list-inside">
            <li className="flex gap-2 items-center">
              <VscFlame />
              Acesso a Criadores Relevantes
            </li>
            <li className="flex gap-2 items-center">
              <VscUnlock /> Gestão Simplificada
            </li>
            <li className="flex gap-2 items-center">
              <VscSettings />
              Personalização de Campanhas
            </li>
            <li className="flex gap-2 items-center">
              <VscGraph />
              Resultados Mensuráveis
            </li>
            <li className="flex gap-2 items-center">
              <VscDashboard />
              Economia de Tempo e Recursos
            </li>
            <li className="flex gap-2 items-center">
              <VscMegaphone />
              Fortalecimento da Marca
            </li>
          </ul>
          <div className="flex flex-col gap-2 justify-center items-center p-4">
            <h1 className="text-gray-600">Tansforme sua empresa!</h1>
            <Link href="/auth/register" className="button-call">
              Comece agora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
