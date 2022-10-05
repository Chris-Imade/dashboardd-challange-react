import React from 'react'
import BoardView from './BoardView'
import Header from './Header'

const Crypto = () => {
  return (
    <div className='bg-white overflow-y-auto no-scrollbar h-[100vh] mb-[12rem] dark:bg-slate-800'>
      <Header title={"Crypto Mobile App"} />
      <BoardView />
    </div>
  )
}

export default Crypto