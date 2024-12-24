import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import emailjs from '@emailjs/browser';  
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, cartItem, products, currency } = useContext(ShopContext);

  // Local state for the form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phoneNumber: '',
  });

  // Local state for the cart data (products in the cart)
  const [cartData, setCartData] = useState([]);

  // Extract cart items with product details
  useEffect(() => {
    const tempData = [];
    for (const productId in cartItem) {
      const product = products.find(p => p.id === productId);
      if (product) {
        for (const size in cartItem[productId]) {
          const quantity = cartItem[productId][size];
          if (quantity > 0) {
            // Add the product details with the size and quantity
            tempData.push({
              id: productId,
              name: product.name,
              size: size,
              quantity: quantity,
              price: product.price,
              total: product.price * quantity,
            });
          }
        }
      }
    }
    setCartData(tempData); // Set the cart data state
  }, [cartItem, products]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Method to get the product details
  const getProductDetails = (cartData) => {
    return cartData.map(item => ({
      name: item.name,
      size: item.size,
      quantity: item.quantity,
      price: item.price,
      total: item.total,
    }));
  };

  
  const sendOrderEmail = () => {
    const productDetails = {};
    cartData.forEach((item, index) => {
      productDetails[`product${index + 1}_name`] = item.name;
      productDetails[`product${index + 1}_size`] = item.size;
      productDetails[`product${index + 1}_quantity`] = item.quantity;
      productDetails[`product${index + 1}_price`] = item.price;
      productDetails[`product${index + 1}_total`] = item.total;
    });
  
    const totalAmount = cartData.reduce((acc, item) => acc + item.total, 0);
  
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipcode: formData.zipcode,
      country: formData.country,
      paymentMethod: method,
      totalPrice: totalAmount,
      currency: currency,
      reply_to: formData.email,
      ...productDetails, 
    };
  
    console.log("Template Params being sent to EmailJS:", templateParams);  
  
    emailjs
      .send(
        'service_uca084n', 
        'template_iat1469', 
        templateParams,  
        'ug_NtN2iawtdSlpL0'  
      )
      .then(
        (response) => {
          console.log('Order email sent successfully!', response.status, response.text);
          alert('Order placed successfully!');
          navigate('/orders');
        },
        (err) => {
          console.error('Error sending email:', err);
          alert('There was an error sending your order email. Please try again.');
        }
      );
  };
  
      
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ...........LEFT SIDE....... */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
      </div>

      {/* .......RIGHT SIDE........ */}
      <div className="mt-8 min-w-80">
        <CartTotal />
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* .........PAYMENT METHOD SELECTION....... */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod('paypal')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.paypal} alt="" />
            </div>
            <div
              onClick={() => setMethod('visa')}
              className="flex item-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visa' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.visa} alt="" />
            </div>
            <div
              onClick={() => setMethod('cod')}
              className="flex item-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={sendOrderEmail} className="bg-black text-white px-16 py-3 text-sm">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;








// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { useContext, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'

// const PlaceOrder = () => {

//   const [method, seMethod] = useState('cod');
//   const {navigate} = useContext(ShopContext);

//   return (
//     <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* ...........LEFT SIDE....... */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//           <div className='text-xl sm:text-2xl my-3'>
//               <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//           </div>
//           <div className='flex gap-3'>
//               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
//               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
//           </div>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
//           <div className='flex gap-3'>
//               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
//               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
//           </div>
//           <div className='flex gap-3'>
//               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
//               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
//           </div>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
//       </div>
//       {/* .......RIGHT SIDE........ */}
//       <div className='mt-8 min-w-80'>
//           <CartTotal />

//           <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           {/* .........PAYMENT METHOD SELECTION....... */}
//           <div className='flex gap-3 flex-col lg:flex-row'>
//               <div onClick={() =>seMethod('paypal')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                   <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal'? 'bg-green-400' : ''}`}></p>
//                   <img className='h-5 mx-4' src={assets.paypal} alt="" />
//               </div>
//               <div onClick={() =>seMethod('visa')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
//                   <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visa'? 'bg-green-400' : ''}`}></p>
//                   <img className='h-5 mx-4' src={assets.visa} alt="" />
//               </div>
//               <div onClick={() =>seMethod('cod')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
//                   <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod'? 'bg-green-400' : ''}`}></p>
//                   <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//               </div>
//           </div>
//           <div className='w-full text-end mt-8'>
//               <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
//           </div>
//       </div>
//       </div>
      
//     </div>
//   )
// }

// export default PlaceOrder




