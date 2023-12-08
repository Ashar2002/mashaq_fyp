import Footer from "@/components/Footer";
import Product from "@/components/Product";
import Recommendations from "@/components/Recommendations";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const InnerProduct = () => {
  const [products, setProducts] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const getData = async () => {
    try {
      if (!id) return; // Skip the API call if id is not available
      const res = await axios.get(
        `http://localhost:5000/product/details/${id}`
      );
      setProducts(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]); // Trigger the effect when id changes

  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      {products ? <Product products={products} /> : <p>Loading...</p>}
      {/* <Recommendations /> */}
      <Footer />
    </div>
  );
};

export default InnerProduct;
