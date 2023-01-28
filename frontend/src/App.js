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
    <div>Sezzzzzzzz</div>
    {stringArray.map(x => <Comp arg={x} />)}
  </div>
)

export default App
