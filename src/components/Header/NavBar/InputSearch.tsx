import React from "react";
import { VscSearch } from "react-icons/vsc";

export default function InputSearch() {
  return (
    <div>
      <section className="flex flex-row w-[30rem] justify-between items-center gap-0 bg-white rounded-xl border-gray-300/60 border shadow-md shadow-gray-200">
        <input
          placeholder="Pesquisar..."
          className="flex p-2 justify-start items-center pr-2 pl-2 w-[27rem] rounded-r-none bg-white text-gray-800 focus:border-0 outline-none rounded-xl"
        />
        <div className="flex flex-row items-center">
          <span className="border border-gray-200 h-6 rounded-full" />
          <button className="bg-white text-gray-500 text-2xl p-2 rounded-xl rounded-l-none">
            <VscSearch />
          </button>
        </div>
      </section>
    </div>
  );
}
