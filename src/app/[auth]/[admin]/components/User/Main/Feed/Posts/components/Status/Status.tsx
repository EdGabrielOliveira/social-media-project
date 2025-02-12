import React from "react";
import UserStatus from "./UserStatus";
import OtherStatus from "./OtherStatus";
import "./style.css";

export default function Status() {
  return (
    <div className="overflow-hidden dark:bg-gray-950 ">
      <div className="flex pt-5 pb-5">
        <ul
          className="flex gap-[0.8rem] overflow-x-auto w-full custom-scroll 
          items-center flex-nowrap pl-4 pr-4 scroll-padding-x-4 snap-x snap-mandatory pt-2 scale-[110%]"
        >
          <li className="pl-12 min-w-[6rem] snap-start">
            <UserStatus isUser userName="Seu Story" />
          </li>
          <li className="min-w-[4rem] snap-start">
            <OtherStatus ringStatus userName="@pedin" />
          </li>
          <li className="min-w-[4rem] snap-start">
            <OtherStatus ringStatus userName="@ramonjoel" />
          </li>
          <li className="pr-8 min-w-[6rem] snap-start">
            <OtherStatus ringStatus userName="@geraldojr" />
          </li>
        </ul>
      </div>
    </div>
  );
}
