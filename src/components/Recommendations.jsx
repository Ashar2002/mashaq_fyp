import { shirt1 } from "@/assets";
import { urlFor } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recommendations = ({ products }) => {
  const top4Products = products.slice(0, 4);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <h2 className="uppercase lg:text-4xl md:text-3xl text-2xl text-brown-0 text-center font-bold">
          recommendations
        </h2>
        <div className="flex mt-8 gap-x-2 gap-y-4 mx-1 lg:flex-nowrap flex-wrap lg:justify-between justify-center items-start">
          {top4Products?.map((item, index) => (
            <Link
              href={`/product/${item._id}`}
              className="flex flex-col items-center border border-brown-0 rounded-lg pt-3 max-w-[280px] w-full group"
            >
              <Image
                src={shirt1}
                // src={urlFor(item.image).url()}
                alt="shirt1"
                width={300}
                className="h-[300px] object-cover w-full max-w-[300px]"
                height={300}
              />
              <div className="bg-bisque-0 w-full p-2 rounded-lg rounded-t-none">
                <p className="text-brown-0 text-lg min-h-[60px]">{item.title}</p>
                <p className="text-black font-bold">${item.price}.00</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
