import { useState } from "react";
import "./App.css";
import { Nav, Brand, Cta, Feature, Article } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Posibility,
  WhatGPT3,
} from "./containers";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="header_nav">
        <Nav />
        <Header />
      </div>
    </div>
  );
}

export default App;
