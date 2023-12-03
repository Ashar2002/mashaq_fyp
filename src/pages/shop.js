import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';
import ProductList from '@/components/ProductList';
import Sidebar from '@/components/SideBar';
import React, { useEffect } from 'react'

const shop = ({products}) => {
    useEffect(() => {
      try {
        const res = await axios.post("")
      } catch (error) {
        console.log(error)
      }
    },[])
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner
      inner_banner="shopBanner"
      onPage="Shop"
      />
      <h1 className='lg:text-4xl text-3xl text-center font-bold mt-10 mb-10 text-brown-0'>Our Products</h1>
      <ProductList />
      {/* <ProductList products={products} /> */}
      <Footer />
    </div>
  )
}

export default shop
