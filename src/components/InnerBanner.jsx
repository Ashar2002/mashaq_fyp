import React from "react";
import { FaCaretRight, FaChevronRight } from "react-icons/fa";

const InnerBanner = ({ inner_banner, onPage }) => {
  return (
    <div
      className={`${inner_banner} relative z-[-1] w-full px-4 py-16 flex flex-col gap-5 h-[70vh] bg-[#000]  bg-cover bg-center bg-no-repeat items-center justify-center`}
    >
      <div className="absolute z-[2] top-0 left-0 w-full h-full bg-black/50"></div>
      <div className=" relative z-[4] text-center">
        <h1 className="uppercase lg:text-6xl sm:text-4xl text-bisque-0 text-3xl font-bold text-center">
          {onPage}
        </h1>
        <ul className="flex text-lg text-white gap-3 uppercase mt-5 select-none justify-center items-baseline max-w-[600px] w-full">
          <li>Home</li>
          <li>
            <FaChevronRight className="text-sm text-white" />
          </li>
          <li>{onPage}</li>
        </ul>
      </div>
    </div>
  );
};

export default InnerBanner;
