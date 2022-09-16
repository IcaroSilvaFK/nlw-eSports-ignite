import { Swiper as PaginationSlider, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';

import { Card } from '../Card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { toastError } from '../../helpers/toastError';

export type IGameProps = {
  id: string;
  title: string;
  coverUrl: string;
  _count: {
    ad: number;
  };
};
interface IGamesProps {
  games: IGameProps[];
  onClick?: () => void;
}

export function Swiper({ games, onClick }: IGamesProps) {
  const navigate = useNavigate();

  function handleNavigate(id: string) {
    const game = games.filter((game) => game.id === id);

    if (game[0]._count.ad <= 0) {
      return toastError(
        'Inflezmente não temos anúcios para este game. Aproveite e seja o primeiro!',
      );
    }

    localStorage.setItem('@gameId', game[0].id);

    navigate(`/game/${game[0].title}`);
  }

  return (
    <PaginationSlider
      slidesPerView={6}
      initialSlide={2}
      spaceBetween={30}
      centeredSlides={true}
      mousewheel={true}
      keyboard={true}
      navigation={true}
      modules={[Pagination, Navigation, Mousewheel, Keyboard]}
      className="SwiperModal"
    >
      {games?.map((element) => (
        <SwiperSlide key={element.id}>
          <Card
            duoAmount={element._count.ad}
            gameTitle={element.title}
            gameCover={element.coverUrl}
            onClick={() => handleNavigate(element.id)}
          />
        </SwiperSlide>
      ))}
    </PaginationSlider>
  );
}
