import React from 'react';
import useFetch from '../hooks/useFetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const CustomHook = () => {
  // Use the updated useFetch hook for a single Post
  const { isLoading, link, error } = useFetch<Post>('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error ? (
        <p>Error: {"Something went wrong!"}</p>
      ) : (
        link && (
          <div>
            <h2>{link.title}</h2>
            <p>{link.body}</p>
          </div>
        )
      )}
    </>
  );
};

export default CustomHook;
