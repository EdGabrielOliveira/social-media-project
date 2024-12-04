"use client";

import Image from "next/image";
import React from "react";
import {
  FcAbout,
  FcCollaboration,
  FcConferenceCall,
  FcHome,
  FcList,
  FcSettings,
} from "react-icons/fc";

import Avatar from "../../../../public/avatar.jpg";
import LateralTooltips from "./LateralTooltips";

export default function LateralBar() {
  return (
    <div>
      <div className="h-screen flex justify-center rounded-l-none bg-gray-100 w-[5rem] shadow-md border-2 border-gray-200">
        <div className="flex flex-col justify-between items-center pt-6 pb-6">
          <ul className="flex flex-col text-2xl gap-4 justify-center items-center">
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
              <LateralTooltips name={"Home"} icon={<FcHome />} />
            </li>
            <li>
              <LateralTooltips name={"About"} icon={<FcAbout />} />
            </li>
            <li>
              <LateralTooltips name={"Conference"} icon={<FcConferenceCall />} />
            </li>
            <li>
              <LateralTooltips name={"Collaborations"} icon={<FcCollaboration />} />
            </li>
          </ul>

          <ul className="flex flex-col text-2xl justify-center items-center gap-4">
            <li>
              <LateralTooltips name={"List"} icon={<FcList />} />
            </li>
            <li>
              <LateralTooltips name={"Settings"} icon={<FcSettings />} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
