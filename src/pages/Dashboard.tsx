import React from 'react'
import { Header } from '../components'
import { useAppContext } from '../contexts/AppContext'

const Dashboard = () => {
  const { initialState } = useAppContext();
  console.log(initialState);
  return (
    <div className='flex flex-col justify-start mt-[11rem] overflow-y-auto no-scrollbar h-[100vh]'>
      <Header title={"Dashboard"} />
      <div className='m-11'>
        
      </div>
    </div>
  )
}

export default Dashboard