import { useEffect, useState } from 'react';

// Pagination
export default function CustomPagination({totalPages, currPage, setCurrPage}) {
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

  // Calculate page numbers to display
  useEffect(() => {
    const newPageNumbers = [];
    // Pages 1-5
    if (currPage < 5) {
      for (let i = 1; i < 6; i++) {
        newPageNumbers.push(i);
      }
    // Pages between first 5 and last 5
    } else if (currPage >= 5 && currPage < totalPages - 1) {
      for (let i = currPage - 2; i <= currPage + 2; i++) {
        newPageNumbers.push(i);
      }
    // Pages last 5
    } else {
      for (let i = 38; i <= totalPages; i++) {
        newPageNumbers.push(i);
      }
    }
    
    setPageNumbers(newPageNumbers);
  }, [currPage, totalPages]);

  // Handle page changing
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
      <button className='pagination-item' onClick={handlePrev} disabled={currPage === 1}>Prev</button>
      {pageNumbers.map((pageNumber) => {
        if (pageNumber === currPage) {
          return <button key={pageNumber} className='pagination-item active-page' onClick={handleChange} value={pageNumber}>{pageNumber}</button>
        } else {
          return <button key={pageNumber} className='pagination-item' onClick={handleChange} value={pageNumber}>{pageNumber}</button>
        }
      })}
      <button className='pagination-item' onClick={handleNext} disabled={currPage === totalPages}>Next</button>
    </div>
  );
};