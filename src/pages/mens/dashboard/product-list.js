import Image from "next/image";
import React from "react";
import DashboardNav from "@/components/DashboardNav"
const product = () => {
  const dummyProductList = [
    {
      name: "dummy1",
      price: "100",
      description: "lorem ipsum dolor smit",
      category: "male",
      subcategory: "footwear",
      type: "party",
      image: "/adfadsgf",
    },
    {
      name: "dummy2",
      price: "120",
      description: "lorem ipsum dolor smit",
      category: "female",
      subcategory: "bottomwear",
      type: "casual",
      image: "/adfadsgf",
    },
    {
      name: "dummy3",
      price: "110",
      description: "lorem ipsum dolor smit",
      category: "male",
      subcategory: "topwear",
      type: "formal",
      image: "/adfadsgf",
    },
    {
      name: "dummy4",
      price: "110",
      description: "lorem ipsum dolor smit",
      category: "female",
      subcategory: "bags",
      type: "party",
      image: "/adfadsgf",
    },
  ];
  return (
    <>
      <div className="my-16 container mx-auto">
        <DashboardNav />
        <h1 className="text-center text-6xl font-bold">Products List</h1>
        <div className="space-y-2 mt-20">
          {
            dummyProductList?.map((data,index) => {
              return(
                <div
                key={index}
                className="flex justify-between gap-2 items-stretch border border-lightbrown-0 rounded-md p-2">
                  <Image className="w-10 h-10 object-contain" width={50} height={50} alt="listImg" src={data?.image}/>
                  <p className="font-medium max-w-[150px] w-full text-lg">{data?.name}</p>
                  {/* <p className="font-medium max-w-[150px] w-full text-lg">{data?.desc}</p> */}
                  <p className="font-medium max-w-[150px] w-full text-lg">{data?.category}</p>
                  <p className="font-medium max-w-[150px] w-full text-lg">{data?.subcategory}</p>
                  <p className="font-medium max-w-[150px] w-full text-lg">{data?.type}</p>
                  <p className="font-medium max-w-[150px] w-full text-lg">{data?.price}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default product;
