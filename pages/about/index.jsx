import Layout from '@/components/Layout';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About | Tuhins Blog</title>
      </Head>
      <section className="mt-28 min-h-screen tracking-wide">
        <h1 className="text-2xl text-extra-dark-purple font-semibold">About</h1>
        <blockquote class="border-l-4 border-gray-500 pl-4 my-6">
          <p class="italic text-lg">
            “There is no recipe, there is no one way to do things — there is
            only your way. And if you can recognize that in yourself and accept
            and appreciate that in others, you can make magic.”
          </p>
          <cite class="block mt-2 text-gray-500">― Ara Katz</cite>
        </blockquote>
        <article className="flex flex-col gap-2 text-lg font-mono font-medium text-slate-600">
          <p>Hey there! I am Tuhin.</p>
          <p className="mt-4">
            I am currently working as a Student in Bangladesh University of
            Business & Technology.
          </p>
          <p className="my-4">
            I completed my Bachelor&apos;s degree in Computer Science from BRAC
            University. During my undergraduate years, I served as an
            Undergraduate Teaching Assistant and was actively involved in
            competitive programming. I was fortunate enough to be able to win a
            programming competition and got videotaped as part of a Q & A
            session. Also, I got featured in BRACU Express and in Prothom Alo.
          </p>
          <p className="mt-4">
            I am an avid open-source contributor. I have contributed to the Data
            Faker library and have created two amazing test automation
            boilerplate frameworks—one using Selenium WebDriver and the other,
            using Playwright.
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default AboutPage;
