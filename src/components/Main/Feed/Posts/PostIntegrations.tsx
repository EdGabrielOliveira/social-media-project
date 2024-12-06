import React from "react";
import { FcComments, FcLike, FcShare } from "react-icons/fc";

export default function PostIntegrations() {
  return (
    <div>
      <ul className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-300">
        <button className="buttons-react">
          <span className="text-xl">
            <FcLike />
          </span>
          <p className="text-md">Gostei</p>
        </button>
        <button className="buttons-react">
          <span className="text-xl">
            <FcComments />
          </span>
          <p>Comentar</p>
        </button>
        <button className="buttons-react">
          <span className="text-xl">
            <FcShare />
          </span>
          <p>Compartilhar</p>
        </button>
      </ul>
    </div>
  );
}
