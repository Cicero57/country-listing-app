import React from "react";

const Footer = () => {
  // *****get year function****
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p>&copy; {currentYear} Okoye Victor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
