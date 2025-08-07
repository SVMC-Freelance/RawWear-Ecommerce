import { useState } from 'react';
import uparrow from "../../assets/productlist/uparrow.svg";

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [showPrices, setShowPrices] = useState(true); // Toggle visibility

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
  };

  return (
    <div className="border-b border-gray-300">
      {/* Toggle Header */}
      <div
        className='h-14 flex justify-between items-center px-4 cursor-pointer border border-gray-300'
        onClick={() => setShowPrices(!showPrices)}
      >
        <h1 className='text-xl text-gray-500 font-semibold' >Price</h1>
        <img
          src={uparrow}
          alt="arrow"
          className={`w-4 h-4 transform transition-transform duration-300 ${showPrices ? 'rotate-0' : 'rotate-180'}`}
        />
      </div>

      {/* Toggle Content */}
      {showPrices && (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded shadow">
          <div className="relative h-6">
            <div className="absolute inset-0 h-1 bg-gray-200 rounded" />

            {/* Min Range Slider */}
            <input
              type="range"
              min="0"
              max="10000"
              value={minPrice}
              onChange={handleMinChange}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-purple-600
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:bg-purple-600
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:cursor-pointer"
            />

            {/* Max Range Slider */}
            <input
              type="range"
              min="0"
              max="10000"
              value={maxPrice}
              onChange={handleMaxChange}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-purple-600
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:bg-purple-600
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>

          <div className="flex justify-between text-sm mb-2 mt-3">
            <p className='border-2 border-gray-500 rounded-lg w-20 text-center p-1'>
              ₹{minPrice}
            </p>
            <p className='border-2 border-gray-500 rounded-lg w-20 text-center p-1'>
              ₹{maxPrice}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeFilter;
