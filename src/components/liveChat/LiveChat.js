import { useEffect, useState } from "react";
import "./LiveChat.css";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChatMessages } from "../../store/slices/youtubeSlice";
import { generateRandomName, generateText } from "../../utils/helper";

const ChatMessage = ({ data }) => {
  return (
    <div className="chat-msg-layout-container">
      <FaUserCircle size={23} />
      <label>{data?.name}</label>
      <p>{data?.message}</p>
    </div>
  );
};

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState();
  const dispatch = useDispatch();
  const liveChatMessages = useSelector(
    (store) => store.youtube.liveChatMessages
  );

  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(
        addLiveChatMessages({
          name: generateRandomName(),
          message: generateText(),
        })
      );
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="live-chat-container">
      <div className="chat-messages">
        {liveChatMessages?.map((chat, index) => (
          <ChatMessage key={index} data={chat} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addLiveChatMessages({
              name: "Makarand",
              message: chatMessage,
            })
          );
          setChatMessage("");
        }}
      >
        <div className="input-container">
          <input
            className="input"
            placeholder="Chat"
            name="chat-input"
            value={chatMessage}
            onChange={(e) => {
              setChatMessage(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
