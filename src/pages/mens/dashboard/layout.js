import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div className="max-w-[500px] w-full fixed left-0 top-0 z-20">
        <ul className="space-y-1">
          <li>
            <a
              href=""
              className="capitalize block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              product add
            </a>
          </li>

          <li>
            <a
              href=""
              className="capitalize block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              product list
            </a>
          </li>
          <li>
            <a
              href=""
              className="capitalize block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              product edit
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}
