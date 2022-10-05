import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom/dist';
import { assets } from '../constants';
import {workspace, firstTier} from "../constants"
import { useAppContext } from "../contexts/index";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';



const Aside = () => {
    const [indexItem, setIndexItem] = useState(0);
    const [toggle, setToggle] = useState(false);
    const { setColapseAside, setOpenSettings } = useAppContext();

  return (
    <>
        <div className={`aside transition-all duration-[300ms] ease-in`}>
            {/* logo section */}
            <div className='flex justify-between items-center overflow-hidden'>
                <Link to={"/"} className={`logo-section`}>
                    <img 
                        src={assets.logoOne}
                        alt="logoOne"
                        style={{
                            width: "27px",
                            height: "36px"
                        }}
                        className={``}
                    />
                    <img 
                        src={assets.logoOne} 
                        alt="logoOne"
                        style={{
                            width: "27px",
                            height: "36px"
                        }}
                        className={`ml-[-0.82rem] mt-[2rem]`}
                    />
                    <h4 className={`text-5xl ml-4 font-bold`}>Grind</h4>
                </Link>
                {/* Close icon */}
                <ArrowCircleLeftIcon
                        onClick={() => setColapseAside(true)} 
                        className=' ml-8 hover:cursor-pointer mr-8 font-bold dark:text-white rounded-full w-6 h-6 flex items-center justify-center'
                        style={{
                            width: 30,
                            height: 30
                        }}
                />
            </div>
            {firstTier.map((item) => (
                    <div className={`first-tier overflow-hidden`}
                    style={{ 
                        transition: "all",
                        transitionDuration: "500ms"
                    }}>
                        <img
                            src={item.routeIcon}
                            alt="route icon"
                            style={{
                                width: "24px",
                                marginRight: "17px"
                            }}
                        />
                        {item.routePath && (
                            <NavLink to={`/${item?.routePath}`}>
                                <span className='dark:text-white text-[#848484]'>{item.routeName}</span>
                            </NavLink>
                        )}
                        {item.routeName === "Settings" && (
                            <button 
                                className='dark:text-white text-[#848484]'
                                onClick={() => setOpenSettings(true)}    
                            >
                                {item.routeName}
                            </button>
                        )}
                    </div>
            ))}

            <hr className='mb-[30px]' />

            <div>
                {/* Second tier */}
                <button className='second-tier overflow-hidden' 
                    style={{ 
                        transition: "all",
                        transitionDuration: "500ms"
                    }}>
                    <h4>Workspace</h4>
                    <img 
                        src={assets.add} 
                        alt="add"
                        style={{
                            width: "24px"
                        }}
                    />
                </button>

                <div>
                    {workspace.map((item, index) => (
                        <div key={index}>
                            <button 
                            onClick={() => {
                                setIndexItem(index);
                                setToggle(!toggle);
                            }}
                            className={
                                `workspace-one overflow-hidden
                                ${index == indexItem ? `mb-[20px]` : `mb-[30px]`} 
                                workspace-three
                                dark:text-white
                            `}
                            style={{ 
                                transition: "all",
                                transitionDuration: "500ms"
                            }}>
                                <img 
                                    src={assets.arrowRight} 
                                    alt="right arrow"
                                    style={{
                                        width: "18px"
                                    }} 
                                />
                                <img 
                                    src={assets.box} 
                                    alt="right arrow"
                                    style={{
                                        width: "22px",
                                        marginLeft: "20px",
                                        marginRight: "16px"
                                    }} 
                                />
                                {item.name}
                            </button>
                            <div>
                                {item.subWorkspaces != [] && (indexItem == index && toggle) ? (
                                    <div className='ml-[60px] overflow-hidden mr-4'>
                                    {/* Subdropdown */}
                                    {item.subWorkspaces?.map((item, index) => (
                                            <NavLink 
                                                to={`${item.path}`} 
                                                key={item.id} 
                                                className={`subworkspace active-major`} 
                                                style={{ 
                                                    transition: "all",
                                                    transitionDuration: "500ms"
                                                }}>
                                                {item.name}
                                            </NavLink>
                                    ))}
                                </div>
                                ) : null}
                                {/* {item.subWorkspaces != [] && (indexItem == index && toggle) && (
                                    <div className='subworkspace overflow-hidden' 
                                        style={{ 
                                            transition: "all",
                                            transitionDuration: "500ms"
                                        }}>
                                    <img 
                                        src={assets.addIcon} 
                                        alt="add icon"
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            marginRight: "15px"
                                        }} 
                                    />
                                    <button>Add</button>
                                </div>
                                )} */}
                            </div>
                        </div>
                    ))}
                    
                    {/* Add btn on void: */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Aside;

// Add workspace on void:
