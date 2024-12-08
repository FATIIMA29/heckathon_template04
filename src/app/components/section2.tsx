import React from "react";
import Image from "next/image";
import Sofa from "../../../public/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
import Sofa2 from "../../../public/tortuga-01-b 1.png";
import Trend1 from "../../../public/image 1171 (1).png";
import Trend2 from "../../../public/image 1170.png";
import Trend3 from "../../../public/image 31.png";
import Trend4 from "../../../public/image 32 (1).png";
import Top2 from "../../../public/image 1168.png";
import Blog1 from "../../../public/JIUjvqe2ZHg.png";
import Blog2 from "../../../public/2dcYhvbHV-M.png";
import Blog3 from "../../../public/2dcYhvbHV-M (1).png";

const section2 = () => {
  return (
    <div>
   <div className="w-[80%] my-10 h-[550px] bg-[#F1F0FF] relative mx-auto">
  <div className="w-full h-full relative flex flex-col lg:flex-row">
    <div className="w-full lg:w-[50%] h-full relative">
      <Image className="w-full h-full object-cover" src={Sofa} alt="sofa" />
    </div>
    <div className="w-full lg:w-[50%] h-full p-6 lg:p-10 flex flex-col justify-center">
      <div className="text-[#151875] text-[28px] lg:text-[35px] font-bold font-['Josefin Sans'] leading-[1.3] lg:leading-[46.20px] tracking-wide mb-6">
        Unique Features Of Latest &<br />
        Trending Products
      </div>
      <div className="flex items-center mb-4">
        <div className="w-[11px] h-[11px] bg-[#f52b70] rounded-full mr-2"></div>
        <div className="text-[#acabc3] text-base font-medium font-['Lato'] leading-[21.12px] tracking-tight">
          All frames constructed with hardwood solids and laminates
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-[11px] h-[11px] bg-[#2b2bf5] rounded-full mr-2"></div>
        <div className="text-[#acabc3] text-base font-medium font-['Lato'] leading-[21.12px] tracking-tight">
          Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-[11px] h-[11px] bg-[#2bf5cc] rounded-full mr-2"></div>
        <div className="text-[#acabc3] text-base font-medium font-['Lato'] leading-[21.12px] tracking-tight">
          Arms, backs and seats are structurally reinforced
        </div>
      </div>
      <div className="text-[#151875] text-sm font-semibold font-['Josefin Sans'] tracking-tight mt-4">
        B&B Italian Sofa
      </div>
      <div className="text-[#151875] text-sm font-normal font-['Lato']">
        $32.00
      </div>
      <button className="w-[157px] h-[45px] bg-[#fb2e86] text-white text-[17px] font-semibold font-['Josefin Sans'] tracking-tight rounded-sm mt-6">
        Add To Cart
      </button>
    </div>
  </div>
</div>



<div className="text-[#151875] text-center mt-80 md:mt-10 my-10 text-[42px] font-bold font-['Josefin Sans']">
  Trending Products
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
  {/* trend1 */}
  <div className="w-full max-w-[270px] mx-auto h-[350px] relative shadow bg-white">
    <div className="w-full h-full relative">
      <div className="w-full h-[244px] bg-[#f5f6f8] flex justify-center items-center">
        <Image className="w-[187px] h-[187px] object-contain" src={Trend1} alt="Trending product 1" />
      </div>
      <div className="p-4">
        <div className="text-center text-[#151875] text-base font-bold font-['Lato']">
          Cantilever chair
        </div>
        <div className="text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
          $42.00
        </div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">
          $26.00
        </div>
      </div>
    </div>
  </div>

  {/* trend2 */}
  <div className="w-full max-w-[270px] mx-auto h-[350px] relative shadow bg-white">
    <div className="w-full h-full relative">
      <div className="w-full h-[244px] bg-[#f5f6f8] flex justify-center items-center">
        <Image className="w-[187px] h-[187px] object-contain" src={Trend2} alt="Trending product 2" />
      </div>
      <div className="p-4">
        <div className="text-center text-[#151875] text-base font-bold font-['Lato']">
          Cantilever chair
        </div>
        <div className="text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
          $42.00
        </div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">
          $26.00
        </div>
      </div>
    </div>
  </div>

  {/* trend3 */}
  <div className="w-full max-w-[270px] mx-auto h-[350px] relative shadow bg-white">
    <div className="w-full h-full relative">
      <div className="w-full h-[244px] bg-[#f5f6f8] flex justify-center items-center">
        <Image className="w-[187px] h-[187px] object-contain" src={Trend3} alt="Trending product 3" />
      </div>
      <div className="p-4">
        <div className="text-center text-[#151875] text-base font-bold font-['Lato']">
          Cantilever chair
        </div>
        <div className="text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
          $42.00
        </div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">
          $26.00
        </div>
      </div>
    </div>
  </div>

  {/* trend4 */}
  <div className="w-full max-w-[270px] mx-auto h-[350px] relative shadow bg-white">
    <div className="w-full h-full relative">
      <div className="w-full h-[244px] bg-[#f5f6f8] flex justify-center items-center">
        <Image className="w-[187px] h-[187px] object-contain" src={Trend4} alt="Trending product 4" />
      </div>
      <div className="p-4">
        <div className="text-center text-[#151875] text-base font-bold font-['Lato']">
          Cantilever chair
        </div>
        <div className="text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
          $42.00
        </div>
        <div className="text-center text-[#151875] text-sm font-normal font-['Josefin Sans']">
          $26.00
        </div>
      </div>
    </div>
  </div>

</div>

<div className="text-[#151875] my-14 text-center text-[42px] font-bold font-['Josefin Sans']">
  Discount Item
</div>

<div className="relative mx-6 sm:mx-20 w-full h-auto sm:h-[597px] border-solid">
  {/* <!-- Discount Header --> */}
  <div className="absolute left-0 top-[120px] sm:top-[140px] text-[#151875] text-[24px] sm:text-[35px] font-bold font-['Josefin Sans'] leading-[46.20px] tracking-wide">
    20% Discount Of All Products
  </div>

  {/* <!-- Product Name --> */}
  <div className="absolute left-0 top-[180px] sm:top-[202px] text-[#fb2e86] text-[16px] sm:text-[21px] font-normal font-['Josefin Sans'] leading-7 tracking-tight">
    Eams Sofa Compact
  </div>
{/* 
  <!-- Shop Now Button --> */}
  <div className="absolute w-[200px] h-[57px] left-0 top-[380px] sm:top-[434px]">
    <div className="w-[200px] h-[57px] left-0 top-0 absolute bg-[#fb2e86] rounded-sm"></div>
    <div className="w-[104.46px] left-[48px] top-[20px] absolute text-white text-[14px] sm:text-[17px] font-normal font-['Josefin Sans'] tracking-tight">
      Shop Now
    </div>
  </div>

  {/* <!-- Product Description --> */}
  <div className="absolute w-[523px] h-[49px] left-0 top-[220px] sm:top-[250px] text-[#b7bacb] text-[14px] sm:text-[17px] font-normal font-['Lato'] leading-[30px] tracking-tight">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
  </div>

  {/* <!-- Features --> */}
  <div className="absolute left-[23px] top-[280px] sm:top-[327px] text-[#b8b8dc] text-[12px] sm:text-[14px] font-normal font-['Lato'] leading-[30px] tracking-tight">
    Material expose like metals
  </div>
  <div className="absolute left-[23px] top-[320px] sm:top-[367px] text-[#b8b8dc] text-[12px] sm:text-[14px] font-normal font-['Lato'] leading-[30px] tracking-tight">
    Simple neutral colours.
  </div>
  <div className="absolute left-[295px] top-[320px] sm:top-[367px] text-[#b8b8dc] text-[12px] sm:text-[14px] font-normal font-['Lato'] leading-[30px] tracking-tight">
    Material expose like metals
  </div>
  <div className="absolute left-[295px] top-[280px] sm:top-[327px] text-[#b8b8dc] text-[12px] sm:text-[14px] font-normal font-['Lato'] leading-[30px] tracking-tight">
    Clear lines and geomatric figures
  </div>

  {/* <!-- Sofa Image Section --> */}
  <div className="absolute hidden  sm:flex flex-col justify-center items-center w-full sm:w-[699px] h-auto sm:h-[597px] left-0 sm:left-[515px] top-0 sm:top-0">
    {/* <!-- Decorative Circle Background --> */}
    <div className="w-[472px] h-[472px] sm:w-[472px] sm:h-[472px] left-[114px] top-[81px] sm:left-[114px] sm:top-[81px] absolute bg-[#fcecf1] rounded-full"></div>
    
    {/* <!-- Sofa Image --> */}
    <Image className="w-full  h-auto sm:w-[699px] sm:h-[597px] left-0 top-0 absolute" src={Sofa2} alt="Discounted Sofa" />
  </div>
</div>






{/* Top Categories Section */}
<div className="text-[#151875] text-center mt-[510px] sm:mt-10 text-[32px] sm:text-[42px] font-bold font-['Josefin Sans']">
  Top Categories
</div>

{/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6 sm:mx-20">
  {/* Top 1 */}
  <div className="w-full sm:w-[269px] h-auto relative flex flex-col justify-start items-center">
    <div className="h-[244px] w-[247px] px-[30px] pt-7 pb-[29px] bg-[#f5f6f8] flex justify-center items-center">
      <Image className="w-[187px] h-[187px]" src={Trend3} alt="trending products" />
    </div>
    <div className="w-[150px] h-[49px] text-center mt-4">
      <div className="text-[#151875] text-xl font-normal font-['Josefin Sans']">Mini LCW Chair</div>
      <div className="text-[#151875] text-base font-normal font-['Josefin Sans']">$56.00</div>
    </div>
  </div>

  {/* Top 2 */}
  <div className="w-full sm:w-[269px] h-auto relative flex flex-col justify-start items-center">
    <div className="h-[244px] w-[247px] px-[30px] pt-7 pb-[29px] bg-[#f5f6f8] flex justify-center items-center">
      <Image className="w-[187px] h-[187px]" src={Trend1} alt="trending products" />
    </div>
    <div className="w-[150px] h-[49px] text-center mt-4">
      <div className="text-[#151875] text-xl font-normal font-['Josefin Sans']">Mini LCW Chair</div>
      <div className="text-[#151875] text-base font-normal font-['Josefin Sans']">$56.00</div>
    </div>
  </div>

  {/* Top 3 */}
  <div className="w-full sm:w-[269px] h-auto relative flex flex-col justify-start items-center">
    <div className="h-[244px] w-[247px] px-[30px] pt-7 pb-[29px] bg-[#f5f6f8] flex justify-center items-center">
      <Image className="w-[187px] h-[187px]" src={Top2} alt="trending products" />
    </div>
    <div className="w-[150px] h-[49px] text-center mt-4">
      <div className="text-[#151875] text-xl font-normal font-['Josefin Sans']">Mini LCW Chair</div>
      <div className="text-[#151875] text-base font-normal font-['Josefin Sans']">$56.00</div>
    </div>
  </div>

  {/* Top 4 */}
  <div className="w-full sm:w-[269px] h-auto relative flex flex-col justify-start items-center">
    <div className="h-[244px] w-[247px] px-[30px] pt-7 pb-[29px] bg-[#f5f6f8] flex justify-center items-center">
      <Image className="w-[187px] h-[187px]" src={Trend3} alt="trending products" />
    </div>
    <div className="w-[150px] h-[49px] text-center mt-4">
      <div className="text-[#151875] text-xl font-normal font-['Josefin Sans']">Mini LCW Chair</div>
      <div className="text-[#151875] text-base font-normal font-['Josefin Sans']">$56.00</div>
    </div>
  </div>
</div>


     {/* Latest Blog Section */}
<div className="text-[#151875] text-center my-10 text-[32px] sm:text-[42px] font-bold font-['Josefin Sans']">
  Latest Blog
</div>

{/* Blog Grid */}
<div className="grid grid-cols-1 mb-[500px] sm:mb-10 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-6 sm:mx-20">
  {/* Blog 1 */}
  <div className="w-full sm:w-[370px] mb-[460px] sm:mb-4 h-auto relative">
    <div className="w-full sm:w-[370px] h-auto absolute bg-white rounded-[5px] shadow">
      <div className="w-full sm:w-[370px] h-[255px] bg-[#e7e4f8] rounded-[5px]">
        <Image className="w-full h-[255px] object-cover rounded-t-[5px]" alt="latest blog" src={Blog1} />
      </div>
      <div className="left-[19px] top-[319px] absolute text-[#151875] text-lg font-bold font-['Josefin Sans']">
        Top Essential Trends in 2021
      </div>
      <div className="left-[132px] top-[274px] absolute text-[#151875] text-sm font-normal font-['Josefin Sans']">
        21 August, 2020
      </div>
      <div className="w-[74px] h-3.5 left-[14px] top-[274px] absolute">
        <div className="left-[19px] top-0 absolute text-[#151875] text-sm font-normal font-['Josefin Sans']">
          SaberAli
        </div>
      </div>
      <div className="left-[19px] top-[354px] absolute text-[#72718f] text-base font-normal font-['Lato'] leading-[30px]">
        More off this less hello samlande lied much
        <br />
        over tightly circa horse taped mightly
      </div>
      <div className="left-[19px] top-[428px] absolute text-[#151875] text-base font-normal font-['Lato'] underline leading-[30px]">
        Read More
      </div>
    </div>
  </div>

  {/* Blog 2 */}
  <div className="w-full sm:w-[370px] mb-[460px] sm:bg-4 h-auto relative">
    <div className="w-full sm:w-[370px] h-auto absolute bg-white rounded-[5px] shadow">
      <div className="w-full sm:w-[370px] h-[255px] bg-[#e7e4f8] rounded-[5px]">
        <Image className="w-full h-[255px] object-cover rounded-t-[5px]" alt="latest blog" src={Blog2} />
      </div>
      <div className="left-[19px] top-[319px] absolute text-[#151875] text-lg font-bold font-['Josefin Sans']">
        Top Essential Trends in 2021
      </div>
      <div className="left-[132px] top-[274px] absolute text-[#151875] text-sm font-normal font-['Josefin Sans']">
        21 August, 2020
      </div>
      <div className="w-[74px] h-3.5 left-[14px] top-[274px] absolute">
        <div className="left-[19px] top-0 absolute text-[#151875] text-sm font-normal font-['Josefin Sans']">
          SaberAli
        </div>
      </div>
      <div className="left-[19px] top-[354px] absolute text-[#72718f] text-base font-normal font-['Lato'] leading-[30px]">
        More off this less hello samlande lied much
        <br />
        over tightly circa horse taped mightly
      </div>
      <div className="left-[19px] top-[428px] absolute text-[#151875] text-base font-normal font-['Lato'] underline leading-[30px]">
        Read More
      </div>
    </div>
  </div>
 
  {/* Blog 3 */}
  <div className="w-full sm:w-[370px] mb-10 h-auto relative">
    <div className="w-full sm:w-[370px] h-auto absolute bg-white rounded-[5px] shadow">
      <div className="w-full sm:w-[370px] h-[255px] bg-[#e7e4f8] rounded-[5px]">
        <Image className="w-full h-[255px] object-cover rounded-t-[5px]" alt="latest blog" src={Blog3} />
      </div>
      <div className="left-[19px] top-[319px] absolute text-[#151875] text-lg font-bold font-['Josefin Sans']">
        Top Essential Trends in 2021
      </div>
      <div className="left-[132px] top-[274px] absolute text-[#151875] text-sm font-normal font-['Josefin Sans']">
        21 August, 2020
      </div>
      <div className="w-[74px] h-3.5 left-[14px] top-[274px] absolute">
        <div className="left-[19px] top-0 absolute text-[#151875] text-sm font-normal font-['Josefin Sans']">
          SaberAli
        </div>
      </div>
      <div className="left-[19px] top-[354px] absolute text-[#72718f] text-base font-normal font-['Lato'] leading-[30px]">
        More off this less hello samlande lied much
        <br />
        over tightly circa horse taped mightly
      </div>
      <div className="left-[19px] top-[428px] absolute text-[#151875] text-base font-normal font-['Lato'] underline leading-[30px]">
        Read More
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default section2;
