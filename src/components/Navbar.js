import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaMoon, FaSun, FaTiktok, FaYoutube } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { BrandLogo } from './Logo';

const Navbar = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const hamburger = 'w-8 h-1 my-1 rounded-full bg-secondary transition duration-300 ease-in-out';

  const changeNavbar = () => {
    window.scrollY >= 84 ? setNavScrolled(true) : setNavScrolled(false);
  };

  window.addEventListener('scroll', changeNavbar);

  return (
    <header className={`items-center shadow-md bg-[#EEEEEE] fixed w-full z-[1000]  ${navScrolled ? 'lg:block' : ''}`}>
      <div className={`container mx-auto ${navScrolled ? 'lg:hidden' : ''}`}>
        <div className="px-5 flex flex-row justify-between items-center">
          <div className="w-10 py-3">
            <Link to="/">
              <BrandLogo />
            </Link>
          </div>
          <h2 className="font-bold text-primary text-2xl py-3 ">Gamepaused</h2>
          <ul className="gap-2 text-slate-700 hidden lg:flex">
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
              <Link className="group-hover:text-slate-900">
                <FaTiktok size={27} />
              </Link>
            </li>
            <li className="group">
              <Link className="group-hover:text-red-700">
                <FaYoutube size={27} />
              </Link>
            </li>
          </ul>
          <button className="flex flex-col lg:hidden" onClick={() => setNavIsOpen(!isNavOpen)}>
            <span className={`${hamburger} ${isNavOpen ? 'translate-y-3 rotate-45' : ''}`}></span>
            <span className={`${hamburger} ${isNavOpen ? 'opacity-0' : ''}`}></span>
            <span className={`${hamburger} ${isNavOpen ? '-translate-y-3 -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      <nav className={`w-full justify-between px-5 py-3 bg-white items-center transition duration-300 ease-in-out ${isNavOpen ? '' : 'hidden lg:flex'} ${navScrolled ? 'sticky top-0' : ''}`}>
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <ul className="w-full gap-3 flex justify-evenly border-b-2 pb-2 text-secondary font-semibold lg:w-full lg:justify-start ">
            <li className="group">
              <NavLink to={'/'} end className={({ isActive }) => (isActive ? 'border-b-2 border-primary font-bold' : 'group-hover:border-b-2 group-hover:border-primary group-hover:font-bold')}>
                Home
              </NavLink>
            </li>
            <li className="group">
              <NavLink to={'games'} end className={({ isActive }) => (isActive ? 'border-b-2 border-primary font-bold' : 'group-hover:border-b-2 group-hover:border-primary group-hover:font-bold')}>
                Games Info
              </NavLink>
            </li>
            <li className="group">
              <NavLink to={'news'} end className={({ isActive }) => (isActive ? 'border-b-2 border-primary font-bold' : 'group-hover:border-b-2 group-hover:border-primary group-hover:font-bold')}>
                News
              </NavLink>
            </li>
          </ul>
          <div className="w-full flex flex-row px-1 py-3 justify-between gap-x-2 md:w-1/2 lg:w-1/3 items-center">
            <form className={`lg:w-full flex bg-white `}>
              <input type="text" name="search" id="search" placeholder="Search" className="w-full items-center border-2 border-slate-500 rounded-l-md h-8 p-1 py-4  text-primary font-semibold focus:border-[#00ADB5] focus:outline-none " />
              <input type="submit" value="Search" className="bg-slate-500 rounded-r-md px-2 cursor-pointer text-white" />
            </form>
            <div className="flex gap-x-2">
              <button
                onClick={() => {
                  setDarkMode(!isDarkMode);
                }}
                className={`border-2 border-slate-500 rounded-full p-2 opacity-70 hover:border-primary ${isDarkMode ? 'text-slate-700 hover:opacity-100' : 'text-yellow-500 hover:opacity-100'}`}
              >
                {isDarkMode ? <FaMoon /> : <FaSun />}
              </button>
              <div className="border-2 border-slate-500 p-2 rounded-full cursor-pointer text-primary hover:border-primary group">
                <BsInfoLg />
                <div className="w-[300px] bg-white/30 backdrop-blur-lg mt-5 rounded-xl top-full p-3 text-justify absolute right-5  hidden group-hover:block lg:right-16">
                  <h2 className="font-bold">Notes :</h2>
                  <p className="font-semibold text-black">Some link, button are clickable and some are not so feel free to try it, and most of the data just for a placeholder or not valid.</p>
                  <p className="text-white">Creator : Muhammad Azmi </p>
                  <p className="text-white">Created at : 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
