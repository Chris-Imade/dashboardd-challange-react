import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom/dist';
import { assets } from '../constants';
import {workspace, firstTier} from "../constants"
import { useAppContext } from "../contexts/index";



const Aside = () => {
    const [indexItem, setIndexItem] = useState(0);
    const [toggle, setToggle] = useState(false);
    const { setColapseAside } = useAppContext();

  return (
    <>
        <div className={`aside overflow-hidden`}>
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
                <p 
                onClick={() => setColapseAside(true)}
                className='hover:cursor-pointer mr-8 font-bold bg-slate-600 rounded-full w-6 h-6 flex items-center justify-center'>c</p>
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
                        <NavLink to={`/${item.routePath}`}>
                            <span className='text-[#848484]'>{item.routeName}</span>
                        </NavLink>
                    </div>
            ))}

            <hr className='text-[#DBDBDB] mb-[30px]' />

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
                                    <div className='ml-[60px] overflow-hidden'>
                                    {/* Subdropdown */}
                                    {item.subWorkspaces?.map((item, index) => (
                                            <NavLink to={`workspace/workspace-item/${item.name.toLowerCase()}`} key={item.id} className='subdropdown' 
                                            style={{ 
                                                transition: "all",
                                                transitionDuration: "500ms"
                                            }}>
                                                {item.name}
                                            </NavLink>
                                    ))}
                                </div>
                                ) : null}
                                {item.subWorkspaces != [] && (indexItem == index && toggle) && (
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
                                )}
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
