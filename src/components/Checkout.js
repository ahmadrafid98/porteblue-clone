function Checkout() {
  return (
    <div className="pb-16 pt-12 px-6">
      <form>
        <div className="w-full py-5">
          <h4 className="text-2xl font-bold mb-5">Penagihan & Pengiriman</h4>
          <div className="mb-7 w-full flex">
            <div className="w-full mr-4">
              <label for="nama-depan" className="uppercase text-sm">
                Nama Depan
                <span className="ml-0.5 text-red-600">*</span>
              </label>
              <div className="mt-3">
                <input
                  id="nama-depan"
                  type="text"
                  className="p-3 ring-1 w-full ring-gray-200 outline-none focus:ring-black"
                />
              </div>
            </div>
            <div className="w-full">
              <label for="nama-belakang" className="uppercase text-sm">
                Nama Belakang
                <span className="ml-0.5 text-red-600">*</span>
              </label>
              <div className="mt-3">
                <input
                  id="nama-belakang"
                  type="text"
                  className="p-3 ring-1 w-full ring-gray-200 outline-none focus:ring-black"
                />
              </div>
            </div>
          </div>
          <div className="mb-7">
            <label for="provinsi" className="uppercase text-sm">
              Provinsi
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <div className="mt-3">
              <select
                id="provinsi"
                className="w-full p-2 text-sm ring-1 ring-gray-200 outline-none focus:ring-black"
                name="orderby"
              >
                <option value="" disabled selected hidden>
                  Pilih Provinsi
                </option>
                <option value="jambi">Jambi</option>
              </select>
            </div>
          </div>
          <div className="mb-7">
            <label for="kota-kab" className="uppercase text-sm">
              Kota/Kab
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <div className="mt-3 w-2/12">
              <select
                id="kota-kab"
                className="w-full p-2 text-sm ring-1 ring-gray-200 outline-none focus:ring-black"
                name="orderby"
              >
                <option value="" disabled selected hidden>
                  Pilih Kota/Kab
                </option>
                <option value="kota jambi">Kota Jambi</option>
              </select>
            </div>
          </div>
          <div className="mb-7">
            <label for="kecamatan" className="uppercase text-sm">
              Kecamatan
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <div className="mt-3 w-2/12">
              <select
                id="kecamatan"
                className="w-full p-2 text-sm ring-1 ring-gray-200 outline-none focus:ring-black"
                name="orderby"
              >
                <option value="" disabled selected hidden>
                  Pilih Kecamatan
                </option>
                <option value="jelutung">Jelutung</option>
              </select>
            </div>
          </div>
          <div className="mb-7">
            <label for="alamat-jalan" className="uppercase text-sm">
              Alamat Jalan
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <div className="mt-3">
              <input
                id="alamat-jalan"
                type="text"
                className="p-3 w-full ring-1 ring-gray-200 outline-none focus:ring-black"
                placeholder="Nomor rumah dan nama jalan"
              />
            </div>
          </div>
          <div className="mb-7">
            <label for="kode-pos" className="uppercase text-sm">
              Kode Pos (Opsional)
            </label>
            <div className="mt-3">
              <input
                id="kode-pos"
                type="text"
                className="p-3 w-full ring-1 ring-gray-200 outline-none focus:ring-black"
              />
            </div>
          </div>
          <div className="mb-7">
            <label for="telepon" className="uppercase text-sm">
              Telepon
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <div className="mt-3">
              <input
                id="telepon"
                type="text"
                className="p-3 w-full ring-1 ring-gray-200 outline-none focus:ring-black"
              />
            </div>
          </div>
          <div className="mb-7">
            <label for="alamat-email" className="uppercase text-sm">
              Alamat Email
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <div className="mt-3">
              <input
                id="alamat-email"
                type="text"
                className="p-3 w-full ring-1 ring-gray-200 outline-none focus:ring-black"
              />
            </div>
          </div>
          <div className="mb-7">
            <input id="newsletter" type="checkbox" />
            <div className="mt-3">
              <label for="newsletter" className="uppercase text-sm">
                Subscribe to our newsletter
              </label>
            </div>
          </div>
          <div className="mb-7">
            <input id="newsletter" type="checkbox" className="mr-3" />
            <label for="newsletter" className="uppercase text-sm">
              Buat akun ?
            </label>
          </div>
        </div>
        <div className="w-full py-5">
          <h4 className="text-2xl font-bold mb-5">Informasi Tambahan</h4>
          <div className="mb-7">
            <label for="catatan" className="uppercase text-sm">
              Catatan pesanan (opsional)
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <div className="mt-3">
              <textarea
                className="p-3 w-full ring-1 ring-gray-200 outline-none focus:ring-black"
                rows="3"
                placeholder="Catatan tentang pesanan anda, misal: catatan khusus untuk
              pengiriman."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-5">
          <h4 className="text-2xl font-bold">Pesanan Anda</h4>
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
                <td className="w-1/6 py-3.5 px-7">
                  Black Moctoe Boots CMT - 40
                </td>
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
        </div>
        <button
          type="submit"
          className="w-full py-5 font-bold text-lg uppercase bg-black text-white hover:bg-yellow-600 focus:bg-yellow-600"
        >
          Buat Pesanan
        </button>
      </form>
    </div>
  );
}

export default Checkout;
