import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Find from "./components/find/Find";
import Driver from "./components/driver/Driver";
import Luxury from "./components/luxury/Luxury";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Find/>
      <Driver/>
      <Luxury/>
      
    </div>
  );
}

export default App;
