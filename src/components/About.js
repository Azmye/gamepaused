import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BrandLogo } from './Logo';

export const About = () => {
  return (
    <section id="about" className="bg-slate-900">
      <div className="container px-[24px]">
        <div className="py-24 flex flex-col gap-2 lg:flex-row justify-center">
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-[150px]">
              <BrandLogo />
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col text-center justify-center lg:text-start">
            <h2 className="font-bold text-2xl text-primary">About us</h2>
            <p className="font-semibold text-white text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nemo excepturi dolor veritatis a officia sapiente magnam ducimus quisquam rerum!</p>
          </div>
          <div className="lg:w-1/3 flex flex-col gap-2 justify-center items-center ">
            <h2 className="font-semibold text-2xl text-white">Follow us</h2>
            <ul className="gap-2 text-slate-700 flex">
              <li className="group">
                <Link className="group-hover:text-blue-700">
                  <FaFacebook size={27} />
                </Link>
              </li>
              <li className="group">
                <Link className="group-hover:text-purple-700">
                  <FaInstagram size={27} />
                </Link>
              </li>
              <li className="group">
                <Link className="group-hover:text-slate-500">
                  <FaTiktok size={27} />
                </Link>
              </li>
              <li className="group">
                <Link className="group-hover:text-red-700">
                  <FaYoutube size={27} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
