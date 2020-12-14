// src/App.js

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home.js";
// import OnePost from "./components/OnePost.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        {/* <Route component={OnePost} path="/:slug" /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;