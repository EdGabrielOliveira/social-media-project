import React from "react";
import { FcComments, FcLike, FcShare } from "react-icons/fc";

export default function PostIntegrations() {
  return (
    <div className="flex flex-1">
      <ul className="flex w-full items-center justify-evenly  gap-4 text-white dark:text-gray-300">
        <button className="buttons-react">
          <span className="text-xl">
            <FcLike />
          </span>
          <p className="text-md xs:hidden sm:hidden md:hidden lg:flex xl:flex">Gostei</p>
        </button>
        <button className="buttons-react">
          <span className="text-xl">
            <FcComments />
          </span>
          <p className="text-md xs:hidden sm:hidden md:hidden lg:flex xl:flex">
            Comentar
          </p>
        </button>
        <button className="buttons-react">
          <span className="text-xl">
            <FcShare />
          </span>
          <p className="text-md xs:hidden sm:hidden md:hidden lg:flex xl:flex">
            Compartilhar
          </p>
        </button>
      </ul>
    </div>
  );
}
