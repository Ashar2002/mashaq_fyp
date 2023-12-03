// import { useState } from "react";
// import { logo } from "@/assets";
// import Image from "next/image";
// import Link from "next/link";
// import { FaShoppingCart } from "react-icons/fa";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-white">
//       <div className="mx-auto relative max-w-screen-xl px-3 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <div className="md:flex md:items-center md:gap-12">
//             <a className="block text-brown-0" href="/">
//               <span className="sr-only">Home</span>
//               <Image
//                 className="max-w-[220px] w-full"
//                 src={logo}
//                 alt="logo"
//                 width={200}
//                 height={200}
//               />
//             </a>
//           </div>
        
//           <div className="hidden md:block">
//             <nav aria-label="Global">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li className="py-5">
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="/"
//                   >
//                     About
//                   </a>
//                 </li>

//                 <li className="group/categories relative py-3">
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="/categories"
//                   >
//                     Categories
//                   </a>
//                   <div className="hidden group-hover/categories:block md:hidden absolute -left-5 rounded-md top-full bg-teal-500 min-w-[140px] py-2">
//                     <ul className=" text-white flex flex-col items-center text-sm">
//                       <li className="text-white font-medium capitalize text-base w-full text-center py-2 hover:bg-white hover:text-brown-0">
//                         home
//                       </li>
//                       <li className="text-white font-medium capitalize text-base w-full text-center py-2 hover:bg-white hover:text-brown-0">
//                         shop
//                       </li>
//                       <li className="text-white font-medium capitalize text-base w-full text-center py-2 hover:bg-white hover:text-brown-0">
//                         categories
//                       </li>
//                     </ul>
//                   </div>
//                 </li>

//                 <li className="py-5">
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="/"
//                   >
//                     History
//                   </a>
//                 </li>

//                 <li className="py-5">
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="/"
//                   >
//                     Services
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="sm:flex sm:gap-4 group">
//               <Link
//                 className="rounded-md group-hover:bg-white group-hover:border-brown-0 border-2 bg-brown-0 flex items-center justify-center gap-2 h-12 w-12 text-sm font-medium text-white shadow"
//                 href="/"
//               >
//                 <FaShoppingCart className="group-hover:text-brown-0" />
//               </Link>
//             </div>

//             <div className="block md:hidden">
//               <button
//                 className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
//                 onClick={toggleMenu} // Toggle the menu on button click
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
