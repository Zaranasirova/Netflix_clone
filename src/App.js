import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import PlayerPage from "./Pages/PlayerPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<PlayerPage />} />
      </Routes>
    </>
  );
};

export default App;
