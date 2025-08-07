import React, { useState } from 'react';
import arrow from "../../assets/productlist/arrow.svg";
import uparrow from "../../assets/productlist/uparrow.svg";

const DressStyle = () => {
  const [showDressStyles, setShowDressStyles] = useState(true); // toggle state

  const styles = [
    "Classic",
    "Casual",
    "Business",
    "Sport",
    "Elegnt",
    "Formal (evening)",
  ];

  return (
    <div className='flex flex-col gap-6 border border-gray-300 pb-4'>
      {/* Header with toggle */}
      <div
        onClick={() => setShowDressStyles(!showDressStyles)}
        className='border-b border-gray-300 h-14 flex justify-between items-center px-4 cursor-pointer'
      >
        <h1 className='text-xl text-gray-500 font-semibold'>Dress Style</h1>
        <img
          src={uparrow}
          alt="toggle arrow"
          className={`w-5 h-5 transform transition-transform duration-300 ${showDressStyles ? '' : 'rotate-180'}`}
        />
      </div>

      {/* Toggleable content */}
      {showDressStyles && (
        <div className="grid grid-cols-2 gap-3 gap-x-20 ml-12 items-center">
          {styles.map((style) => (
            <React.Fragment key={style}>
              <p className='text-gray-400'>{style}</p>
              <img src={arrow} alt="arrow" />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default DressStyle;
