import React from 'react';
import { assets } from '../constants';
import { useAppContext } from '../contexts';
import styles from "./NavBar.module.css";

const NavBar = () => {
    const { colapseAside, setColapseAside } = useAppContext();
  return (
    <div className={`
        ${colapseAside && styles.navClose} 
        ${colapseAside != false && `w-[100%]`}
        navbar-styles
    `}>
        {colapseAside && (
            <span
            onClick={() => setColapseAside(false)} 
            className=' cursor-pointer w-8 h-8 bg-slate-400 rounded-full flex justify-center mx-8'>o</span>
        )}
        <div className={`relative ${colapseAside && `ml-[-28rem]`}`}>
        <img 
            src={assets.search} 
            alt="search"
            style={{
            width: "20px",
            position: "absolute",
            left: 50,
            top: 10
            }} 
        />
        <input 
            type="search" 
            placeholder='Search' 
            name='search' 
            className={`bg-[#F6F6F6] max-w-[587px] lg:w-[587px] rounded-[12px] h-[47px] pl-[57px] ml-[30px] outline-none`}
        />
        </div>
        {/* Right Nav */}
        <div className={`flex items-center justify-center mr-[30px]`}>
        <button className='w[45px] bg-[#F6F6F6] relative rounded-full flex justify-center items-center p-[10px] mr-[24px]'>
            <span className='absolute rounded-full bg-[#FF4242] w-[10px] h-[10px] right-0 top-0'></span>
            <img 
            src={assets.notification} 
            alt="notification"
            style={{
                width: "24px"
            }} 
            />
        </button>
        <button className='rounded-[12px] bg-[#F6F6F6] h-[45px] w-[98px] flex items-center justify-between px-1'>
            <img 
                src={assets.arrowDown} 
                alt="arrow down"
                style={{
                width: "24px"
                }} 
            />
            <img 
                src={assets.Avatar} 
                alt="avatar"
                style={{
                width: 41
                }} 
            />
        </button>
        </div>
    </div>
  )
}

export default NavBar