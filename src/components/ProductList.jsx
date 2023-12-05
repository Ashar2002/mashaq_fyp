import { shirt1 } from "@/assets";
import { urlFor } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = ({ products }) => {
  console.log("url shop", products);
  return (
    <>
      <div className="container mx-auto">
        {/* <h1 className="text-brown-0 text-4xl font-bold text-center mt-10">
          {title}
        </h1> */}
        {products && products.length > 0 ? (
          <div className="grid place-items-center h-full place-content-center w-full 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-16 justify-between items-start gap-x-3 gap-y-5">
            {products?.map((item, index) => (
              <Link
                key={index}
                href={`/product/${item._id}`}
                className="max-w-[280px] w-full flex flex-col items-center border border-brown-0 rounded-lg group"
              >
                <div className="overflow-hidden w-full h-[300px] bg-bisque-0 rounded-t-lg">
                  <Image
                    src={item?.images[0].url}
                    alt="shirt1"
                    width={300}
                    className="h-[300px] object-cover w-full max-w-[300px] rounded-t-lg group-hover:scale-125 delay-200 transition-all ease-in-out "
                    height={300}
                  />
                </div>
                <div className="bg-bisque-0 w-full p-2 rounded-lg rounded-t-none">
                  <p className="text-brown-0 text-lg min-h-[60px]">
                    {item?.name}
                  </p>
                  <p className="text-black font-bold">Rs. {item?.price}.00</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="my-16 text-red-500 text-xl capitalize text-center select-none">
            no products uploaded for this category yet. please check back later.
            thanks for your patience.
          </p>
        )}
      </div>
    </>
  );
};

export default ProductList;
