import React from 'react'
import Image from 'next/image'
import Img1 from '../../../public/Rectangle 34.png'
import Img2 from '../../../public/Rectangle 35.png'
import Img3 from '../../../public/Rectangle 36.png'
import Img4 from '../../../public/Rectangle 37.png'
import Img5 from '../../../public/Rectangle 38.png'
const page = () => {
    const cartItems = [
        { id: 1, image: Img1, name: 'Product 1', color: 'Brown', size: 'XL', price: 32.00, total: 219.00 },
        { id: 2, image: Img2, name: 'Product 2', color: 'Brown', size: 'XL', price: 32.00, total: 219.00 },
        { id: 3, image: Img3, name: 'Product 3', color: 'Brown', size: 'XL', price: 32.00, total: 219.00 },
        { id: 4, image: Img4, name: 'Product 4', color: 'Brown', size: 'XL', price: 32.00, total: 219.00 },
        { id: 5, image: Img5, name: 'Product 5', color: 'Brown', size: 'XL', price: 32.00, total: 219.00 },
      ];
  return (
    <div>
      
         {/* Top */}
         <div className="h-[286px] w-full bg-[#f6f5ff]">
          <div className="text-left pt-14 ml-10 text-[#101750] text-4xl font-bold font-['Josefin Sans']">
          Shopping Cart
          </div>
          <div className="flex justify-items-start mt-3 space-x-2 ml-10">
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Home <b>.</b>{" "}
            </div>
            <div className="text-center text-black text-base font-medium font-['Lato']">
              Pages <b>.</b>
            </div>
            <div className="text-center text-[#fb2e86] text-base font-medium font-['Lato']">
            Shopping Cart
            </div>
          </div>
        </div>
  

  {/* section2 */}

  <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left text-sm font-semibold text-[#101750]">Product</th>
                <th className="p-2 text-left text-sm font-semibold text-[#101750]">Price</th>
                <th className="p-2 text-left text-sm font-semibold text-[#101750]">Quantity</th>
                <th className="p-2 text-left text-sm font-semibold text-[#101750]">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2 flex items-center space-x-4">
                    <Image src={item.image} alt={item.name} width={50} height={50} className="w-16 h-auto rounded-md" />
                    <div>
                      <div className="text-sm font-medium text-gray-800">{item.name}</div>
                      <div className="text-xs text-gray-600">Color: {item.color}</div>
                      <div className="text-xs text-gray-600">Size: {item.size}</div>
                    </div>
                  </td>
                  <td className="p-2 text-sm text-gray-800">${item.price.toFixed(2)}</td>
                  <td className="p-2 text-sm text-gray-800">
                    <input type="number" defaultValue="1" className="w-16 p-1 border rounded-md" />
                  </td>
                  <td className="p-2 text-sm text-gray-800">£{item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Update Cart</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Clear Cart</button>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold text-[#101750] mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Subtotals:</span>
              <span className="text-sm font-medium text-gray-700">£219.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Totals:</span>
              <span className="text-sm font-medium text-gray-700">£325.00</span>
            </div>
            <button className="bg-green-500 text-white w-full py-2 rounded-md">Proceed To Checkout</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4">
            <h2 className="text-lg font-bold text-[#101750] mb-4">Calculate Shopping</h2>
            <div className="space-y-2">
              <input type="text" placeholder="Bangladesh" className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Mirpur Dhaka - 1200" className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Postal Code" className="w-full p-2 border rounded-md" />
              <button className="bg-pink-500 text-white w-full py-2 rounded-md">Calculate Shipping</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default page
