import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { assets } from '../constants'



    let firstTier = [
        {
            id: 1,
            routeName: "Dashboard",
            routePath: "",
            routeIcon: assets.dashboardIcon
        },
        {
            id: 2,
            routeName: "Messages",
            routePath: "messages",
            routeIcon: assets.messageTabIcon
        },
        {
            id: 3,
            routeName: "Team Members",
            routePath: "team-members",
            routeIcon: assets.teamMembers
        },
        {
            id: 4,
            routeName: "Calender",
            routePath: "calendar",
            routeIcon: assets.calendarTabIcon
        },
        {
            id: 5,
            routeName: "Settings",
            routePath: "settings",
            routeIcon: assets.settingIcon
        }
    ];





const Aside = () => {
  return (
    <>
        <div className={`bg-[#F6F6F6] h-[100vh]`}>
            {/* logo section */}
            <div>
                <Link to={"/"} className={`relative flex p-[30px] items-center justify-center`}>
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
                        className={`ml-[-.57rem] mt-[2rem]`}
                    />
                    <h4 className={`text-5xl ml-4 font-bold`}>Grind</h4>
                </Link>
            </div>
            {firstTier.map((item) => (
                    <div className={`flex justify-start items-center mx-[30px] mb-[30px]`}>
                        <img
                            src={item.routeIcon}
                            alt="route icon"
                            style={{
                                width: "24px",
                                marginRight: "17px"
                            }}
                        />
                        <Link to={`/${item.routePath}`}>
                            <span className='text-[#848484]'>{item.routeName}</span>
                        </Link>
                    </div>
            ))}
        </div>
    </>
  )
}

export default Aside;