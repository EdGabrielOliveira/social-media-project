import React from "react";
import Image from "next/image";
import Avatar from "@public/avatar.webp";

import { VscBell, VscCommentDiscussion, VscHome, VscSearch } from "react-icons/vsc";
import Link from "next/link";

export default function MobileBar() {
  return (
    <div>
      <div className="flex justify-end absolute items-end z-10 mt-0 bottom-0 w-full xs:flex sm:hidden md:hidden lg:hidden xl:hidden">
        <ul className="flex text-2xl gap-8 justify-center items-center text-center dark:bg-gray-950/50 bg-gray-200/50 w-full pt-2 pb-2 backdrop-blur-sm text-gray-800 dark:text-gray-200">
          <li>
            <VscHome />
          </li>
          <li>
            <VscSearch />
          </li>
          <div>
            <Link href="../">
              <Image
                src={Avatar}
                alt={"Avatar"}
                className="rounded-full border-2 border-gray-500"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <li>
            <VscBell />
          </li>
          <li>
            <VscCommentDiscussion />
          </li>
        </ul>
      </div>
    </div>
  );
}
