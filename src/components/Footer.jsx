import React from 'react'
import  {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <hr />
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]
         gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" 
                className='mb-5 w-25' style={{width: "100px"}} />
                <p>
                Beauty Tips & Tricks: Receive expert beauty tips,
                 product recommendations, and how-to guides
                  tailored to your skincare and makeup needs.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-234-567-890</li>
                    <li>beauthirstcosmetic@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear() } @beauthristcosmetric.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer