import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const LatestNews = () => {
  return (
    <section id="latest-news">
      <div className="container">
        <div className="w-full flex justify-center items-center pb-10 pt-24">
          <Link>
            <h2 className="text-primary font-semibold text-3xl px-4 py-1 border-2 border-transparent  hover:border-primary rounded-full" title="All News">
              Latest News
            </h2>
          </Link>
        </div>
        <div className="flex flex-row-reverse pb-24 gap-5">
          <div className="px-4 flex-col w-[30%] bg-white h-fit hidden lg:flex">
            <h2 className="w-full font-bold text-secondary text-xl text-start pb-2">Trending</h2>
            <ul className="flex flex-col gap-3">
              <li className="border-b-2 border-slate-300 pb-2">
                <div className="flex flex-row gap-2">
                  <div className="w-1/2 overflow-hidden">
                    <img src={process.env.PUBLIC_URL + `./assets/images/re4.png`} alt="" className="max-w-full" />
                  </div>
                  <div className="w-1/2 ">
                    <h4 className="font-semibold text-primary text-md truncate">Resident Evil 4 Remake new trailer</h4>
                    <p className="font-semibold text-sm text-secondary">Posted at : 29 Oktober 2022</p>
                  </div>
                </div>
              </li>
              <li className="border-b-2 border-slate-300 pb-2">
                <div className="flex flex-row gap-2">
                  <div className="w-1/2 overflow-hidden">
                    <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" />
                  </div>
                  <div className="w-1/2 ">
                    <h4 className="font-semibold text-primary text-md truncate">Finally Elden Ring worthy opponents, God of War Reviews.</h4>
                    <p className="font-semibold text-sm text-secondary">Posted at : 29 Oktober 2022</p>
                  </div>
                </div>
              </li>
              <li className="border-b-2 border-slate-300 pb-2">
                <div className="flex flex-row gap-2">
                  <div className="w-1/2 overflow-hidden">
                    <img src={process.env.PUBLIC_URL + `./assets/images/cod-mw2.jpg`} alt="" className="max-w-full" />
                  </div>
                  <div className="w-1/2 ">
                    <h4 className="font-semibold text-primary text-md truncate">Call of duty modern warfare II Reviews</h4>
                    <p className="font-semibold text-sm text-secondary">Posted at : 29 Oktober 2022</p>
                  </div>
                </div>
              </li>
              <li className="border-b-2 border-slate-300 pb-2">
                <div className="flex flex-row gap-2">
                  <div className="w-1/2 overflow-hidden">
                    <img src={process.env.PUBLIC_URL + `./assets/images/plt-lg.jpg`} alt="" className="max-w-full" />
                  </div>
                  <div className="w-1/2 ">
                    <h4 className="font-semibold text-primary text-md truncate">A Plague tale requiem</h4>
                    <p className="font-semibold text-sm text-secondary">Posted at : 29 Oktober 2022</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col px-6 w-full lg:w-[70%]">
            <div className="flex flex-col gap-2 py-2 justify-center items-center border-b-2">
              <div className="overflow-hidden">
                <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" className="max-w-full" />
              </div>
              <div className="w-full">
                <h2 className="font-bold text-primary text-lg">Finally Elden Ring worthy opponents, God of War Reviews. </h2>
                <time className="font-semibold">Posted at : 3 November 2022</time>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate exercitationem voluptatibus illo cum! Corrupti et ullam voluptatem recusandae odit.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 py-2 border-b-2">
              <div className="overflow-hidden w-full lg:w-1/3">
                <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" className="max-w-full" />
              </div>
              <div className="flex flex-col w-full lg:w-2/3">
                <h2 className="font-bold text-primary text-lg">Finally Elden Ring worthy opponents, God of War Reviews. </h2>
                <time className="font-semibold">Posted at : 3 November 2022</time>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate exercitationem voluptatibus illo cum! Corrupti et ullam voluptatem recusandae odit.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 py-2 border-b-2">
              <div className="overflow-hidden w-full lg:w-1/3">
                <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" className="max-w-full" />
              </div>
              <div className="flex flex-col w-full lg:w-2/3">
                <h2 className="font-bold text-primary text-lg">Finally Elden Ring worthy opponents, God of War Reviews. </h2>
                <time className="font-semibold">Posted at : 3 November 2022</time>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate exercitationem voluptatibus illo cum! Corrupti et ullam voluptatem recusandae odit.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 py-2 border-b-2">
              <div className="overflow-hidden w-full lg:w-1/3">
                <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" className="max-w-full" />
              </div>
              <div className="flex flex-col w-full lg:w-2/3">
                <h2 className="font-bold text-primary text-lg">Finally Elden Ring worthy opponents, God of War Reviews. </h2>
                <time className="font-semibold">Posted at : 3 November 2022</time>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate exercitationem voluptatibus illo cum! Corrupti et ullam voluptatem recusandae odit.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 py-2 border-b-2">
              <div className="overflow-hidden w-full lg:w-1/3">
                <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" className="max-w-full" />
              </div>
              <div className="flex flex-col w-full lg:w-2/3">
                <h2 className="font-bold text-primary text-lg">Finally Elden Ring worthy opponents, God of War Reviews. </h2>
                <time className="font-semibold">Posted at : 3 November 2022</time>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate exercitationem voluptatibus illo cum! Corrupti et ullam voluptatem recusandae odit.</p>
              </div>
            </div>
            <div className="w-full flex pt-5 justify-end gap-3 text-2xl text-primary">
              <button>
                <IoMdArrowDropleft size={30} />
              </button>
              <div className="flex gap-3">
                <button className="border-b-2 border-primary hover:border-primary font-semibold text-secondary">1</button>
                <button className="border-b-2 border-transparent hover:border-primary font-semibold text-secondary">2</button>
                <button className="border-b-2 border-transparent hover:border-primary font-semibold text-secondary">3</button>
                <button className="border-b-2 border-transparent hover:border-primary font-semibold text-secondary">4</button>
                <button className="border-b-2 border-transparent hover:border-primary font-semibold text-secondary">5</button>
              </div>
              <button>
                <IoMdArrowDropright size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
