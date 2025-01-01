
import Image from 'next/image'
import Img from '../../../public/bruce-mars-FWVMhUa_wbY-unsplash 2.png'
import Img1 from '../../../public/Rectangle 126.png'
import Img2 from '../../../public/Rectangle 126 (1).png'
import Img3 from '../../../public/Rectangle 126 (2).png'

const page = () => {
    return (
      <div>
  
        {/* Top */}
        <div className="h-[286px] w-full bg-[#f6f5ff]">
          <div className="text-left pt-14 ml-10 text-[#101750] text-4xl font-bold font-['Josefin Sans']">
            Blog Page
          </div>
          <div className="flex justify-items-start mt-3 space-x-2 ml-10">
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Home <b>.</b>{" "}
            </div>
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Pages <b>.</b>
            </div>
            <div className="text-center text-[#fb2e86] text-base font-medium font-['Lato']">
              Blog Page
            </div>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              <Image src={Img} alt="Article Image" className="w-full rounded-lg" />
              <div className="flex items-center mt-4">
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">Surf Auxion</span>
                <span className="ml-4 text-gray-500 text-sm">Aug 09 2020</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">Mauris at orci non vulputate diam tincidunt nec.</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Read More</a>
            </div>
  
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-800">Search</h3>
                <input type="text" placeholder="Search for Posts" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
              </div>
  
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-800">Categories</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="flex justify-between text-gray-600">Hobbies <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">14</span></a></li>
                  <li><a href="#" className="flex justify-between text-gray-600">Women <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">21</span></a></li>
                  <li><a href="#" className="flex justify-between text-gray-600">Women <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">21</span></a></li>
                  <li><a href="#" className="flex justify-between text-gray-600">Women <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">21</span></a></li>
                  <li><a href="#" className="flex justify-between text-gray-600">Women <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">21</span></a></li>
                </ul>
              </div>
  
              {/* Recent Post */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-800">Recent Post</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <Image src={Img1} alt="Recent Post" className="w-16 h-16 rounded-lg" />
                    <div className="ml-4">
                      <p className="text-gray-600">It is a long established fact</p>
                      <span className="text-sm text-gray-500">Aug 09 2020</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Image src={Img2} alt="Recent Post" className="w-16 h-16 rounded-lg" />
                    <div className="ml-4">
                      <p className="text-gray-600">It is a long established fact</p>
                      <span className="text-sm text-gray-500">Aug 09 2020</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Image src={Img3} alt="Recent Post" className="w-16 h-16 rounded-lg" />
                    <div className="ml-4">
                      <p className="text-gray-600">It is a long established fact</p>
                      <span className="text-sm text-gray-500">Aug 09 2020</span>
                    </div>
                  </li>
                </ul>
              </div>
  
              
            </div>
          </div>
        </div>
  
      </div>
    )
  }
  
  export default page