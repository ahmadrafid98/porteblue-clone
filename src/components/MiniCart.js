import { useSpring, animated } from "react-spring";

function MiniCart({ isOpen }) {
  const styles = useSpring({
    from: {
      visibility: "hidden",
      opacity: 0,
    },
    to: {
      visibility: isOpen ? "visible" : "hidden",
      opacity: isOpen ? 1 : 0,
    },
    delay: 200,
  });
  return (
    <animated.div
      style={styles}
      className="w-80 py-6 px-8 bg-gray-100 absolute top-11 right-5 z-50"
    >
      <ul className="mb-4">
        <li className="flex py-2">
          <div className="flex-1 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-600 mx-auto cursor-pointer hover:text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-4">
            <a
              className="h-auto w-full pr-20 outline-none hover:text-yellow-500 focus:text-yellow-500 focus:ring-1 focus:ring-yellow-500 relative"
              href="#"
            >
              <span className="text-sm font-bold">
                Black Moctoe Boots CMT - 44
              </span>
              <img
                className="w-16 h-16 border-2 border-gray-200 absolute -right-20 top-1"
                src="https://i2.wp.com/portblueshoes.com/wp-content/uploads/2021/01/748.jpg?resize=640%2C640&ssl=1"
                alt="product"
              />
            </a>
            <p className="text-sm mt-2">1 x Rp.700.000</p>
          </div>
        </li>
        <li className="flex py-2">
          <div className="flex-1 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-600 mx-auto cursor-pointer hover:text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-4">
            <a
              className="h-auto w-full pr-20 outline-none hover:text-yellow-500 focus:text-yellow-500 focus:ring-1 focus:ring-yellow-500 relative"
              href="#"
            >
              <span className="text-sm font-bold">
                Black Moctoe Boots CMT - 44
              </span>
              <img
                className="w-16 h-16 border-2 border-gray-200 absolute -right-20 top-1"
                src="https://i2.wp.com/portblueshoes.com/wp-content/uploads/2021/01/748.jpg?resize=640%2C640&ssl=1"
                alt="product"
              />
            </a>
            <p className="text-sm mt-2">1 x Rp.700.000</p>
          </div>
        </li>
      </ul>
      <div className="w-full flex justify-center mb-4">
        <p className="font-bold text-sm">
          Subtotal: <span className="font-thin">Rp. 700.000</span>
        </p>
      </div>
      <div className="flex flex-col">
        <button className="w-full bg-black text-white uppercase font-bold text-sm mb-4 py-3 hover:bg-yellow-600 focus:bg-yellow-600">
          Lihat Keranjang
        </button>
        <button className="w-full bg-black text-white uppercase font-bolds text-sm py-3 hover:bg-yellow-600 focus:bg-yellow-600">
          Pembayaran
        </button>
      </div>
    </animated.div>
  );
}

export default MiniCart;
