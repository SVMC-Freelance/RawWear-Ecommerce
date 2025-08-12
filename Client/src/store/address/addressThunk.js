import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAddress = createAsyncThunk(
  'address/fetchAddress',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return [
        {id:'1',firstName: 'Chandra Mouli',lastName: 'M',country: 'India',company: 'Home',street: 'Pillaiyar Koil',apt: 'abcd',city: 'Tiruvannamalai',state: 'TamilNadu',postalCode: '606803',phone: '8838418224',deliveryInstruction: 'Near borewell',defaultShipping: false,defaultBilling: true},

        {id:'2',firstName: 'Vivek',lastName: 'M',country: 'India',company: 'Office',street: 'Eash Street',apt: 'Presitige',city: 'Chennai',state: 'TamilNadu',postalCode: '600001',phone: '9635874526',deliveryInstruction: 'Near A2B',defaultShipping: true,defaultBilling: false},
    ]
  }
);