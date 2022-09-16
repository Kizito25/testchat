import React, { useState } from "react";

const MsgPanel = ({ setSent, channel }) => {
  const [inputVal, setInputVal] = useState("");
  const [btn, setBtn] = useState(false);

  const onInputChange = (e) => {
    setInputVal(e.target.value);
    setBtn(true);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (!inputVal) {
      return;
    }
    console.log(inputVal);
    const data = {
      date: new Date(),
      msg: inputVal,
      id: Math.floor(Math.random() * 1000),
      type: "sent",
    };
    channel.postMessage({ ...data });
    setSent((prevState) => [...prevState, { ...data }]);
    setInputVal("");
    setBtn(false);
  };

  return (
    <div className={"form"}>
      <form method="post" onSubmit={onClick} className="px-5">
        <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
          <input
            type="text"
            placeholder="Message"
            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message"
            onChange={onInputChange}
            value={inputVal}
          />
          {btn && (
            <button type="submit">
              <svg
                className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MsgPanel;
