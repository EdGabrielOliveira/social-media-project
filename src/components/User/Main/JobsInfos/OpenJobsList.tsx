import Image, { StaticImageData } from "next/image";
import React from "react";

interface JobsInfosProps {
  name: string;
  user: string;
  local: string;
  type: string;
  avatar: StaticImageData;
}

export default function OpenJobsList({
  name,
  user,
  local,
  type,
  avatar,
}: JobsInfosProps) {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col bg-gray-200 dark:bg-gray-950 p-2 w-[22rem] rounded-xl gap-2">
            <div className="flex items-center">
              <Image src={avatar} alt={"Logo"} width={100} height={20} />
              <span className="border border-gray-300 dark:border-gray-800 h-10 mr-6" />
              <div className="flex flex-col">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-blue-500 dark:text-blue-400 font-semibold">
                    {name}
                  </h1>
                  <p className="text-xs text-gray-500">@{user}</p>
                </div>
                <div className="flex gap-1 text-gray-500 justify-between">
                  <p className="text-sm">{local}</p>
                  <p className="text-sm ">({type})</p>
                </div>
              </div>
            </div>
            <button className="flex bg-white dark:bg-gray-800 dark:border-gray-700 p-1 text-center dark:shadow-gray-950 text-gray-500 font-semibold justify-center rounded-xl border border-gray-300/60 shadow-lg shadow-gray-300 dark:text-gray-200">
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
