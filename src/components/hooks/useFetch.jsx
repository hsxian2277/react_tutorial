import { useState, useEffect } from 'react';

export default function useFetch(api) {
  const [data, setData] = useState([]);
  const [isLoading, toggleLoading] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    toggleLoading(true);
    fetch(api)
      .then(res => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        toggleLoading(false);
      })
  }, [api]);

  return { data, isLoading, error };
}