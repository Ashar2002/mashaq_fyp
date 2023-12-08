import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";
import React from "react";

const bottomwear = () => {
  const [product, setProducts] = useState(null);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/product/browse/category?category=women&&subCategory=bag"
      );
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
      <InnerBanner inner_banner="shopBanner" onPage="Bags" />
      <ProductList title="Bags Products" products={product} />
      <Footer />
    </div>
  );
};

export default bottomwear;
