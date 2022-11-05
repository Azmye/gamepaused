import { FaDesktop, FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { Link } from 'react-router-dom';

export const NewReleased = () => {
  return (
    <section id="new-released" className="bg-slate-900">
      <div className="container p-[16px] lg:p-0">
        <div className="w-full pt-20 pb-4 flex justify-center">
          <Link>
            <h2 className="text-primary font-semibold text-3xl px-4 py-1 border-2 border-transparent  hover:border-primary rounded-full" title="All Games">
              New Released
            </h2>
          </Link>
        </div>
        <div className="flex flex-col gap-3 lg:grid grid-cols-3 pt-4 pb-20">
          <div className="w-full ">
            <div className="w-full overflow-hidden rounded-xl shadow-xl">
              <img src={process.env.PUBLIC_URL + `./assets/images/bayonetta-3.jpg`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-white font-bold text-2xl text-center">Bayonetta 3</h2>
              <time className="text-slate-500 font-semibold text-xl text-center">Released on : October 28, 2022</time>
              <p className="text-slate-300 text-lg text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                <Link className="w-full rounded-xl col-span-2 lg:col-span-1 bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Nintendo Shop</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex flex-col gap-3 items-end mt-1 md:flex-row lg:items-center justify-between">
                <ul className="flex gap-3 text-white">
                  <li>
                    <SiNintendoswitch size={24} />
                  </li>
                </ul>
                <ul className="flex gap-2 text-sky-500 self-end">
                  <li className="uppercase bg-slate-500 px-2 py-1 rounded-lg hover:bg-slate-700 ">
                    <Link>#Action</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full overflow-hidden rounded-xl shadow-xl">
              <img src={process.env.PUBLIC_URL + `./assets/images/cod-mw2.jpg`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-white font-bold text-2xl text-center">Call of Duty Modern Warfare II</h2>
              <time className="text-slate-500 font-semibold text-xl text-center">Released on : October 28, 2022 </time>
              <p className="text-slate-300 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam quisquam iste ut, culpa ea!</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold lg:grid-cols-3">
                <Link className="w-full rounded-xl bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Steam</Link>
                <Link className="w-full rounded-xl bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Battle.net</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex flex-col gap-3 items-end mt-1 md:flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-white">
                  <li>
                    <FaPlaystation size={24} />
                  </li>
                  <li>
                    <FaDesktop size={24} />
                  </li>
                  <li>
                    <FaXbox size={24} />
                  </li>
                </ul>
                <ul className="flex gap-2 text-sky-500 self-end">
                  <li className="uppercase bg-slate-500 px-2 py-1 rounded-lg hover:bg-slate-700 ">
                    <Link>#Action</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full overflow-hidden rounded-xl shadow-xl">
              <img src={process.env.PUBLIC_URL + `./assets/images/gotham-k.webp`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-white font-bold text-2xl text-center">Gotham Knights</h2>
              <time className="text-slate-500 font-semibold text-xl text-center">Released on : October 21, 2022</time>
              <p className="text-slate-300 text-lg text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold lg:grid-cols-3">
                <Link className="w-full rounded-xl bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Steam</Link>
                <Link className="w-full rounded-xl bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Epic Games</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex flex-col gap-3 items-end mt-1 md:flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-white">
                  <li>
                    <FaPlaystation size={24} />
                  </li>
                  <li>
                    <FaDesktop size={24} />
                  </li>
                  <li>
                    <FaXbox size={24} />
                  </li>
                </ul>
                <ul className="flex gap-2 text-sky-500 self-end">
                  <li className="uppercase bg-slate-500 px-2 py-1 rounded-lg hover:bg-slate-700 ">
                    <Link>#Action</Link>
                  </li>
                  <li className="uppercase bg-slate-500 px-2 py-1 rounded-lg hover:bg-slate-700">
                    <Link>#adventure</Link>
                  </li>
                  <li className="uppercase bg-slate-500 px-2 py-1 rounded-lg hover:bg-slate-700">
                    <Link>#rpg</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
