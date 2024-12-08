import Link from 'next/link';
import React from 'react'
import { FaPhoneVolume, FaRegHeart } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { BsCart } from 'react-icons/bs';

const topnav = () => {
  return (
    <div className='text-[#F1F1F1]'>
    <div className='bg-[#7E33E0] w-1920px h-44px font-[Josefin Sans] flex justify-around'>
     {/* fisrt */}
      <div className='flex justify-evenly text-center mt-2 mb-2'>
         <div className='flex justify-between mx-4'> <GoMail height={16} width={16} className='mx-2 mt-1'/> <Link href='mailto:fatimaahaamughal@gmail.com'>fatimaahaamughal@gmail.com</Link> </div>
         <div className='flex justify-between mx-4'>
         <FaPhoneVolume height={16} width={16} className='mx-2 mt-1' />
         <p>(+92) 313 3143254</p>
         </div>
      </div>
      {/* 2nd */}
            <div  className='flex justify-evenly text-center mt-2 mb-2 '>
       
                      <div className='flex justify-between mx-4'>english <FaAngleDown height={16} width={16} className='mx-1 mt-1'/></div>
                     <div className='flex justify-between mx-4'>   USD <FaAngleDown  height={16} width={16} className='mx-1 mt-1'/>  </div>   
                      <div className='flex justify-between mx-4'> login <FiUser className='mx-1 mt-1' height={16} width={16}/>   </div>      
                      <div className='flex justify-between mx-4'>   wishlist <FaRegHeart className='mx-1 mt-1' height={16} width={16}/> </div>     
                      <div className='flex justify-between mx-4'>   <BsCart height={16} width={16} className='mx-1 mt-1'/>   </div>         
                  
          </div>

    </div>
  </div>    
  )
}

export default topnav
