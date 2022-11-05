import { FaDesktop, FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { Link } from 'react-router-dom';

const GamesFeatured = () => {
  return (
    <section id="game-featured" className="bg-slate-300">
      <div className="container pb-24 px-[16px]">
        <div className="w-full pt-20 pb-4 flex justify-center">
          <Link>
            <h2 className="text-primary font-semibold text-xl lg:text-3xl px-4 py-1 border-2 border-transparent  hover:border-primary rounded-full" title="All Games">
              Our Recommendation in 2022
            </h2>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/5">
            <div className="w-full bg-slate-200 shadow-md rounded-md overflow-hidden ">
              <div className="w-full overflow-hidden rounded-sm h-[310px]">
                <img src={process.env.PUBLIC_URL + `./assets/images/fifa23.jpg`} alt="" className="max-w-full" />
              </div>
              <div className="w-full py-2 px-2 flex flex-col gap-2">
                <h2 className=" font-bold text-lg text-center text-secondary uppercase">FIFA 23</h2>
                <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                  <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent hover:text-primary">Our Reviews</Link>
                </div>
                <div className="flex gap-3 items-end mt-1 lg:flex-row lg:items-center justify-between">
                  <ul className=" flex gap-3 text-white">
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
                      <li>
                        <SiNintendoswitch size={24} />
                      </li>
                    </ul>
                  </ul>
                  <ul className="flex gap-2 text-slate-700 self-end opacity-80 hover:opacity-100">
                    <li className="uppercase bg-slate-300 px-2 py-1  rounded-lg ">
                      <Link>#sports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/5 ">
            <div className="w-full bg-slate-200 shadow-md rounded-md overflow-hidden ">
              <div className="w-full overflow-hidden rounded-sm h-[310px]">
                <img src={process.env.PUBLIC_URL + `./assets/images/mw2.jpg`} alt="" className="" />
              </div>
              <div className="w-full  py-2 px-2 flex flex-col gap-2 ">
                <h2 className=" font-bold text-lg text-center text-secondary uppercase">Call of duty MW II</h2>
                <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                  <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent hover:text-primary">Our Reviews</Link>
                </div>
                <div className="flex gap-3 items-end mt-1 lg:flex-row lg:items-center justify-between">
                  <ul className=" flex gap-3 text-white">
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
                  </ul>
                  <ul className="flex gap-2 text-slate-700 self-end opacity-80 hover:opacity-100">
                    <li className="uppercase bg-slate-300 px-2 py-1  rounded-lg ">
                      <Link>#sports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/5 ">
            <div className="w-full bg-slate-200 shadow-md rounded-md overflow-hidden ">
              <div className="w-full overflow-hidden rounded-sm h-[310px]">
                <img src={process.env.PUBLIC_URL + `./assets/images/ptl.jpg`} alt="" className="" />
              </div>
              <div className="w-full  py-2 px-2 flex flex-col gap-2 ">
                <h2 className=" font-bold text-lg text-center text-secondary uppercase">A plague tale requiem</h2>
                <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                  <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent hover:text-primary">Our Reviews</Link>
                </div>
                <div className="flex gap-3 items-end mt-1 lg:flex-row lg:items-center justify-between">
                  <ul className=" flex gap-3 text-white">
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
                  </ul>
                  <ul className="flex gap-2 text-slate-700 self-end opacity-80 hover:opacity-100">
                    <li className="uppercase bg-slate-300 px-2 py-1  rounded-lg ">
                      <Link>#sports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/5 ">
            <div className="w-full bg-slate-200 shadow-md rounded-md overflow-hidden ">
              <div className="w-full overflow-hidden rounded-sm h-[310px]">
                <img src={process.env.PUBLIC_URL + `./assets/images/splaton.jpg`} alt="" className="" />
              </div>
              <div className="w-full  py-2 px-2 flex flex-col gap-2 ">
                <h2 className=" font-bold text-lg text-center text-secondary uppercase">Splatoon 3</h2>
                <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                  <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent hover:text-primary">Our Reviews</Link>
                </div>
                <div className="flex gap-3 items-end mt-1 lg:flex-row lg:items-center justify-between">
                  <ul className=" flex gap-3 text-white">
                    <ul className=" flex gap-3 text-primary">
                      <li>
                        <SiNintendoswitch size={24} />
                      </li>
                    </ul>
                  </ul>
                  <ul className="flex gap-2 text-slate-700 self-end opacity-80 hover:opacity-100">
                    <li className="uppercase bg-slate-300 px-2 py-1  rounded-lg ">
                      <Link>#sports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/5 ">
            <div className="w-full bg-slate-200 shadow-md rounded-md overflow-hidden ">
              <div className="w-full overflow-hidden rounded-sm h-[310px]">
                <img src={process.env.PUBLIC_URL + `./assets/images/elden.jpg`} alt="" className="" />
              </div>
              <div className="w-full  py-2 px-2 flex flex-col gap-2 ">
                <h2 className=" font-bold text-lg text-center text-secondary uppercase">Elden Ring</h2>
                <div className="grid grid-cols-2 gap-3 text-white font-semibold ">
                  <Link className="w-full rounded-xl col-span-2 bg-primary text-white font-semibold text-center border-2 border-slate-300 hover:bg-transparent hover:text-primary">Our Reviews</Link>
                </div>
                <div className="flex gap-3 items-end mt-1 lg:flex-row lg:items-center justify-between">
                  <ul className=" flex gap-3 text-white">
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
                  </ul>
                  <ul className="flex gap-2 text-slate-700 self-end opacity-80 hover:opacity-100">
                    <li className="uppercase bg-slate-300 px-2 py-1  rounded-lg ">
                      <Link>#sports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesFeatured;
