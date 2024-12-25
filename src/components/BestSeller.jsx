import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) =>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5));
    },[]);

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            At the heart of every beauty routine is the right product — one that
             delivers results, feels incredible, and fits seamlessly into your 
             lifestyle. Our Best Selling Products collection features the top-rated
              and most-loved items by our customers. These are the tried-and-tested
               products that have earned their spot as fan favorites for their 
               effectiveness, quality, and luxurious feel.

                Whether you’re new to the collection or
                 a long-time fan, our best sellers are 
                 sure to make you fall in love with your beauty routine all over again.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) =>(
                    <ProductItem key={index} id={item.id} name={item.name} 
                    image={item.image} price={item.price} />
                ))
            }
        </div>
    </div>
  );
}

export default BestSeller;