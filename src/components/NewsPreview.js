import { Link } from 'react-router-dom';

export const NewsPreview = () => {
  return (
    <section id="news-preview" className="bg-slate-300">
      <div className="container px-[16px]">
        <div className="py-24">
          <div className="w-full flex justify-center items-center">
            <Link>
              <h2 className="text-primary font-semibold text-3xl px-4 py-1 border-2 border-transparent  hover:border-primary rounded-full" title="All News">
                Latest News
              </h2>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <h3 className="text-secondary font-bold text-center text-2xl">New Post</h3>
              <div className="flex flex-col bg-slate-100 shadow-lg rounded-xl">
                <div className="w-full overflow-hidden rounded-t-xl">
                  <Link>
                    <img src={process.env.PUBLIC_URL + `./assets/images/gta-vi.jpeg`} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col px-4 py-2">
                  <time>November 28, 2022</time>
                  <Link>
                    <h2 className="font-semibold text-2xl text-secondary  hover:text-slate-900">Rockstar will released GTA VII trailer in November..?</h2>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col  bg-slate-100 shadow-lg rounded-xl lg:flex-row">
                <div className="w-full overflow-hidden rounded-xl rounded-r-none">
                  <Link>
                    <img src={process.env.PUBLIC_URL + `./assets/images/re4.png`} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col px-4 py-2 justify-center">
                  <time>November 25, 2022</time>
                  <Link>
                    <h2 className="font-semibold text-2xl text-secondary  hover:text-slate-900">Resident Evil 4 Remake Drop New Trailer</h2>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  bg-slate-100 shadow-lg rounded-xl lg:flex-row">
                <div className="w-full overflow-hidden rounded-xl rounded-r-none">
                  <Link>
                    <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col px-4 py-2 justify-center">
                  <time>November 23, 2022</time>
                  <Link>
                    <h2 className="font-semibold text-2xl text-secondary  hover:text-slate-900">God of War Ragnarok Preview</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <h3 className="text-secondary font-bold text-center text-2xl">Trending</h3>
              <div className="flex flex-col  bg-slate-100 shadow-lg rounded-xl lg:flex-row">
                <div className="w-full overflow-hidden rounded-xl rounded-r-none">
                  <Link>
                    <img src={process.env.PUBLIC_URL + `./assets/images/re4.png`} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col px-4 py-2 justify-center">
                  <time>November 28, 2022</time>
                  <Link>
                    <h2 className="font-semibold text-2xl text-secondary  hover:text-slate-900">Resident Evil Remake Drop New Trailer</h2>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  bg-slate-100 shadow-lg rounded-xl lg:flex-row">
                <div className="w-full overflow-hidden rounded-xl rounded-r-none">
                  <Link>
                    <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col px-4 py-2 justify-center">
                  <time>November 28, 2022</time>
                  <Link>
                    <h2 className="font-semibold text-2xl text-secondary  hover:text-slate-900">God of War Ragnarok Preview</h2>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  bg-slate-100 shadow-lg rounded-xl lg:flex-row">
                <div className="w-full overflow-hidden rounded-xl rounded-r-none">
                  <Link>
                    <img src={process.env.PUBLIC_URL + `./assets/images/gta-vi.jpeg`} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col px-4 py-2 justify-center">
                  <time>November 28, 2022</time>
                  <Link>
                    <h2 className="font-semibold text-2xl text-secondary  hover:text-slate-900">Rockstar will released GTA VII trailer in November..?</h2>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  bg-slate-100 shadow-lg rounded-xl lg:flex-row">
                <div className="w-full overflow-hidden rounded-xl rounded-r-none">
                  <Link>
                    <img src={process.env.PUBLIC_URL + `./assets/images/gotham-k.webp`} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col px-4 py-2 justify-center">
                  <time>November 28, 2022</time>
                  <Link>
                    <h2 className="font-semibold text-2xl text-secondary  hover:text-slate-900">Next-gen game or just a reason for an unpotimized Games..?</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
