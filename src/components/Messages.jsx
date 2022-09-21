import { MessageWrapper } from "../components";

const Messages = ({ sent, received }) => {
  return (
    <div className="border-8 border-slate-50 px-2 md:px-5 lg:p-10 bg-gradient-to-br from-indigo-50 via-indigo-50 to-indigo-200 h-[90vh] max-h-[90vh] overflow-y-scroll absolute top-0 w-full">
      <h1 className="text-2xl text-center font-black mb-10">Browser Chat</h1>
      <MessageWrapper chats={sent.concat(received)} received={received} />
    </div>
  );
};

export default Messages;
