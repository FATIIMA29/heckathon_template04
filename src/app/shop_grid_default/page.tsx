import React from "react";
import Image from "next/image";
import Images from '../../../public/image 9.png'
import Image1 from '../../../public/image 1165.png'
import Image2 from '../../../public/image 1173.png'
import Image3 from '../../../public/10011 1.png'
import Image5 from '../../../public/unnamed 1.png'
import Image6 from '../../../public/1562173100-movado-connect-1562173094 2.png'
import Image7 from '../../../public/purepng 1.png'
import Image8 from '../../../public/image 1164.png'
import Image9 from '../../../public/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png'
import Image10 from '../../../public/cam 2.png'
import Image11 from '../../../public/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLnBuZw 1.png'
import Image12 from '../../../public/10011 1.png'


const page = () => {
  return (
    <div className="mb-10">
        {/* top */}
      <div className="h-[286px]  w-full bg-[#f6f5ff]">
        <div className="text-left pt-14 ml-10 text-[#101750] text-4xl font-bold font-['Josefin Sans']">
          Shop Grid Default
        </div>
        <div className="flex justify-items-start mt-3 space-x-2 ml-10 ">
          <div className="text-center  text-black text-base font-medium font-['Lato']">
            Home <b>.</b>{" "}
          </div>
          <div className="text-center text-black text-base font-medium font-['Lato']">
            Pages <b>.</b>
          </div>
          <div className="text-center text-[#fb2e86] text-base font-medium font-['Lato']">
            Shop Grid Default
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
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Images} alt="products" />
  </div>

  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image1} alt="products" />
  </div>

  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image2} alt="products" />
  </div>

  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image3} alt="products" />
  </div>
  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image5} alt="products" />
  </div>

  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image6} alt="products" />
  </div>
 
  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image7} alt="products" />
  </div>

  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image8} alt="products" />
  </div>

  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image9} alt="products" />
  </div>

  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image10} alt="products" />
  </div>

  {/* <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image10} alt="products" />
  </div> */}
  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image11} alt="products" />
  </div>
  <div className="w-full h-[363px] relative">
    <div className="w-full h-full absolute">
      <div className="w-full h-[280px] absolute bg-[#f6f7fb]"></div>
      <div className="left-1/4 top-[298px] absolute text-center text-[#151875] text-lg font-bold font-['Josefin Sans']">Vel elit euismod</div>
      <div className="flex justify-center absolute top-[324px] w-full">
        <div className="w-2.5 h-2.5 mx-1 bg-[#de9034] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#ec42a2] rounded-full"></div>
        <div className="w-2.5 h-2.5 mx-1 bg-[#8568ff] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center absolute top-[349px]">
        <div className="text-center text-[#fb2e86] text-sm font-normal font-['Josefin Sans'] line-through mr-2">$42.00</div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">$26.00 </div>
      </div>
    </div>
    <Image className="w-[201px] h-[201px] absolute left-[calc(50%-100.5px)] top-[50px]" src={Image12} alt="products" />
  </div>
</div>

</div>
  );
};

export default page;
