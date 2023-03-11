import React, { useContext, useReducer } from 'react'
import { AuthContext } from './AuthContext';

const Counter = () => {
    const { state, handleDecrement, handleIncrement } = useContext(AuthContext);

      return (
        <div>
        <p>Count: {state.count}</p>
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>
      );
}

export default Counter


