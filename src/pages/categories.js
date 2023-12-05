import { shirt1, shirt2, shirt3, shirt4 } from "@/assets";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import Sidebar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = () => {
  return (
    <>
      <Sidebar />
      <div className="mt-4">
        <InnerBanner />
        <Footer />
      </div>
    </>
  );
};

export default categories;
