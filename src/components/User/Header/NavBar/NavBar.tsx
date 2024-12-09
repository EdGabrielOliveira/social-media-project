import React from "react";
import InputSearch from "./InputSearch";
import ButtonsNav from "./ButtonsNav";
import ToggleTheme from "./ToggleTheme";

export default function NavBar() {
  return (
    <div className="xs:hidden md:flex flex border-b border-gray-100 dark:border-gray-800 w-full  flex-row min-h-[5rem] items-center pr-8 pl-8 ">
      <div className="flex flex-row items-center gap-10 w-full justify-between">
        <div className="flex flex-row gap-8 items-center">
          <h1 className="pl-8 pr-[5.6rem] md:hidden lg:hidden xl:flex lg:text-2xl md:text-xl font-semibold text-gray-600 dark:text-gray-400">
            MarketMates
          </h1>
          <InputSearch />
        </div>
        <div className="flex gap-4 justify-end">
          <ButtonsNav />
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
}
