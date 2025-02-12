import React from "react";

import UserStatus from "./UserStatus";
import OtherStatus from "./OtherStatus";

import "./style.css";

export default function Status() {
  return (
    <div className="overflow-hidden">
      <div className="flex pt-6 pb-4">
        <ul className="flex gap-[0.8rem] overflow-x-auto w-full custom-scroll justify-between items-center pt-2 pr-12 flex-nowrap pl-8 scale-[112%]">
          <li className="pr-2">
            <UserStatus isUser ringStatus userName="Seu Story" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@pedin" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@ramonjoel" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@geraldojr" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@geraldojr" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@geraldojr" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@geraldojr" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@geraldojr" />
          </li>
          <li>
            <OtherStatus ringStatus userName="@geraldojr" />
          </li>
        </ul>
      </div>
    </div>
  );
}
