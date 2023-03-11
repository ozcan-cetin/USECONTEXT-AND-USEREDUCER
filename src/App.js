import React, { createContext, useContext, useReducer } from 'react';
import AuthContextProvider from './components/AuthContext';
import Counter from './components/Counter';
import Test from './components/Test';


function App() {
  return (
    <AuthContextProvider>
  <Counter/>
  <Test/>
    </AuthContextProvider>
  );
}

export default App;
