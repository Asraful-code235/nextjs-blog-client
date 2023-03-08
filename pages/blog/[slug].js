import Layout from '@/components/Layout';
import { client, urlFor } from '@/lib/client';
import Head from 'next/head';
import Image from 'next/image';
import moment from 'moment/moment';

import CategoryItem from '@/components/CategoryItem';
import SanityBlockContent from '@sanity/block-content-to-react';

const BlogDetailsPage = ({ blogPost }) => {
  const {
    mainImage,
    title,
    categories,
    body,
    authorName,
    authorImage,
    _id,
    _createdAt,
  } = blogPost;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="mt-28 z-20">
        <div className="container mx-auto my-10">
          <div className="relative h-96">
            <Image
              src={urlFor(mainImage).url()}
              alt={title}
              layout="fill"
              blurDataURL="data:..."
              placeholder="blur"
              objectFit="cover"
              quality={100}
            />
          </div>
          <h1 className="text-3xl text-extra-dark-purple capitalize font-semibold my-6">
            {title}
          </h1>
          <ul className="flex gap-2 flex-wrap py-2">
            {categories.map((category, index) => (
              <CategoryItem title={category} key={index} />
            ))}
          </ul>
          <div className="flex items-center my-4 border-b w-fit">
            <Image
              src={urlFor(authorImage).url()}
              alt={authorName}
              width={50}
              height={50}
              className="rounded-full mr-2 "
            />
            <span>{authorName}</span>
            <span className="ml-4 text-gray-400">
              {moment(_createdAt).format('MM-DD-YYYY')}
            </span>
          </div>
        </div>
        <SanityBlockContent
          projectId="skbyokhu"
          dataset="production"
          blocks={body}
        />
      </section>
    </Layout>
  );
};

export default BlogDetailsPage;

export async function getStaticPaths() {
  const query = `*[_type == "post"]{ "params": { "slug": slug.current } }`;
  const blogPosts = await client.fetch(query);

  return {
    paths: blogPosts.map(({ params }) => ({ params })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    mainImage,
    "categories": categories[]->title,
    _createdAt,
    "authorName": author->name,
    "authorImage": author->image
  }`;
  const blogPost = await client.fetch(query, { slug });

  return {
    props: {
      blogPost,
    },
  };
}
