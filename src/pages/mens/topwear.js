import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";
import React from "react";

const topwear = () => {

  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Top Wear" />
      <ProductList title="Top Wear Products"  />
      <Footer />
    </div>
  );
};

export default topwear;
