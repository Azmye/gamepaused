import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={`items-center inline-flex justify-center`} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedRight: () => updateIndex(activeIndex + 1),
    onSwipedLeft: () => updateIndex(activeIndex - 1),
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div {...handlers} className="carousel overflow-hidden relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={`inner whitespace-nowrap transition duration-500 `} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className="w-full  justify-between absolute  bottom-4 hidden lg:flex">
        <button
          className="p-2 pl-0"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <div className="bg-slate-300 opacity-30 hover:opacity-100 p-2 rounded-r-full  text-primary ">
            <FaArrowLeft size={24} />
          </div>
        </button>
        <button
          className="p-2 pr-0"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <div className="bg-slate-300 opacity-30 hover:opacity-100 p-2 rounded-l-full  text-primary ">
            <FaArrowRight size={24} />
          </div>
        </button>
      </div>
      <div className="w-full flex justify-center gap-2 absolute bottom-2">
        {React.Children.map(children, (child, index) => {
          return (
            <button className={`flex cursor-pointer `} onClick={() => updateIndex(index)}>
              <span className={`w-8 h-1 my-1 rounded-full bg-white/30 backdrop-blur-xl ${index === activeIndex ? 'bg-primary/100' : 'bg-slate-300'}`}></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
