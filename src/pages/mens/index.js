import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  const [product, setProducts] = useState(null);
  const getData = async ()=>{
    try {
      const res = await axios.get("http://localhost:5000/product/browse/men");
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
      <InnerBanner inner_banner="shopBanner" onPage="Mens Wear" />
      <ProductList title="Mens Wear Products" products={product} />
      <Footer />
    </div>
  );
};

export default index;
