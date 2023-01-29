import React, { useState } from "react"

import standardnotes from "./standardnotes.png";

import "./Andreea.css";

import Button from 'react-bootstrap/Button';

const Andreea = () => {
  const [areaText, setAreaText] = useState("")
  const  [buttonText, setButtonText] = useState("CHANGE THE TEXT FROM THE TEXTAREA BELOW")
  function handleChange(event) {
    console.log(event.target.value);
  }
  

  return <>
  <Button />
    <p style={{color:"red"}}>
      {buttonText}
    </p>

    <textarea 
       placeholder="TEXT ON THIS INPUT"
       id="sezgin" 
       onChange={handleChange}
    textarea/>

    <button id="andreea" onClick={() => setButtonText(areaText)}>
      <img src={standardnotes} style={{ width: "100px", height: "100px" }} />
    </button>
  </>
}


export default Andreea

