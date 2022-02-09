import { Tab } from "@headlessui/react";
import PorductCatalogCard from "./ProductCatalogCard";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Product() {
  const [slide, setSlide] = useState(0);
  const [isHover, setHover] = useState(false);
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [productImages, setProductImages] = useState([
    {
      id: 0,
      src: "https://i2.wp.com/portblueshoes.com/wp-content/uploads/2019/08/635.jpg?fit=1024%2C1024&ssl=1",
      active: true,
    },
    {
      id: 1,
      src: "https://i1.wp.com/portblueshoes.com/wp-content/uploads/2021/01/754.jpg?fit=1024%2C1024&ssl=1",
      active: false,
    },
    {
      id: 2,
      src: "https://i0.wp.com/portblueshoes.com/wp-content/uploads/2019/08/636.jpg?fit=1024%2C1024&ssl=1",
      active: false,
    },
    {
      id: 3,
      src: "https://i0.wp.com/portblueshoes.com/wp-content/uploads/2019/08/633.jpg?fit=1024%2C1024&ssl=1",
      active: false,
    },
    {
      id: 4,
      src: "https://i2.wp.com/portblueshoes.com/wp-content/uploads/2021/01/725.jpg?fit=1024%2C1024&ssl=1",
      active: false,
    },
  ]);
  const slideStyles = useSpring({
    from: {
      transform: "translateX(0rem)",
      opacity: 0,
    },
    to: {
      transform: `translateX(-${slide}rem)`,
      opacity: 1,
    },
  });

  const zoomStyles = useSpring({
    from: {
      opacity: 0,
      top: 0,
      left: 0,
      transform: "scale(1)",
    },
    to: {
      top: isHover ? mousePosition.y : 0,
      left: isHover ? mousePosition.x : 0,
      transform: isHover ? "scale(1.50)" : "scale(1)",
      opacity: isHover ? 1 : 0,
      cursor: "zoom-in",
    },
  });

  const handleClick = (slideRange, key) => {
    setIndex(key);
    setSlide(slideRange);
    setProductImages([
      ...productImages.map((product) => {
        if (product.active) {
          product.active = !product.active;
        }
        if (product.id === key) {
          product.active = true;
        }
        return product;
      }),
    ]);
  };

  const handleZoom = (e) => {
    const x = -(e.clientX / 3) + 100;
    const y = -(e.clientY / 3) + 100;
    console.log(`ex: ${e.clientX}, ey: ${e.clientY}`);
    setMousePosition({
      x,
      y,
    });
    setHover(true);
  };

  return (
    <div className="px-10 py-4 w-full">
      <div className="flex">
        <div className="flex-1">
          <div className="relative z-40 overflow-hidden w-full h-product ring-1 ring-gray-200 ">
            <animated.img
              onMouseMove={(e) => handleZoom(e)}
              onMouseLeave={() => setHover(false)}
              className="w-auto z-30 absolute"
              style={zoomStyles}
              alt="product"
              src={productImages[index].src}
            />
            <div className="w-product h-product overflow-hidden">
              <animated.div
                className="w-wrapperProduct h-product"
                style={slideStyles}
              >
                {productImages.map((product) => {
                  return (
                    <div
                      className="w-product h-auto float-left overflow-hidden"
                      key={product.id}
                    >
                      <img
                        className={`w-auto ${
                          isHover ? "opacity-0" : "opacity-100"
                        }`}
                        alt="product"
                        src={product.src}
                      />
                    </div>
                  );
                })}
              </animated.div>
            </div>

            <span className="absolute z-50 -left-0.5 -top-0.5 px-3 py-2 uppercase text-white text-xs bg-yellow-500">
              Obral!
            </span>
            <span className="absolute z-50 right-1 -top-0.5 px-3 py-2">🔍</span>
          </div>
          <div className="mt-3">
            <ul className="flex justify-between">
              {productImages.map((product) => {
                const slideRange = product.id * 37.5;
                return (
                  <li
                    onClick={() => handleClick(slideRange, product.id)}
                    className={`w-auto h-auto ring-1 ring-gray-200 cursor-pointer ${
                      product.active ? "opacity-100" : "opacity-50"
                    }  hover:opacity-100`}
                  >
                    <img className="w-24" src={product.src} alt="prodcut" />
                  </li>
                );
              })}
              {/* <li className="w-auto h-auto ring-1 ring-gray-200 cursor-pointer">
                <img src="https://i2.wp.com/portblueshoes.com/wp-content/uploads/2019/08/635.jpg?fit=100%2C100&ssl=1" />
              </li>
              <li className="w-auto h-auto ring-1 ring-gray-200 cursor-pointer opacity-50 hover:opacity-100">
                <img src="https://i2.wp.com/portblueshoes.com/wp-content/uploads/2019/08/634.jpg?fit=100%2C100&ssl=1" />
              </li>
              <li className="w-auto h-auto ring-1 ring-gray-200 cursor-pointer opacity-50 hover:opacity-100">
                <img src="https://i0.wp.com/portblueshoes.com/wp-content/uploads/2019/08/636.jpg?fit=100%2C100&ssl=1" />
              </li>
              <li className="w-auto h-auto ring-1 ring-gray-200 cursor-pointer opacity-50 hover:opacity-100">
                <img src="https://i0.wp.com/portblueshoes.com/wp-content/uploads/2019/08/633.jpg?fit=100%2C100&ssl=1" />
              </li>
              <li className="w-auto h-auto ring-1 ring-gray-200 cursor-pointer opacity-50 hover:opacity-100">
                <img src="https://i0.wp.com/portblueshoes.com/wp-content/uploads/2019/08/418.jpg?fit=100%2C100&ssl=1" />
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="ml-12">
            <div>
              <h1 className="font-black text-2xl">Black Moctoe Boots CMT</h1>
              <div className="flex mt-3">
                <h2 className="text-xl text-gray-400 line-through font-semibold">
                  Rp. 799.000
                </h2>
                <h2 className="text-xl text-gray-800 font-semibold">
                  Rp. 400.000
                </h2>
              </div>
              <h5 className="mt-6 text-xl font-black uppercase text-red-500">
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
              <form className="flex mt-8 w-full">
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

                <button
                  type="submit"
                  className="ml-3 py-3 px-5 font-black text-white bg-black uppercase hover:bg-yellow-500"
                >
                  Beli Sekarang
                </button>
              </form>
              <div className="mt-4">
                <h3 className="w-2/12 font-black">Bagikan :</h3>
                <div className="mt-3">
                  <ul className="flex space-x-2">
                    <li className="hover:opacity-50">
                      <a
                        className="rounded-full bg-gray-200 p-2 inline-block"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-600 m-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    </li>
                    <li className="hover:opacity-50">
                      <a
                        className="rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-400 p-2 inline-block"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-white"
                          viewBox="0 0 27 32"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18.286 16q0-1.893-1.339-3.232t-3.232-1.339-3.232 1.339-1.339 3.232 1.339 3.232 3.232 1.339 3.232-1.339 1.339-3.232zM20.75 16q0 2.929-2.054 4.982t-4.982 2.054-4.982-2.054-2.054-4.982 2.054-4.982 4.982-2.054 4.982 2.054 2.054 4.982zM22.679 8.679q0 0.679-0.482 1.161t-1.161 0.482-1.161-0.482-0.482-1.161 0.482-1.161 1.161-0.482 1.161 0.482 0.482 1.161zM13.714 4.75q-0.125 0-1.366-0.009t-1.884 0-1.723 0.054-1.839 0.179-1.277 0.33q-0.893 0.357-1.571 1.036t-1.036 1.571q-0.196 0.518-0.33 1.277t-0.179 1.839-0.054 1.723 0 1.884 0.009 1.366-0.009 1.366 0 1.884 0.054 1.723 0.179 1.839 0.33 1.277q0.357 0.893 1.036 1.571t1.571 1.036q0.518 0.196 1.277 0.33t1.839 0.179 1.723 0.054 1.884 0 1.366-0.009 1.366 0.009 1.884 0 1.723-0.054 1.839-0.179 1.277-0.33q0.893-0.357 1.571-1.036t1.036-1.571q0.196-0.518 0.33-1.277t0.179-1.839 0.054-1.723 0-1.884-0.009-1.366 0.009-1.366 0-1.884-0.054-1.723-0.179-1.839-0.33-1.277q-0.357-0.893-1.036-1.571t-1.571-1.036q-0.518-0.196-1.277-0.33t-1.839-0.179-1.723-0.054-1.884 0-1.366 0.009zM27.429 16q0 4.089-0.089 5.661-0.179 3.714-2.214 5.75t-5.75 2.214q-1.571 0.089-5.661 0.089t-5.661-0.089q-3.714-0.179-5.75-2.214t-2.214-5.75q-0.089-1.571-0.089-5.661t0.089-5.661q0.179-3.714 2.214-5.75t5.75-2.214q1.571-0.089 5.661-0.089t5.661 0.089q3.714 0.179 5.75 2.214t2.214 5.75q0.089 1.571 0.089 5.661z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="hover:opacity-50">
                      <a
                        className="rounded-full bg-blue-500 p-2 inline-block"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-white"
                          viewBox="0 0 27 32"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M17.125 0.214v4.714h-2.804q-1.536 0-2.071 0.643t-0.536 1.929v3.375h5.232l-0.696 5.286h-4.536v13.554h-5.464v-13.554h-4.554v-5.286h4.554v-3.893q0-3.321 1.857-5.152t4.946-1.83q2.625 0 4.071 0.214z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-2 py-16">
        <Tab.Group>
          <Tab.List className="flex space-x-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/8 px-10 py-5 font-black text-sm uppercase",
                  selected
                    ? "text-yellow-500 bg-gray-100 border-t-2 border-black"
                    : "text-gray-400 hover:text-yellow-500"
                )
              }
            >
              spesifikasi produk
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/8 px-10 py-5 font-black text-sm uppercase",
                  selected
                    ? "text-yellow-500 bg-gray-100 border-t-2 border-black"
                    : "text-gray-400 hover:text-yellow-500"
                )
              }
            >
              informasi pengiriman
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/8 px-10 py-5 font-black text-sm uppercase",
                  selected
                    ? "text-yellow-500 bg-gray-100 border-t-2 border-black"
                    : "text-gray-400 hover:text-yellow-500"
                )
              }
            >
              ulasan (0)
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/8 px-10 py-5 font-black text-sm uppercase",
                  selected
                    ? "text-yellow-500 bg-gray-100 border-t-2 border-black"
                    : "text-gray-400 hover:text-yellow-500"
                )
              }
            >
              estimasi ongkos kirim
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="p-8 bg-gray-100">
              <h1 className="font-black text-lg mb-8">Spesifikasi Produk</h1>
              <div>
                <p className="text-gray-700">
                  Upper : Crazy horse leather
                  <br />
                  Outsole : Vegtan leather & Thermo plastic rubber
                  <br />
                  Konstruksi : Blakestitch
                </p>
                <img
                  src="https://i2.wp.com/portblueshoes.com/wp-content/uploads/2017/12/2-e1568992866824.png?resize=500%2C213&ssl=1"
                  alt="spesifikasi produk"
                />
              </div>
            </Tab.Panel>
            <Tab.Panel className="p-8 bg-gray-100">
              <h1 className="font-black text-lg mb-8">Informasi Pengiriman</h1>
              <p className="text-gray-700">
                Pengiriman produk akan dilakukan 20 hari kerja setelah
                pembayaran Anda berhasil, terhitung Senin – Jumat (Kecuali
                tanggal merah). Kami tidak melakukan pengiriman produk pada hari
                Sabtu, Minggu, dan hari libur nasional.
              </p>
            </Tab.Panel>
            <Tab.Panel className="p-8 bg-gray-100">
              <h1 className="font-black text-lg mb-8">Ulasan</h1>
              <p className="text-gray-700">Belum ada ulasan.</p>
            </Tab.Panel>
            <Tab.Panel className="p-8 bg-gray-100">
              <h1 className="font-black text-lg mb-8">
                Kalkulator Ongkos Kirim
              </h1>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="w-full mt-16">
        <h1 className="font-black text-3xl mb-5">Produk Terkait</h1>
        <div className="grid grid-cols-3 gap-14">
          <div>
            <PorductCatalogCard />
          </div>
          <div>
            <PorductCatalogCard />
          </div>
          <div>
            <PorductCatalogCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
