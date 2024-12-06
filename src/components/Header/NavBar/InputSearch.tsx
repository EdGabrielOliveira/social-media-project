import React from "react";
import { VscSearch } from "react-icons/vsc";

export default function InputSearch() {
  return (
    <div className="flex flex-row xs:max-w-[20rem] sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[14rem] xl:max-w-[32rem] justify-between items-center gap-0 bg-white dark:bg-gray-950 rounded-xl border-gray-300/60 dark:border-gray-800 border shadow-md shadow-gray-200 dark:shadow-gray-950">
      <input
        placeholder="Pesquisar..."
        className="flex p-2 justify-start items-center pr-2 pl-2 w-[27rem] rounded-r-none bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 focus:border-0 outline-none rounded-xl"
      />
      <div className="flex flex-row items-center">
        <span className="border border-gray-200 dark:border-gray-800 h-6 rounded-full" />
        <button className="bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-200 text-2xl p-2 rounded-xl rounded-l-none">
          <VscSearch />
        </button>
      </div>
    </div>
  );
}
