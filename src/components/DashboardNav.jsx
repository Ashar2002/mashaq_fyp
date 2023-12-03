import Link from "next/link";
import React from "react";

const DashboardNav = () => {
  return (
    <div className="flex justify-between items-center sm:flex-nowrap flex-wrap my-10 max-w-[600px] mx-auto">
      <Link
        href="/dashboard/product-add"
        className="block capitalize font-medium bg-lightbrown-0 hover:bg-brown-0 text-white p-2 rounded-lg"
      >
        product add
      </Link>
      {/* <Link
        href="/dashboard/product-edit"
        className="block capitalize font-medium bg-lightbrown-0 hover:bg-brown-0 text-white p-2 rounded-lg"
      >
        product Edit
      </Link> */}
      <Link
        href="/dashboard/product-list"
        className="block capitalize font-medium bg-lightbrown-0 hover:bg-brown-0 text-white p-2 rounded-lg"
      >
        product list
      </Link>
    </div>
  );
};

export default DashboardNav;
