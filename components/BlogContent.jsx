import { client, urlFor } from '@/lib/client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BlogItemComponent from './BlogItem';

async function getCategory() {
  const query = `*[_type == "category"]`;
  const res = await client.fetch(query);
  return res;
}

const BlogContent = ({ data }) => {
  const {
    data: Categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategory(),
  });

  return (
    <div>
      <div className="mt-14">
        <section className="grid grid-cols-1 md:grid-cols-6 ">
          {/* left section */}
          <div className="col-span-5 ">
            <div className="grid grid-cols-1  sm:grid-cols-2    gap-4 ">
              {data?.map((blogItems) => (
                <BlogItemComponent key={blogItems._id} blogItems={blogItems} />
              ))}
            </div>
          </div>
          {/* right section */}
          <div className="col-span-1">
            <div className="md:py-1 md:pl-4 py-4 mt-4 md:mt-0 ">
              <h1 className="capitalize text-xl font-semibold text-semi-purple underline underline-offset-4">
                Category
              </h1>
              <ul className="flex flex-wrap gap-2 text-semi-purple text-base mt-4">
                {isLoading && 'Loading ...'}
                {isError && 'Error'}
                {Categories?.map((categoryItem) => (
                  <li
                    className="bg-gray-100 cursor-pointer px-2 py-2 rounded-lg capitalize hover:text-dark-purple hover:bg-gray-300"
                    key={categoryItem._id}
                  >
                    {categoryItem.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogContent;
