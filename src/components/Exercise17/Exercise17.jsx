import { Provider } from 'react-redux';
import CakeContainer from './CakeContainer';
import store from './redux/store';
import HookCakeContainer from './HookCakeContainer';
import IceCreamContainer from './IceCreamContainer';
import NewCakeContainer from './NewCakeContainer';

// react redux
export default function Exercise17() {
  return (
    // Wrap around react redux provider so children can access
    <Provider store={store}>
      <div className='CakeApp'>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  )
}