"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LateralMenu from "@/components/Main/LateralMenu/LateralMenu";
import LateralBar from "@/components/Main/LateralBar/LateralBar";
import Main from "@/components/Main/Main.tsx";
import React from "react";
import JobsInfos from "@/components/Main/JobsInfos/JobsInfos";

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
            <JobsInfos />
          </div>
          <span className="hidden">
            <Footer />
          </span>
        </div>
      </div>
    </main>
  );
}
