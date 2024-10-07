import { useEffect, useState } from 'react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Make useFetch generic
const useFetch = <T,>(url: string) => {
  const [link, setLink] = useState<T | null>(null); // Use generic type T for data
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLink(data); // Set the fetched data (of type T)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, link, error };
};

export default useFetch;
