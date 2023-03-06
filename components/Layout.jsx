import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className=" w-5/6  md:w-[70%] mx-auto scroll-smooth">
        <header className="fixed top-0 left-0 right-0 z-50  mx-auto ">
          <Header />
        </header>
        <main className="mt-20  ">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
