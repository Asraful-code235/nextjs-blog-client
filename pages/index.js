import BlogContent from '@/components/BlogContent';
import LandingPage from '@/components/LandingPage';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { client } from '@/lib/client';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';

async function getBlogs() {
  const query = `*[_type == "post"]{author,title,slug,_id,_createdAt,mainImage,excerpt,categories[]->{_id,title}} `;
  const response = await client.fetch(query);
  return response;
}

async function filterCategory(category) {
  if (category === 'all') {
    return getBlogs();
  } else {
    const query = `*[_type == "post" && references($categoryId)]`;
    const params = { categoryId: category };
    const posts = await client.fetch(query, params);
    return posts;
  }
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const { data: allPosts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getBlogs(),
    keepPreviousData: true,
  });

  const { data: filteredPosts } = useQuery({
    queryKey: ['filteredPosts', selectedCategory],
    queryFn: () => filterCategory(selectedCategory),
    enabled: selectedCategory !== 'all',
  });

  useEffect(() => {
    if (selectedCategory === 'all') {
      setPosts(allPosts || []);
    } else {
      setPosts(filteredPosts || allPosts || []);
    }
  }, [allPosts, filteredPosts, selectedCategory]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Home | Blog</title>
        <meta name="theme-color"></meta>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LandingPage />
        <BlogContent
          data={posts}
          setSelectedCategory={setSelectedCategory}
          handleCategory={handleCategory}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts'], () => getBlogs());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
