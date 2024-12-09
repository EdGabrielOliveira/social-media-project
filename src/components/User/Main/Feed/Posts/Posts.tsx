import React from "react";

import Avatar from "../../../../../../public/avatar.jpg";
import Post from "../../../../../../public/post.webp";
import UserPost from "./UserPost";
import SendPost from "./SendPost";

export default function Posts() {
  return (
    <div className="flex justify-center items-center xs:pb-0 sm:pb-0 md:pb-20  pb-20 pt-0 pr-0 pl-0 h-screen overflow-hidden">
      <div className="w-full h-full max-h-screen overflow-y-auto">
        <div className="flex flex-col items-center gap-4 pt-0 p-4">
          <SendPost />
          {[...Array(20)].map((_, index) => (
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
