import { useState, useEffect } from "react";
import { MsgPanel, Messages } from "../components";
import Login from "./Login.jsx";

const channel = new BroadcastChannel("main");

const Home = () => {
  const [received, setReceived] = useState([]);
  const [sent, setSent] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    channel.onmessage = ({ data }) => {
      setReceived((prevState) => [...prevState, { ...data, type: "received" }]);
    };
  }, [sent, received]);
  if (isLoggedIn) {
    return (
      <div className="min-h-screen relative">
        {channel && <Messages sent={sent} received={received} />}
        <div className="absolute bottom-0 w-full">
          <MsgPanel setSent={setSent} channel={channel} />
        </div>
      </div>
    );
  } else {
    return <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
  }
};

export default Home;
