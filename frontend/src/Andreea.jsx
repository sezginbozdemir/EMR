import React, { useState } from "react"

import standardnotes from "./standardnotes.png";

import "./Andreea.css";

const Andreea = () => {
  const [areaText, setAreaText] = useState("")
  const  [buttonText, setButtonText] = useState("CHANGE THE TEXT FROM THE TEXTAREA BELOW")

  return <>
    <p style={{color:"red"}}>
      {buttonText}
    </p>

    <textarea id="sezgin" 
    value={areaText} 
    onKeyDown={e => {
      if (e.key === "Backspace") {
        setAreaText(areaText.substring(0, areaText.length -1))
      } else {
        setAreaText(areaText + e.key)
        
      }
    }}>
    
    </textarea>

    <button id="andreea" onClick={() => setButtonText(areaText)}>
      <img src={standardnotes} style={{ width: "100px", height: "100px" }} />
    </button>
  </>
}

export default Andreea

