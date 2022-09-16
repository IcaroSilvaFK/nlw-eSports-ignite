import { useEffect } from 'react';

import { Swiper } from '../../components/Swiper';
import { useGames } from '../../store/useGames';

export function Home() {
  const { games, getAll, isError, isLoading } = useGames((state) => state);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <section>
      <Swiper games={games} />
    </section>
  );
}
