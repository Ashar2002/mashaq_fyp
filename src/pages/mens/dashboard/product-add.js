import Image from "next/image";
import React, { useState } from "react";

const productAdd = () => {
  const [formState, setFormState] = useState({
    productImage: null,
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormState((prevState) => ({ ...prevState, productImage: file }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Display form data in the console
    const formData = new FormData();
    formData.append("productImage",formState.productImage)
    console.log(formState);
  };

  return (
    <div className="container mx-auto h-screen grid place-items-center my-16">
      <div className="rounded-lg bg-white p-8 shadow-lg shadow-bisque-0 lg:col-span-3 lg:p-12">
        <h1 className=" pb-10 text-4xl font-bold capitalize text-lightbrown-0 text-center">
          add your products
        </h1>
        <form className="space-y-4" onSubmit={handleAddProduct}>
          <label
            htmlFor="productImage"
            className="max-w-[300px] px-2 w-full mx-auto min-h-[300px]"
          >
            {formState.productImage ? (
              <Image
                src={URL.createObjectURL(formState.productImage)}
                alt="Product"
                className="w-full object-cover max-w-[300px] h-[300px] mx-auto border border-lightbrown-0"
                width={300}
                height={300}
              />
            ) : (
              <div className="w-full flex items-center justify-center max-w-[300px] h-[300px] mx-auto border border-lightbrown-0">
                Upload Image
              </div>
            )}
            <input
              type="file"
              className="hidden"
              name="productImage"
              id="productImage"
              onChange={handleImageChange}
            />
          </label>
          <div className="gap-4 flex sm:flex-nowrap flex-wrap items-center">
            <div className="w-full">
              <input
                className="w-full rounded-lg border-lightbrown-0 border p-3 text-sm"
                placeholder="Name"
                type="text"
                onChange={handleInputChange}
                id="name"
                name="name"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full rounded-lg border-lightbrown-0 border p-3 text-sm"
                placeholder="price"
                type="number"
                id="price"
                name="price"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="w-full border border-lightbrown-0 rounded-lg p-2">
              <select
                className="outline-none w-full"
                name="category"
                id="category"
                onChange={handleInputChange}
              >
                <option value="" className="text-gray-200">
                  select category
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>

            <div className="w-full border border-lightbrown-0 rounded-lg p-2">
              <select
                className="outline-none w-full"
                name="subCategory"
                id="subCategory"
                onChange={handleInputChange}
              >
                <option value="" className="text-gray-200">
                  select sub-category
                </option>

                <option value="topwear">top wear</option>
                <option value="bottomwear">bottom wear</option>
                <option value="footwear">foot wear</option>
                <option value="bag">bag</option>
              </select>
            </div>
            <div className="w-full border border-lightbrown-0 rounded-lg p-2">
              <select
                className="outline-none w-full"
                name="type"
                id="type"
                onChange={handleInputChange}
              >
                <option value="" className="text-gray-200">
                  select type
                </option>

                <option value="party">party</option>
                <option value="casual">casual</option>
                <option value="formal">formal</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              className="border border-lightbrown-0 w-full rounded-lg p-2 placeholder:capitalize"
              placeholder="description"
              name="description"
              id="description"
              cols="30"
              onChange={handleInputChange}
              rows="5"
            ></textarea>
          </div>

          <div className="mt-4 text-center w-full">
            <button
              type="submit"
              className="w-full rounded-lg bg-lightbrown-0 hover:bg-brown-0 max-w-[230px] mx-auto px-5 py-3 text-white capitalize text-lg font-medium"
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default productAdd;
