import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RootLayout>
    </>
  );
};

export default App;
