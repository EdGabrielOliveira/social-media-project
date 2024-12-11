import React from "react";

import ModalSendPost from "./ModalSendPost";
import Avatar from "@public/avatar.jpg";
import Image from "next/image";

export default function SendPost() {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="flex flex-col bg-gray-100 dark:bg-gray-900 rounded-b-xl w-full xs:max-w-[24rem] sm:max-w-[26rem] md:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem] pb-8 pt-8 pr-14 pl-14 gap-4">
        <div className="flex justify-center w-full items-center flex-1 gap-4">
          <Image
            src={Avatar}
            alt={"Avatar"}
            width={45}
            height={44}
            className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-950"
          />
          <ModalSendPost />
        </div>
      </div>
    </div>
  );
}
