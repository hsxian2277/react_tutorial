import { useEffect, useState } from 'react';

export default function CustomPagination({totalPages, currPage, setCurrPage}) {
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const newPageNumbers = [];
    if (currPage < 4) {
      for (let i = 0; i < 5; i++) {
        newPageNumbers.push(i);
      }
    } else if (currPage >= 4 && currPage < totalPages - 2) {
      for (let i = currPage - 2; i <= currPage + 2; i++) {
        newPageNumbers.push(i);
      }
    } else {
      for (let i = 37; i < totalPages; i++) {
        newPageNumbers.push(i);
      }
    }
    
    setPageNumbers(newPageNumbers);
  }, [currPage, totalPages]);

  const handleChange = (e) => {
    setCurrPage(Number(e.target.value));
  }

  const handlePrev = () => {
    setCurrPage(currPage - 1);
  }

  const handleNext = () => {
    setCurrPage(currPage + 1);
  }

  return (
    <div className='pagination-container'>
      <button className='pagination-item' onClick={handlePrev} disabled={currPage === 0}>Prev</button>
      {pageNumbers.map((pageNumber) => {
        if (pageNumber === currPage) {
          return <button key={pageNumber} className='pagination-item active-page' onClick={handleChange} value={pageNumber}>{pageNumber + 1}</button>
        } else {
          return <button key={pageNumber} className='pagination-item' onClick={handleChange} value={pageNumber}>{pageNumber + 1}</button>
        }
      })}
      <button className='pagination-item' onClick={handleNext} disabled={currPage === totalPages - 1}>Next</button>
    </div>
  );
};