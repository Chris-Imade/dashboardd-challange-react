import React, { useState } from 'react';
import { assets } from '../constants';
import { useAppContext } from '../contexts';
import styles from "./NavBar.module.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const NavBar = () => {
    const { 
        colapseAside, 
        setColapseAside, 
        themeMode, 
        setMode,
        openSetting, 
        setOpenSettings,
    } = useAppContext();
    
    console.log(themeMode);

    const closeModal = (e) => {
        window.addEventListener("click", (e) => {
            e.target.classList.contains("modal-settings") && setOpenSettings((prev) => prev && !prev)
        })
    }

  return (
    <div className={`
        ${colapseAside && styles.navClose}
        w-full
        navbar-styles
        mb-4
        rounded-none
        transition-all duration-[300ms] ease-in
        no-scrollbar
        overflow-x-auto
        max-w-[100%]
    `}>
        {colapseAside && (
            // Conditionally add logo here too
            <ArrowCircleRightIcon
                onClick={() => setColapseAside(false)}
                className=' ml-8 hover:cursor-pointer mr-8 font-bold dark:text-white rounded-full w-6 h-6 flex items-center justify-center'
                style={{
                    width: 30,
                    height: 30
                }}
            />
        )}
        <div className={`relative`}>
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
            className={`mr-[24px] dark:bg-slate-700 bg-[#F6F6F6] dark:text-white rounded-[12px] max-w-[587px] lg:w-[587px] h-[47px] pl-[57px] ml-[30px] outline-none`}
        />
        </div>
        {/* Right Nav */}
        <div className={`flex items-center justify-center mr-[30px]`}>
        <button className='dark:bg-slate-700 w[45px] bg-[#F6F6F6] relative rounded-full flex justify-center items-center p-[10px] mr-[24px]'>
            <span className='absolute rounded-full animate-ping bg-[#FF4242] w-[10px] h-[10px] right-0 top-0'></span>
            <img 
            src={assets.notification} 
            alt="notification"
            style={{
                width: "24px"
            }} 
            className="animate-bounce"
            />
        </button>
        <button 
        onClick={() => setOpenSettings(true)}
        className='dark:bg-slate-700 rounded-[12px] bg-[#F6F6F6] h-[45px] w-[98px] flex items-center justify-between px-1 transition-all duration-150 ease-out'>
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
        {openSetting && (
            <div className={`modal-settings`} onClick={closeModal}>
                <div className={`${styles.openSettings} dark:bg-slate-800 h-full bg-white w-full md:w-[40rem] shadow-2xl fixed top-0 right-0`}>
                    <div className='flex justify-between pl-[30px] py-[36px] border-b-[1px] border-solid border-slate-400'>
                        <p className='dark:text-white font-semibold text-3xl'>Settings</p>
                        <div className='hover:cursor-pointer'>
                            <HighlightOffIcon 
                            onClick={() => setOpenSettings(false)}
                            className=' mr-[30px] dark:text-white'
                            style={{
                                width: 30,
                                height: 30
                            }}
                            />
                        </div>
                    </div>
                    <div className='pl-[30px] py-[36px] border-b-[1px] border-solid border-slate-400'>
                        <p className='font-semibold text-2xl mb-4 dark:text-white'>Theme Mode</p>
                        <div className=''>
                            <input 
                                type="radio" 
                                id='dark' 
                                value={"Dark"}
                                onChange={(e) => setMode(e.target.value)} 
                                checked={themeMode === "Dark" && true}
                            />
                            <label htmlFor="dark" className='ml-4 dark:text-white'>Dark</label>
                        </div>
                        <div className=''>
                            <input 
                                type="radio" 
                                id='light'
                                value={"Light"}
                                onChange={(e) => setMode(e.target.value)} 
                                checked={themeMode === "Light" && true}
                            />
                            <label htmlFor="light" className='ml-4 dark:text-white'>Light</label>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default NavBar