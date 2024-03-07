import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import AnotherNav from "./AnotherNav";
import AnotherNavlink from "./AnotherNavlink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"YasminDev Homepage",
    template:"%s | YasminDev"
  },
  description: "Home Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white m-0 p-0 border-spacing-0`}>
        <div className="select-none font-serif min-h-dvh m-auto pl-[50px] pr-[50px] flex flex-col justify-between ">
        <AnotherNav/>
        <AnotherNavlink/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}