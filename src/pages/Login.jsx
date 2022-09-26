import { useState, useEffect, useRef } from "react";

const Login = ({ setIsLoggedIn }) => {
  let [username, setUsername] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let usernameRef = useRef();

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

  useEffect(() => {
    if (sessionStorage.getItem("username") !== null) setIsLoggedIn(true);
  }, [setIsLoggedIn]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 w-full flex justify-center">
      <div className="bg-slate-50 w-full flex flex-col space-y-10 p-5 justify-center items-center">
        <div className="w-full lg:w-auto border border-emerald-200 bg-slate-100 rounded-md p-5 lg:p-10 space-y-5">
          <div className="text-2xl font-black text-center">Login</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 lg:px-6 lg:py-4 border border-emerald-200 outline-none"
              onChange={handleChange}
              ref={usernameRef}
            />
            <button className="w-full lg:w-auto border border-emerald-200 px-4 py-2 lg:px-6 lg:py-4 ">
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
