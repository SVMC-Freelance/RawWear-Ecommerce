import React from 'react'

const newaddress = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-2xl'>My Info</h1>
            <h1 className='font-bold text-lg'>New Address</h1>
            <div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
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
                    <div className="grid grid-cols-2 col-span-2 gap-x-4">
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

                    </div>

                    {/* Row 5 */}
                    <div className="grid grid-cols-2 col-span-2 gap-x-4">
                        <div>
                            <label className="block mb-1 font-medium">Postal Code*</label>
                            <input type="text" placeholder="Postal Code" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Phone*</label>
                            <input type="text" placeholder="Phone" className="w-full  rounded px-4 py-2 bg-gray-100" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 col-span-2 gap-x-4">
                        <div>
                            <label className="block mb-1 font-medium">Delivary Instruction</label>
                            <input type="text" placeholder="delivary instruction" className="w-full h-40  rounded px-4 py-2 bg-gray-100" />
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4'>
                    <input type="checkbox" name="" id="" />
                    <label>Set as default shipping address</label>
                </div>
                <div className='flex gap-4'>
                    <input type="checkbox" name="" id="" />
                    <label>Set as default billing address</label>
                </div>
            </div>
            <div className='flex gap-4'>
                <button className='px-4 py-1 text-white bg-[#8A33FD] rounded'>Save</button>
                <button className='px-4 py-1 text-black rounded bg-gray-200'>Cancel</button>
            </div>
        </div>
    )
}

export default newaddress
