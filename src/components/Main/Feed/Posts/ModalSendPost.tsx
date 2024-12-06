import Image from "next/image";
import React, { useState } from "react";
import { VscChevronDown, VscGlobe, VscLock, VscOrganization } from "react-icons/vsc";
import Avatar from "../../../../../public/avatar.jpg";

interface OptionProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const options: OptionProps[] = [
  { value: "public", label: "Público", icon: <VscGlobe /> },
  { value: "private", label: "Privado", icon: <VscLock /> },
  { value: "friends", label: "Amigos", icon: <VscOrganization /> },
];

export default function ModalSendPost() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-start text-gray-400 p-2 rounded-2xl bg-white dark:bg-gray-950 dark:shadow-gray-950 transition w-full border border-gray-400/20 dark:border-gray-800 shadow-md shadow-gray-300/30"
      >
        Faça uma Publicação
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-70 z-50"
          onClick={() => setIsOpen(false)} // Fecha o modal ao clicar fora
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-3xl p-8"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
          >
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    src={Avatar}
                    alt={"Avatar"}
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg text-gray-500 dark:text-gray-300 font-semibold">
                    Pedro Henrique{" "}
                  </h1>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex justify-between items-center gap-2 bg-gray-100 dark:bg-gray-800 border px-2 border-gray-200 rounded-full dark:border-gray-700 text-gray-500 dark:text-gray-300 p-1 w-full"
                    >
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-400 dark:text-gray-300">
                          {" "}
                          {selectedOption.icon}{" "}
                        </p>
                        {selectedOption.label}
                      </div>
                      <VscChevronDown
                        className={`text-gray-500 dark:text-gray-300 transform transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-90" : "rotate-0"
                        } group-hover:rotate-45`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 rounded-lg border dark:border-gray-800 border-gray-300 bg-white text-gray-600 dark:text-gray-200 dark:bg-gray-900 shadow w-full z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSelectedOption(option);
                              setIsDropdownOpen(false);
                            }}
                            className="flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg w-full text-left"
                          >
                            {option.icon}
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full items-center flex-1">
                <textarea
                  placeholder="No que você está pensando?"
                  className="max-h-[36rem] min-h-[6rem] w-full rounded-lg p-2 outline-none bg-gray-100 dark:bg-gray-950 dark:text-gray-300"
                  rows={7}
                  maxLength={512}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <button className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-2 rounded-xl flex items-center gap-2">
                    <VscGlobe />
                    Mídia
                  </button>
                  <button className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-2 rounded-xl flex items-center gap-2">
                    <VscLock />
                    Evento
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white border-gray-400 dark:bg-gray-800 dark:text-gray-400 text-gray-500 p-2 rounded-xl transition hover:text-gray-700"
                  >
                    Cancelar
                  </button>
                  <button className="bg-blue-500 dark:bg-blue-600 text-gray-200 font-semibold p-2 rounded-xl">
                    Publicar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
