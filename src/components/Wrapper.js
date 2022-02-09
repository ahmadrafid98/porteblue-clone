function Wrapper() {
  return (
    <div className="flex justify-center items-center fixed z-10 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75">
      <div className="m-auto py-12 w-3/4 h-wrapper bg-white relative">
        <div className="flex items-start justify-start">
          <div className="ml-3 relative">
            <span className="absolute -left-3 -top-6 px-3 py-2 uppercase text-white text-xs bg-yellow-500">
              Obral!
            </span>
            <div className="w-80 mb-3">
              <a
                href="#"
                className="block outline-none focus:ring-1 focus:ring-yellow-200"
              >
                <img
                  src="https://portblueshoes.com/wp-content/uploads/2021/01/748.jpg"
                  alt="product"
                />
              </a>
            </div>
            <ul className="flex justify-between w-full">
              <li className="w-16 cursor-pointer">
                <img
                  src="https://portblueshoes.com/wp-content/uploads/2021/01/748-100x100.jpg"
                  alt="product"
                />
              </li>
              <li className="w-16 opacity-50 cursor-pointer hover:opacity-100">
                <img
                  src="https://portblueshoes.com/wp-content/uploads/2021/01/749-100x100.jpg"
                  alt="product"
                />
              </li>
              <li className="w-16 opacity-50 cursor-pointer hover:opacity-100">
                <img
                  src="https://portblueshoes.com/wp-content/uploads/2021/01/747-100x100.jpg"
                  alt="product"
                />
              </li>
              <li className="w-16 opacity-50 cursor-pointer hover:opacity-100">
                <img
                  src="https://portblueshoes.com/wp-content/uploads/2019/08/418-100x100.jpg"
                  alt="product"
                />
              </li>
            </ul>
          </div>
          <div className="ml-16 w-1/2">
            <div>
              <h1 className="font-black text-2xl">Black Moctoe Boots CMT</h1>
              <h5 className="mt-9">⭐⭐⭐⭐⭐</h5>
              <div className="flex">
                <h2 className="text-xl text-gray-400 line-through font-semibold">
                  Rp. 799.000
                </h2>
                <h2 className="text-xl text-gray-800 font-semibold ml-3">
                  Rp. 400.000
                </h2>
              </div>
              <h5 className="text-xl font-black uppercase text-red-500">
                Pre-Order 20 Hari Kerja
              </h5>
            </div>
            <div className="mt-8">
              <h1 className="text-lg">
                Size : <span>40</span>
              </h1>
              <ul className="flex mt-2">
                <li className="flex py-1 w-8 border-2 border-gray-700 rounded items-center justify-center cursor-pointer hover:border-gray-400">
                  40
                </li>
                <li className="flex ml-2 py-1 w-8 border-2 border-gray-300 rounded items-center justify-center cursor-pointer hover:border-gray-400">
                  41
                </li>
                <li className="flex ml-2 py-1 w-8 border-2 border-gray-300 rounded items-center justify-center cursor-pointer hover:border-gray-400">
                  42
                </li>
                <li className="flex ml-2 py-1 w-8 border-2 border-gray-300 rounded items-center justify-center cursor-pointer hover:border-gray-400">
                  43
                </li>
                <li className="flex ml-2 py-1 w-8 border-2 border-gray-300 rounded items-center justify-center cursor-pointer hover:border-gray-400">
                  44
                </li>
                <li className="flex ml-2 py-1 w-8 border-2 border-gray-300 rounded items-center justify-center cursor-pointer hover:border-gray-400">
                  45
                </li>
                <li className="flex ml-2 py-1 w-8 border-2 border-gray-300 rounded items-center justify-center cursor-pointer hover:border-gray-400">
                  46
                </li>
              </ul>
              <h5 className="mt-1 text-yellow-300 hover:text-black cursor-pointer">
                Hapus
              </h5>
              <form className="mt-8">
                <input
                  type="number"
                  className="p-3 ring-1 ring-gray-300 block"
                  step="1"
                  min="1"
                  title="Jumlah"
                  size="2"
                  placeholder="0"
                  inputmode="numeric"
                ></input>
                <button
                  type="submit"
                  className="w-full py-3 px-5 font-black text-white bg-black uppercase hover:bg-yellow-500"
                >
                  Beli Sekarang
                </button>
              </form>
              <h5 className="mt-3">
                SKU: N/A Kategori :
                <a href="#" className="pl-2 hover:text-yellow-500">
                  Sepatu Boots
                </a>
              </h5>
            </div>
          </div>
        </div>
        <button className="p-4 text-white bg-gray-600 hover:bg-black absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white font-black"
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
    </div>
  );
}

export default Wrapper;
