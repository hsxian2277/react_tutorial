import {legacy_createStore, combineReducers} from 'redux';

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

// Actions
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first redux action',
  };
};

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: 'second redux action',
  };
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 10,
}

// Reducers
const cakeReducer = (state=initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  };
};

const IceCreamReducer = (state=initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      }
    default:
      return state;
  };
};

// Combine into one reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer
});
// Create store
const store = legacy_createStore(rootReducer);

// Console.log testing with subscribe, getstate, and dispatch
console.log('initial state:', store.getState());
const unsubscribe = store.subscribe(() => {console.log('updated state:', store.getState())});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// Playing around with redux without react
export default function Exercise16() {
  return (
    <div>Redux tutorial</div>
  )
}
