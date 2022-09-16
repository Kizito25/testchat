import { useState, useEffect } from "react";
import { MsgPanel, Messages } from "../components";

const channel = new BroadcastChannel("main");

const Home = () => {
  const [received, setReceived] = useState([]);
  const [sent, setSent] = useState([]);

  useEffect(() => {
    channel.onmessage = ({ data }) => {
      setReceived((prevState) => [...prevState, { ...data, type: "received" }]);
    };
  }, [sent, received]);
  return (
    <div className="min-h-screen relative">
      {channel && <Messages sent={sent} received={received} />}
      <div className="absolute bottom-0 w-full">
        <MsgPanel setSent={setSent} channel={channel} />
      </div>
    </div>
  );
};

export default Home;
