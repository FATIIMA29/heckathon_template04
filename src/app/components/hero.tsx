import React from 'react'
import Image from 'next/image'
import Lamp from  '../../../public/image 32.png'
import Chair from '../../../public/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png'
const hero = () => {
  return (
    <div>
  <div className="relative bg-[#F2F0FF] p-8 flex flex-col lg:flex-row items-center justify-between">
    {/* image 1 */}
    <div className="absolute top-0 ml-0 w-1/6 hidden lg:block">
      <Image src={Lamp} alt="Lamp" width={300} height={500} />
    </div>

    <div className="w-full lg:w-1/3 mt-10 lg:ml-36 lg:pl-10">
      <div className="mb-4">
        <span className="text-[#FB2E86]">Best Furniture For Your Castle...</span>
      </div>
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">
        New Furniture Collection Trends in 2020
      </h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in pharetra massa in justo.
      </p>
      <button className="bg-[#FB2E86] text-white py-2 px-4 hover:bg-[#FB2E86]">
        Shop Now
      </button>
    </div>

    <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
      {/* image 2 */}
      <div className="w-full flex justify-center">
        <Image src={Chair} alt="Chair" width={500} height={500} />
      </div>
      <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-4 py-2">
        50% off
      </div>
    </div>
  </div>
</div>

  )
}

export default hero
