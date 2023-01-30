import React, { useState } from 'react';
import Andreea from "./Andreea"
import Mainheader from "./Mainheader"


import Sezgin from "./Sezgin"
import Button from "react-bootstrap/Button"
import "./Andreea.css"
import emrlogo from "./emrlogo.png"




function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// reusable component
function Comp({ arg }) {
  return (
    <div style={{ display: "inline", padding: "20px" }}>
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
      return <Andreea/>
    }
  }

  return (
    <body>
      <div><Mainheader/></div>
      <div hidden>

      <div class="container text-center">
  <div class="row">
    <div class="col">
      <img src={emrlogo} style={{ width: "250px", height: "100px" }} />
    </div>
    <div class="col">
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for products..">
 </input>
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 7
    </div>
    <div class="col">
      2 of 7
    </div>
    <div class="col">
      3 of 7
    </div>
    <div class="col">
      4 of 7
    </div>
    <div class="col">
      5 of 7
    </div>
    <div class="col">
      6 of 7
    </div>
    <div class="col">
      7 of 7
    </div>
  </div>
</div>
</div>
  
     <div hidden>
      {stringArray.map(x => <Comp arg={x} />)}
      </div>
      <div hidden>
      
     <Button onClick={() => setCurrentPage("andrea")}>Andrea</Button>
      <Button onClick={() => setCurrentPage("sezgin")}>Sezgin</Button>
      <Button onClick={() => setCurrentPage("alican")}>Alican</Button>
      {renderPage(currentPage)}
    </div>
    </body>
  )
}


export default App

