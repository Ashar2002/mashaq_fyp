import { shirt1 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const BestSelling = () => {

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl text-brown-0 font-bold text-center">
        Best Selling Products
      </h1>
      <div className="flex mt-8 mx-1 lg:flex-nowrap flex-wrap lg:justify-between justify-center items-start  gap-x-3 gap-y-5">
        {/* {top5Products?.map((item, index) => (
          <Link
            href={`/product/${item._id}`}
            className="max-w-[280px] w-full flex flex-col items-center border border-brown-0 rounded-lg"
          >
            <Image
              src={shirt1}
              alt="shirt1"
              width={300}
              className="h-[300px] object-cover w-full max-w-[300px] rounded-t-lg"
              height={300}
            />
            <div className="bg-bisque-0 w-full p-2 rounded-lg rounded-t-none">
              <p className="text-brown-0 text-lg min-h-[60px]">{item.title}</p>
              <p className="text-black font-bold">Rs. {item.price}.00</p>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default BestSelling;
