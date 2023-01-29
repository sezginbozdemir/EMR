import React from 'react';
import Andreea from "./Andreea"

// reusable component
function Comp({ arg }) {
  return (
    <div>
      <p>Comp</p>
      <p>{arg}</p>
    </div>
  )
}

// data
const stringArray = ["yaziA", "yaziB", "yaziC"]

const App = () => (
  <div>
    <div></div>
    {stringArray.map(x => <Comp arg={x} />)}
    <Andreea />
  </div>
)

export default App

