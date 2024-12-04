import React from "react";
import { VscHeart, VscHome, VscVm } from "react-icons/vsc";

export default function Menu() {
  return (
    <div>
      <ul className="flex flex-col gap-3 text-gray-400">
        <li className="flex flex-row items-center gap-2 ">
          <span className="text-2xl">
            <VscHome />
          </span>
          <h1 className="text-gray-600">For You</h1>
        </li>
        <li className="flex flex-row items-center gap-2 ">
          <span className="text-2xl">
            <VscHeart />
          </span>
          <h1 className="text-gray-600">Following</h1>
        </li>
        <li className="flex flex-row items-center gap-2 ">
          <span className="text-2xl">
            <VscVm />
          </span>
          <h1 className="text-gray-600">Live Stream</h1>
        </li>
      </ul>
    </div>
  );
}
