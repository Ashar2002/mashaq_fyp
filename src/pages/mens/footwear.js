import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";
import axios from "axios";
import React, { useEffect, useState } from "react";

const footwear = () => {
  const [product, setProducts] = useState(null);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/product/browse/men/footwear"
      );
      setProducts(res?.data?.data);
      console.log(res?.data?.data)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(product)
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Foot Wear" />
      <ProductList title="Foot Wear Products" products={product} />
      {/* <ProductList title="Foot Wear Products" products={filteredProduct} /> */}
      <Footer />
    </div>
  );
};

export default footwear;
