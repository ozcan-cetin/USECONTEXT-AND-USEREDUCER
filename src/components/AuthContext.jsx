import React, { createContext, useReducer} from "react";
import reducer from './reducer';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

function handleIncrement(count) {
    dispatch({ type: 'INCREMENT', payload:count });
  }
  
  function handleDecrement(count) {
    dispatch({ type: 'DECREMENT', payload:count });
  }

// const methods =  {

// }

  return (
    <AuthContext.Provider value={{ state, handleIncrement,  handleDecrement, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;