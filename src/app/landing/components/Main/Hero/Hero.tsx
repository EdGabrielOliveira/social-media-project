import React from "react";
import HeroImage from "@public/hero.png";
import HeroImageDark from "@public/herodark.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full h-[96vh] items-center justify-center pt-80 pr-40 pl-40">
      <div className="flex w-full justify-evenly gap-44">
        <div className="flex flex-col items-start justify-start gap-8 pl-20 pt-20">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl font-semibold text-gray-600">MarketMates</h1>
            <h1 className="text-2xl text-gray-600 font-medium">
              Conectando marcas e criadores <br /> para campanhas de sucesso.
            </h1>
            <h2 className="text-lg text-gray-400">
              Crie, colabore e impacte com MarketMates.
            </h2>
          </div>
          <Link href="/auth/register" className="button-call justify-center items-center">
            Cadastrar-se agora!
          </Link>
        </div>
        <div>
          <div className="flex">
            <div className="flex absolute pt-20">
              <Image
                src={HeroImageDark}
                alt={"Hero image"}
                width={600}
                height={400}
                className="rounded-xl border border-gray-600 shadow-xl shadow-gray-400"
              />
            </div>
            <div className="flex px-20">
              <Image
                src={HeroImage}
                alt={"Hero image"}
                width={600}
                height={400}
                className="rounded-xl border border-gray-200 shadow-xl shadow-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
