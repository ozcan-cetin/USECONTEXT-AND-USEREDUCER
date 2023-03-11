import React, { useContext } from 'react'
import { AuthContext } from './AuthContext';

const Test = () => {
    const { state, dispatch } = useContext(AuthContext);
  return (
    <div>
        <p>alt taraf yeni bir component</p>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default Test