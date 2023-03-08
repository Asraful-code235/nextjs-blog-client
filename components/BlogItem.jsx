import { client, urlFor } from '@/lib/client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function authorDetails(author) {
  const query = `*[_id == $author]{name,image}`;
  const params = { author };
  const res = await client.fetch(query, params);
  return res;
}

const BlogItemComponent = ({ blogItems }) => {
  const author = blogItems.author._ref;
  const { data: AuthorData } = useQuery({
    queryKey: ['authorData', author],
    queryFn: () => authorDetails(author),
    keepPreviousData: true,
  });

  const authorName = AuthorData?.map((i, index) => i.name);
  return (
    <div>
      <Link
        href={`/blog/${blogItems.slug.current}`}
        as={`/blog/${encodeURIComponent(blogItems.slug.current)}`}
        key={blogItems._id}
        className="flex flex-col items-start gap-2 cursor-pointer"
      >
        <Image
          src={urlFor(blogItems.mainImage.asset._ref)
            .width(350)
            .height(300)
            .url()}
          alt={`${blogItems.title}`}
          width={350}
          height={300}
          priority
          className="object-center object-cover w-full "
        />
        <div className="flex flex-col ">
          <h1
            style={{ cursor: 'pointer' }}
            className="text-semi-purple text-xl cursor-pointer transition-colors duration-300 font-semibold mt-2 capitalize  "
          >
            {blogItems.title}
          </h1>
          <p className=" text-gray-500 text-base ">{blogItems.excerpt}</p>
          <span className="flex gap-4 text-gray-400 mt-2">
            By {authorName}
            <span className="relative before:absolute before:w-1 before:top-[10px] before:-left-2 before:h-1 before:rounded-full before:bg-semi-purple">
              {' '}
              {blogItems._createdAt}
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BlogItemComponent;
