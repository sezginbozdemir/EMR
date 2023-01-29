import React, { useState } from 'react';
import Andreea from "./Andreea"
import Sezgin from "./Sezgin"
import Button from "react-bootstrap/Button"

// reusable component
function Comp({ arg }) {
  return (
    <div style={{ display: "inline", padding: "20px" }}>
      <span>{arg}</span>
      <span>{arg}</span>
    </div>
  )
}

// data
const stringArray = ["yaziA", "yaziB", "yaziC"]

const App = () => {
  const [currentPage, setCurrentPage] = useState("sezgin")

  const renderPage = (page) => {
    if (page === "andrea") {
      return <Andreea />
    }
    if (page === "sezgin") {
      return <Sezgin />
    }
  }

  return (
    <div>
      <div></div>
      {stringArray.map(x => <Comp arg={x} />)}
      <Button onClick={() => setCurrentPage("andrea")}>Andrea</Button>
      <Button onClick={() => setCurrentPage("sezgin")}>Sezgin</Button>
      <Button onClick={() => setCurrentPage("alican")}>Alican</Button>
      {renderPage(currentPage)}
    </div>
  )
}

export default App

