import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import React from "react";

const index = () => {

  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Mens Wear" />
      {/* <ProductList title="Mens Wear Products" products={filteredProduct} /> */}
      <ProductList title="Mens Wear Products" />
      <Footer />
    </div>
  );
};

export default index;
