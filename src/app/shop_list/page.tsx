import React from 'react'
import Image from 'next/image'
import Img from  '../../../public/Rectangle 32.png'
import Img2 from  '../../../public/Rectangle 32 (1).png'
import Img4 from  '../../../public/Rectangle 32 (3).png'
import Img5 from  '../../../public/Rectangle 32 (4).png'
import Img6 from  '../../../public/Rectangle 32 (5).png'
import Img7 from  '../../../public/Rectangle 32 (6).png'
import Img8 from  '../../../public/Rectangle 32 (7).png'



const page = () => {
  return (
    <div>
            {/* top */}
      <div className="h-[286px]  w-full bg-[#f6f5ff]">
        <div className="text-left pt-14 ml-10 text-[#101750] text-4xl font-bold font-['Josefin Sans']">
        Shop List
        </div>
        <div className="flex justify-items-start mt-3 space-x-2 ml-10 ">
          <div className="text-center  text-black text-base font-medium font-['Lato']">
            Home <b>.</b>{" "}
          </div>
          <div className="text-center text-black text-base font-medium font-['Lato']">
            Pages <b>.</b>
          </div>
          <div className="text-center text-[#fb2e86] text-base font-medium font-['Lato']">
          Shop List
          </div>
        </div>

        
      </div>

 {/* second section */}
 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-20 p-4">
  <div className="text-[#151875] text-[22px] font-bold font-['Josefin Sans']">
    Ecommerce Accessories & Fashion item
  </div>
  <div className="text-[#8a8fb9] text-xs font-normal font-['Lato']">
    About 9,620 results (0.62 seconds)
  </div>
  <div className="flex flex-wrap items-center space-x-4 mt-4 lg:mt-0">
    <div className="flex items-center text-[#3f509e] text-base font-normal font-['Lato']">
      <span>Per Page:</span>
      <div className="w-24 h-7 ml-2 border border-[#e7e6ef]"></div>
    </div>
    <div className="flex items-center text-[#3f509e] text-base font-normal font-['Lato']">
      <span>Sort By:</span>
      <div className="w-[55px] h-[25px] ml-2 border border-[#e7e6ef]"></div>
    </div>
    <div className="flex items-center text-[#3f509e] text-base font-normal font-['Lato']">
      <span>View:</span>
      <div className="w-[162px] h-[30px] ml-2 border border-[#e7e6ef]"></div>
    </div>
    <div className="flex items-center text-[#8a8fb9] text-xs font-normal font-['Lato'] leading-[18px]">
      <span>Best Match</span>
      <div className="w-3 h-3 ml-2 overflow-hidden"></div>
      <div className="w-3 h-3 ml-2 overflow-hidden"></div>
    </div>
  </div>
</div>




       {/* products */}

       <div className="grid grid-cols-1 gap-6">
  <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 shadow-md rounded-lg">
    <Image className="w-full md:w-1/3 h-48 object-cover rounded-md" src={Img} alt="product" />
    <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 md:space-y-0">
      <div>
        <div className="text-lg font-bold text-[#151875]">In nulla</div>
        <div className="flex items-center space-x-2">
          <span className="text-[#151875]">$26.00</span>
          <span className="text-[#fb2e86] line-through">$52.00</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <span className="w-2.5 h-2.5 bg-[#de9034] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ec42a2] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#8568ff] rounded-full"></span>
          <span className="ml-2 text-yellow-500">★★★★★</span>
        </div>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 shadow-md rounded-lg">
    <Image className="w-full md:w-1/3 h-48 object-cover rounded-md" src={Img2} alt="product" />
    <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 md:space-y-0">
      <div>
        <div className="text-lg font-bold text-[#151875]">Vel sem</div>
        <div className="flex items-center space-x-2">
          <span className="text-[#151875]">$26.00</span>
          <span className="text-[#fb2e86] line-through">$52.00</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <span className="w-2.5 h-2.5 bg-[#de9034] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ec42a2] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#8568ff] rounded-full"></span>
          <span className="ml-2 text-yellow-500">★★★★★</span>
        </div>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
      </div>
    </div>
  </div>




  <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 shadow-md rounded-lg">
    <Image className="w-full md:w-1/3 h-48  rounded-md" src={Img4} alt="product" />
    <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 md:space-y-0">
      <div>
        <div className="text-lg font-bold text-[#151875]">Vel sem</div>
        <div className="flex items-center space-x-2">
          <span className="text-[#151875]">$26.00</span>
          <span className="text-[#fb2e86] line-through">$52.00</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <span className="w-2.5 h-2.5 bg-[#de9034] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ec42a2] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#8568ff] rounded-full"></span>
          <span className="ml-2 text-yellow-500">★★★★★</span>
        </div>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
      </div>
    </div>
  </div>


  <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 shadow-md rounded-lg">
    <Image className="w-full md:w-1/3 h-48 rounded-md" src={Img5} alt="product" />
    <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 md:space-y-0">
      <div>
        <div className="text-lg font-bold text-[#151875]">In nulla</div>
        <div className="flex items-center space-x-2">
          <span className="text-[#151875]">$26.00</span>
          <span className="text-[#fb2e86] line-through">$52.00</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <span className="w-2.5 h-2.5 bg-[#de9034] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ec42a2] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#8568ff] rounded-full"></span>
          <span className="ml-2 text-yellow-500">★★★★★</span>
        </div>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 shadow-md rounded-lg">
    <Image className="w-full md:w-1/3 h-48  rounded-md" src={Img6} alt="product" />
    <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 md:space-y-0">
      <div>
        <div className="text-lg font-bold text-[#151875]">Vel sem</div>
        <div className="flex items-center space-x-2">
          <span className="text-[#151875]">$26.00</span>
          <span className="text-[#fb2e86] line-through">$52.00</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <span className="w-2.5 h-2.5 bg-[#de9034] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ec42a2] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#8568ff] rounded-full"></span>
          <span className="ml-2 text-yellow-500">★★★★★</span>
        </div>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 shadow-md rounded-lg">
    <Image className="w-full md:w-1/3 h-48 rounded-md" src={Img7} alt="product" />
    <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 md:space-y-0">
      <div>
        <div className="text-lg font-bold text-[#151875]">In nulla</div>
        <div className="flex items-center space-x-2">
          <span className="text-[#151875]">$26.00</span>
          <span className="text-[#fb2e86] line-through">$52.00</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <span className="w-2.5 h-2.5 bg-[#de9034] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ec42a2] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#8568ff] rounded-full"></span>
          <span className="ml-2 text-yellow-500">★★★★★</span>
        </div>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 shadow-md rounded-lg">
    <Image className="w-full md:w-1/3 h-48 rounded-md" src={Img8} alt="product" />
    <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 md:space-y-0">
      <div>
        <div className="text-lg font-bold text-[#151875]">Vel sem</div>
        <div className="flex items-center space-x-2">
          <span className="text-[#151875]">$26.00</span>
          <span className="text-[#fb2e86] line-through">$52.00</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <span className="w-2.5 h-2.5 bg-[#de9034] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ec42a2] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#8568ff] rounded-full"></span>
          <span className="ml-2 text-yellow-500">★★★★★</span>
        </div>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
        <button className="text-gray-500 hover:text-[#151875]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z"></path></svg>
        </button>
      </div>
    </div>
  </div>



</div>




    </div>
  )
}

export default page
