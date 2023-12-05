import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";

const shop = () => {
  const [products, setProducts] = useState(null);
  console.log(products)
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product/get");
      setProducts(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Shop" />
      <h1 className="lg:text-4xl text-3xl text-center font-bold mt-10 mb-10 text-brown-0">
        Our Products
      </h1>
      <ProductList products={products}  />
      <Footer />
    </div>
  );
};

export default shop;
