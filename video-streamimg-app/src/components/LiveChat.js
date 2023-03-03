import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateAvatar, generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";
import submit from "../assets/img/submit.png";
import heman from "../assets/img/heman.png";

const UserChat = ({ name, message, userAvatar }) => {
  return (
    <div className="flex justify-start items-start my-1 mr-4">
      <img className="w-6 h-6" src={userAvatar} alt="chat-user-avatar" />
      <span className="mx-2 font-medium">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const chatTimer = setInterval(() => {
      dispatch(
        addMessage({
          avatar: generateAvatar(),
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 1000);

    return () => clearInterval(chatTimer);
  }, []);
  return (
    <div className="mx-8 border shadow-md rounded-lg p-4">
      <div className="border-b-2 pb-3 font-semibold text-base">Live Chat</div>
      <div className="h-[390px] overflow-auto mx-2 my-1 py-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-100 scrollbar-thumb-rounded-md text-sm flex flex-col-reverse">
        {ChatMessages.map((msg, i) => (
          <UserChat
            key={i}
            name={msg.name}
            message={msg.message}
            userAvatar={msg.avatar}
          />
        ))}
      </div>
      <form
        className="mt-3 mx-4 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              avatar: heman,
              name: "Altair🗡️",
              message: liveMsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          className="border-b-2 w-full p-1 text-xs focus:outline-none focus:border-b-blue-400"
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
          placeholder="Say something..."
        />
        <button
          type="submit"
          className="mx-4 border-2 px-2 rounded-md hover:bg-gray-200 "
        >
          <img className="w-7 h-7" src={submit} alt="submit" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
