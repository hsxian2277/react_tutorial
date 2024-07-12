import { useState } from 'react';
import useFetch from './hooks/useFetch'

const BASE_POST_API = 'https://jsonplaceholder.typicode.com/posts';
const BASE_USER_API = 'https://jsonplaceholder.typicode.com/users';

export default function Exercise11() {
  const [api, setApi] = useState(BASE_POST_API);
  const { data, isLoading, error } = useFetch(api);

  const handleAPIChange = () => {
    api === BASE_POST_API ? setApi(BASE_USER_API) : setApi(BASE_POST_API);
  }

  return (
    <div>
      <button onClick={handleAPIChange}>Change API</button>
      {(isLoading) ? 
        (<div>Loading...</div>) : 
        (error ? 
          <div>Error: {error}</div> :
          <div>{data.map((item) => {
            return <div key={item.id}>{item.id}: {item.name ? item.name : item.title}</div>
          })}</div>)}
    </div>
  )
}