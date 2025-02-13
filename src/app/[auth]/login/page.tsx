import React from "react";

import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-1 flex-col w-full h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col gap-4 bg-white pt-20 md:pr-20 md:pl-20 xs:pr-8 xs:pl-8 pb-10 items-center rounded-xl shadow-md shadow-gray300">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-600">Entrar</h1>
          <p className="text-gray-400 text-sm">
            Insira seus dados para realizar o login!
          </p>
        </div>
        <form className="flex flex-col gap-8 border-t border-b p-4">
          <div className="flex flex-col gap-4 text-gray-600">
            <div className="flex flex-col">
              <label className="">Email:</label>
              <input
                type="email"
                placeholder="Digite seu E-mail"
                className="input-field md:w-full xs:w-[20rem]"
              />
            </div>
            <div className="flex flex-col">
              <label>Senha:</label>
              <input
                type="password"
                placeholder="Digite sua Senha"
                className="input-field md:w-full xs:w-[20rem]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-green-600 hover:bg-green-700 p-2 w-full rounded-xl font-semibold text-white">
              Entrar
            </button>
            <div className="flex md:flex-row xs:flex-col md:text-justify xs:text-center justify-between">
              <a className="button-underline">Esqueceu a senha?</a>
              <Link href="/auth/register" className="button-underline xs:text-green-600 xs:underline">
                Criar conta
              </Link>
            </div>
          </div>
        </form>
        <div className="flex flex-col justify-end gap-2 items-center p-2 pt-4">
          <h1 className="text-center text-gray-600">Entrar com:</h1>
          <div className="flex text-4xl justify-around gap-4">
            <FcGoogle className="hover:scale-95" />
            <IoLogoLinkedin className="text-blue-600 hover:scale-95" />
            <FaGithubSquare className="hover:scale-95" />
          </div>
        </div>
      </div>
      <Link href="../" className="flex justify-center pt-2 button-underline">
        <p>Voltar para o inicio</p>
      </Link>
    </div>
  );
}
