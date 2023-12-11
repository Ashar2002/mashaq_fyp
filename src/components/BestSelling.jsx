import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { shirt1 } from "@/assets";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/product/get");
        const allProducts = res?.data?.data;

        // Shuffle the array to get a random order
        const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

        // Select only the first 5 products
        const selectedProducts = shuffledProducts.slice(0, 5);

        setProducts(selectedProducts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getData();
  }, []);
  // console.log("best selling",products)
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl text-brown-0 font-bold text-center">
        Best Selling Products
      </h1>
      <div className="flex mt-8 mx-1 lg:flex-nowrap flex-wrap lg:justify-between justify-center items-start  gap-x-3 gap-y-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((item, index) => (
            <Link
              key={index}
              href={`/product/${item._id}`}
              className="max-w-[280px] w-full flex flex-col items-center border border-brown-0 rounded-lg"
            >
              <Image
                src={item.images[0].url}
                alt="shirt1"
                width={300}
                className="h-[300px] object-cover w-full max-w-[300px] rounded-t-lg"
                height={300}
              />
              <div className="bg-bisque-0 w-full p-2 rounded-lg rounded-t-none">
                <p className="text-brown-0 text-lg min-h-[60px]">{item.name}</p>
                <p className="text-black font-bold">Rs. {item.price}.00</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BestSelling;
