import React from "react";

import Avatar from "@public/avatar.jpg";
import UserFeedback from "./UserFeedback";

export default function Feedback() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 items-center pb-20 w-full pr-60 pl-60 p-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-center text-4xl font-semibold text-gray-600">Feedback</h1>
          <p className="text-gray-500">
            Veja todos os benefios disponiveis para você e para seu négocio!
          </p>
        </div>
        <span className="border border-gray-200 h-0 justify-center items-center mb-2 mt-4 w-[94%]" />
        <div className="flex gap-8 justify-around w-full">
          <UserFeedback
            name={"Well Monteiro"}
            job="Infuencer"
            comment={
              "Ótima experiência! A interface é intuitiva e fácil de usar. Recomendo!"
            }
            avatar={Avatar}
            rating={5}
          />
          <UserFeedback
            name={"Ramon Joelson"}
            job="Desenvolvedor"
            comment={"Muito prático e eficiente. Facilitou bastante meu dia a dia!"}
            avatar={Avatar}
            rating={4}
          />
          <UserFeedback
            name={"Pedro Henrique"}
            job="Empresário"
            comment={"Funcionalidades bem pensadas e design agradável. Vale a pena usar!"}
            avatar={Avatar}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
