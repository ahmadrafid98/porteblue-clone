import AsideLeft from "./AsideLeft";
import AsideMiddle from "./AsideMiddle";
import AsideRight from "./AsideRight";

function Footer() {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full flex items-start py-12">
        <AsideLeft />
        <AsideMiddle />
        <AsideRight />
      </div>
      <div className="bg-black p-8 flex justify-center items-center">
        <span className="text-gray-400 text-sm">
          Copyright © 2021
          <a
            className="px-1 text-white outline-none hover:text-gray-400 focus:text-gray-400 focus:ring-1 focus:ring-white"
            href="#"
          >
            Portblue.
          </a>
          All Rights Reserved. | Catch Store by
          <a
            className="px-1 text-white outline-none hover:text-gray-400 focus:text-gray-400 focus:ring-1 focus:ring-white"
            href="#"
          >
            Catch Themes
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
