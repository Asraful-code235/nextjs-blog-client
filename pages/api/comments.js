import { client } from '@/lib/client';
import { createClient } from '@sanity/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  const { name, email, message } = req.body;
  console.log(name, message);

  //   create a client to interact with the sanity api
  const client = createClient({
    projectId: 'skbyokhu',
    dataset: 'production',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2023-03-06',
    token: process.env.SANITY_SECRET_TOKEN,
  });

  try {
    // create a new comment document in sanity
    const result = await client.create({
      _type: 'comment',
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    return res.status(201).json({ success: true, data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
