import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
