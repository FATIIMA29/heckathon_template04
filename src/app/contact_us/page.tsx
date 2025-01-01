
import React from 'react'

const page = () => {
  return (
    <div>
      
       {/* Top */}
       <div className="h-[286px] w-full bg-[#f6f5ff]">
          <div className="text-left pt-14 ml-10 text-[#101750] text-4xl font-bold font-['Josefin Sans']">
          Contact Us
          </div>
          <div className="flex justify-items-start mt-3 space-x-2 ml-10">
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Home <b>.</b>{" "}
            </div>
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Pages <b>.</b>
            </div>
            <div className="text-center text-[#fb2e86] text-base font-medium font-['Lato']">
            Contact Us
            </div>
          </div>
        </div>
  

        <div className="container mx-auto p-4">
      {/* Information About Us */}
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-[#101750]">Information About us</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-[#101750]">Get In Touch</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <form>
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full p-2 border border-gray-300 rounded mb-4 md:mb-0"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <input
              type="text"
              placeholder="Subject*"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            <textarea
              placeholder="Type Your Message*"
              className="w-full p-2 border border-gray-300 rounded mb-4" 
            ></textarea>

            <button
              type="submit"
              className="w-full p-2 bg-pink-500 text-white font-bold rounded"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default page
