import React from "react";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <div className="max-h-[10rem] w-full flex flex-1 bg-white dark:bg-gray-900">
      <NavBar />
    </div>
  );
}
