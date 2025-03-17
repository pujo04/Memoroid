import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              src="./assets/images/Memoroid.png"
              alt="Logo"
              className="h-10"
            />
          </a>
        </div>

        {/* Navigasi */}
        <nav className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"}`}>
          <ul className="md:flex space-x-6 text-gray-600">
            <li>
              <a href="/" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900">
                Contact
              </a>
            </li>
            <li>
              <a href="/account" className="hover:text-gray-900">
                Account
              </a>
            </li>
          </ul>
        </nav>

        {/* Cart & Menu Toggle */}
        <div className="flex items-center space-x-4">
          <a href="/cart">
            <img
              src="./src/assets/images/cart.png"
              alt="Cart"
              style={{ width: "24px", height: "24px" }}
              alt="Cart"
              // className="h-2 w-2"
            />
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src="./src/assets/images/menu.png"
              alt="Cart"
              style={{ width: "24px", height: "24px" }}
              alt="Menu"
              // className="h-1 w-1"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
