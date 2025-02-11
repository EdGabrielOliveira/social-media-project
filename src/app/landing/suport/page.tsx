import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col bg-gray-100 p-20 gap-8 rounded-xl shadow-lg shadow-gray-300">
        <h1 className="text-center text-2xl text-gray-600 font-semibold border-b pb-6">
          Fale com o Suporte!
        </h1>
        <form className="flex flex-col gap-4 text-gray-600">
          <div className="flex flex-col gap-2">
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Digite seu Nome..."
              className="input-field w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Digite seu E-mail..."
              className="input-field w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Assunto:</label>
            <input
              type="text"
              placeholder="Resumo do assunto..."
              className="input-field w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Menssagem:</label>
            <textarea
              maxLength={512}
              cols={7}
              placeholder="Digite sua Menssagem..."
              className="max-h-[20rem] min-h-[8rem] w-[32rem] rounded-xl shadow-md shadow-gray-200 p-2 focus:outline-none "
            />
          </div>
          <div className="flex justify-between items-center">
            <Link href="/landing/" className="button-underline">
              Voltar
            </Link>
            <a className="button-call w-[10rem] text-center">Enviar</a>
          </div>
        </form>
      </div>
    </div>
  );
}
