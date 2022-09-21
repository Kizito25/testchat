import { List } from "../components";

const MessageWrapper = ({ chats }) => {
  const sortedChats = chats.sort((a, b) => {
    return a.date - b.date;
  });
  return (
    <div className="msg-wrapper flex flex-col mb-10">
      <List messages={sortedChats} showDate={true} />
    </div>
  );
};

export default MessageWrapper;
