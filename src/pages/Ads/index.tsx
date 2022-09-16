import { useEffect } from 'react';
import { useAds } from '../../store/useAds';
import { Swiper as PaginationSlider, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel, Navigation } from 'swiper';
import { CardAd } from '../../components/CardAd';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Container } from './styles';

export function Ads() {
  const gameId = localStorage.getItem('@gameId');
  const { getAds, ads } = useAds((state) => state);

  useEffect(() => {
    if (!gameId) return;

    getAds(gameId);

    localStorage.removeItem('@gameId');

    return () => {
      localStorage.removeItem('@gameId');
    };
  }, []);

  return (
    <Container>
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
