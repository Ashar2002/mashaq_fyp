import { bannerside1, bannerside2 } from "@/assets";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="banner relative bg-cover bg-center bg-no-repeat xl:h-[80vh] lg:h-[90vh] h-[70vh] overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col gap-5 items-start h-full justify-center">
        <div className="max-w-[500px] lg:mr-auto lg:mx-0 mx-auto">
          <p className="text-brown-0 text-center uppercase tracking-widest font-bold">
            Go forth and be fabulous!
          </p>
          <h1 className="uppercase tracking-widest lg:text-8xl sm:text-7xl text-6xl text-brown-0 font-bold text-center">
            Mashaq
          </h1>
          <p className="text-3xl w-fit mx-auto mt-4 uppercase font-normal tracking-widest">
            fashion clothing
          </p>
        </div>
      </div>
      <Image
        className="absolute max-w-[350px] lg:block hidden 2xl:bottom-10 bottom-[-40px] rotate-[340deg] right-[20%] border-8 border-white"
        src={bannerside2}
        width={300}
        height={300}
        alt="bannerside1"
      />
      <Image
        className="absolute max-w-[300px] min-h-[400px] lg:block hidden top-0 rotate-[6deg] 2xl:right-[10%] right-[8%] border-8 border-white"
        src={bannerside1}
        width={300}
        height={300}
        alt="bannerside1"
      />
    </div>
  );
};

export default Banner;
