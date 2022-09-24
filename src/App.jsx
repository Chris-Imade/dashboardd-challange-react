import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calendar, Message, Settings, Team } from './components';
import { Dashboard } from './pages';
import ErrorPage from "./error-page";
import Root from './Root';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Dashboard />} />
          <Route path='messages' element={<Message />} />
          <Route path='team-members' element={<Team />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='settings' element={<Settings />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
