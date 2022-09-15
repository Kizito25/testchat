import { ChatSidebar, Chat } from "./";

const ChatPanel = () => {
  return (
    <div className="container mx-auto">
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        {/* Chat Sidebar Begins */}
        <ChatSidebar />
        {/* Chat Sidebar Ends */}
        <Chat />
      </div>
    </div>
  );
};

export default ChatPanel;
