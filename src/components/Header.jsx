import React from 'react'
import { assets } from '../constants';
import NavBar from './NavBar';

const Header = ({ title }) => {
  return (
    <div className='w-full dark:bg-slate-800 transition-all duration-[300ms] ease-in'>
        <NavBar />
        {/* Conditionally render this span depending on which route am on */}
        <span className='dark:text-gray-300 text-[#848484] text[16px] pl-12'>{"Dashboard"}</span>
        <div className='mt-6 pl-12' 
            style={{
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "#ECECEC",
                paddingBottom: "34px"
            }}
        >
            <div className='flex md:flex-row items-center justify-between mr-11 flex-wrap'>
                <h1 className='text-[50px] font-bold text-black dark:text-white'>{title}</h1>
                <button className='bg-[#0066FF] w-[165px] h-[47px] rounded-[12px] text-white'>
                    + Add Task
                </button>
            </div>
            <div className='md:flex-row flex justify-between items-center mt-6 flex-wrap'>
                <div className='flex justify-start flex-col md:flex-row md:items-center'>
                    <div className='flex items-center flex-wrap'>
                        <p className='mr-4 text-[#848484] dark:text-gray-300'>Teams:</p>
                        <div className='flex items-center mr-4'>
                            <img 
                                src={assets.Avatar} 
                                alt="members"
                                style={{
                                    width: 41,
                                    objectFit: "contain"
                                }}  
                                className=''
                            />
                            <img 
                                src={assets.Avatar} 
                                alt="members"
                                style={{
                                    width: 41,
                                    height: 41,
                                    objectFit: "contain"
                                }}  
                                className='ml-[-.6rem]'
                            />
                            <img 
                                src={assets.Avatar} 
                                alt="members"
                                style={{
                                    width: 41,
                                    height: 41,
                                    objectFit: "contain"
                                }}  
                                className='ml-[-.6rem]'
                            />
                            <p 
                                className='text-[#616161] text-[14px] w-6 h-6 p-5 border-[2px] border-white rounded-full bg-[#F1F1F1] flex items-center justify-center ml-[-.6rem]'
                                    // style={{
                                    //     objectFit: "contain"
                                    // }}
                                >+2</p>
                        </div>
                        <button>
                            <p className='flex items-center pl-7 text-[#0066FF] border-l-[#E4E4E4] border-l-[1px]'>
                                <img 
                                    src={assets.addIcon} 
                                    alt={"add"}
                                    style={{
                                        width: 8,
                                        height: 8,
                                        marginRight: 5
                                    }} 
                                />
                                Add
                            </p>
                        </button>
                    </div>
                    <div className='mt-4 md:mt-0 md:ml-8 dark:text-gray-300'>
                        Created on: <span className='font-semibold'>Sep 16, 2022</span>
                    </div>
            </div>
                <div className='mr-11 w-[165px]'>
                    <div className='w-full flex justify-between'>
                        <button 
                            className='text-[#848484] text-[16px] dark:text-gray-300 flex'>
                            <img 
                                src={assets.edit} 
                                alt="edit" 
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    marginRight: "5px"
                                }}
                                /> 
                                Edit
                            </button>
                        <button 
                            className='text-[#848484] text-[16px] dark:text-gray-300 flex'>
                            <img 
                                    src={assets.send} 
                                    alt="share" 
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: "5px"
                                    }}
                                /> 
                                Share
                            </button>
                    </div>
                </div>
            </div>
        </div>
        {/* <hr className='mt-[14px] text-[#ECECEC]' /> */}
    </div>
  )
}

export default Header;