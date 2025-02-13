import React from "react";
import Avatar from "@public/avatar.webp";
import UserFeedback from "./UserFeedback";

export default function Feedback() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:gap-8 xs:gap-2 items-center w-full md:pb-20 md:pr-60 md:pl-60 md:pt-20 xs:pr-12 xs:pl-12 xs:pt-6 xs:pb-8">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center text-4xl font-semibold text-gray-600">Feedback</h1>
          <p className="text-gray-500 xs:text-sm md:w-full md:text-lg xs:w-[20rem] xs:text-center">
            Veja todos os benefícios disponíveis para você e para seu negócio!
          </p>
        </div>
        <span className="border border-gray-200 h-0 justify-center items-center mb-2 mt-4 w-[94%]" />
        <div className="flex gap-4 md:flex-row xs:flex-row xs:overflow-x-auto md:justify-around xs:justify-start w-full xs:pr-2 xs:pl-2 xs:pt-2 xs:pb-2 md:pr-0 md:pl-0 md:pt-0 md:pb-0">
          <UserFeedback
            name={"Well Monteiro"}
            job="Influencer"
            comment={
              "Ótima experiência! A interface é intuitiva e fácil de usar. Recomendo!"
            }
            avatar={Avatar}
            rating={5}
          />
          <UserFeedback
            name={"Ramon Joelson"}
            job="Desenvolvedor"
            comment={
              "Muito prático e eficiente. Facilitou bastante meu dia a dia! Parabéns!"
            }
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
