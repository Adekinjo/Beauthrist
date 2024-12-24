import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import News from '../components/News'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'> 
            < Title text1={'ABOUT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img style={{width: '200px', height: '20rem'}} className='w-10 md:max-w-[450px]' src={assets.facedrop} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Who We Are <br />
                We’re passionate about skincare and committed to offering
                 premium-quality body lotions that suit every skin type. 
                Each product in our store is chosen with care, 
                ensuring it meets the highest standards of quality 
                and effectiveness. Whether you’re looking for deep 
                hydration or a touch of indulgence, we have
                 something just for you.</p>
                <p>Nourish. Glow. Repeat. <br />
                At Beauthrist Cosmetics, skincare isn’t just 
                a routine—it’s a ritual of self-love. Our body 
                lotions are crafted to enhance your skin’s
                 natural beauty with nourishing ingredients and soothing formulas.
                 Shop with us to discover the secret to radiant, healthy skin.</p>
                 <b className='text-gray-800'>Our Mission</b>
                 <p>At Beauthrist Custometics, our mission is to empower
                   individuals to embrace their natural beauty through
                    high-quality skincare. We are dedicated to providing 
                    body lotions that not only nourish and protect but
                     also bring comfort and confidence to your daily
                      routine. <br />We believe in the power of nature
                 and science, combining the finest ingredients with 
                 innovative formulas to ensure your skin feels soft, 
                 hydrated, and radiant. Our goal is to create products
                 that cater to all skin types, making luxurious skincare 
                 accessible to everyone. <br />Through commitment to 
                 quality, sustainability, and customer satisfaction, 
                 we strive to be more than just a skincare brand—we 
                 aim to be a trusted partner in your self-care journey.
                  Your skin deserves the best, and we’re here to deliver it.</p>
            </div>
        </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='boder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Premium Ingredient</b>
                <p> Our body lotions are crafted using the finest 
                  natural and scientifically proven ingredients to 
                  keep your skin nourished, healthy, and glowing.
                </p>
            </div>
            <div className='boder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Commitment to Quality</b>
                <p> We maintain strict quality standards,
                   ensuring that every product you use is safe,
                   effective, and dermatologically tested.
                </p>
            </div>
            
             <div className='boder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Affordable Luxury</b>
                <p>  We believe everyone deserves
                   access to premium
                   skincare without breaking the bank.
                </p>
            </div>
        </div>
        <News />
    </div>
  )
}

export default About