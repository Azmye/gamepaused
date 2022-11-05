import { useEffect } from 'react';
import NewsHero from '../components/NewsHero';
import { LatestNews } from '../components/NewsLatest';

export const News = () => {
  useEffect(() => {
    document.title = 'News';
  });
  return (
    <>
      <NewsHero />
      <LatestNews />
    </>
  );
};
