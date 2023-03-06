import Image from 'next/image';

const LandingPage = () => {
  return (
    <section className="py-[2vmax] flex items-center justify-between max-[780px]:flex-col ">
      <div className="min-w-[300px]  whitespace-pre-wrap max-w-[650px]">
        <h1 className="text-4xl font-bold text-dark-purple ">Welcome to</h1>
        <h1 className="text-4xl font-bold text-dark-purple mb-4">
          Tuhins Blog <span>👋</span>{' '}
        </h1>
        <p className="text-semi-purple text-xl font-medium mb-6">
          I am Tahanima Chowdhury and this blog is my attempt to share knowledge
          about various topics; jobs, in particular. Here, you will find a lot
          of recruitment-related content in the context of Bangladesh.
        </p>
        <button
          onClick={() => alert('Button clicked!')}
          className="px-8 py-3 bg-[#8f6ee5] rounded-md text-white uppercase hover:drop-shadow-md"
        >
          About Me
        </button>
      </div>
      {/* right section */}
      <div>
        <Image
          src={'/blogillustration.png'}
          alt="illustration-blog"
          width={600}
          height={600}
          priority
          className="min-w-[350px] "
          blurDataURL="data:..."
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default LandingPage;
