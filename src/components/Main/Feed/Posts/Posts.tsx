import React from "react";

import Avatar from "../../../../../public/avatar.jpg";
import Post from "../../../../../public/post.webp";
import UserPost from "./UserPost";

export default function Posts() {
  return (
    <div className="flex pl-20 pt-6">
      <div>
        <div>
          <UserPost
            name={"Pedro Henrique"}
            user={"pedin3vez"}
            avatar={Avatar}
            postImg={Post}
          />
        </div>
      </div>
    </div>
  );
}
