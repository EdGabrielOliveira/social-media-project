"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { MdVerified } from "react-icons/md";
import PostIntegrations from "./PostIntegrations";

interface UsersMenuProps {
  name: string;
  user: string;
  avatar: StaticImageData;
  verified?: boolean;
  postImg: StaticImageData;
}

export default function UserPost({
  name,
  avatar,
  user,
  verified,
  postImg,
}: UsersMenuProps) {
  return (
    <div>
      <ul>
        <li className="flex flex-col gap-2 items-start p-1 rounded-xl">
          <div className="relative flex flex-row gap-4">
            <div className="flex">
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

            <div className="flex flex-col">
              <div className="flex justify-start items-center gap-2 m-0 p-0">
                <h1 className="text-[18px] text-gray-600 font-semibold">{name}</h1>
                <p className="text-sm text-gray-400">@{user}</p>
              </div>
              <p className="text-gray-600">Comentario do usuario muito legal massa</p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={postImg}
              alt={"Imagem do post"}
              width={600}
              height={500}
              className="rounded-xl w-[26rem] h-[34rem]"
            />
            <PostIntegrations />
          </div>
        </li>
      </ul>
    </div>
  );
}
