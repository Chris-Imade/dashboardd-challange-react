import React from 'react';
import { createContext } from 'react';

const initialState = {
    working: "Yeah it's working"
}

const AppContext = () => {

    const stateContext = createContext();

  return (
    <div>AppContext</div>
  )
}

export default AppContext