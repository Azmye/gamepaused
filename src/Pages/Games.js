import { useEffect } from 'react';
import GamesCollection from '../components/GamesCollection';
import GamesFeatured from '../components/GamesFeatured';
import { GamesHero } from '../components/GamesHero';
import { NewReleased } from '../components/GamesNewReleased';
export const Games = () => {
  useEffect(() => {
    document.title = 'Games Info';
  });
  return (
    <>
      <GamesHero />
      <NewReleased />
      <GamesFeatured />
      <GamesCollection />
    </>
  );
};
