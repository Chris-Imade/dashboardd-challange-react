import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Calendar, 
  Message, 
  Team,
  ClientProjects, 
  ResearchProject, 
  PublicOffers, 
  Portfolio,
  Crypto,
  Game,
  TwoYears,
  FourYears,
  SixYears
} from './components';
import { Dashboard } from './pages';
import ErrorPage from "./error-page";
import Root from './Root';
import { AppState } from './contexts';



const App = () => {

  return (
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route index element={<Dashboard />} />
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path='messages' element={<Message />} />
            <Route path='team-members' element={<Team />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='*' element={<ErrorPage />} />
            {/* workspace */}
            <Route path='workspace/client-projects' element={<ClientProjects />} />
            <Route path='workspace/client-projects/research-project' element={<ResearchProject />} />
            <Route path='workspace/client-projects/public-offers' element={<PublicOffers />} />
            {/* Daily todos */}
            <Route path='workspace/daily-todos/portfolio-website' element={<Portfolio />} />
            <Route path='workspace/daily-todos/crypto-mobile-app' element={<Crypto />} />
            <Route path='workspace/daily-todos/game-design' element={<Game />} />
            {/* Yearly Goals */}
            <Route path='workspace/yearly-goals/two-years-goals' element={<TwoYears />} />
            <Route path='workspace/yearly-goals/four-years-goals' element={<FourYears />} />
            <Route path='workspace/yearly-goals/six-years-goals' element={<SixYears />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState>
  )
}

export default App;