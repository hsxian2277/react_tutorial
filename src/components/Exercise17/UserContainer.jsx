import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/user/userActions';

export default function UserContainer() {
  const users = useSelector(state => state.user.users);
  const isLoading = useSelector(state => state.user.isLoading);
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {isLoading ?
        <h1>Loading...</h1> :
        error ?
        <h1>{error}</h1> :
        users.map((user) => {
          return <h2 key={user.id}>{user.name}</h2>
        })}
    </div>
  )
};
