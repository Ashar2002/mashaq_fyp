import React, { useState } from "react";

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto mb-10">
      <div className="max-w-[900px] mx-auto mt-7 px-4">
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="max-w-[400px] max-h-full mx-auto border border-brown-0 mt-6 rounded-lg h-[400px]">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="uploaded shirt"
              className="mx-auto w-full object-cover p-3 pt-0 h-[400px]"
            />
          ) : null}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          top wear
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          Bottom wear
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          Foot wear
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
      </div>
      <div className="mt-8">
        <h1 className="capitalize text-3xl text-brown-0 mb-2 font-semibold">
          Bags
        </h1>
        <hr className="bg-brown-0 border-none h-[2px]" />
      </div>
    </div>
  );
};

export default ImageUpload;
