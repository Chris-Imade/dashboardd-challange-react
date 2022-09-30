import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calendar, Message, NavBar, Settings, Team, Workspace } from './components';
import { Dashboard } from './pages';
import ErrorPage from "./error-page";
import Root from './Root';
import { assets } from './constants';
import { AppState } from './contexts';



const App = () => {

  return (
    <AppState>
      <BrowserRouter>
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
    </AppState>
  )
}

export default App;
