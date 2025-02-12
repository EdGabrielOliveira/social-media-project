import React from "react";

import Avatar from "@public/avatar.jpg";
import Post from "@public/post.webp";
import UserPost from "./components/UserPost";
import SendPost from "./components/SendPost";
import Status from "./components/Status/Status";

export default function Posts() {
  return (
    <div className="flex xs:pt-4 sm:pt-0 justify-center items-center xs:pb-0 sm:pb-0 md:pb-20 pb-20 pt-0 pr-0 pl-0 h-screen overflow-hidden custom-scroll flex-nowrap snap-x scroll-padding-x-4">
      <div className="w-full h-full max-h-screen overflow-y-auto">
        <div className="flex flex-col items-center gap-4 pt-0 p-4">
          <div className="xs:flex sm:hidden">
            <Status />
          </div>
          <SendPost />
          {[...Array(1)].map((_, index) => (
            <UserPost
              key={index}
              verified={true}
              name={"Pedro Henrique"}
              user={"pedin3vez"}
              avatar={Avatar}
              postImg={Post}
              bio={"Influenciado Digital"}
              time={"4 dias"}
              comment={
                "Comentario desse post sobre extraterreste pedinho cabeça de post 3 mil um bilhão de vez"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
