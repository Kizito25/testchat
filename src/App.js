import { useState, useEffect } from "react";
import { ChatPanel } from "./components";
import { Home } from "./pages";

function cl(val) {
  return console.log(val);
}
const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [username, setUsername] = useState("");
  let checkIsLoggedIn = () => {
    if (sessionStorage.getItem("username") !== null) {
      setUsername(JSON.parse(sessionStorage.getItem("username")));
      setIsLoggedIn(true);
    } else {
      setUsername(JSON.parse(sessionStorage.removeItem("username")));
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    checkIsLoggedIn();
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      {isLoggedIn === false ? <Home /> : <ChatPanel />}
    </main>
  );
};

export default App;
