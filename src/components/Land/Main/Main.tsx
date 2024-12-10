"use client";

import React from "react";
import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Feedback from "./Feedback/Feedback";

export default function Main() {
  return (
    <div className="flex flex-col h-auto gap-10 w-full justify-center items-center scroll-smooth">
      <div id="inicio" className="w-full">
        <Hero />
      </div>
      <div id="benefits" className="w-full">
        <Benefits />
      </div>
      <div id="feedback" className="w-full">
        <Feedback />
      </div>
    </div>
  );
}
