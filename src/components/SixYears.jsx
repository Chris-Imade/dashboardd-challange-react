import React from 'react'
import BoardView from './BoardView'
import Header from './Header'

const SixYears = () => {
  return (
    <div className='bg-white overflow-y-auto no-scrollbar h-[100vh] mb-[12rem] dark:bg-slate-800'>
      <Header title={"Six Year's Goals"} />
      <BoardView />
    </div>
  )
}

export default SixYears