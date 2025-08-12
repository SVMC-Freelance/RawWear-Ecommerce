import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Bigsaving from "./bigsaving";

const cardcont = [
  {
    price: "Low Price",
    model: "High Coziness",
    offer: "upto 50% OFF",
    explore: "Explore Items",
    image: "src/assets/home/img-1.jpg",
  },

  {
    price: "Beyoung Presents",
    model: "Breezy Summer Style",
    offer: "upto 50% OFF",
    explore: "Explore Items",
    image: "src/assets/home/img-2.jpg",
  },
];

const newArrival = [
  { imge: "src/assets/home/new arrival/img-1.png", content: "Knitted Joggers" },
  { imge: "src/assets/home/new arrival/img-2.png", content: "Full Sleeve" },
  { imge: "src/assets/home/new arrival/img-3.png", content: "Active T-Shirts" },
  { imge: "src/assets/home/new arrival/img-4.png", content: "Urban Shirts" },
  { imge: "src/assets/home/new arrival/img-1.png", content: "Knitted Joggers" },
  { imge: "src/assets/home/new arrival/img-2.png", content: "Full Sleeve" },
  { imge: "src/assets/home/new arrival/img-3.png", content: "Active T-Shirts" },
  { imge: "src/assets/home/new arrival/img-4.png", content: "Urban Shirts" },
];

const Cardsection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-5 p-7">
        {cardcont.map((card) => (
          <div className="relative">
            <img src={card.image} alt="Sample" className="" />
            <div className="absolute inset-0 px-4 sm:px-6 md:px-10 flex flex-col justify-center">
              <h5 className="text-white font-bold text-sm sm:text-base">
                {card.price}
              </h5>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mt-4">
                {card.model}
              </h2>
              <p className="text-white text-sm sm:text-base">{card.offer}</p>
              <button className="text-white font-bold underline mt-6 text-sm sm:text-base flex">
                {card.explore}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative px-10">
        <h1 className="text-3xl font-bold ml-10 mb-4">New Arrival</h1>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 m-7 px-10 scroll-smooth no-scrollbar"
        >
          {newArrival.map((newar) => (
            <div className="w-64 flex-shrink-0">
              <img
                src={newar.imge}
                alt="Image-1"
                className="h-64 w-full object-cover rounded-md"
              />
              <p className="mt-5 font-bold">{newar.content}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow z-10"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cardsection;
