import "@/styles/globals.css";
import {  Poppins  , Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-Nunito",
  weight: ["200", "300", "400", "700", "900"],
});



export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-poppins ${nunito.variable} `}>
      <Component {...pageProps} />
      <Toaster />
    </main>
  );
}
