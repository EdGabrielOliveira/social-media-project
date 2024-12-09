import Footer from "@/components/Land/Footer/Footer";
import Header from "@/components/Land/Header/Header";
import Main from "@/components/Land/Main/Main";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 w-full flex flex-col flex-1">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
