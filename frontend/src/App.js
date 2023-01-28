import React from 'react';

const ev = {
  boyut: "30metrekare",
  katlar: 20
}

ev.boyut

function Comp({ yazi }) {
  return (
    <div>
      <p>Comp</p>
      <p>{yazi}</p>
    </div>
  );
}

function App() {
  // const yazilar = ["yaziA", "yaziB", "yaziC"]
  const yaziA = "yaziA";

  // {yazilar.foreach(x => {
  //   console.log(x)
  //   return <comp yazi={x} />
  // })}

  return (
    <div>
      <div>Sezzzzzzzz</div>
      <Comp yazi={ev.boyut} />
    </div>
  );
}

export default App;
