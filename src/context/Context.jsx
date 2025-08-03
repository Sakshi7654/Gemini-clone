import { createContext } from "react";
import { useState } from "react";
export const Context = createContext();
import { URL } from "../constants.js";
const GEMINI_API_KEY = import.meta.env.REACT_APP_GEMINI_API_KEY;

// Its purpose is to share data and functions (like onSent) across your component tree without passing props manually at every level.
const ContextProvider = (props) => {
  const [ques, setques] = useState("");
  const [result, setresult] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [loading, setloading] = useState(false);
  const [prevPrompts, setprevPrompts] = useState([]);
  const [showResult, setshowResult] = useState(false);

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setresult((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat=()=>{
    setloading(false)
    setshowResult(false)
    console.log("hello");
    
  }

  const askQue = async (prompt) => {
    const currentPrompt = (prompt ?? ques)?.toString().trim();
     if (!currentPrompt) return;
    const payload = {
    contents: [
      {
        parts: [
          {
            text: currentPrompt,
          },
        ],
      },
    ],
  };
    setresult("");
    setloading(true);
    setshowResult(true);
    setrecentPrompt(currentPrompt);
    if (!prompt) {
    setprevPrompts((prev) => [...prev, ques]);
  }
    let response;
    let finalresponse="";
    if (prompt !== undefined) {
        setprevPrompts((prev) => [...prev, prompt]);
        setrecentPrompt(prompt);
       response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      response = await response.json();
      console.log(response.candidates[0].content.parts[0].text);
       finalresponse = response.candidates[0].content.parts[0].text;
      setrecentPrompt(prompt);

    }else{
      setprevPrompts((prev) => [...prev, ques]);
       setrecentPrompt(ques)
       response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      response = await response.json();
      console.log(response.candidates[0].content.parts[0].text); 
      finalresponse=response.candidates[0].content.parts[0].text


    }

    let responseArray = finalresponse.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");

    let newResponseArray = newResponse2.split(" ");
    for (let index = 0; index < newResponseArray.length; index++) {
      const nextWord = newResponseArray[index];
      delayPara(index, nextWord + " ");
    }
    setloading(false);
    setques("");
  };

  const contextValue = {
    askQue,
    prevPrompts,
    setprevPrompts,
    setrecentPrompt,
    recentPrompt,
    setques,
    result,
    loading,
    showResult,
    ques,
    newChat,
  };
  return (
    // ContextProvider is a component that wraps its children with <Context.Provider>, making the contextValue object available to all nested components via the Context API.
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
