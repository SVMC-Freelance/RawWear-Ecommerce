import React, { useState } from 'react';
import uparrow from "../../assets/productlist/uparrow.svg";

const SizeFilter = () => {
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
  const [selectedSize, setSize] = useState('');
  const [showSizes, setShowSizes] = useState(true); // toggle visibility

  return (
    <div className='border  border-gray-300'>
      <div className='h-14 flex justify-between border-b border-gray-300 items-center px-4 cursor-pointer' onClick={() => setShowSizes(!showSizes)}>
        <h1 className='text-xl text-gray-500 font-semibold'>Size</h1>
        <img
          src={uparrow}
          alt="arrow"
          className={`w-4 h-4 transform transition-transform duration-300 ${showSizes ? 'rotate-0' : 'rotate-180'}`}
        />
      </div>

      {showSizes && (
        <div className='flex justify-center'>
          <div className="flex flex-wrap gap-5 w-50 justify-center my-5">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSize(size)}
                className={`border-2 rounded-lg flex items-center justify-center w-12 p-1 ${
                  selectedSize === size
                    ? 'border-black text-black font-semibold'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeFilter;
