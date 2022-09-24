import React from 'react'
import { Outlet } from 'react-router-dom';
import { Aside } from './components';

const Root = () => {
  return (
    <>
        <div className='flex'>
            <div className='' style={{ flex: 0.2 }}>
                <Aside />
            </div> 
            <div className='' style={{ flex: 0.8}}>
                <Outlet />
            </div>  
        </div>
    </>
  )
}

export default Root;