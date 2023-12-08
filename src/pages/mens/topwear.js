import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";
import axios from "axios";
import React, { useEffect, useState } from "react";

const topwear = () => {
  const [product, setProducts] = useState(null);
  const getData = async ()=>{
    try {
      const res = await axios.get("http://localhost:5000/product/browse/category?category=men&&subCategory=topwear");
      setProducts(res?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Top Wear" />
      <ProductList title="Top Wear Products" products={product} />
      <Footer />
    </div>
  );
};

export default topwear;
