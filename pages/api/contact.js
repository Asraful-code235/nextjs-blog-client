import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'skbyokhu',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-06',
  token: process.env.SANITY_SECRET_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await client.create({
      _type: 'contact',
      name,
      email,
      message,
    });

    res
      .status(200)
      .json({
        message:
          'Thank you for contacting Me.I will reach out to you very soon.',
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
