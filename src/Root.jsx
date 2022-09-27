import React from 'react'
import { Outlet } from 'react-router-dom';
import { Aside } from './components';
// import { ContextProvider } from './contexts/navContext';

const Root = () => {
  return (
    <>
        <div className='flex'>
            <div className='' style={{ flex: 0.28 }}>
              {/* <ContextProvider /> */}
                <Aside />
            </div> 
            <div className='' style={{ flex: 0.72}}>
                <Outlet />
            </div>  
        </div>
    </>
  )
}

export default Root;