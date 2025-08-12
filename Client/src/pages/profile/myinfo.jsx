import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, removeAddress } from '../../store/address/addressSlice';
import { fetchAddress } from '../../store/address/addressThunk';


const myinfo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.address);
    console.log(data, status, error)

    useEffect(() => {
        dispatch(fetchAddress());
        console.log("useeffect Called");
    }, [dispatch]);

    if (status === 'loading') return <p className="text-center">Loading...</p>;
    if (status === 'failed') return <p className="text-center text-red-500">Failed to load cart.</p>;

    return (
        <div className='py-3 flex flex-col gap-5'>
           
            <div>
                <h1 className='font-bold text-2xl'>My Info</h1>
                <h1 className='font-bold text-lg'>Contact Details</h1>
                <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
                    <div>
                        <h1 className='text-gray-400'>Your Name</h1>
                        <h1 >Chandra Mouli</h1>
                    </div>
                    <button>Change</button>
                </div>
                <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
                    <div>
                        <h1 className='text-gray-400'>Email Address</h1>
                        <h1 >chandramouli2k2@gmail.com</h1>
                    </div>
                    <button>Change</button>
                </div>
                <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
                    <div>
                        <h1 className='text-gray-400'>Phone Number</h1>
                        <h1 >8954256921</h1>
                    </div>
                    <button>Change</button>
                </div>
                <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
                    <div>
                        <h1 className='text-gray-400'>Password</h1>
                        <h1 className='font-bold text-2xl'>........</h1>
                    </div>
                    <button>Change</button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold text-lg'>Address</h1>
                    <button onClick={() => { navigate("/homepage/profile/newaddress") }} className='text-gray-400 px-3 py-1 bg-gray-200 rounded hover:text-black'>Add New</button>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    {data.map((item, index) => (
                        <div key={index} className='bg-[#D9D9D9] rounded p-3 flex flex-col gap-3'>
                            <h1 className='font-bold text-lg'>{`${item.firstName}  ${item.lastName}`}</h1>
                            <h1 className='text-sm text-gray-400'>{item.phone}</h1>
                            <p className='text-gray-400'>{`${item.street}  ${item.city} ${item.state} ${item.postalCode}`}</p>
                            <div className='flex gap-4'>
                                <h1 className='border rounded px-2  w-fit  text-gray-400 border-gray-400'>{item.company}</h1>
                                <h1 className='border rounded px-2  w-fit  text-gray-400 border-gray-400'>{item.defaultBilling ? "Default Billing Address" : "Default Shipping Address"}</h1>
                            </div>
                            <div className='flex gap-4'>
                                <button className='font-bold' onClick={() => { dispatch(removeAddress()); console.log('removed') }}>Remove</button>
                                <button className='font-bold' onClick={() => {
                                    navigate("/homepage/profile/newaddress", { state: { address: item } });
                                }}>Edit</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default myinfo
