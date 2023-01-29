import React from 'react';

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
  </div>
)

export default App

export const andreea = 
<>
  <p id="andreea"> "CE FACI BAI" </p>
  <button type= "button"
 onclick={document.getElementById('andreea').innerHTML = 'MATA ANDREEA'}>dai </button>

</>