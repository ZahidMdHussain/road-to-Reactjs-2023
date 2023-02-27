import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import user from "../assets/img/user.png";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";
// import store from "../utils/store";

const UserChat = ({ name, message }) => {
  return (
    <div className="flex justify-start items-start my-1 mr-4">
      <img className="w-6 h-6" src={user} alt="chat-user-avatar" />
      <span className="mx-2 font-medium">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const chatTimer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 2000);

    return () => clearInterval(chatTimer);
  }, []);
  return (
    <div className="mx-8 border shadow-md rounded-lg p-4">
      <div className="border-b-2 pb-3 font-semibold text-base">Live Chat</div>
      <div className="h-[390px] overflow-auto mx-2 py-1 scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-gray-100 scrollbar-thumb-rounded-md text-sm flex flex-col-reverse">
        {ChatMessages.map((msg, i) => (
          <UserChat key={i} name={msg.name} message={msg.message} />
        ))}
      </div>
      <div className="mt-3 mx-4 flex">
        <input
          className="border-b-2 w-full p-1 text-xs focus:outline-none focus:border-b-blue-400"
          type="text"
          name=""
          id=""
          placeholder="Say something..."
        />
        <button className="mx-1 border-2 px-1">btn</button>
      </div>
    </div>
  );
};

export default LiveChat;
