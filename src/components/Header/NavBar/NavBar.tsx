import React from "react";
import InputSearch from "./InputSearch";
import ButtonsNav from "./ButtonsNav";

export default function NavBar() {
  return (
    <div className=" border-b border-gray-100 w-full flex flex-row h-[5rem] items-center pr-32 pl-12">
      <div className="flex flex-row items-center gap-10 justify-between w-full ">
        <InputSearch />
        <ButtonsNav />
      </div>
    </div>
  );
}
