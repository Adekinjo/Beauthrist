import React, {useContext, useState} from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex item-center justify-between py-5 font-medium bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 transition-all duration-500 ease-in-out'>
        <Link to='/' ><img style={{width: "100px", marginLeft: "3px"}}
        src={assets.logo} className='w-20' alt=""/></Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 justify-between mt-10'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
        </ul>
        <div className='flex items-center pb-11 gap-6 mr-2 mt-10'>
            <img onClick={() => setShowSearch(true)} src={assets.search} className='w-7  cursor-pointer' alt="" />
            <div className='group relative'>
                <Link to={'/login'}><img className='w-7 cursor-pointer' src={assets.profile} alt="" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
                        <p className='cursor-pointer hover:text-black'>My profile</p >
                        <p className='cursor-pointer hover:text-black'>Oders</p >
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[10px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* Sidebar menu for smaller screen */}
        <div className={`absolute top-0 right-0 buttom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                    <img className='h-4 rotate-90 cursor-pointer' src={assets.dropdown} alt="" />
                    <p className='cursor-pointer'>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='py-2 border' to='/'>HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar