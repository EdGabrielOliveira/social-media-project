import React from "react";
import OpenJobsList from "./OpenJobsList";

import Empresa from "../../../../public/Pepsi-logo.png";

export default function JobsInfos() {
  return (
    <div className="md:w-[14rem] xl:w-[26rem] flex-1 bg-gray-100 dark:bg-gray-900 flex flex-col pr-8 pl-8 pt-4 pb-4 xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
      <div className="flex flex-col">
        <h1 className="text-sm font-medium text-gray-500 dark:text-gray-200 pb-2 text-start">
          Suggested Vagas
        </h1>
        <div className="flex flex-col gap-3 items-center">
          <OpenJobsList
            name={"Pepsi Brasil"}
            user={"pepsi_oficial"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Empresa}
          />
          <OpenJobsList
            name={"Pepsi Brasil"}
            user={"pepsi_oficial"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Empresa}
          />
          <OpenJobsList
            name={"Pepsi Brasil"}
            user={"pepsi_oficial"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Empresa}
          />
          <OpenJobsList
            name={"Pepsi Brasil"}
            user={"pepsi_oficial"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Empresa}
          />
          <OpenJobsList
            name={"Pepsi Brasil"}
            user={"pepsi_oficial"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Empresa}
          />
          <OpenJobsList
            name={"Pepsi Brasil"}
            user={"pepsi_oficial"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Empresa}
          />
        </div>
      </div>
    </div>
  );
}
