"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LateralMenu from "@/components/Main/LateralMenu/LateralMenu";
import LateralBar from "@/components/Main/LateralBar/LateralBar";
import Main from "@/components/Main/Main.tsx";
import React from "react";

export default function page() {
  return (
    <main className="w-full h-screen p-0 m-0">
      <div className="flex flex-row flex-1 w-full">
        <LateralBar />
        <LateralMenu />
        <div className="flex flex-col w-full h-max">
          <Header />
          <Main />
          <span className="hidden">
            <Footer />
          </span>
        </div>
      </div>
    </main>
  );
}
