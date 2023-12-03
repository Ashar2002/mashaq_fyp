import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Sidebar from "@/components/SideBar";
import React from "react";

const contactus = () => {
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner onPage="Contact Us" inner_banner="contactBanner" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default contactus;
