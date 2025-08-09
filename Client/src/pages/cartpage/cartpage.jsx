import React, { useState, useEffect } from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  increaseQuantity, decreaseQuantity, removeItem ,addcoupon} from '../../store/cart/cartSlice';
import {fetchCart} from '../../store/cart/cartThunk';
import { GoHomeFill } from "react-icons/go";

const cartpage = () => {
    const dispatch = useDispatch();
     const { items, subtotal, shippingTotal, status,coupon } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
     const [ coupons, setCoupon] = useState("");
     const [error, setError] = useState("");
 

    const calculateSubtotal = (item) => {
        return item.price * item.quantity;
    };

    const applycoupon = (coupons) => {
         if (/^\d{6}$/.test(coupons)) {
            setError(""); // Clear error
            console.log("Coupon applied:", coupons);
           const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
            console.log(randomTwoDigitNumber)
            dispatch(addcoupon(randomTwoDigitNumber));
            console.log(coupon)
            setIsOpen(true);
    } else {
      setError("Please enter a valid 6-digit number");
    }
       
    }

    if (status === 'loading') return <p className="text-center">Loading...</p>;
    if (status === 'failed') return <p className="text-center text-red-500">Failed to load cart.</p>;

    return (
        < >
            <nav className=" text-gray-600 flex items-center space-x-2  px-15 py-3 " aria-label="Breadcrumb">
                <GoHomeFill />
                <button
                    onClick={() => navigate('/homepage')}
                    className=""
                >
                    Home
                </button>
                <span>/</span>
                <span className="text-gray-800 font-medium">Cart</span>
            </nav>

 

            <div className="">
                <table className="min-w-full text-sm  border-gray-200">
                    <thead className="bg-[#3C4242]  text-white ">
                        <tr className=''>
                            <th className="px-4 py-4 border-b">Product Details</th>
                            <th className="px-4 py-4 border-b">Price</th>
                            <th className="px-4 py-4 border-b">Quantity</th>
                            <th className="px-4 py-4 border-b">Shipping</th>
                            <th className="px-4 py-4 border-b">Subtotal</th>
                            <th className="px-4 py-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b border-gray-200 hover:bg-gray-50 "
                            >
                                <td className="py-3 px-20 w-1/3">
                                    <div className="flex gap-3 items-center">
                                        <div className="border w-20 h-20 rounded flex-shrink-0 overflow-hidden">
                                            <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                        </div>
                                        <div className="text-left truncate">
                                            <h1 className="font-bold text-lg truncate">{item.name}</h1>
                                            <h2 className="text-gray-400 text-sm">Color: {item.color}</h2>
                                            <h2 className="text-gray-400 text-sm">Size: {item.size}</h2>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-center">₹{item.price}</td>
                                <td className="px-6 py-3">
                                    <div className="flex items-center justify-center space-x-2 ">
                                        <div className='bg-[#F6F6F6] flex gap-1 items-center rounded'>
                                            <button
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                                className="px-2 py-1 bg-[#F6F6F6] text-gray-800 rounded hover:bg-gray-400"
                                            >
                                                −
                                            </button>
                                            <span className="w-6 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                                className="px-2 py-1 bg-[#F6F6F6]  text-gray-800 rounded hover:bg-gray-400"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-center">₹{item.shipping}</td>
                                <td className="px-6 py-3 font-semibold text-center">
                                    ₹{calculateSubtotal(item)}
                                </td>
                                <td className="px-6 py-3 text-center">
                                    <button
                                        onClick={() => dispatch(removeItem(item.id))}
                                        className="text-[#8A33FD] hover:text-red-700"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {items.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    No items in cart
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <div className='flex justify-between px-50 py-10 bg-[#F5F5F5]'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h1 className='font-bold text-2xl'>Discount Codes</h1>
                        <h1 className='text-sm text-gray-400'>Enter your coupon code if you have one</h1>
                    </div>
                    <div>
                        <input className='border rounded border-l border-gray-400 py-1' type="text" placeholder='enter 6 digit number' value={coupons}
                         onChange={(e) => setCoupon(e.target.value)}/>
                        <button onClick={() => applycoupon(coupons)} className=' bg-[#8A33FD] text-white font-bold px-4 py-1 rounded'>Apply Coupon</button>
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button onClick={()=>{navigate("/homepage")}} className=' text-gray-600 border px-4 py-1 rounded w-fit'>Continue shopping</button>
                </div>
                <div className='flex flex-col  items-center gap-3 '>
                    <div className='border-b border-gray-400 px-10 grid grid-cols-2 gap-x-20 gap-y-2 pb-3'>
                        <>
                            <h1 >Sub Total </h1>
                            <h1> {subtotal}</h1>
                            <h1 >Shipping </h1>
                        </>
                        <>
                            <h1>{shippingTotal}</h1>
                            <h1 className='font-bold' >Grand Total </h1>
                            <h1 className='font-bold'>{subtotal+shippingTotal} </h1>
                        </>
                    </div>
                    <button onClick={() => navigate('/homepage/cart/checkout')} className=' bg-[#8A33FD] text-white font-bold px-4 py-2 rounded w-fit border-2'>proceed To Checkout</button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">

                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            &times;
                        </button>

                        {/* Dialog Content */}
                        <h2 className="text-xl font-semibold mb-4">Congratulations!...</h2>
                        <p className="mb-4 text-gray-700">You Saved ₹{coupon} on Your Order.</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default cartpage;