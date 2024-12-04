import React from "react";
import { VscComment, VscHeart, VscShare } from "react-icons/vsc";

export default function PostIntegrations() {
  return (
    <div>
      <ul className="flex items-center gap-4 text-gray-600">
        <li className="flex items-center gap-1 text-lg ">
          <span className="text-xl">
            <VscHeart />
          </span>
          <p className="text-md">Gostei</p>
        </li>
        <li className="flex items-center gap-1 text-lg">
          <span className="text-xl">
            <VscComment />
          </span>
          <p>Comentar</p>
        </li>
        <li className="flex items-center gap-1 text-lg">
          <span className="text-xl">
            <VscShare />
          </span>
          <p>Compartilhar</p>
        </li>
      </ul>
    </div>
  );
}
