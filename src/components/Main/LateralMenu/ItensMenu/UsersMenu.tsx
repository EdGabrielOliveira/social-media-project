"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { MdVerified } from "react-icons/md";

interface UsersMenuProps {
  name: string;
  user: string;
  avatar: StaticImageData;
  verified?: boolean;
}

export default function UsersMenu({ name, avatar, user, verified }: UsersMenuProps) {
  return (
    <div>
      <ul>
        <a href="#">
          <li className="flex flex-row gap-2 items-center bg-gray-200 p-1 rounded-xl w-[16rem] hover:scale-[98%]">
            <div className="relative flex flex-row items-end">
              <Image
                src={avatar}
                alt={name}
                width={50}
                height={50}
                className="rounded-full"
              />

              {verified && (
                <MdVerified className="absolute bottom-0 right-0 text-green-600 text-[20px]" />
              )}
            </div>

            <div className="flex flex-col gap-0 m-0 p-0">
              <h1 className="text-[18px] text-gray-600">{name}</h1>
              <p className="text-xs text-gray-500">@{user}</p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
}
