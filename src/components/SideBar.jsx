import { useState } from "react";
import Link from "next/link";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { logo, main_logo } from "@/assets";
// import { logo } from "@/assets";

const Sidebar = ({ bg }) => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    // <div className="bg-white w-full relative z-50">
    <div className={`${bg} w-full relative z-50`}>
      <div className="container mx-auto flex justify-between py-2 items-center px-4">
        <div className="max-w-[200px] w-full ">
          <Link href="/">
            <Image src={main_logo} width={160} height={160} alt="logo" />
          </Link>
        </div>
        <div className="max-w-[130px] flex items-center justify-between w-full gap-5">
          <Link
            className="rounded-md group-hover:bg-white group-hover:border-brown-0 border-2 bg-brown-0 flex items-center justify-center gap-2 h-12 w-12 text-sm font-medium text-white shadow"
            href="/"
          >
            <FaShoppingCart className="group-hover:text-brown-0" />
          </Link>
          <FaBars
            className="text-brown-0 text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      {open && (
        <div
          className={`fixed left-0 top-0 mr-auto !z-[99999] min-w-[280px] flex h-screen flex-col justify-between border-e bg-white max-w-[280px] !transition-all !ease-out !delay-200 ${
            open ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <div className="px-4 py-6 relative mt-[15%]">
            <span
              className="text-transparent text-clip bg-clip-text bg-brown-0 font-bold text-lg absolute right-5 -top-3 cursor-pointer"
              onClick={toggleSidebar}
            >
              ❌
            </span>
            <Link href="/">
              <Image
                className="mx-auto"
                src={main_logo}
                width={150}
                height={150}
                alt="logo"
              />
            </Link>

            <div className="px-4 py-6">
              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-medium px-4 py-2 hover:bg-bisque-0 hover:text-brown-0 block rounded-lg"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm font-medium px-4 py-2 hover:bg-bisque-0 hover:text-brown-0 block rounded-lg"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="text-sm font-medium px-4 py-2 hover:bg-bisque-0 hover:text-brown-0 block rounded-lg"
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-bisque-0 hover:text-brown-0">
                      <Link href="/mens" className="text-sm font-medium">
                        {" "}
                        Men's{" "}
                      </Link>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <Link
                          href="/mens/topwear"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-bisque-0 hover:text-brown-0"
                        >
                          Top Wear
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/mens/bottomwear"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-bisque-0 hover:text-brown-0"
                        >
                          Bottom Wear
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/mens/footwear"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-bisque-0 hover:text-brown-0"
                        >
                          Foot Wear
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-bisque-0 hover:text-brown-0">
                      <Link href="/women" className="text-sm font-medium">
                        {" "}
                        Women's{" "}
                      </Link>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <Link
                          href="/women/topwear"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-bisque-0 hover:text-brown-0"
                        >
                          Top Wear
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/women/bottomwear"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-bisque-0 hover:text-brown-0"
                        >
                          Bottom Wear
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/women/footwear"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-bisque-0 hover:text-brown-0"
                        >
                          Foot Wear
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/women/bag"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-bisque-0 hover:text-brown-0"
                        >
                          Bags
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-sm font-medium px-4 py-2 hover:bg-bisque-0 hover:text-brown-0 block rounded-lg"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
