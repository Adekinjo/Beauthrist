import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() =>{
      setLatestProduct(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className='w-3/4 m-auto text-xs sm:textl'>
        Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Sit quod odit at quos saepe, commodi 
        asperiores illo quibusdam exercitationem esse?
        </p>
      </div>
      {/* Rending product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols5 gap-4 gap-y-6'>
        {
          latestProduct.map((item, index) =>(
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection