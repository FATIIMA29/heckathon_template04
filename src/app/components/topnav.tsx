import Link from 'next/link';
import React from 'react'
import { FaPhoneVolume, FaRegHeart } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { BsCart } from 'react-icons/bs';

const topnav = () => {
  return (
    <div className="text-[#F1F1F1] capitalize">
  <div className="bg-[#7E33E0] w-full h-44px font-[Josefin Sans] flex justify-around items-center p-2">
    {/* first */}
    <div className="flex flex-col md:flex-row justify-evenly text-center mt-2 mb-2">
      <div className="flex items-center justify-between mx-4">
        <GoMail height={16} width={16} className="mx-2 mt-1" />
        <Link href="mailto:fatimaahaamughal@gmail.com">fatimaahaamughal@gmail.com</Link>
      </div>
      <div className="hidden md:flex items-center justify-between mx-4">
        <FaPhoneVolume height={16} width={16} className="mx-2 mt-1" />
        <p>(+92) 313 3143254</p>
      </div>
    </div>
    {/* second */}
    <div className="hidden md:flex flex-col md:flex-row justify-evenly text-center mt-2 mb-2">
      <div className="flex items-center justify-between mx-4">
        English <FaAngleDown height={16} width={16} className="mx-1 mt-1" />
      </div>
      <div className="flex items-center justify-between mx-4">
        USD <FaAngleDown height={16} width={16} className="mx-1 mt-1" />
      </div>
      <div className="flex items-center justify-between mx-4">
        Login <FiUser className="mx-1 mt-1" height={16} width={16} />
      </div>
      <div className="flex items-center justify-between mx-4">
        Wishlist <FaRegHeart className="mx-1 mt-1" height={16} width={16} />
      </div>
      <div className="flex items-center justify-between mx-4">
        <Link href='/shopping_cart'>
        <BsCart height={16} width={16} className="mx-1 mt-1" />
        </Link>
        
      </div>
    </div>
  </div>
</div>


  )
}

export default topnav
