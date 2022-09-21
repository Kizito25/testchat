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
      localStorage.setItem("received", JSON.stringify(received));
    };
  }, [sent, received]);
  if (isLoggedIn) {
    return (
      <div className="min-h-screen relative">
        {channel && <Messages sent={sent} received={received} />}
        <MsgPanel sent={sent} setSent={setSent} channel={channel} />
      </div>
    );
  } else {
    return <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
  }
};

export default Home;
