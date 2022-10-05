import React from 'react'

const FourYears = () => {
  return (
    <div className='bg-white overflow-y-auto no-scrollbar h-[100vh] mb-[12rem] dark:bg-slate-800'>
      <Header title={"Four Year's Goals"} />
      <BoardView />
    </div>
  )
}

export default FourYears