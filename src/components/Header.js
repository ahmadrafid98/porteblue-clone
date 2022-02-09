import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="flex items-center py-5 bg-black w-full">
        <p className="flex justify-center flex-1 text-sm uppercase font-black text-white">
          pakai kupon save20 buat dapetin diskon 20% hanya dengan min belanja
          800 ribu!
        </p>
        <button type="button" className="flex items-center px-4 flex-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white hover:text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-between m-11">
        <Link to="/" className="outline-none focus:ring-1 focus:ring-gray-600">
          <img
            src="https://i1.wp.com/portblueshoes.com/wp-content/uploads/2020/10/portblue1-e1601713831139.png?fit=180%2C175&ssl=1"
            alt="logo"
          />
        </Link>
        <div className="flex items-center justify-between relative">
          <form>
            <input
              className="w-96 p-4 leading-3 outline-none ring-1 ring-gray-300 focus:ring-gray-600 focus:placeholder-gray-600"
              type="text"
              placeholder="Cari Produk"
            />
            <button
              className="p-4 flex justify-center items-center absolute right-0 top-0 outline-none text-gray-500 focus:ring-1 focus:ring-yellow-300 focus:text-yellow-300"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
