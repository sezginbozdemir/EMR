import React, { useState } from "react"

import standardnotes from "./standardnotes.png"

import "./Andreea.css"

import Button from 'react-bootstrap/Button'

const Andreea = () => {
  const [areaText, setAreaText] = useState("")
  const [buttonText, setButtonText] = useState("CHANGE THE TEXT FROM THE TEXTAREA BELOW")

  return (
    <div style={{ backgroundColor: "red" }}>
      <Button />
      <p style={{ color: "red" }}>
        {buttonText}
      </p>

      <textarea
        placeholder="TEXT ON THIS INPUT"
        id="sezgin"
        //in-line
        onChange={e => setAreaText(e.target.value)}
        textarea />

      <button id="andreea" onClick={() => setButtonText(areaText)}>
        <img src={standardnotes} style={{ width: "100px", height: "100px" }} />
      </button>
    </div>
  )
}


export default Andreea


// const main = () => {
//   const giveMeTwoInts = () => {
//     return [2, 3]
//   }
//
//   let res = giveMeTwoInts()
//
//   let twoA = res[0]
//   let threeA = res[1]
//
//   const [twoB, threeB] = giveMeTwoInts()
// }
