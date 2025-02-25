import React from 'react';
import { connect } from 'react-redux';
import buyCake from './redux/cake/cakeActions';

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// Buy cake without hook and payload
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
