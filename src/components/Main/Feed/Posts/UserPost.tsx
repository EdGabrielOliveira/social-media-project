"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import PostIntegrations from "./PostIntegrations";
import { VscEllipsis } from "react-icons/vsc";
import { FcApproval } from "react-icons/fc";

interface UsersMenuProps {
  name: string;
  user: string;
  bio: string;
  time: string;
  comment: string;
  avatar: StaticImageData;
  verified?: boolean;
  postImg: StaticImageData;
}

export default function UserPost({
  name,
  avatar,
  bio,
  time,
  user,
  comment,
  verified,
  postImg,
}: UsersMenuProps) {
  return (
    <div className="bg-gray-200/50 dark:bg-gray-900 p-6 h-full rounded-xl w-[36rem]">
      <ul>
        <li className="flex flex-col gap-2 items-start p-1 rounded-xl">
          <div className="relative flex flex-row gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex relative">
                  <Image
                    src={avatar}
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  {verified && (
                    <FcApproval className="absolute bottom-0 right-0 text-[20px]" />
                  )}
                </div>
                <div className="flex items-center justify-between w-[28.5rem]">
                  <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-2 m-0 p-0">
                      <h1 className="text-[18px] text-gray-600 dark:text-gray-200 font-semibold">
                        {name}
                      </h1>
                      <p className="text-sm text-gray-400 ">@{user}</p>
                    </div>
                    <div className="flex text-gray-400 items-center gap-4">
                      <p>{bio}</p>
                      <p>{time}</p>
                    </div>
                  </div>
                  <div className="flex self-start text-gray-500 dark:text-gray-400 p-2">
                    <VscEllipsis />
                  </div>
                </div>
              </div>

              <div className="flex flex-col"></div>
              <p className="text-gray-600 dark:text-gray-200 w-[32rem]">{comment}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={postImg}
              alt={"Imagem do post"}
              width={600}
              height={500}
              className="rounded-xl w-[32rem] h-[30rem] shadow-lg shadow-gray-500 dark:shadow-gray-950"
            />
            <PostIntegrations />
          </div>
        </li>
      </ul>
    </div>
  );
}
