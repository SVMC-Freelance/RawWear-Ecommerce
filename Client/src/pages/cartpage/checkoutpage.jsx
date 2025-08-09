import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cart/cartThunk';

const checkoutpage = () => {
    const navigate = useNavigate();
    const { items, subtotal, shippingTotal, status, coupon } = useSelector(state => state.cart);


    const dispatch = useDispatch();



    useEffect(() => {
        if (!items || items.length === 0) {
            dispatch(fetchCart());
        }
    }, [dispatch, items]);

    if (status === 'loading') return <p className="text-center">Loading...</p>;
    if (status === 'failed') return <p className="text-center text-red-500">Failed to load cart.</p>;

    return (
        <div className='px-20 py-7 flex flex-col gap-5'>
            <nav className=" text-gray-600 flex items-center space-x-2  " aria-label="Breadcrumb">
                <GoHomeFill />
                <button
                    onClick={() => navigate('/homepage')}
                    className=""
                >
                    Home
                </button>
                <span>/</span>
                <button
                    onClick={() => navigate('/homepage/cart')}
                    className=""
                >
                    Cart
                </button>
                <span>/</span>
                <span className="text-gray-800 font-medium">Checkout</span>
            </nav>
            <h1 className='border-l-4 border-[#8A33FD] font-bold text-2xl rounded px-3 py-2'>Check Out</h1>
            <div className='grid grid-cols-[2fr_1fr] gap-8  max-h-[500px]'>
                <div>
                    <h1 className='font-bold'>Billing Details</h1>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {/* Row 1 */}
                        <div>
                            <label className="block mb-1 font-medium">First Name*</label>
                            <input type="text" placeholder="First Name" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Last Name*</label>
                            <input type="text" placeholder="Last Name" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>

                        {/* Row 2 */}
                        <div>
                            <label className="block mb-1 font-medium">Country / Region*</label>
                            <input type="text" placeholder="Country / Region" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Company Name</label>
                            <input type="text" placeholder="Company (optional)" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>

                        {/* Row 3 */}
                        <div>
                            <label className="block mb-1 font-medium">Street Address*</label>
                            <input type="text" placeholder="House number and street name" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Apt, suite, unit</label>
                            <input type="text" placeholder="apartment, suite, unit, etc. (optional)" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>

                        {/* Row 4 */}
                        <div className="grid grid-cols-3 col-span-2 gap-x-4">
                            <div>
                                <label className="block mb-1 font-medium">City*</label>
                                <input type="text" placeholder="Town / City" className="w-full  rounded px-4 py-2 bg-gray-100" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">State*</label>
                                <select className="w-full  rounded px-4 py-2 bg-gray-100">
                                    <option>State</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Postal Code*</label>
                                <input type="text" placeholder="Postal Code" className="w-full  rounded px-4 py-2 bg-gray-100" />
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className="md:col-span-2">
                            <label className="block mb-1 font-medium">Phone*</label>
                            <input type="text" placeholder="Phone" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>
                    </form>
                    <button type='submit'
                        className=' bg-[#8A33FD] text-white font-bold px-4 py-2 rounded w-fit border-2 mt-3'
                    >
                        Continue to Delivery
                    </button>

                </div>
                <div className='border rounded shadow-lg shadow-gray-400 border-gray-400 max-h-[500px] flex flex-col'>
                    <h1 className='font-bold p-4 border-b border-gray-300 sticky top-0 bg-white z-10'>
                        Order Summary
                    </h1>
                    <div className='overflow-y-auto flex-1'>
                        {items.map((item, index) => (
                            <div key={index} className='grid grid-cols-[1fr_2fr_1fr] p-4 border-t border-t-gray-400 gap-2 items-center'>
                                <div className='h-15 border rounded'>
                                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                </div>
                                <div>
                                    <h1>{item.name} * {item.quantity}</h1>
                                    <h1 className='font-bold'>Color: <span>{item.color}</span></h1>
                                </div>
                                <h1>{item.price}</h1>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between p-4 gap-2 border-t border-gray-300 bg-white sticky bottom-0 z-10'>
                        <div className='font-bold text-2xl'>
                            <h1>Subtotal</h1>
                            <h1>Savings</h1>
                            <h1>Shipping</h1>
                            <h1>Total</h1>
                        </div>
                        <div className='text-end text-2xl'>
                            <h1>{subtotal}</h1>
                            <h1>{coupon}</h1>
                            <h1>{shippingTotal}</h1>
                            <h1>{subtotal + shippingTotal - coupon}</h1>
                        </div>
                    </div>

                </div>

            </div>
            <div className='flex gap-2'>
                <input type="checkbox" id='test' />
                <label htmlFor="test">save my information for the fastest checkout</label>
            </div>
            <div className='border-t-gray-300 border-t w-2/3 flex flex-col  gap-3 pt-3'>
                <h1 className='font-bold'>Shipping Address</h1>
                <h1 className='text-sm text-gray-400'>Select the address that matches your card or payment method</h1>
                <div className='bg-gray-100 p-5 flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <input type="radio" id="sameaddress" />
                        <label htmlFor="sameaddress">Same as Billing Address</label>
                    </div>
                    <div className='flex gap-4'>
                        <input type="radio" id="differentaddress" />
                        <label htmlFor="differentaddress">Use a Different Shipping Address</label>
                    </div>

                </div>
            </div>
            <div className='border-t-gray-300 border-t w-2/3 flex flex-col  gap-3 pt-3'>
                <h1 className='font-bold'>Shipping Method,june 7</h1>
                <div className='bg-gray-100 p-5 flex flex-col gap-4'>
                    <h1 className='font-bold'>Arrived by Monday, june 7</h1>
                    <div className='flex items-center justify-between border-t-gray-300 border-t pt-3'>
                        <div>
                            <h1>Delivery Changes</h1>
                            <h1>Additional fess may apply</h1>
                        </div>
                        <h1>{shippingTotal}</h1>
                    </div>

                </div>
            </div>
            <div className='border-t-gray-300 border-t w-2/3 flex flex-col  gap-3 pt-3'>
                <h1 className='font-bold'>Payment Method</h1>
                <h1 className='text-sm text-gray-400'>All transactions are secure and encrypted</h1>
                <div className='bg-gray-100 p-5 flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <input type="radio" id="creditcard" />
                            <label htmlFor="creditcard">Credit Card</label>
                        </div>
                        <form action="submit" className='grid grid-cols-2 gap-5 p-4'>
                            <input className="w-full border rounded px-4 py-2 bg-gray-100" type="text" placeholder='Card number' />
                            <input className="w-full border rounded px-4 py-2 bg-gray-100" type="text" placeholder='Name of the card' />
                            <input className="w-full border rounded px-4 py-2 bg-gray-100" type="text" placeholder='Expiration Date(MM/YY)' />
                            <input className="w-full border rounded px-4 py-2 bg-gray-100" type="text" placeholder='Security Code' />
                        </form>
                    </div>
                    <div className='flex gap-4 border-t-gray-300 border-t p-3'>
                        <input type="radio" id="cod" />
                        <label htmlFor="cod">Cash on Delivery</label>
                    </div>
                    <div className='flex gap-4 border-t-gray-300 border-t p-3'>
                        <input type="radio" id="paypal" />
                        <label htmlFor="paypal">Paypol</label>
                    </div>

                </div>
            </div>
            <button className=' bg-[#8A33FD] text-white font-bold px-4 py-2 rounded w-fit border-2'>Pay Now</button>
        </div>
    )
}

export default checkoutpage
