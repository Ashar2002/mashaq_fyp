import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import React from "react";

const bottomwear = () => {
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Bottom Wear" />
      <ProductList title="Bottom Wear Products" />
      <Footer />
    </div>
  );
};

export default bottomwear;
