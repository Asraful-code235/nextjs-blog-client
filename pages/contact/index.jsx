import Layout from '@/components/Layout';
import Head from 'next/head';
import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Something went wrong');
    }

    setLoading(false);
  };
  return (
    <Layout>
      <Head>
        <title>Contact | Tuhin&apos;s Blog</title>
      </Head>
      <section className="mt-28 min-h-screen">
        <h1 className="text-semi-purple font-semibold text-2xl">Contact</h1>
        <p className="my-4 text-lg tracking-wide">
          Thank you for your interest in getting in touch with me. Please send
          your message here. I will reply as soon as possible.
        </p>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {success && (
              <p className="text-green-500">Thank you for contacting us!</p>
            )}

            {error && <p className="text-red-500">{error}</p>}

            <label htmlFor="name">Name</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              className="w-full px-3 py-12 border rounded-md"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              className="mt-4 bg-extra-dark-purple p-2 w-min text-white px-8 rounded-md hover:drop-shadow-md "
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
