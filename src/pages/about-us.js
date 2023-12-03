import { aboutPage } from "@/assets";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Sidebar from "@/components/SideBar";
import Image from "next/image";
import React from "react";

const aboutus = () => {
  return (
    <>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner onPage="About Us" inner_banner="aboutBanner" />
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="w-full">
          <p className="text-lightbrown-0 md:text-2xl text-xl uppercase tracking-wider font-nunito mb-3">
            About Mashaq{" "}
          </p>
          <h2 className="text-2xl font-bold lg:text-4xl sm:text-3xl text-brown-0">
            Revolutionizing E-commerce with Artificial Intelligence
          </h2>
        </div>

        <div className="mt-8 gap-8 flex lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 max-w-[800px] w-full lg:h-full lg:min-w-[450px]">
            <Image
              alt="House"
              src={aboutPage}
              width={700}
              height={700}
              className="h-full w-full lg:h-[650px] object-cover"
            />
          </div>

          <div className="space-y-4 text-gray-800 max-w-[700px] w-full">
            <p className="mt-4 text-gray-800">
              At Mashaq, we are at the forefront of the e-commerce revolution,
              harnessing the power of artificial intelligence to create a
              shopping experience like no other. Our journey began with a vision
              to transform the way people shop online, making it smarter, more
              personalized, and more enjoyable. As an AI-driven e-commerce
              company, we are committed to delivering a seamless and highly
              curated shopping experience that caters to the unique preferences
              and needs of each customer.
            </p>
            <p>
              Our team of passionate experts in machine learning, data science,
              and e-commerce is dedicated to pushing the boundaries of what's
              possible. We believe in the potential of AI to not only simplify
              the shopping process but also to inspire and delight our
              customers. With advanced algorithms and cutting-edge technology,
              we provide tailored product recommendations, ensuring that our
              customers discover products they'll love, even before they know it
              themselves.
            </p>
            <p>
              Transparency, trust, and innovation are at the core of our values.
              We are continually striving to refine and enhance our AI
              algorithms, making them more intuitive and precise. We're not just
              an e-commerce platform; we're a partner on your shopping journey,
              adapting and evolving with you.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default aboutus;
