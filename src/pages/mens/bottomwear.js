import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import React from "react";

const bottomwear = () => {
  const [product, setProducts] = useState(null);
  const getData = async ()=>{
    try {
      const res = await axios.get("http://localhost:5000/product/browse/category?category=men&&subcategory=bottom wear");
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
      <InnerBanner inner_banner="shopBanner" onPage="Bottom Wear" />
      <ProductList title="Bottom Wear Products" />
      <Footer />
    </div>
  );
};

export default bottomwear;
