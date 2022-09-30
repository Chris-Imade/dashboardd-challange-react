import React from 'react'
import { Header } from '../components'
import { useAppContext } from '../contexts/AppContext'

const Dashboard = () => {
  const { initialState } = useAppContext();
  return (
    <div className='flex flex-col justify-start  overflow-y-auto no-scrollbar h-[100vh] dark:bg-slate-800'>
      <Header title={"Dashboard"} />
      <div className='m-11'>
        
      </div>
    </div>
  )
}

export default Dashboard