import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/Post/actions";
import { FETCH_POST, Post } from "../store/Post/type";
import { getPostResponse } from "../HttpService/post";
import { Card } from "../components/Card";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: any) => state.post.posts);

  return (
    <div className="flex bg-black justify-center flex-col items-center h-screen">
      <div className="h-1/3 flex justify-center items-center">
      <button className="bg-white p-3 rounded-xl" onClick={() => dispatch(fetchPost())}>Fetch Post</button>

      </div>
      <div className="grid gap-2 lg:grid-cols-4 overflow-scroll h-2/3 p-7">
      {post.length > 0  ? (
        post.map((post: Post) =><Card key={post.id} post={post} />)
      ) : (
        <div className=""></div>
      )}
      </div>
    </div>
  );
};

