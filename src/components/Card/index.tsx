import { Container } from './styles';

interface ICarProps {
  gameCover: string;
  gameTitle: string;
  duoAmount: number;
  onClick?: () => void;
}

export function Card({ duoAmount, gameCover, gameTitle, onClick }: ICarProps) {
  return (
    <Container cover={gameCover} onClick={onClick}>
      <div>
        <b>{gameTitle}</b>
        <span>{duoAmount} anúncios</span>
      </div>
    </Container>
  );
}
