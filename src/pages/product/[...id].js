import Footer from "@/components/Footer";
import Product from "@/components/Product";
import Recommendations from "@/components/Recommendations";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import React from "react";

const InnerProduct = () => {
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <Product />
      <Recommendations  />
      <Footer />
    </div>
  );
};

export default InnerProduct;
