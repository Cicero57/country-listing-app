import React from "react";

const Footer = () => {
  // *****get year function****
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {currentYear} Made with &#x1F496;</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
