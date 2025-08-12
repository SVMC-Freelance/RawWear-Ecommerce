import React, { useState,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, removeAddress } from '../../store/address/addressSlice';
import { fetchAddress } from '../../store/address/addressThunk';

const newaddress = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const editData = location.state?.address || null;

    useEffect(() => {
        if (editData) {
            setFormData(editData);
            setEditId(editData.id);
        }
    }, [editData]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        company: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
        deliveryInstruction: '',
        defaultShipping: false,
        defaultBilling: false
    });

    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, 'formdata');
        if (editId) {
            // Editing existing address
            dispatch(editAddress({ id: editId, updatedData: formData }));
            setEditId(null);
        } else {
            // Adding new address
            dispatch(addAddress(formData));
            // dispatch(saveAddress(formData)); // optional API save
        }

        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            country: '',
            company: '',
            street: '',
            apt: '',
            city: '',
            state: '',
            postalCode: '',
            phone: '',
            deliveryInstruction: '',
            defaultShipping: false,
            defaultBilling: false
        });
    };

    const handleEdit = (address) => {
        setFormData(address);
        setEditId(address.id);
    };

    const handleDelete = (id) => {
        dispatch(removeAddress(id));
        if (editId === id) {
            setFormData({
                firstName: '',
                lastName: '',
                country: '',
                company: '',
                street: '',
                apt: '',
                city: '',
                state: '',
                postalCode: '',
                phone: '',
                deliveryInstruction: '',
                defaultShipping: false,
                defaultBilling: false
            });
            setEditId(null);
        }
    };


    return (
        <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-2xl'>My Info</h1>
            <h1 className='font-bold text-lg'>{editId ? 'Edit Address' : 'New Address'}</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                {/* Row 1 */}
                <div>
                    <label className="block mb-1 font-medium">First Name*</label>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded px-4 py-2 bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Last Name*</label>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded px-4 py-2 bg-gray-100"
                    />
                </div>

                {/* Row 2 */}
                <div>
                    <label className="block mb-1 font-medium">Country / Region*</label>
                    <input
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        type="text"
                        placeholder="Country / Region"
                        className="w-full rounded px-4 py-2 bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Company Name</label>
                    <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        type="text"
                        placeholder="Company (optional)"
                        className="w-full rounded px-4 py-2 bg-gray-100"
                    />
                </div>

                {/* Row 3 */}
                <div>
                    <label className="block mb-1 font-medium">Street Address*</label>
                    <input
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        type="text"
                        placeholder="House number and street name"
                        className="w-full rounded px-4 py-2 bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Apt, suite, unit</label>
                    <input
                        name="apt"
                        value={formData.apt}
                        onChange={handleChange}
                        type="text"
                        placeholder="apartment, suite, unit, etc. (optional)"
                        className="w-full rounded px-4 py-2 bg-gray-100"
                    />
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-2 col-span-2 gap-x-4">
                    <div>
                        <label className="block mb-1 font-medium">City*</label>
                        <input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            type="text"
                            placeholder="Town / City"
                            className="w-full rounded px-4 py-2 bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">State*</label>
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full rounded px-4 py-2 bg-gray-100"
                        >
                            <option value="">Select state</option>
                            <option value="kerala">Kerala</option>
                            <option value="tamilnadu">Tamil Nadu</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="andhra">Andhra</option>
                        </select>
                    </div>

                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-2 col-span-2 gap-x-4">
                    <div>
                        <label className="block mb-1 font-medium">Postal Code*</label>
                        <input
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            type="text"
                            placeholder="Postal Code"
                            className="w-full rounded px-4 py-2 bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Phone*</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="text"
                            placeholder="Phone"
                            className="w-full rounded px-4 py-2 bg-gray-100"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 col-span-2 gap-x-4">
                    <div>
                        <label className="block mb-1 font-medium">Delivery Instruction</label>
                        <textarea
                            name="deliveryInstruction"
                            value={formData.deliveryInstruction}
                            onChange={handleChange}
                            placeholder="Delivery instruction"
                            className="w-full h-40 rounded px-4 py-2 bg-gray-100"
                        />
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="defaultShipping"
                            checked={formData.defaultShipping}
                            onChange={handleChange}
                        />
                        Default Shipping Address
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="defaultBilling"
                            checked={formData.defaultBilling}
                            onChange={handleChange}
                        />
                        Default Billing Address
                    </label>
                </div>
                <div className='flex gap-4'>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className='px-4 py-1 text-white bg-[#8A33FD] rounded'
                    >
                        {status === 'loading' ? 'Saving...' : editId ? 'Update' : 'Save'}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setFormData({
                                firstName: '',
                                lastName: '',
                                country: '',
                                company: '',
                                street: '',
                                apt: '',
                                city: '',
                                state: '',
                                postalCode: '',
                                phone: '',
                                deliveryInstruction: '',
                                defaultShipping: false,
                                defaultBilling: false
                            });
                            setEditId(null);
                        }}
                        className='px-4 py-1 text-black rounded bg-gray-200'
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default newaddress
