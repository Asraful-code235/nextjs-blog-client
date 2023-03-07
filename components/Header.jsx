import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  {
    id: 1,
    link: 'home',
    href: '',
  },
  {
    id: 2,
    link: 'about',
    href: 'about',
  },
  {
    id: 3,
    link: 'article request',
    href: 'article',
  },
  {
    id: 4,
    link: 'search',
    href: 'search',
  },
  {
    id: 5,
    link: 'contact',
    href: 'contact',
  },
];

const Header = () => {
  const [hideNavItems, setHideNavItems] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 816) {
        // Change the width value to your desired breakpoint
        setHideNavItems(true);
      } else {
        setHideNavItems(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className=" w-5/6 bg-white backdrop-filter  md:w-[70%] mx-auto flex justify-between items-center py-8">
      {/* logo */}
      <Link href={'/'} className="w-44 ">
        <svg
          width="372.45000000000005"
          height="65.20268011193816"
          viewBox="0 0 370.18518518518516 64.80619200378095"
          className="css-1j8o68f w-full h-full"
        >
          <defs id="SvgjsDefs1266"></defs>
          <g
            id="SvgjsG1267"
            featurekey="symbolFeature-0"
            transform="matrix(0.810185726042508,0,0,0.810185726042508,-8.10190207431755,-8.110521022084813)"
            fill="#3e1e68"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M61.1748,32.91357c-2.12585,0-4.23553,0.24359-6.29187,0.6972c0.38275-6.06653-1.74719-12.25079-6.42102-16.96136  c-8.67383-8.74023-22.91211-8.8667-31.74023-0.28174c-4.28027,4.16211-6.66797,9.72607-6.7207,15.6665  c-0.05371,5.93945,2.23242,11.54346,6.43555,15.78027c4.43445,4.46808,10.39587,6.79449,16.49567,6.65228  c-1.09943,4.85431-0.45886,9.73114-0.43317,9.91852c0.32129,3.11816,1.52441,7.16699,3.07129,10.33887  c1.35352,4.52539-7.12109,7.92529-7.20703,7.95898c-0.30762,0.12158-0.53516,0.38672-0.6084,0.70898  c-0.07324,0.32275,0.01758,0.66064,0.24219,0.90234c6.10352,6.56641,14.43945,2.07324,16.74707,0.61816  C49.58105,88.24316,55.24609,90,61.1748,90C77.06934,90,90,77.1958,90,61.45703S77.06934,32.91357,61.1748,32.91357z   M17.85645,46.40527c-3.82422-3.85449-5.9043-8.95166-5.85547-14.35303c0.04785-5.40283,2.21973-10.46387,6.11523-14.25098  c8.04492-7.82324,21.02246-7.70752,28.92578,0.25732c7.80176,7.8623,7.87305,20.2417,0.16211,28.18164  c-0.1377,0.14209-0.27832,0.28271-0.4209,0.4209c-0.02637,0.02539-0.05078,0.05225-0.07422,0.08057  c-1.18945,1.4375-1.20312,2.72705-1.00586,3.55566c0.29297,1.22607,1.18848,2.18018,2.05078,2.84521  c-5.05664,1.55615-7.85938-1.25732-7.98535-1.3877c-0.19238-0.20361-0.45605-0.31396-0.72754-0.31396  c-0.10156,0-0.2041,0.01562-0.30371,0.04736C31.31641,53.85352,23.31348,51.90576,17.85645,46.40527z M61.1748,88  c-5.73828,0-11.21191-1.76709-15.82715-5.10986c-0.35449-0.25537-0.83203-0.25439-1.18262,0.00684  c-0.08203,0.06055-7.81934,5.68799-13.65918,1.00977c2.78223-1.37891,8.53223-4.90137,6.94922-9.85693  c-0.01465-0.04688-0.0332-0.09277-0.05469-0.13672c-1.46777-2.9873-2.61035-6.80762-2.91504-9.76465  c-0.00769-0.05188-0.67133-5.16327,0.54529-9.836c1.25897-0.14691,2.51721-0.38745,3.76233-0.75043  c0.87988,0.71777,2.93359,2.05811,6.00391,2.05811c1.60645,0,3.49121-0.36768,5.63184-1.3833  c0.35352-0.16748,0.5752-0.52637,0.57031-0.91748c-0.00586-0.39111-0.23926-0.74365-0.59668-0.90137  c-0.66602-0.29395-2.45703-1.33154-2.75391-2.58789c-0.13184-0.55664,0.05469-1.13721,0.56934-1.77393  c0.1416-0.13867,0.28223-0.2793,0.4209-0.42139c3.32336-3.42212,5.31219-7.59613,6.0097-11.9248  c2.12238-0.5249,4.31635-0.79639,6.52643-0.79639C75.96582,34.91357,88,46.8208,88,61.45703C88,76.09277,75.96582,88,61.1748,88z"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M71.32422,57.09033H51.625c-0.55273,0-1,0.44775-1,1s0.44727,1,1,1h19.69922c0.55273,0,1-0.44775,1-1  S71.87695,57.09033,71.32422,57.09033z"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M71.32422,66.65479H51.625c-0.55273,0-1,0.44775-1,1s0.44727,1,1,1h19.69922c0.55273,0,1-0.44775,1-1  S71.87695,66.65479,71.32422,66.65479z"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M40.73926,44.00146c0.30762-0.22363,0.46191-0.60303,0.39746-0.97803l-1.38184-8.05811l5.85449-5.70703  c0.27246-0.26562,0.37012-0.66309,0.25293-1.0249c-0.11816-0.36182-0.43066-0.62598-0.80762-0.68066l-8.08984-1.17578  l-3.61914-7.33154c-0.33594-0.68359-1.45703-0.68262-1.79297,0l-3.61816,7.33154l-8.09082,1.17578  c-0.37695,0.05469-0.68945,0.31885-0.80762,0.68066c-0.11719,0.3623-0.01953,0.75928,0.25293,1.02539l5.85547,5.70654  l-1.38281,8.05811c-0.06445,0.375,0.08984,0.75439,0.39746,0.97803c0.17383,0.12646,0.38086,0.19092,0.58789,0.19092  c0.15918,0,0.31934-0.03809,0.46582-0.11475l7.23633-3.80469l7.23633,3.80469  C40.02344,44.25439,40.42969,44.22559,40.73926,44.00146z M32.91504,38.25781c-0.14648-0.07666-0.30566-0.11475-0.46582-0.11475  s-0.31934,0.03809-0.46582,0.11475l-5.9082,3.10645l1.12891-6.5791c0.05566-0.32422-0.05176-0.65527-0.28711-0.88525  l-4.78027-4.65918l6.60547-0.95996c0.32617-0.04736,0.60742-0.25195,0.75293-0.54736l2.9541-5.98584l2.95508,5.98584  c0.14551,0.29541,0.42676,0.5,0.75293,0.54736l6.60547,0.95996l-4.78027,4.65967c-0.23535,0.22949-0.34277,0.56055-0.28711,0.88477  l1.12793,6.5791L32.91504,38.25781z"
            ></path>
          </g>
          <g
            id="SvgjsG1268"
            featurekey="nameFeature-0"
            transform="matrix(1.1693028761692184,0,0,1.1693028761692184,85.34299483475755,-1.9848568679186105)"
            fill="#3e1e68"
          >
            <path d="M12.96 25.4 l0 5.96 c0 2.68 1.12 3.32 2.2 3.32 c1.24 0 1.96 -0.92 2.68 -0.92 c0.8 0 1.36 1.12 1.36 1.84 c0 2.64 -4.56 4.96 -8.6 4.96 c-2.04 0 -7.16 -0.88 -7.16 -7.24 l0 -8.24 c0 -0.72 0 -1 -0.2 -1.12 s-0.64 -0.04 -1.56 -0.04 c-1.04 0 -1.56 0.04 -1.76 -0.16 c-0.28 -0.28 -0.2 -0.68 -0.2 -1.6 c0 -0.56 -0.12 -1 0.36 -1.32 l9.12 -5.8 c0.92 -0.56 0.88 -0.44 2.08 -0.44 c1.6 0 1.68 -0.16 1.68 1.68 c0 1.24 -0.08 2.48 0.12 2.96 c0.12 0.32 0.4 0.32 1.44 0.32 l2.8 0 c1.72 0 1.72 0.12 1.72 1.92 c0 2.28 -0.28 2.44 -1.84 2.44 l-2.76 0 c-1.4 0 -1.48 0.04 -1.48 1.48 z M31.52 21.2 l0 10.16 c0 1.6 0.12 4.08 2.28 4.08 c2.88 0 2.48 -3.76 2.48 -5.68 c0 -1.32 0.04 -3.04 -0.16 -4.32 c-0.32 -2 -2.28 -1.32 -2.28 -3 c0 -2.36 8.04 -2.76 9.56 -2.76 c1.44 0 2.04 0.84 2.04 2.24 c0 1.28 -0.08 2.52 -0.08 3.8 l0 8.04 c0 2.4 2.2 1.28 2.2 3.2 c0 2.72 -7.08 3.48 -9.28 3.48 c-3.08 0 -1.04 -2.4 -2.64 -2.4 c-0.44 0 -1.08 0.6 -2.04 1.2 s-2.24 1.2 -4 1.2 c-7.6 0 -6.96 -6 -6.96 -12 c0 -6.12 -2.76 -3.44 -2.76 -6.08 c0 -2.56 10.08 -2.68 10.4 -2.68 c1.12 0 1.24 0.52 1.24 1.52 z M73.96000000000001 27.6 l0.16 6.44 c0 3.4 1.96 2.56 1.96 4.12 c0 2.32 -5.12 2.28 -6.6 2.28 c-1.24 0 -6.08 0 -6.08 -2.04 c0 -1.16 1.12 -1.12 1.44 -3.16 c0.24 -1.28 0.28 -2.68 0.28 -4 c0 -2 -0.04 -5.76 -2.88 -5.76 c-2.44 0 -2.36 2.08 -2.36 3.88 l0 4.64 c0 3.32 1.6 2.64 1.6 4.08 c0 2.32 -4.56 2.36 -6.08 2.36 c-5.72 0 -7.04 -1.2 -7.04 -2.44 c0 -1.6 1.56 -0.88 2.24 -3.48 c0.48 -1.88 0.48 -7.16 0.48 -9.36 c0 -1.8 -0.12 -3.64 -0.16 -5.44 c-0.08 -2.84 -2.48 -1.84 -2.48 -3.72 c0 -3.2 10.4 -4.04 10.44 -4.04 c1.2 0 1.28 0.36 1.28 1.52 l-0.24 7.6 c-0.04 0.76 -0.08 2.04 0.96 2.04 c1.2 0 1.72 -3.56 6.2 -3.56 c7.36 0 6.84 6.92 6.88 8.04 z M88.68 21.44 l0 11.16 c0 4.72 2.36 3 2.36 5.12 c0 2.72 -5.08 2.72 -6.88 2.72 c-6.88 0 -7.16 -1.56 -7.16 -2.52 c0 -1.44 1.64 -1.52 2.12 -2.76 c0.52 -1.4 0.6 -7.2 0.16 -8.68 c-0.36 -1.4 -2.4 -0.96 -2.4 -2.76 c0 -2.84 10.16 -4.04 10.56 -4.04 c1.2 0 1.24 0.92 1.24 1.76 z M88.48 14.48 c0 3.12 -5.44 3.92 -7.72 3.92 c-1.68 0 -3.48 -0.76 -3.48 -2.72 c0 -2.64 5.28 -3.72 7.32 -3.72 c1.6 0 3.88 0.52 3.88 2.52 z M103.4 30.240000000000002 l0 3.08 c0 3.88 1.36 3.2 1.36 4.72 c0 2.48 -5.32 2.4 -6.96 2.4 c-1.6 0 -5.68 0 -5.68 -2.4 c0 -1.92 1.84 -0.2 1.96 -4.12 l0.16 -6 c0.08 -2.96 -2.36 -2 -2.36 -4.12 s9.2 -4.12 10 -4.12 c0.88 0 1.44 0.76 1.44 1.56 c0 0.24 -0.04 0.48 -0.04 0.72 c0 0.48 0.2 1.04 0.8 1.04 c0.64 0 1 -0.84 1.8 -1.68 c0.8 -0.8 2 -1.64 4.28 -1.64 c8.28 0 6.88 8.12 7.28 14.2 c0.2 3.16 1.84 2.44 1.84 4.16 c0 0.72 0.16 2.4 -7.36 2.4 c-1.44 0 -5.28 0.08 -5.28 -2.16 c0 -1.44 1.32 -0.76 1.52 -3.36 c0.2 -2.84 1.32 -9.24 -2.44 -9.24 c-2.56 0 -2.32 2.76 -2.32 4.56 z M128.84 19.56 c0.8 0 1.64 0.12 2.4 0.24 c0.72 0.16 1.36 0.28 1.64 0.28 c0.4 0 0.72 -0.12 1.08 -0.28 c0.36 -0.12 0.72 -0.24 1.08 -0.24 c1.84 0 3.68 3.68 3.68 5.32 c0 1.08 -0.92 1.88 -1.96 1.88 c-2.28 0 -3.56 -3.16 -5.32 -3.16 c-0.72 0 -1.44 0.6 -1.44 1.36 c0 2.56 8.8 3.04 8.8 9.24 c0 3.76 -3.64 6.36 -7.8 6.36 c-0.8 0 -1.96 -0.12 -2.96 -0.28 c-1 -0.12 -1.88 -0.24 -2.12 -0.24 c-0.28 0 -0.52 0.04 -0.8 0.08 c-0.24 0.04 -0.48 0.08 -0.76 0.08 c-0.8 0 -1.2 -0.12 -1.76 -0.76 c-1 -1.12 -2 -3.4 -2 -4.92 c0 -1.04 0.36 -1.88 1.52 -1.88 c1.76 0 3.36 3.96 5.6 3.96 c0.8 0 1.56 -0.4 1.56 -1.28 c0 -2.36 -7.84 -2.64 -7.84 -9.24 c0 -4 3.28 -6.52 7.4 -6.52 z M164.23999999999998 13.68 l-0.24 7.72 c0 0.2 -0.04 0.64 0.28 0.64 c0.2 0 0.84 -0.64 1.88 -1.24 c1.04 -0.64 2.44 -1.24 4.2 -1.24 c4.24 0 7.84 3.56 7.84 8.84 c0 6.84 -5.12 12.16 -12 12.16 c-5.04 0 -7.4 -2.6 -8.04 -2.6 s-1.28 0.6 -2.6 0.6 c-0.56 0 -1.2 -0.16 -1.2 -0.8 s0.8 -1.92 0.8 -7.12 l0 -10.64 c0 -2.32 -3 -1.28 -3 -3.56 c0 -2.68 7.76 -4.48 11.08 -4.48 c1.08 0 1.04 0.84 1 1.72 z M169.2 31.880000000000003 c0 -1.88 -0.52 -6.16 -3.16 -6.16 c-1.76 0 -1.96 1.44 -1.96 2.8 c0 7.76 0.44 8.4 2.04 8.4 c2.64 0 3.08 -3 3.08 -5.04 z M191.44 25.08 l0 7.76 c0 0.72 -0.04 2.04 0.16 2.68 c0.44 1.44 2.24 0.76 2.24 2.44 c0 2.68 -4.88 2.48 -6.6 2.48 c-1.8 0 -7.4 0.2 -7.4 -2.64 c0 -1.4 1.72 -0.88 2.2 -2.36 c0.52 -1.64 0.52 -6.64 0.52 -8.6 c0 -1.56 0.08 -4.56 -0.28 -6.36 c-0.6 -2.96 -2.96 -1.92 -2.96 -4.2 c0 -3.48 10.4 -4.32 10.96 -4.32 c1.36 0 1.68 0.88 1.68 2.08 c0 0.92 -0.52 5.32 -0.52 11.04 z M205.95999999999998 40.56 c-5.92 0 -10.96 -3.48 -10.96 -9.8 c0 -7.16 6.28 -11.2 12.88 -11.2 c7 0 11 5.48 11 10.44 c0 6.56 -7.04 10.56 -12.92 10.56 z M209.67999999999998 33.04 c0 -1.8 -0.8 -8.76 -3.52 -8.76 c-1.32 0 -2.04 1.24 -1.96 2.4 c0.16 2.52 0.88 8.68 3.64 8.84 c1.52 0.08 1.84 -1.2 1.84 -2.48 z M233.59999999999997 27.32 c0 -1.64 -0.36 -4.6 -2.6 -4.6 c-1.56 0 -2.24 1.48 -2.24 2.88 c0 1.52 0.4 4.84 2.44 4.84 c1.8 0 2.4 -1.56 2.4 -3.12 z M226.07999999999996 42 c0 2.12 3.12 2.68 4.68 2.68 c1.32 0 4.32 -0.2 4.32 -2.04 c0 -0.84 -0.8 -1.2 -1.56 -1.2 c-0.6 0 -2.16 0.24 -3.44 0.24 c-0.92 0 -3.08 -0.32 -3.52 -0.32 c-0.36 0 -0.48 0.36 -0.48 0.64 z M243.59999999999997 39.68 c0 3.6 -3.44 8.44 -13.24 8.44 c-7.4 0 -10.2 -2.8 -10.2 -5.36 c0 -2.32 2.2 -2.36 2.2 -2.96 c0 -0.52 -2.16 -1.64 -2.16 -3.4 c0 -2.84 3.24 -3.68 3.24 -4.24 c0 -0.48 -2.72 -2.32 -2.72 -5.28 c0 -4.84 6.04 -7.08 10.08 -7.08 c2.04 0 4.8 0.76 6.2 0.76 c3.04 0 4.56 -2.12 5.16 -2.12 c0.92 0 1.32 1.2 1.32 1.96 c0 2.24 -2.24 3.84 -2.24 4.28 c0 0.4 0.12 0.84 0.12 1.24 c0 5.4 -6.28 7.24 -10.68 7.24 c-0.68 0 -1.36 -0.12 -2.08 -0.12 c-0.68 0 -1.08 0.44 -1.08 1.08 c0 1.24 1.76 1.48 2.68 1.48 c1.24 0 5.88 -0.68 7.48 -0.68 c4.16 0 5.92 2.36 5.92 4.76 z"></path>
          </g>
        </svg>
      </Link>
      {/* navlinks */}
      <div className={`${hideNavItems ? ' hidden' : 'block'}`}>
        <ul className="flex gap-4 items-center capitalize transition-colors divide-neutral-400  text-slate-500">
          {navLinks.map((items) => (
            <li className="hover:text-slate-800 font-semibold" key={items.id}>
              <Link href={`/${items.href}`}>{items.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
