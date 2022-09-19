import React from "react";

const List = ({ messages, showDate }) => {
  // console.log("Final:", messages);
  if (messages.length === 0) {
    return (
      <div className="ml-10 mt-10">
        No messages yet - <i className="text-slate-400">start texting</i>
      </div>
    );
  }

  return messages.map((m, idx) => {
    const msgType = m.type === "sent" ? "msg-sent" : "msg-received";
    const float = m.type === "sent" ? "self-end" : "self-start";
    const color =
      m.type === "sent"
        ? "bg-slate-800 shadow-lg text-white"
        : "bg-white shadow-lg text-black";
    return (
      <div
        key={`${m.msg}-${idx}`}
        className={`${msgType} ${float} ${color} break-words space-y-2 mt-4 p-4 rounded-3xl max-w-[60vw] md:max-w-1/2 md:min-w-1/2 h-full`}
      >
        <p className="font-black">{m.username}</p>
        <p className="">{m.msg}</p>

        {showDate && (
          <p className={"font-thin text-xs text-slate-400"}>
            {m.date.toUTCString()}
          </p>
        )}
      </div>
    );
  });
};

export default List;
