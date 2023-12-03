import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";
import React from "react";

const footwear = () => {
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Foot Wear" />
      <ProductList title="Foot Wear Products" />
      {/* <ProductList title="Foot Wear Products" products={filteredProduct} /> */}
      <Footer />
    </div>
  );
};

export default footwear;
