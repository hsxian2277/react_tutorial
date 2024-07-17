import { useDispatch, useSelector } from 'react-redux'
import buyIceCream from './redux/iceCream/iceCreamActions';

// Buy ice cream with hook for combine reducer
export default function IceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy ice cream</button>
    </div>
  )
}