import { useState } from 'react';
import uparrow from "../../assets/productlist/uparrow.svg";

const colorOptions = [
  { name: 'Purple', color: 'bg-purple-600' },
  { name: 'Black', color: 'bg-black' },
  { name: 'Red', color: 'bg-red-500' },
  { name: 'Orange', color: 'bg-orange-500' },
  { name: 'Navy', color: 'bg-blue-700' },
  { name: 'White', color: 'bg-white border border-gray-300' },
  { name: 'Broom', color: 'bg-amber-600' },
  { name: 'Green', color: 'bg-green-500' },
  { name: 'Yellow', color: 'bg-yellow-400' },
  { name: 'Grey', color: 'bg-gray-300' },
  { name: 'Pink', color: 'bg-pink-400' },
  { name: 'Blue', color: 'bg-cyan-400' },
];

export default function ColorFilter() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [showColors, setShowColors] = useState(true); // toggle state

  const toggleColor = (name) => {
    setSelectedColors((prev) =>
      prev.includes(name)
        ? prev.filter((c) => c !== name)
        : [...prev, name]
    );
  };

  return (
    <div className='border border-gray-300'>
      <div
        onClick={() => setShowColors(!showColors)}
        className=' h-14 flex justify-between items-center px-4 cursor-pointer'
      >
        <h1 className='text-xl text-gray-500 font-semibold'>Colors</h1>
        <img
          src={uparrow}
          alt="arrow"
          className={`w-4 h-4 transform transition-transform duration-300 ${showColors ? '' : 'rotate-180'}`}
        />
      </div>

      {showColors && (
        <div className="p-4 border border-gray-300  w-full max-w-xs">
          <div className="grid grid-cols-4 gap-4">
            {colorOptions.map(({ name, color }) => (
              <div key={name} className="flex flex-col items-center text-sm">
                <button
                  onClick={() => toggleColor(name)}
                  className={`w-8 h-8 rounded-lg ${color} 
                    ${selectedColors.includes(name) ? 'ring-2 ring-black' : ''}`}
                ></button>
                <span className="mt-1 text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
