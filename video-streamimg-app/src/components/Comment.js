import React from "react";
import { commentsData } from "../utils/config";

const Comment = ({ data }) => {
  const { name, text, userAvatar } = data;
  return (
    <div className="my-2 ml-2 p-2 flex justify-start items-start bg-slate-100 rounded-md border border-slate-200 border-l-4  border-l-[#ff0000] ">
      <img className="w-9 h-9" src={userAvatar} alt="comment-user" />
      <div className="text-sm px-2">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div className="bg-gray-50" key={comment.id}>
      <Comment data={comment} />
      <div className="ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentConatiner = () => {
  return (
    <div>
      <h1 className="text-lg font-bold p-2 underline underline-offset-4 decoration-red-400">
        Comment
      </h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentConatiner;
