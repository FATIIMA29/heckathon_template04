import React from 'react'
import Image from 'next/image'
import Img from '../../../public/Rectangle 138.png'
import Img1 from '../../../public/Rectangle 137.png'
import Img2 from '../../../public/Rectangle 134.png'
import Img3 from '../../../public/Rectangle 136.png'
import Img4 from '../../../public/Rectangle 128.png'
import Img5 from '../../../public/Rectangle 133.png'
import Img6 from '../../../public/Rectangle 130.png'
import Img7 from '../../../public/Rectangle 131.png'
const Page = () => {
    return (
      <div>
        {/* Top */}
        <div className="h-[286px] w-full bg-[#f6f5ff]">
          <div className="text-left pt-14 ml-10 text-[#101750] text-4xl font-bold font-['Josefin Sans']">
          Product Details
          </div>
          <div className="flex justify-items-start mt-3 space-x-2 ml-10">
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Home <b>.</b>{" "}
            </div>
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Pages <b>.</b>
            </div>
            <div className="text-center text-[#fb2e86] text-base font-medium font-['Lato']">
            Product Details
            </div>
          </div>
        </div>
  
        {/* Section1 */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Image Gallery */}
            <div className="md:col-span-1">
              <div className="space-y-4">
                <Image src={Img} alt="Main Image" className="w-full h-auto rounded-md" />
                <div className="grid grid-cols-3 gap-2">
                  <Image src={Img1} alt="Thumbnail 1" className="w-full h-auto  rounded-md" />
                  <Image src={Img2} alt="Thumbnail 2" className="w-full h-auto  rounded-md" />
                  <Image src={Img3} alt="Thumbnail 3" className="w-full h-auto  rounded-md" />
                </div>
              </div>
            </div>
            {/* Product Details */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-2">Playwood Arm Chair</h1>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 text-lg">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                  <span className="ml-2 text-gray-600">(22)</span>
                </div>
                <div className="text-3xl font-bold text-red-500 mb-4">$32.00</div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
                <div className="mt-4">
                  <div className="text-gray-600">
                    <strong>Categories:</strong> Furniture
                  </div>
                  <div className="text-gray-600 mt-2">
                    <strong>Tags:</strong> Chair, Wooden, Comfort
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-600">Share:</span>
                    <a href="#" className="ml-2 text-blue-500">Facebook</a>
                    <a href="#" className="ml-2 text-blue-500">Twitter</a>
                    <a href="#" className="ml-2 text-blue-500">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* related product */}
<div className="container mx-auto p-4">
<h2 className="text-2xl font-bold text-[#101750] mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-md shadow-md">
          <Image src={Img4} alt="Mens Fashion Wear" className="w-full h-auto  rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Mens Fashion Wear</h3>
          <div className="text-yellow-500 mb-2">★★★★★</div>
          <div className="text-xl font-bold text-red-500">$43.00</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <Image src={Img5} alt="Women’s Fashion" className="w-full h-auto  rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Women’s Fashion</h3>
          <div className="text-yellow-500 mb-2">★★★★★</div>
          <div className="text-xl font-bold text-red-500">$67.00</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <Image src={Img6} alt="Wolk Dummy Fashion" className="w-full h-auto  rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Wolk Dummy Fashion</h3>
          <div className="text-yellow-500 mb-2">★★★★★</div>
          <div className="text-xl font-bold text-red-500">$67.00</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <Image src={Img7} alt="Top Wall Digital Clock" className="w-full h-auto  rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Top Wall Digital Clock</h3>
          <div className="text-yellow-500 mb-2">★★★★☆</div>
          <div className="text-xl font-bold text-red-500">$51.00</div>
        </div>
      </div>
      </div>



      </div>
    );
  }
  
  export default Page;