import { Link } from 'react-router-dom';

export const GamesHero = () => {
  return (
    <section id="games-hero">
      <div className="w-full whitespace-normal bg-gradient-to-r from-green-800 to-[#0f3443]  p-[16px] pt-[6rem] lg:pt-[12rem]">
        <div className="container py-24 flex flex-col-reverse gap-2 lg:flex-row">
          <div className="w-full flex flex-col gap-1 lg:w-1/2 justify-center items-center lg:items-start">
            <h1 className="font-bold text-2xl lg:text-3xl text-slate-900">New Titles Arrive!</h1>
            <h2 className="text-center font-bold text-3xl lg:text-5xl text-white lg:text-start">Call of Duty Modern Warfare II</h2>
            <p className="font-semibold text-lg text-slate-300 text-justify lg:pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi ipsa saepe est nobis placeat incidunt rerum sapiente minima.</p>
            <div className=" self-center lg:self-start py-10 lg:pr-10">
              <Link className="bg-primary text-white font-semibold p-3 rounded-full border-primary border-2 transition duration-300 ease-in-out hover:bg-transparent">See our reviews</Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="w-full flex justify-center items-center overflow-hidden shadow-xl rounded-xl ">
              <Link>
                <img src={process.env.PUBLIC_URL + `./assets/images/cod-mw2.jpg`} alt="" className="max-w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
