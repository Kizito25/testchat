import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn, properties }, props) => {
  let [username, setUsername] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let usernameRef = useRef();

  const cl = (val) => {
    return console.log(val);
  };
  let handleChange = (e) => {
    setUsername(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameRef.current.value) {
      setErrorMessage("Please enter your username");
      setInterval(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    async function setUser(user) {
      let userData = {
        username: user,
        userID: Math.floor(Math.random() * 1000),
      };
      //   Set Username and ID
      await sessionStorage.setItem("username", JSON.stringify(userData));

      if (sessionStorage.getItem("username") !== null) {
        const initialUpdateData = JSON.parse(
          sessionStorage.getItem("username")
        );
        let updatedUser = {
          ...initialUpdateData,
        };
        setIsLoggedIn(true);
        return sessionStorage.setItem("username", JSON.stringify(updatedUser));
      }
    }
    return setUser(username);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/chat");
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 w-full flex justify-center">
      <div className="bg-gradient-to-br from-yellow-50 via-emerald-50 to-yellow-100 w-full flex justify-center"></div>
      <div className="bg-slate-50 w-full flex flex-col space-y-10 justify-center items-center">
        <div className="border border-emerald-200 bg-slate-100 rounded-md p-10 grid grid-cols-1 space-y-10">
          <div className="text-2xl font-black">
            Login: {username && username}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="px-6 py-4 border border-emerald-200 outline-none"
              onChange={handleChange}
              ref={usernameRef}
            />
            <button className="border border-emerald-200 px-6 py-4">
              Login
            </button>
          </form>
          <p className="font-light text-red-500 fixed">
            {errorMessage && errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
