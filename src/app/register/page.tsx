import React from "react";

import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

export default function page() {
  return (
    <div className="flex flex-1 flex-col w-full h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center rounded-xl shadow-md shadow-gray300 bg-white">
        <div className="flex flex-col gap-4 pt-10 pr-20 pl-20 pb-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold text-gray-600">Cadastrar-se</h1>
            <p className="text-gray-400 text-sm">
              Insira seus dados para realizar o cadastro!
            </p>
          </div>
          <form className="flex flex-col gap-8 border-t border-b p-4">
            <div className="flex flex-col gap-4 text-gray-600">
              <div className="flex flex-col">
                <label className="">Nome:</label>
                <input
                  type="text"
                  placeholder="Digite seu Nome"
                  className="p-2 pr-4 pl-4 w-[20rem] rounded-xl bg-gray-100 outline-none focus:outline-none shadow-md shadow-gray-200"
                />
              </div>
              <div className="flex flex-col">
                <label className="">CPF:</label>
                <input
                  type="text"
                  placeholder="Digite seu CPF"
                  className="p-2 pr-4 pl-4 w-[20rem] rounded-xl bg-gray-100 outline-none focus:outline-none shadow-md shadow-gray-200"
                />
              </div>
              <div className="flex flex-col">
                <label className="">Email:</label>
                <input
                  type="email"
                  placeholder="Digite seu E-mail"
                  className="p-2 pr-4 pl-4 w-[20rem] rounded-xl bg-gray-100 outline-none focus:outline-none shadow-md shadow-gray-200"
                />
              </div>
              <div className="flex flex-col">
                <label>Senha:</label>
                <input
                  type="password"
                  placeholder="Digite sua Senha"
                  className="p-2 pr-4 pl-4 w-[20rem] rounded-xl bg-gray-100 outline-none focus:outline-none shadow-md shadow-gray-200"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-green-600 hover:bg-green-700 p-2 w-full rounded-xl font-semibold text-white">
                Entrar
              </button>
              <div className="flex justify-center">
                <a
                  href="/login"
                  className="text-gray-700 cursor-pointer hover:underline hover:underline-offset-2"
                >
                  Já possui conta? Entrar
                </a>
              </div>
            </div>
          </form>
          <div className="flex flex-col justify-end gap-2 items-center p-2 pt-4">
            <h1 className="text-center text-gray-600">Cadastrar-se com:</h1>
            <div className="flex text-4xl justify-around gap-4">
              <FcGoogle className="hover:scale-95" />
              <IoLogoLinkedin className="text-blue-600 hover:scale-95" />
              <FaGithubSquare className="hover:scale-95" />
            </div>
          </div>
        </div>
      </div>
      <a href="/landing" className="flex justify-center pt-2 button-underline">
        <p>Voltar para o inicio</p>
      </a>
    </div>
  );
}
