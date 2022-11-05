//https://colorhunt.co/palette/222831393e4600adb5eeeeee

import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { NewReleased } from '../components/GamesNewReleased';
import { NewsPreview } from '../components/NewsPreview';

export const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  });
  return (
    <>
      <Hero />
      <NewReleased />
      <NewsPreview />
    </>
  );
};
