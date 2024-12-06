import React from "react";
import Menu from "./ItensMenu/Menu";
import UsersMenu from "./ItensMenu/UsersMenu";

import Foto from "../../../../public/avatar.jpg";

export default function LateralMenu() {
  return (
    <div className="h-screen min-w-[22rem] xs:hidden sm:hidden md:hidden lg:flex flex flex-col bg-gray-100 dark:bg-gray-900 text-lg  pt-10  justify-start pl-4 pr-4 overflow-auto overflow">
      <div className="flex flex-col justify-center">
        <div>
          <Menu />
        </div>
        <div className="flex justify-center items-center">
          <span className="border-[1px] border-gray-300/45 dark:border-gray-800 w-[14em] mt-7 mb-7" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Suggested Accounts
          </h1>
          <UsersMenu name={"Pedro Henrique"} avatar={Foto} user={"gabriel_htcss"} />
          <UsersMenu
            name={"Pedro Henrique"}
            avatar={Foto}
            user={"gabriel_htcss"}
            verified
          />
          <UsersMenu name={"Pedro Henrique"} avatar={Foto} user={"gabriel_htcss"} />
          <UsersMenu
            name={"Pedro Henrique"}
            avatar={Foto}
            user={"gabriel_htcss"}
            verified
          />
          <p className="flex text-xs justify-end items-end text-purple-700 dark:text-blue-600 pr-1">
            See All
          </p>
        </div>
        <div className="flex justify-center items-center">
          <span className="border-[1px] border-gray-300/45 dark:border-gray-800 w-[14em] mt-7 mb-7" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Following Accounts
          </h1>
          <UsersMenu name={"Pedro Henrique"} avatar={Foto} user={"gabriel_htcss"} />
          <UsersMenu
            name={"Pedro Henrique"}
            avatar={Foto}
            user={"gabriel_htcss"}
            verified
          />

          <UsersMenu
            name={"Pedro Henrique"}
            avatar={Foto}
            user={"gabriel_htcss"}
            verified
          />
          <UsersMenu
            name={"Pedro Henrique"}
            avatar={Foto}
            user={"gabriel_htcss"}
            verified
          />
          <p className="flex text-xs justify-end items-end text-purple-700 dark:text-blue-600 pr-1">
            See All
          </p>
        </div>
      </div>
    </div>
  );
}
