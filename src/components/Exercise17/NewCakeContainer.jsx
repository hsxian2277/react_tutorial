import React, { useState } from 'react';
import { connect } from 'react-redux';
import buyCake from './redux/cake/cakeActions';

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// Buy cake without hook and with payload
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
