import React from "react";
import { Post } from "../store/Post/type";

type Props = {
  post: Post;
};

export const Card: React.FC<Props> = ({ post }: Props) => {
  return (
    <div className="bg-white bg-opacity-70 w-full rounded-lg shadow-md lg:max-w-sm">
      
      <div className="p-4">
        <h4 className="text-xl font-semibold text-blue-600">{post.title}</h4>
        <p className="mb-2 leading-normal">{post.body}</p>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Read more
        </button>
      </div>
    </div>
  );
};
