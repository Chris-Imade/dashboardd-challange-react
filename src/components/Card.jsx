import React from 'react'
import { assets } from '../constants'
import CardImg from "../assets/card.png";
import { useAppContext } from '../contexts';



const CardActionBtn = ({cardTitle, ...props }) => {
  return (<span style={{transition: 'all', transitionDuration: "600ms"}} {...props}>{cardTitle}</span>)
}

const Card = ({title, design, priority, comments, handles, image, imgCard, ratio, ratioPerc}) => {
  
  const { colapseAside } = useAppContext();

  return (
  <div className={`bg-white dark:text-white dark:bg-slate-800 rounded-[8px] p-4 ${colapseAside == false ? `max-w-[250px]` : `max-w-[250px] lg:max-w-[320px]`}`}>
      <div className={`flex justify-between items-center`}>
        <div className='flex no-scrollbar overflow-x-auto min-h-[40px]'>
          <CardActionBtn
            cardTitle={priority} 
            className={`no-scrollbar overflow-x-auto max-h-[40px] min-w-[112px] mr-4 cursor-pointer rounded-[11px] py-2 px-2 font-semibold transition-all ease-out hover:bg-[#DC7878] bg-[#FFE9E9] hover:text-[#FFE9E9] text-[#DC7878]`} 
          />
          <CardActionBtn 
            cardTitle={design}
            className={`no-scrollbar overflow-x-auto max-h-[40px] min-w-[90px] mr-4 cursor-pointer rounded-[11px] py-2 px-2 font-semibold transition-all ease-out hover:text-[#F1F1F1] text-[#848484] hover:bg-[#848484] bg-[#F1F1F1]`} 
          />
        </div>
        <div>
        <button className='hover:bg-[#F1F1F1] rounded-full p-1 dark:hover:bg-slate-300'>
          <img 
            src={assets.more} 
            alt="hamburger menu"
            width={"24px"}
            height={"24px"}
          />
        </button>
        </div>
      </div>
      <h1 className={`font-semibold text-xl mb-2 mt-4`}>{title}</h1>

      {imgCard && (
        <img
       src={imgCard} 
       alt="card display"
       className={`w-full cursor-pointer`} 
      />
      )}
      
      {/* Add persons */}
      <div className='my-4 flex'>
        <div className={`flex`}>
          <img 
            src={assets.womanAvatar} 
            alt="woman avatar"
            className={`w-[29.47px] cursor-pointer`} 
          />
          <img 
            src={assets.manAvatar} 
            alt="man avatar"
            className={`w-[29.47px] z-[1] ml-[-.4rem] cursor-pointer`}
          />
        </div>
        
        <button className={`flex ml-2 justify-center items-center`}>
          <img 
          src={assets.addIcon} 
          alt="add icon"
          className='w-[6px] h-[6px]'
          />
          <p className={`text-[#0066FF] font-semibold ml-1 text-[13px]`}>Add</p>
        </button>
      </div>

      {/* Progress */}
      {/* I need to sort a way to get the progress dynamically */}
      <div>
        <div className='flex items-center justify-between'>
          <h2 className={`text-[#848484]`}>Task Progress</h2>
          <p className={`text-[#848484]`}>{ratio}</p>
        </div>
        <div className={`max-w-[262px] h-[5px] bg-[#EDECEC] rounded-[13px] mt-1`}>
          <div className={`h-[5px] bg-[#0066FF] rounded-[13px] w-[${ratioPerc}]`}></div>
        </div>

        {/* Horizontal line */}

        <hr className='mt-4 mb-2 text-[#CDCDCD' />

        {/* card actions */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center justify-start'>
            <div className='flex justify-center items-center'>
              <img 
                src={assets.messages} 
                alt="messages"
                className='w-[20px] h-[20px]' 
              />
              <p className='text-[#848484]'>{comments}</p>
            </div>
            <div className='flex justify-center items-center ml-6'>
              <img 
                src={assets.link} 
                alt="link"
                className='w-[20px] h-[20px]' 
              />
              <p className='text-[#848484]'>{handles}</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img 
              src={assets.calendar} 
              alt="calender"
              className='w-[20px] h-[20px]'  
            />
            <p className='text-[#848484]'>Due: 2/Oct</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;