import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="container px-[16px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-1 justify-between py-4">
          <div className="flex items-center">
            <span className="text-white">&copy;</span>
            <Link>
              <h2 className="font-bold text-primary text-2xl flex">Gamepaused</h2>
            </Link>
          </div>
          <div className="flex items-center ">
            <h2 className="font-semibold text-white flex">Gamepaused Southeast Asia Region</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
