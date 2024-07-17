import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import buyCake from './redux/cake/cakeActions';

// Buy cake with hook to access store
export default function HookCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes(hook) - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};
