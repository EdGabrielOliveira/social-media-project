import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 w-full flex flex-col flex-1">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
