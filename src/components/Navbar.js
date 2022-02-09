import { useState } from "react";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-t border-b px-8 h-16 flex items-center justify-between relative">
      <ul className="flex items-center space-x-8 text-sm">
        <li>
          <Link
            to="/sepatu-boots"
            className="hover:text-yellow-500 focus:text-yellow-500 outline-none focus:ring-1 focus:ring-yellow-500 p-3"
          >
            Sepatu Boots
          </Link>
        </li>
        <li>
          <Link
            to="/sepatu-pendek"
            className="hover:text-yellow-500 p-3 focus:text-yellow-500 outline-none focus:ring-1 focus:ring-yellow-500"
          >
            Sepatu Pendek
          </Link>
        </li>
        <li>
          <Link
            to="/sneakers"
            className="hover:text-yellow-500 p-3 focus:text-yellow-500 outline-none focus:ring-1 focus:ring-yellow-500"
          >
            Sneakers
          </Link>
        </li>
      </ul>
      <ul className="flex items-center">
        <li>
          <Link
            to="/my-account"
            className="flex hover:text-yellow-500 p-3 focus:text-yellow-500 outline-none focus:ring-1 focus:ring-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </li>
        <li
          onMouseEnter={() => setIsOpen(!isOpen)}
          onMouseLeave={() => setIsOpen(!isOpen)}
        >
          <Link
            to="/cart"
            className="flex items-center hover:text-yellow-500 p-3 focus:text-yellow-500 outline-none focus:ring-1 focus:ring-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-sm">0 items</span>
          </Link>
          <MiniCart isOpen={isOpen} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
