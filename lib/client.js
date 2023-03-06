import { createClient } from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'skbyokhu',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-06',
  token: process.env.SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
