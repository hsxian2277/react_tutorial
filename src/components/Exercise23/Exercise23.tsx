import React, {useEffect, useMemo, useState} from 'react';
import {Post} from './types/post';
import './styles.css';

// Table with sorting using ts
export default function Exercise23() {
  enum Sort {Id = 'id', Ascending = 'ascending', Descending = 'descending'};

  const [posts, setPosts] = useState<Post[]>([]);
  const [sortBy, setSortBy] = useState<string>(Sort.Id);

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a: Post, b: Post): number => {
      if (sortBy === Sort.Ascending) {
        return (a.title < b.title ? -1 : 1) ;
      } else if (sortBy === Sort.Descending) {
        return (a.title > b.title ? -1 : 1);
      } else {
        return (a.id < b.id ? -1 : 1);
      }
    })
  }, [posts, sortBy, Sort]);

  const handleSort = () => {
    sortBy === Sort.Id ?
      setSortBy(Sort.Ascending) :
      sortBy === Sort.Ascending ? 
        setSortBy(Sort.Descending) :
        setSortBy(Sort.Ascending);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <h1>Post table with sorting</h1>
      <table>
        <thead>
          <tr className='header'>
            <th className='header__title' onClick={handleSort}>
              <span className='header__title-span'>Title</span> 
              <span>{sortBy === Sort.Ascending ? '▲' : sortBy === Sort.Descending ? '▼' : ''}</span>
            </th>
            <th>Body</th>
          </tr>  
        </thead>
        <tbody>
          {sortedPosts.map((post) => {
            return <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};
