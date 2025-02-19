import React from "react";

import Avatar from "@public/avatar.webp";
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
          {[...Array(6)].map((_, index) => (
            <UserPost
              key={index}
              verified={true}
              name={"Pedro Henrique"}
              user={"phoficial_"}
              avatar={Avatar}
              postImg={Post}
              bio={"Influenciado Digital"}
              time={"4 dias"}
              comment={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur auctor turpis, id auctor purus faucibus et. Nullam fermentum aliquet gravida. Vestibulum quis consequat justo. Proin nec turpis eros. Integer iaculis nec urna quis mattis. Morbi egestas tristique massa a placerat. In hac habitasse platea dictumst. Vestibulum accumsan felis non erat consectetur, id condimentum sapien venenatis. Aenean posuere blandit dolor, sed sodales tellus."
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
