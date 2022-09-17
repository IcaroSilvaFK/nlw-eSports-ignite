import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Swiper } from '../../components/Swiper';
import { useGames } from '../../store/useGames';

export function Home() {
  const { games, getAll, isError, isLoading } = useGames((state) => state);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <section>
      <Helmet>
        <title>eSports Rooms</title>
      </Helmet>
      <Swiper games={games} />
    </section>
  );
}
