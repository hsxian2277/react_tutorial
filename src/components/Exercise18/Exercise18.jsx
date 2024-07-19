import { useEffect, useState } from 'react'
import { sortByAge, sortById, sortByName } from './utils';
import './Exercise18.css';

// Birthday record table with sort
export default function Exercise18() {
  const [people, setPeople] = useState([]);
  const [currSort, setCurrSort] = useState('');
  const [isLoading, setLoading] = useState(true);
  const sortMethods = ['name', 'age'];

  useEffect(() => {
    fetch('./people.json')
      .then(res => res.json())
      .then((data) => {
        setPeople(data.people);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleSort = (e) => {
    setCurrSort(e.target.value);
  }

  useEffect(() => {
    switch (currSort) {
      case 'name':
        setPeople((prev) => prev.toSorted(sortByName));
        break;
      case 'age':
        setPeople((prev) => prev.toSorted(sortByAge));
        break;
      default:
        setPeople((prev) => prev.toSorted(sortById));
    }
  }, [currSort])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='birthday-record-table'>
      <h1>Birthday Record Table</h1>
      <div className='birthday-record-table__sort-options'>
        <div>Sort by: </div>
        {sortMethods.map((method) => {
          return <div key={method}>
                  <input type='radio' id={method + '-sort'} name='sort' value={method} onChange={handleSort} />
                  <label htmlFor={method + '-sort'}>{method}</label>
                </div>
        })}
      </div>
      
      <table className='birthday-record-table__table'>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => {
              return <tr key={person.id}>
                      <td>{person.name}</td>
                      <td>{person.dob}</td>
                    </tr>
            })} 
        </tbody>
      </table>
      
    </div>
  )
}