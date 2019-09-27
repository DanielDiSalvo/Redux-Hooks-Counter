import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(logIn())}>Log In</button>
      {isLogged ? <h3>Valuable information I should't see</h3> : <h3>Not logged In</h3>}
    </div>
  );
}

export default App;
