import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Value from "./components/Value";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<Value />} />
        <Route path="/:value/:color" element={<Value />} />
        <Route path="/:value/:color/:bgcolor" element={<Value />} />
      </Routes>
    </div>
  );
}

export default App