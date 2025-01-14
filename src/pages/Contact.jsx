import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import News from '../components/News'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img style={{width: '20rem', height: '300px'}} className='w-full md:max-w-[480px]' src={assets.contact} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              <p className='text-gray-600'>2333 dummy street <br /> kinjo suit alabama ,USA</p>
              <p className='text-gray-600'>Tel: (434) 5555-0132 <br />Email: beauthirstcosmetic@gmail.com</p>
              <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
              <p className='text-gray-600'>Learn more about our team and job openings</p>
              <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
      </div>
      <News />
    </div>
  )
}

export default Contact