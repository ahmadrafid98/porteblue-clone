function PorductCatalogCard() {
  return (
    <div className="mb-10 flex flex-col justify-between">
      <a
        className="mb-5 h-96 w-96 outline-none flex justify-center relative ring-1 ring-gray-200 focus:ring-yellow-300"
        href="#"
      >
        <img
          className="h-auto w-auto"
          src="https://i0.wp.com/portblueshoes.com/wp-content/uploads/2020/09/241-Copy.jpg?resize=640%2C640&ssl=1"
          alt="product catalog"
        />
        <span className="absolute -left-0.5 -top-0.5 px-3 py-2 uppercase text-white text-xs bg-yellow-500">
          Obral!
        </span>
      </a>
      <div className="flex flex-col items-center justify-between">
        <a
          className="w-full flex flex-col items-center outline-none text-gray-400 focus:ring-1 focus:ring-yellow-300 focus:text-yellow-300"
          href="#"
        >
          <h2 className="text-lg text-gray-800 font-semibold mb-2">
            SR Brown 7.1
          </h2>
          <span className="mt-1">⭐⭐⭐⭐⭐</span>
          <p className="text-sm line-through mt-2 hover:text-yellow-500">
            Rp. 500.000
          </p>
          <h2 className="text-lg text-gray-800 font-semibold mt-2">
            Rp. 250.000
          </h2>
        </a>
        <a className="text-xs text-center text-gray-400 font-semibold uppercase px-4 py-3 my-3 w-full ring-2 ring-gray-300 hover:text-white hover:ring-black hover:bg-black">
          Lihat Produk
        </a>
        <a
          className="text-xs text-center text-gray-400 outline-none font-semibold uppercase px-4 py-3 my-3 w-auto ring-2 ring-gray-300 hover:text-white hover:ring-black hover:bg-black focus:ring-black focus:bg-black focus:text-white"
          href="#"
        >
          Select Options
        </a>
      </div>
    </div>
  );
}

export default PorductCatalogCard;
