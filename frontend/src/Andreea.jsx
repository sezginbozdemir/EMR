import React, { useState } from "react"

import standardnotes from "./standardnotes.png";

import "./Andreea.css";

const Andreea = () => {
  const [areaText, setAreaText] = useState("")
  const [buttonText, setButtonText] = useState("CE FACI BAI")

  return <>
    <p>
      {buttonText}
    </p>

    <textarea value={areaText} onKeyDown={e => setAreaText(areaText + e.key)}>
    </textarea>

    <button id="andreea" onClick={() => setButtonText(areaText)}>
      <img src={standardnotes} style={{ width: "100px", height: "100px" }} />
    </button>
  </>
}

export default Andreea

