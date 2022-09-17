import { useEffect } from 'react';
import { Swiper as PaginationSlider, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel, Navigation } from 'swiper';
import { ArrowLeft } from 'phosphor-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { useAds } from '../../store/useAds';
import { CardAd } from '../../components/CardAd';
import { useGames } from '../../store/useGames';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { ButtonAbsolute, Container, ContainerContent } from './styles';

export function Ads() {
  const gameId = localStorage.getItem('@gameId');
  const { getAds, ads } = useAds((state) => state);
  const { game, getGame } = useGames((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!gameId) return;

    getAds(gameId);
    getGame(gameId);
    localStorage.removeItem('@gameId');

    return () => {
      localStorage.removeItem('@gameId');
    };
  }, []);

  return (
    <Container>
      <Helmet>
        <title>{game.title}</title>
      </Helmet>
      <ButtonAbsolute onClick={() => navigate('/')}>
        <ArrowLeft size={25} />
        Voltar
      </ButtonAbsolute>
      <ContainerContent>
        <img src={game.coverUrl} alt={game.title} />
        <h2>{game.title}</h2>
        <span>Conecte-se e comece a jogar!</span>
      </ContainerContent>

      <PaginationSlider
        slidesPerView={6}
        initialSlide={2}
        spaceBetween={30}
        centeredSlides={true}
        mousewheel={true}
        keyboard={true}
        navigation={true}
        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
      >
        {ads?.map((ad) => (
          <SwiperSlide key={ad.id} className="slide-ads">
            <CardAd
              audioIsActive={ad.useVoiceCahnnel}
              days={ad.weekDays.length}
              hourEnd={ad.hourEnd}
              hourStart={ad.hourStart}
              name={ad.name}
              timeToPlay={ad.yearsPlaying}
            />
          </SwiperSlide>
        ))}
      </PaginationSlider>
    </Container>
  );
}
