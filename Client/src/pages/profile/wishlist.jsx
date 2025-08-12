import React, { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cart/cartThunk';
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (status === 'loading') return <p className="text-center">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500">Failed to load cart.</p>;

  // Filter wishlist items
  const wishlistItems = items.filter(item => item.wishlist);

  return (
    <div className=' '>
      {wishlistItems.length === 0 ? (
        <div className='border border-gray-200 shadow p-20 w-fit flex flex-col gap-5 justify-center items-center ml-50'>
          <div className='bg-[#F0F9F4] p-10 rounded-full'>
            <FaRegHeart className='w-10 h-10 text-[#28A642]'/>
          </div>
          <h1 className="text-center text-gray-500  font-bold text-2xl">Your wishlist is empty.</h1>
          <p className='text-center'>You don't have any products in the wishlist yet. You will find a lot <br/>at interesting products on our shop page.</p>
          <button onClick={()=>{navigate("/homepage")}} className="bg-[#8A33FD] rounded px-5 py-2 text-white">Continue Shopping</button>
        </div>
        
      ) : (
        wishlistItems.map((item) => (
          <>
          <h1 className="font-bold text-lg">WishList</h1>
          <div
            key={item.id}
            className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr] items-center p-5 border-b border-b-gray-200"
          >
            <AiOutlineClose className="w-7 h-7 cursor-pointer" />
            <img
              src={item.image || ""}
              alt={item.name}
              className="border w-20 h-20 rounded"
            />
            <div>
              <h1 className="font-bold text-lg">{item.name}</h1>
              <h1 className="font-bold text-lg">
                Color: <span className="text-gray-400 font-normal">{item.color}</span>
              </h1>
              <h1 className="font-bold text-lg">
                Quantity: <span className="text-gray-400 font-normal">{item.quantity}</span>
              </h1>
            </div>
            <h1 className="text-gray-400 text-lg">{item.price}</h1>
            <button className="bg-[#8A33FD] rounded px-5 py-2 text-white">
              Add to Cart
            </button>
          </div>
          </>
        ))
      )}
    </div>
  );
};

export default Wishlist;
