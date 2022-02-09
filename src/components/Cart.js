function Cart() {
  return (
    <div className="pb-16 pt-12 px-6">
      <table class="table-fixed w-full ring-1 ring-gray-200">
        <thead className="bg-gray-100 ring-1 ring-gray-200">
          <tr className="py-20">
            <th className="w-2/6 py-3.5 px-7" colSpan="2"></th>
            <th className="w-1/6 py-3.5 px-7 text-left">Produk</th>
            <th className="w-1/6 py-3.5 px-7 text-left">Harga</th>
            <th className="w-1/6 py-3.5 px-7 text-left">Jumlah</th>
            <th className="w-1/6 py-3.5 px-7 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="py-20">
            <td className="w-1/6 py-3.5 px-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-red-600 mx-auto cursor-pointer hover:text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </td>
            <td className="w-1/6 py-3.5 px-7">
              <img
                className="h-20 w-20 ring-1 ring-gray-300 mx-auto"
                src="https://i2.wp.com/portblueshoes.com/wp-content/uploads/2021/01/748.jpg?resize=640%2C640&ssl=1"
                alt="product"
              />
            </td>
            <td className="w-1/6 py-3.5 px-7">Black Moctoe Boots CMT - 40</td>
            <td className="w-1/6 py-3.5 px-7">Rp 400.000</td>
            <td className="w-1/6 py-3.5 px-7">
              <input
                type="number"
                className="p-3 ring-1 ring-gray-300 block"
                step="1"
                min="1"
                title="Jumlah"
                size="2"
                placeholder="0"
                inputmode="numeric"
              />
            </td>
            <td className="w-1/6 py-3.5 px-7">Rp 400.000</td>
          </tr>
          <tr className="ring-1 ring-gray-200">
            <td colSpan="5" className="text-center font-bold">
              Total
            </td>
            <td className="w-1/6 py-3.5 px-7">Rp 400.000</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full py-5 flex flex-row-reverse">
        <a
          className="mr-1 font-bold text-xs text-center text-white outline-none font-semibold uppercase px-5 py-4 my-3 w-auto bg-black hover:bg-yellow-500 focus:bg-yellow-500 "
          href="#"
        >
          Checkout
        </a>
        <a
          className="mr-1 font-bold text-xs text-center text-white outline-none font-semibold uppercase px-5 py-4 my-3 w-auto bg-black hover:bg-yellow-500 focus:bg-yellow-500 "
          href="#"
        >
          Hapus Semua
        </a>
      </div>
    </div>
  );
}

export default Cart;
