import React from "react";
import HeroImage from "@public/hero.webp";
import HeroImageDark from "@public/herodark.webp";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full md:h-[96vh] xs:h-[88.5vh] items-center justify-center pt-80 xl:pr-40 xl:pl-40 xs:pl-12 xs:pr-12">
      <div className="flex w-full justify-evenly xl:gap-44 gap-0">
        <div className="flex flex-col xl:items-start xl:justify-start items-center justify-center xl:text-start text-center xl:gap-8 xl:pl-20 xl:pt-20 pt-0 pl-0 gap-8">
          <div className="flex flex-col xl:gap-2 gap-4 ">
            <h1 className="text-4xl font-semibold text-gray-600">MarketMates</h1>
            <h1 className="md:text-2xl xs:text-xl text-gray-600 font-medium">
              Conectando marcas e criadores <br /> para campanhas de sucesso.
            </h1>
            <h2 className="md:text-lg xs:text-base text-gray-400">
              Crie, colabore e impacte com MarketMates.
            </h2>
          </div>
          <Link href="/auth/register" className="button-call justify-center items-center">
            Cadastrar-se agora!
          </Link>
        </div>
        <div>
          <div className="xl:flex hidden">
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
