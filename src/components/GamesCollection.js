import { FaDesktop, FaPlaystation, FaXbox } from 'react-icons/fa';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { SiNintendoswitch } from 'react-icons/si';
import { Link } from 'react-router-dom';

const GamesCollection = () => {
  return (
    <section id="games-collection" className="bg-slate-100">
      <div className="container py-20">
        <div className="w-full  pb-4 flex justify-center">
          <Link>
            <h2 className="text-primary font-semibold text-3xl px-4 py-1 border-2 border-transparent  hover:border-primary rounded-full" title="All Games">
              All Games
            </h2>
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 py-10 justify-items-center px-10 gap-10">
          <div className="w-full  bg-white/30 shadow-xl rounded-xl overflow-hidden">
            <div className="w-full overflow-hidden ">
              <img src={process.env.PUBLIC_URL + `./assets/images/bayonetta-3.jpg`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-slate-800 font-bold text-2xl text-center">Bayonetta 3</h2>
              <time className="text-slate-500 font-semibold text-md lg:text-xl text-center">Released on : October 28, 2022</time>
              <p className="text-secondary text-lg text-justify font-semibold hidden lg:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                <Link className="w-full rounded-xl col-span-2 lg:col-span-1 bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Nintendo Shop</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary  font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex gap-3 items-end mt-1 flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-primary">
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
          <div className="w-full  bg-white/30 shadow-xl rounded-xl overflow-hidden">
            <div className="w-full overflow-hidden ">
              <img src={process.env.PUBLIC_URL + `./assets/images/cod-mw2.jpg`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-slate-800 font-bold text-2xl text-center">Call of duty modern warfare II</h2>
              <time className="text-slate-500 font-semibold text-md lg:text-xl text-center">Released on : October 28, 2022</time>
              <p className="text-secondary text-lg text-justify font-semibold hidden lg:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                <Link className="w-full rounded-xl col-span-2 lg:col-span-1 bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Steam</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary  font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex gap-3 items-end mt-1 flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-primary">
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
          <div className="w-full  bg-white/30 shadow-xl rounded-xl overflow-hidden">
            <div className="w-full overflow-hidden ">
              <img src={process.env.PUBLIC_URL + `./assets/images/gotham-k.webp`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-slate-800 font-bold text-2xl text-center">Gotham Knights</h2>
              <time className="text-slate-500 font-semibold text-md lg:text-xl text-center">Released on : October 28, 2022</time>
              <p className="text-secondary text-lg text-justify font-semibold hidden lg:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                <Link className="w-full rounded-xl col-span-2 lg:col-span-1 bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Steam</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary  font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex gap-3 items-end mt-1 flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-primary">
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
          <div className="w-full  bg-white/30 shadow-xl rounded-xl overflow-hidden">
            <div className="w-full overflow-hidden ">
              <img src={process.env.PUBLIC_URL + `./assets/images/plt-lg.jpg`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-slate-800 font-bold text-2xl text-center">A PLAGUE TALE REQUIEM</h2>
              <time className="text-slate-500 font-semibold text-md lg:text-xl text-center">Released on : October 28, 2022</time>
              <p className="text-secondary text-lg text-justify font-semibold hidden lg:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                <Link className="w-full rounded-xl col-span-2 lg:col-span-1 bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Steam</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary  font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex gap-3 items-end mt-1 flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-primary">
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
          <div className="w-full  bg-white/30 shadow-xl rounded-xl overflow-hidden">
            <div className="w-full overflow-hidden ">
              <img src={process.env.PUBLIC_URL + `./assets/images/hero.webp`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-slate-800 font-bold text-2xl text-center">Mario+rabbids sparks of hope</h2>
              <time className="text-slate-500 font-semibold text-md lg:text-xl text-center">Released on : October 28, 2022</time>
              <p className="text-secondary text-lg text-justify font-semibold hidden lg:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                <Link className="w-full rounded-xl col-span-2 lg:col-span-1 bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Steam</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary  font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex gap-3 items-end mt-1 flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-primary">
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
          <div className="w-full  bg-white/30 shadow-xl rounded-xl overflow-hidden">
            <div className="w-full overflow-hidden ">
              <img src={process.env.PUBLIC_URL + `./assets/images/wrc-gen.webp`} alt="" className="max-w-full" />
            </div>
            <div className="w-full py-2 px-4 flex flex-col gap-2">
              <h2 className="text-slate-800 font-bold text-2xl text-center">WRC Generations</h2>
              <time className="text-slate-500 font-semibold text-md lg:text-xl text-center">Released on : October 28, 2022</time>
              <p className="text-secondary text-lg text-justify font-semibold hidden lg:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione, corrupti architecto blanditiis ab ut?</p>
              <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                <Link className="w-full rounded-xl col-span-2 lg:col-span-1 bg-slate-500 text-center border-2 border-slate-300 hover:bg-transparent">Steam</Link>
                <Link className="w-full rounded-xl col-span-2 bg-primary  font-semibold text-center border-2 border-slate-300 hover:bg-transparent lg:col-span-1">Our Reviews</Link>
              </div>
              <div className="flex gap-3 items-end mt-1 flex-row lg:items-center justify-between">
                <ul className=" flex gap-3 text-primary">
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
        </div>
        <div className="w-full flex justify-center gap-3 text-2xl text-primary">
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
    </section>
  );
};

export default GamesCollection;
