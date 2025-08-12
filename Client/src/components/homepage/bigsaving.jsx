
const cardcont = [
  {
    brand: "Hawaiian Shirts",
    explore: "Dress up in summer vibe",
    offer: "UPTO 50% OFF",
    image: "src/assets/home/bigsavingzone/img-1.png",
  },

  {
    brand: "Printed T-Shirt",
    explore: "New Designs Every Week",
    offer: "UPTO 40% OFF",
    image: "src/assets/home/bigsavingzone/img-2.png",
  },
  {
    brand: "Cargo Joggers",
    explore: "Move with style & comfort",
    offer: "UPTO 50% OFF",
    image: "src/assets/home/bigsavingzone/img-3.png",
  },
  {
    brand: "Urban Shirts",
    explore: "Live in Comfort",
    offer: "FLAT 60% OFF",
    image: "src/assets/home/bigsavingzone/img-4.png",
  },
    {
        brand: "Oversized T-Shirts",
        explore: "Street Style Icon",
        offer: "FLAT 60% OFF",
        image: "src/assets/home/bigsavingzone/img-5.png",
    },
  
];

const Bigsaving = () => {
  return (
    <div className="px-10">
      <h1 className="text-3xl font-bold ml-10 mb-4">Big Saving Zone</h1>

      <div className="grid grid-cols-3 gap-4 px-6">
        {cardcont.map((item, index) => {
          let colSpanClass = "col-span-1";
          if (index >= 3) colSpanClass = "col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3";

          return (
            <div
              key={index}
              className={`${colSpanClass} ${
                index >= 3 ? "grid grid-cols-2 gap-4" : ""
              } relative`}
            >
              {index < 3 ? (
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="w-full h-100 object-cover p-2"
                  />
                  <div className={`absolute w-30% inset-0 px-4 sm:px-6 md:px-10 flex flex-col ${index === 0 ? "items-start" : "items-end"} mt-10`}>

                    <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mt-4 w-1/2">
                      {item.brand}
                    </h2>
                    <h5 className="text-white text-sm sm:text-base">
                      {item.explore}
                    </h5>
                    
                    <p className="text-white font-bold text-sm sm:text-base">{item.offer}</p>
                    <button className="text-white font-bold outline px-5 py-2 mt-6 text-sm sm:text-base flex hover:cursor-pointer">
                      Shop Now
                    </button>
                  </div>
                </div>
              ) : null}

              {index === 3 && (
                <>
                  {[cardcont[3], cardcont[4]].map((innerItem, innerIndex) => (
                    <div key={innerIndex} className="relative">
                      <img
                        src={innerItem.image}
                        alt={innerItem.brand}
                        className="w-full h-100 object-cover p-2"
                      />
                      <div className="absolute inset-0 px-4 sm:px-6 md:px-10 flex flex-col items-end mt-10">
                         <h2 className="text-xl sm:text-2xl w-1/4 md:text-3xl text-black font-bold mt-4">
                          {innerItem.brand}
                        </h2>
                        <h5 className="text-black text-sm sm:text-base">
                          {innerItem.explore}
                        </h5>
                       
                        <p className="text-black font-bold text-sm sm:text-base">{innerItem.offer}</p>
                        <button className="text-black font-bold outline  px-5 py-2 text-sm sm:text-base flex justify-end  hover:cursor-pointer">
                           Shop Now
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bigsaving;

