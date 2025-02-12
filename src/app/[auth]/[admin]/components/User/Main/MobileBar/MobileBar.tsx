import React from "react";
import Image from "next/image";
import Avatar from "@public/avatar.jpg";
import { FcHome, FcConferenceCall, FcSettings, FcComments } from "react-icons/fc";

export default function MobileBar() {
  return (
    <div>
      <div className="flex justify-end absolute items-end z-10 mt-0 bottom-0 w-full xs:flex sm:hidden md:hidden lg:hidden xl:hidden">
        <ul className="flex text-2xl gap-8 justify-center items-center text-center bg-gray-100 w-full pt-2 pb-2">
          <li>
            <FcHome />
          </li>
          <li>
            <FcConferenceCall />
          </li>
          <div>
            <Image
              src={Avatar}
              alt={"Avatar"}
              className="rounded-full"
              width={50}
              height={50}
            />
            <span />
          </div>
          <li>
            <FcComments />
          </li>
          <li>
            <FcSettings />
          </li>
        </ul>
      </div>
    </div>
  );
}
