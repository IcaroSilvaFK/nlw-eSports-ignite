import { MagnifyingGlassPlus } from 'phosphor-react';
import { Button } from '../Button';
import { Container, Col, Title, Ball, Label, Row, Center } from './styles';

interface ICardAdProps {
  name: string;
  timeToPlay: number;
  days: number;
  hourStart: number;
  hourEnd: number;
  audioIsActive: boolean;
}

export function CardAd({
  audioIsActive,
  name,
  timeToPlay,
  days,
  hourEnd,
  hourStart,
}: ICardAdProps) {
  return (
    <Container>
      <Col>
        <Label>Nome</Label>
        <Title>{name}</Title>
      </Col>
      <Col>
        <Label>Tempo de jogo</Label>
        <Title>{timeToPlay} anos</Title>
      </Col>
      <Col>
        <Label>Disponibilidade</Label>
        <Row>
          <Title>{days} dias</Title> <Ball />
          <Title>
            {hourStart}h-{hourEnd}h
          </Title>
        </Row>
      </Col>
      <Col>
        <Label>Chamada de áudio?</Label>
        <Title isActive={audioIsActive ? 'on' : 'off'}>
          {audioIsActive ? 'Sim' : 'Não'}
        </Title>
      </Col>
      <Center>
        <a
          href="https://canary.discord.com/login"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            text="Conectar"
            variant="solid"
            leftIcon={<MagnifyingGlassPlus size={25} />}
          />
        </a>
      </Center>
    </Container>
  );
}
