import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calendar, Message, Settings, Team, Workspace } from './components';
import { Dashboard } from './pages';
import ErrorPage from "./error-page";
import Root from './Root';
import { assets } from './constants';
// import {workspace} from "./constants"


const App = () => {
  return (
    <BrowserRouter>
        <div className='h-[97px] border-b-[1px] border-[#ECECEC] absolute right-0 top-0 w-[72%] bg-white flex justify-between items-center'>
          <div className='relative'>
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
              className={`bg-[#F6F6F6] w-[587px] rounded-[12px] h-[47px] pl-[57px] ml-[30px] outline-none`}
            />
          </div>
          {/* Right Nav */}
          <div className='flex items-center justify-center mr-[30px]'>
            <div></div>
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
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Dashboard />} />
          <Route path='messages' element={<Message />} />
          <Route path='team-members' element={<Team />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='settings' element={<Settings />} />
          <Route path='*' element={<ErrorPage />} />
          {/* workspace */}
          <Route path={`workspace/workspace-item/:pageId}`} element={<Workspace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
