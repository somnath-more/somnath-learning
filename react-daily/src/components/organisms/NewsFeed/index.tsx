import React, { useEffect, useState } from 'react';

const JOBS_API = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
const ITEM_API = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

const NewsFeed = () => {
  const [jobIds, setJobIds] = useState<number[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch list of job IDs initially
  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const res = await fetch(JOBS_API);
        const ids = await res.json();
        setJobIds(ids);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchJobIds();
  }, []);

  // Fetch job details when jobIds or visibleCount changes
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const currentIds = jobIds.slice(0, visibleCount);
        const articleData = await Promise.all(
          currentIds.map(async (id) => {
            const res = await fetch(ITEM_API(id));
            return await res.json();
          })
        );
        setArticles(articleData);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (jobIds.length) {
      fetchArticles();
    }
  }, [jobIds, visibleCount]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hacker News Job Posts</h1>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id} className="p-4 border rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-600">By: {article.by}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block mt-2"
            >
              View job link
            </a>
          </li>
        ))}
      </ul>

      {!loading && articles.length < jobIds.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 5)}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Load More Jobs
        </button>
      )}
    </div>
  );
};

export default NewsFeed;
