import Banner from "@/components/Banner";
import Sidebar from "@/components/SideBar";
import Search from "@/components/Search";
import BestSelling from "@/components/BestSelling";
import ImageUpload from "@/components/ImageUpload";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="relative">
      <Sidebar />
      <div className="">
        <Banner />
      </div>
      <AboutUs />
      <Search />
      <ImageUpload />
      <BestSelling />
      <Footer />
      <ChatBot />
    </div>
  );
}

