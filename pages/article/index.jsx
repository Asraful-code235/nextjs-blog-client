import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import axios from 'axios';
import { client } from '@/lib/client';
import {
  dehydrate,
  isError,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';
import moment from 'moment';
import Image from 'next/image';

async function getComments() {
  const query = `*[_type == "comment"]`;
  const response = await client.fetch(query);
  return response;
}

const ArticleRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments'],
    queryFn: () => getComments(),
    staleTime: 2000,
    keepPreviousData: true,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/comments', {
        name,
        email,
        message,
      });
      console.log(response.data);
      // optionally, reset the form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Article Request | Tuhin&apos;s Blog</title>
      </Head>
      <section className="mt-28 min-h-screen">
        <h1 className="text-2xl text-extra-dark-purple font-semibold">
          Article Request
        </h1>
        <p className="my-4 w-5/6 text-start text-lg tracking-wide ">
          If you cannot find any article suited to your needs, you can request
          that article in the comments section below. I&apos;ll try my best to
          write about it.
        </p>
        <p className="my-4 w-5/6 text-start text-lg tracking-wide ">
          While requesting an article, please ensure that the topic is limited
          to Computer Science and Jobs.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your Name"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="message">Comment:</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Leave a comment"
            value={message}
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <button
            className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md"
            type="submit"
            // disabled={!session}
          >
            Post Request
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-semi-purple">Requests:</h2>
          <ul className="flex flex-col gap-4 divide-y divide-slate-200">
            {isLoading && 'Loading...'}
            {/* {isError && 'Error loading comments'} */}
            {comments?.map((comment) => (
              <li className="p-4 flex items-center gap-2 " key={comment._id}>
                <div className="w-14 h-14 rounded-full bg-slate-200">
                  <Image
                    src={'/favicon.ico'}
                    alt="temp-user"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="flex flex-col  py-2">
                  <p className="text-gray-500 text-base ">{comment.message}</p>
                  <p className="text-extra-dark-purple text-sm text-start">
                    - {comment.name} on{' '}
                    {moment(comment.createdAt).format('DD-MM-YYYY')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleRequest;

export async function getStaticProps() {
  // Fetch comments from the API
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['comments'],
    queryFn: () => getComments(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },

    revalidate: 10,
  };
}
