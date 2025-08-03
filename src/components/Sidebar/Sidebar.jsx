import { React, useEffect, useState, useContext } from "react";
import { Context } from "../../context/Context.jsx";
import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import './Sidebar.css'

function Sidebar() {
  const [extended, setextended] = useState(false);
  const { askQue, prevPrompts, setrecentPrompt,newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setrecentPrompt(prompt);
    await askQue(prompt);
  };

  return (
    <div className="sidebar shrink-0 whitespace-nowrap flex flex-col p-4 justify-between min-h-full bg-[#F0F4F9] ">
      <div className="top">
        <div className="menu">
          <div
            className="cursor-pointer"
            onClick={() => setextended((prev) => !prev)}
          >
            <IoMdMenu />
          </div>
        </div>
        <div onClick={newChat} className="new-chat cursor-pointer flex gap-2 p-1.5 mt-18 flex-row bg-gray-200 text-gray-500 rounded-2xl">
          <div className="icon-new p-1">
            {" "}
            <FaPlus />
          </div>
          {extended ? <p className="pr-3.5">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="animate-fadeIn recent">
            <p className="recent-title mt-8 mb-8 font-semibold">Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index}
                onClick={() => loadPrompt(item)}
                className="gap-1 cursor-pointer recent-entry flex flex-row hover:bg-gray-200 hover:rounded-2xl p-1.5"
              >
                <div className="p-1.5">
                  <FaRegMessage />
                </div>
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="parts help flex flex-row gap-1 hover:bg-gray-200 hover:rounded-2xl cursor-pointer">
          <div className="p-1.5">
            <FaRegQuestionCircle />
          </div>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="parts activity flex flex-row gap-1 mt-2 mb-2 hover:bg-gray-200 hover:rounded-2xl cursor-pointer">
          <div className="p-1.5">
            <FaHistory />
          </div>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="parts settings flex flex-row gap-1 mb-2 hover:bg-gray-200 hover:rounded-2xl cursor-pointer">
          <div className="p-1.5">
            <IoSettingsOutline />
          </div>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
