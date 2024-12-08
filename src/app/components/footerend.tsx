


import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footerend(){
    return (
        <div className="max-w-[1920px] mx-auto">
        <footer className="h-auto bg-[#E7E4F8] text-[#8A8FB9]">
          <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-x-20 mt-20 pt-40 pl-6 sm:pl-24">
            <div className="space-y-10 sm:w-1/4">
              <div>
                <h1 className="text-[34px] font-bold text-black">
                  <Link href="">Hekto</Link>
                </h1>
              </div>
              <div className="flex gap-3">
                <input
                  className="h-[30px] w-[220px] p-2 border-none rounded-sm"
                  type="text"
                  placeholder="Enter Email Address"
                />
                <button className="bg-[#FB2E86] text-white w-[100px] h-[32px] rounded-sm">
                  Sign Up
                </button>
              </div>
              <div className="text-[16px]">
                <p>Contact info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>
      
            <div className="space-y-10 sm:w-1/4">
              <h1 className="text-[22px] text-black font-semibold">Categories</h1>
              <ul className="space-y-3">
                <li><Link href="">Laptops & Computers</Link></li>
                <li><Link href="">Cameras & Photography</Link></li>
                <li><Link href="">Smart Phones & Tablets</Link></li>
                <li><Link href="">Video Games & Consoles</Link></li>
                <li><Link href="">Waterproof Headphones</Link></li>
              </ul>
            </div>
      
            <div className="space-y-10 sm:w-1/4">
              <h1 className="text-[22px] text-black font-semibold">Customer Care</h1>
              <ul className="space-y-3">
                <li><Link href="">My Account</Link></li>
                <li><Link href="">Discount</Link></li>
                <li><Link href="">Returns</Link></li>
                <li><Link href="">Orders History</Link></li>
                <li><Link href="">Order Tracking</Link></li>
              </ul>
            </div>
      
            <div className="space-y-10 sm:w-1/4">
              <h1 className="text-[22px] text-black font-semibold">Pages</h1>
              <ul className="space-y-3">
                <li><Link href="">Blog</Link></li>
                <li><Link href="">Browse The Shop</Link></li>
                <li><Link href="">Category</Link></li>
                <li><Link href="">Pre-Built Pages</Link></li>
                <li><Link href="">Visual Composer Elements</Link></li>
                <li><Link href="">WooCommerce Pages</Link></li>
              </ul>
            </div>
          </div>
      
          <div className="bg-slate-100 mt-20 flex justify-between h-[45px] items-center px-6 sm:px-24">
            <p className="ml-0 sm:ml-60">©Webecy - All Rights Reserved</p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-900 text-lg" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-lg" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-600 text-lg" />
              </a>
            </div>
          </div>
        </footer>
      </div>
      
    )
}