import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex  flex-col sm:flex-row border border-gray-400'>
        {/* Hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='items-center text-[#414141] ml-10'>
                <div className='flex items-center gap-2 '>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl landing-relative'>LASTEST ARRIVAL</h1>
                <div className='flex items-center gap2'>
                    <p className='font-semibold text'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Hero left side */}
        <img className='w-full h-25 sm:w-1/2' src={assets.faceoil} alt="" />
    </div>
  )
}

export default Hero