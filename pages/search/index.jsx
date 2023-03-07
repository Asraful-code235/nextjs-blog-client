import Layout from '@/components/Layout';
import { client } from '@/lib/client';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchInput) {
      const query = `*[ _type == "post" && title match "${searchInput}*" ]`;
      client
        .fetch(query)
        .then((results) => setSearchResults(results))
        .catch(console.error);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);
  return (
    <Layout>
      <Head>
        <title>Search | Tuhin&apos;s Blog</title>
      </Head>
      <section className="mt-28 min-h-screen">
        <h1 className="text-semi-purple font-semibold text-2xl">Search</h1>
        <div className="mt-4">
          <input
            onChange={(event) => setSearchInput(event.target.value)}
            type={'search'}
            className="w-full py-2 px-4 border "
            placeholder="Search through the blog posts..."
          />
        </div>
        <ul className="divide-y divide-slate-200">
          {searchResults?.map((result) => (
            <li
              className="p-4 text-semi-purple transition-all duration-300 font-medium hover:bg-gray-100 "
              key={result._id}
            >
              <Link
                href={`/blog/${result.slug.current}`}
                as={`/blog/${encodeURIComponent(result.slug.current)}`}
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default SearchPage;
