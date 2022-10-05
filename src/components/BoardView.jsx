import React from 'react';
import Card from './Card';
import { useAppContext } from '../contexts';
import { assets } from '../constants';


const AddBtn = () => {
  return (
    <div className='rounded-[8px] w-full h-[48px] bg-white mt-[13px] hover:cursor-pointer dark:bg-slate-800 flex justify-center items-center'>
      <img 
        src={assets.addHuge} 
        alt="add card" 
        style={{
          width: 24,
          height: 24
        }}
      />
      <p className='text-[#0066FF]'>Add Card</p>
    </div>
  )
}

const InProgress = ({ status, count, color }) => {
  return (
    <div className='rounded-[8px] w-full h-[48px] bg-white mb-[13px] hover:cursor-pointer dark:bg-slate-800 flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div className={`bg-[${color}] mr-2 w-[9px] h-[9px] rounded-full`}></div>
        <p className='dark:text-white font-semibold'>{status}</p>
      </div>
      <span className='dark:text-white dark:bg-slate-500 flex justify-center items-center bg-[#F1F1F1] w-[32px] h-[32px] rounded-[5px] text-3xl'>{count}</span>
      <button className='hover:bg-[#F1F1F1] dark:hover:bg-slate-300 rounded-full p-1'>
          <img 
            src={assets.more} 
            alt="hamburger menu"
            width={"24px"}
            height={"24px"}
          />
        </button>
    </div>
  )
}

const BoardView = () => {
  const { colapseAside } = useAppContext();
  return (
    <div className='flex flex-wrap ml-[30px] items-center justify-start'>
          <div className={`${colapseAside == false ? `mr-3` : `mr-8`} bg-[#F6F6F6] p-[16px] w-fit rounded-[12px] mt-[30px] overflow-y-auto no-scrollbar h-[530px] lg:mb-[12rem] dark:bg-slate-500`}>
            <InProgress status={"To Do"} count={3} color={`#FCC400`} />
            <Card 
              title={"Statics & Swap Screen"}
              design={"UI Design"}
              priority={"High Priority"}
              comments={23}
              handles={4}
              ratio={"9/10"}
              ratioPerc={"90%"}
            />
            
            <AddBtn />
          </div>

          <div className={`${colapseAside == false ? `mr-3` : `mr-8`} bg-[#F6F6F6] p-[16px] w-fit rounded-[12px] mt-[30px] overflow-y-auto no-scrollbar h-[530px] lg:mb-[12rem] dark:bg-slate-500`}>
            <InProgress status="In Progress" count={1} color={`#0066FF`} />
            <Card 
              title={"Statics & Swap Screen"}
              design={"UI Design"}
              priority={"High Priority"}
              comments={23}
              handles={4}
              imgCard={assets.imageCard}
              ratio={"7/10"}
              ratioPerc={"70%"}
            />
            
            <AddBtn />
          </div>


          <div className={`${colapseAside == false ? `mr-3` : `mr-8`} bg-[#F6F6F6] p-[16px] w-fit rounded-[12px] mt-[30px] overflow-y-auto no-scrollbar h-[530px] lg:mb-[12rem] mb-[5rem] dark:bg-slate-500`}>
            <InProgress status={"Review"} count={2} color={`#FF006B`} />
            <Card 
              title={"Statics & Swap Screen"}
              design={"UI Design"}
              priority={"High Priority"}
              comments={23}
              handles={4}
              ratio={"6/10"}
              ratioPerc={"60%"}
            />
            
            <AddBtn />
          </div>
    </div>
  )
}

export default BoardView;