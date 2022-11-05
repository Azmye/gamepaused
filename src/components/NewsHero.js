import { Link } from 'react-router-dom';
import Carousel, { CarouselItem } from './Carousel';

const NewsHero = () => {
  return (
    <section id="news-hero">
      <div className="w-full whitespace-normal bg-gradient-to-r from-sky-600 to-blue-800  p-[16px] pt-[6rem] lg:pt-[12rem]">
        <div className="container py-24 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full flex flex-col gap-1 lg:gap-2">
            <h2 className="font-bold text-4xl text-white">What's new on this week</h2>
            <p className="font-semibold text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, eaque! Id aliquam animi eaque inventore. Labore est sed consequuntur tempore.</p>
            <div className="self-start py-10 lg:pr-10">
              <Link className="bg-primary text-white font-semibold p-3 rounded-full border-primary border-2 transition duration-300 ease-in-out hover:bg-transparent">Learn More . . .</Link>
            </div>
          </div>
          <div className="w-full">
            <Carousel>
              <CarouselItem>
                <div className="overflow-hidden rounded-md">
                  <img src={process.env.PUBLIC_URL + `./assets/images/god-of-war.jpg`} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="overflow-hidden rounded-md">
                  <img src={process.env.PUBLIC_URL + `./assets/images/news-hero.jpg`} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="overflow-hidden rounded-md">
                  <img src={process.env.PUBLIC_URL + `./assets/images/cod-mw2.jpg`} alt="" />
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
