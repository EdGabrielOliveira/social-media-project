"use client";

import Header from "../components/User/Header/Header";
import LateralMenu from "../components/User/Main/LateralMenu/LateralMenu";
import LateralBar from "../components/User/Main/LateralBar/LateralBar";
import Main from "../components/User/Main/Main.tsx";
import React from "react";
import JobsInfos from "../components/User/Main/JobsInfos/JobsInfos";

export default function page() {
  return (
    <main className=" flex w-full h-screen p-0 m-0 overflow-hidden">
      <div className="flex flex-row w-full">
        <div className="flex">
          <LateralBar />
          <LateralMenu />
        </div>
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex flex-row">
            <Main />
            <div className="md:flex xs:hidden">
              <JobsInfos />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
