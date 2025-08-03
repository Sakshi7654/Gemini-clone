{/* <FaRegLightbulb /> */}
import { FaCode } from "react-icons/fa6";
{/* <FaCode /> */}
{/* <LiaCompass /> */}
import { RiImageAddLine } from "react-icons/ri";
{/* <RiImageAddLine /> */}

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Main from "./components/Main/Main.jsx";

import React from 'react'

function App() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
