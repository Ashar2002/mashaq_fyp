import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import { MutatingDots } from "react-loader-spinner";
import { shuffle } from 'lodash';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    setLoading(true); // Set loading to true

    getData();
  };
  const [bw, setbw] = useState([]);
  const [fw, setfw] = useState([]);
  const [tw, settw] = useState([]);
  const [bags, setbag] = useState([]);

  const getData = async () => {
    try {
      const res1 = await axios.get(
        "http://localhost:5000/product/browse/women/topwear"
      );
      const res2 = await axios.get(
        "http://localhost:5000/product/browse/women/bottomwear"
      );
      const res3 = await axios.get(
        "http://localhost:5000/product/browse/women/footwear"
      );
      const res4 = await axios.get(
        "http://localhost:5000/product/browse/women/bag"
      );
  
      // Get all products without limiting to 5
      const a = res1?.data?.data;
      const b = res2?.data?.data;
      const c = res3?.data?.data;
      const d = res4?.data?.data;
  
      // Shuffle the products
      const shuffledTw = shuffle(a);
      const shuffledBw = shuffle(b);
      const shuffledFw = shuffle(c);
      const shuffledBags = shuffle(d);
  
      // Get only the first 5 products
      const firstFiveTw = shuffledTw.slice(0, 5);
      const firstFiveBw = shuffledBw.slice(0, 5);
      const firstFiveFw = shuffledFw.slice(0, 5);
      const firstFiveBags = shuffledBags.slice(0, 5);
  
      // setProducts(firstFiveProducts);
      setTimeout(() => {
        settw(firstFiveTw);
      }, Math.round(Math.random() * 5) * 1200);
      setTimeout(() => {
        setbw(firstFiveBw);
      }, Math.round(Math.random() * 5) * 1200);
      setTimeout(() => {
        setbag(firstFiveBags);
      }, Math.round(Math.random() * 5) * 1200);
      setTimeout(() => {
        setfw(firstFiveFw);
        setLoading(false); // Set loading to false when data is loaded
      }, Math.round(Math.random() * 5) * 400);
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false on error
    }
  };
  
  useEffect(() => {
    // getData();
  }, []);

  console.log("bags", bags);
  return (
    <div className="container mx-auto mb-10">
      <div className="max-w-[900px] mx-auto mt-7 px-4">
        <div className="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="max-w-[400px] max-h-full mx-auto border border-brown-0 mt-6 rounded-lg h-[400px]">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="uploaded shirt"
              className="mx-auto w-full object-cover p-3 pt-0 h-[400px]"
            />
          ) : null}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          top wear
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
        <div className="mb-10 grid place-items-center">
          {loading ? (
            <MutatingDots
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperclassName=""
              visible={true}
            />
          ) : (
            <ProductList products={tw} />
          )}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          Bottom wear
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
        <div className="mb-10 grid place-items-center">
          {loading ? (
            <MutatingDots
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperclassName=""
              visible={true}
            />
          ) : (
            <ProductList products={bw} />
          )}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          Foot wear
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
        <div className="mb-10 grid place-items-center">
          {loading ? (
            <MutatingDots
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperclassName=""
              visible={true}
            />
          ) : (
            <ProductList products={fw} />
          )}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          Bags
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
        <div className="mb-10 grid place-items-center">
          {loading ? (
            <MutatingDots
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperclassName=""
              visible={true}
            />
          ) : (
            <ProductList products={bags} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
