import React, { useContext } from "react";
import boyimg from "../../assets/boy.png";
import geminimg from "../../assets/gemini png.png";
import { LiaCompass } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { useState } from "react";
import { Context } from "../../context/Context.jsx";
import "./Main.css";
function Main() {
  const {
    askQue,
    recentPrompt,
    setrecentPrompt,
    setques,
    result,
    loading,
    showResult,
    ques,
  } = useContext(Context);

  const handleCardClick = async (prompt) => {
    setrecentPrompt(prompt);
    await askQue(prompt);
  };
  return (
    <div>
      <div className="main relative min-h-screen flex flex-col  w-full">
        <div className="nav w-full flex justify-between ">
          <p className="text-2xl p-3 mr-255 text-[#585858]">Gemini</p>
          <div className="p-2">
            <img
              className="w-12 h-12 p-1 rounded-full bg-amber-200"
              src={boyimg}
            />
          </div>
        </div>
        <div className="main-cont pb-8 w-[900px] max-w-[90%] lg:max-w-[900px] m-auto mt-9 flex flex-col justify-between">
          {!showResult ? (
            <>
              <div className="greet text-[#c4c7c5] font-extrabold text-6xl mt-5">
                <p className="mb-6 bg-linear-[25deg,#4b90ff,#ff5546,teal] bg-clip-text text-transparent">
                  Hello, Sakshi.
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards flex flex-wrap mt-7 text-lg text-[#585858] font-medium justify-between gap-3">
                <div
                  onClick={() =>
                    handleCardClick(
                      "Suggest beautiful places to see on an upcoming road trip"
                    )
                  }
                  className=" flex-1 mx-[5px] card relative cursor-pointer bg-[#F0F4F9] h-[200px] p-[15px] rounded-2xl hover:bg-[#dfe4ea]"
                >
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <div className="bg-white rounded-full text-3xl absolute bottom-[10px] right-[10px] p-1">
                    <LiaCompass />
                  </div>
                </div>{" "}
                <div
                  onClick={() =>
                    handleCardClick(
                      "Briefly summarize this concept: urban planning"
                    )
                  }
                  className="flex-1 margin-[5px] relative card cursor-pointer bg-[#F0F4F9] p-[15px] h-[200px] rounded-2xl hover:bg-[#dfe4ea] "
                >
                  <p>Briefly summarize this ocncept: urban planning</p>
                  <div className="bg-white rounded-full p-1  text-3xl absolute bottom-[10px] right-[10px]">
                    <FaRegLightbulb />
                  </div>
                </div>{" "}
                <div
                  onClick={() =>
                    handleCardClick(
                      "Brainstorm team bonding activities for our work retreat"
                    )
                  }
                  className="flex-1 margin-[5px] hover:bg-[#dfe4ea] relative card cursor-pointer bg-[#F0F4F9] p-[15px] h-[200px] rounded-2xl"
                >
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <div className="bg-white rounded-full text-3xl absolute bottom-[10px] p-1.5  right-[10px]">
                    <IoImageOutline />
                  </div>
                </div>{" "}
                <div
                  onClick={() =>
                    handleCardClick(
                      "Improve the readability of the following code"
                    )
                  }
                  className="relative flex-1 margin-[5px] card hover:bg-[#dfe4ea] cursor-pointer bg-[#F0F4F9] p-[15px] h-[200px] rounded-2xl"
                >
                  <p>Improve the readability of the following code</p>
                  <div className="bg-white rounded-full text-3xl absolute bottom-[10px]  p-1 right-[10px]">
                    <FaCode />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="m-auto w-[80%]">
              <div className="result flex flex-col gap-1 overflow-auto items-start max-h-[70vh] ">
                <div className="result-title text-xl font-semibold mb-3 top-0 m-[40px_0px] flex gap-5 items-center">
                  <img
                    className="w-[35px] h-[35px] p-0.5 rounded-full bg-amber-200"
                    src={boyimg}
                    alt=""
                  />
                  <p>{recentPrompt}</p>
                </div>
                <div className="result-data w-full overflow-auto  text-[17px] font-[300] leading-loose flex gap-5 items-start">
                  <img className="w-[32px] h-[32px]" src={geminimg} alt="" />
                  {loading ? (
                    <div className="loader w-full flex flex-col gap-[10px]">
                      <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-[20px]" />
                      <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-[20px]" />
                      <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-[20px]" />
                    </div>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: result }}></p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="main-btm absolute bottom-0 px-6 left-0 right-0 w-[930px]  mx-auto">
          <div className="searchbar p-3 flex items-center justify-between gap-[20px] bg-[#f0f4f9] rounded-2xl ">
            <input
              value={ques}
              onChange={(event) => setques(event.target.value)}
              className="ml-2 border-none outline-none text-xl"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="imgs flex items-center gap-[15px]">
              <CiImageOn className="img cursor-pointer text-2xl" />
              <IoMicOutline className="img cursor-pointer text-2xl" />
              {<input type="text" className="value" /> ? (
                <VscSend
                  onClick={() => askQue(ques)}
                  className="img cursor-pointer text-2xl"
                />
              ) : null}
            </div>
          </div>
          <div className="p-2 info text-[13px] flex items-center justify-center">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
