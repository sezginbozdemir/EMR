import React from 'react';
import Mainheader from "./components/Mainheader"
import HomePage from "./components/Home/Home"
import "./Andreea.css"
import VariantsExample from './components/Navbarmenu';

const App = () => (
  <body>
    <div><Mainheader /></div>
    <div><VariantsExample /></div>
    <div><HomePage /></div>  
  </body>
)

export default App

