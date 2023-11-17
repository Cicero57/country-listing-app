import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const App = () => {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country-details/:name" element={<CountryDetails />} />
        </Routes>
      </RootLayout>
    </>
  );
};

export default App;
