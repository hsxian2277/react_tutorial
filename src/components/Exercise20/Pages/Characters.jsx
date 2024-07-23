import React, { useEffect, useState } from "react";
import { Pagination } from '@mui/material';
import CustomPagination from './CustomPagination';

export default function Characters() {
  const [currPage, setCurrPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currPage}`)
      .then(res => res.json())
      .then((data) => {
        setResults(data.results);
        setTotalPages(data.info.pages);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
  }, [currPage]);

  const handleChange = (_, value) => {
    setCurrPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  };

  return (
    <div>
      <h1>Characters</h1>
      <div className='character-container'>
        {results.map((result) => {
          return <div key={result.id} className='character-item'>
                    <div>{result.name}</div>
                    <img src={result.image} alt={result.name}></img>
                  </div>
        })}
      </div>
      
      {/* <CustomPagination totalPages={totalPages} currPage={currPage} setCurrPage={setCurrPage}/> */}
      <Pagination
        className='pagination'
        variant='outlined'
        shape='rounded'
        color='primary'
        count={totalPages}
        page={currPage}
        onChange={handleChange}/>
    </div>
  );
};