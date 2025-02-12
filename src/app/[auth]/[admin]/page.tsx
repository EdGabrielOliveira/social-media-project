"use client";

import Header from "./components/User/Header/Header";

import JobsInfos from "./components/User/Main/JobsInfos/JobsInfos";
import LateralBar from "./components/User/Main/LateralBar/LateralBar";
import LateralMenu from "./components/User/Main/LateralMenu/LateralMenu";
import Main from "./components/User/Main/Main.tsx";
import MobileBar from "./components/User/Main/MobileBar/MobileBar";

export default function page() {
  return (
    <main className=" flex w-full h-screen p-0 m-0 overflow-hidden">
      <div className="flex flex-row w-full ">
        <div className="flex">
          <LateralBar />
          <LateralMenu />
        </div>
        <div className="flex flex-col w-full">
          <div className="xs:flex sm:hidden"></div>
          <Header />
          <div className="flexflex-row">
            <Main />
            <div className="md:flex xs:hidden">
              <JobsInfos />
            </div>
          </div>
          <MobileBar />
        </div>
      </div>
    </main>
  );
}
