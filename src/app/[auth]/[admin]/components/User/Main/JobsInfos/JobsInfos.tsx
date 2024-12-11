import React from "react";
import OpenJobsList from "./OpenJobsList";

import Face from "../../../image/logo/face.png";
import Bmw from "../../../image/logo/bmw.png";
import Afc from "../../../image/logo/afc.png";
import Pepsi from "../../../image/logo/pepsi.png";
import Pint from "../../../image/logo/pint.png";
import Twitter from "../../../image/logo/twitter.png";

export default function JobsInfos() {
  return (
    <div className="md:w-[14rem] xl:w-[26rem] flex-1 bg-gray-100 dark:bg-gray-900 flex flex-col pr-8 pl-8 pt-4 pb-4 xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
      <div className="flex flex-col">
        <h1 className="text-sm font-medium text-gray-500 dark:text-gray-200 pb-2 text-start">
          Suggested Vagas
        </h1>
        <div className="flex flex-col gap-3 items-center">
          <OpenJobsList
            name={"Facebook"}
            user={"facebookbr"}
            local={"Brasil"}
            type={"Remoto"}
            avatar={Face}
          />
          <OpenJobsList
            name={"BMW"}
            user={"bmwcars"}
            local={"São Paulo"}
            type={"Presencial"}
            avatar={Bmw}
          />
          <OpenJobsList
            name={"América Futebol Clube"}
            user={"americaoficial"}
            local={"Natal"}
            type={"Remoto"}
            avatar={Afc}
          />
          <OpenJobsList
            name={"Pepsi Brasil"}
            user={"pepsi_oficial"}
            local={"Cajamar"}
            type={"Presencial"}
            avatar={Pepsi}
          />
          <OpenJobsList
            name={"Pinterest"}
            user={"pinterestbr"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Pint}
          />
          <OpenJobsList
            name={"Twitter"}
            user={"twitterbr"}
            local={"São Paulo"}
            type={"Remoto"}
            avatar={Twitter}
          />
        </div>
      </div>
    </div>
  );
}
