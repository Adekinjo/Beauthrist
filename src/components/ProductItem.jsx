import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img style={{width: "200px", height: "200px"}} 
             className=' object-cover transition transform duration-500
              ease-in-out hover:scale-110 hover:opacity-80
               rounded-lg shadow-lg ' src={image[0]} alt="" /> 
        </div>
        <p className='pt-3 pb-3 text-sm'>{name}</p>
        <p className='text-sm foot-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem