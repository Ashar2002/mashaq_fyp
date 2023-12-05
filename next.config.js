module.exports = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/product-list",
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },

  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
};
