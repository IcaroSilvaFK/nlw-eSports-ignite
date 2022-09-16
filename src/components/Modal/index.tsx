import { Check, GameController } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Select, { StylesConfig } from 'react-select';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';

import { useModal } from '../../store/useModal';
import { Button } from '../Button';

import {
  ButtonsContainer,
  CheckButton,
  Col,
  Container,
  FlexEnd,
  Modal as ModalStyles,
  Row,
  CheckContainer,
  RootCheck,
  IndicatorCheck,
} from './styles';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { api } from '../../configs/global/axios';
import { valueContainerCSS } from 'react-select/dist/declarations/src/components/containers';
import axios from 'axios';
import { useGames } from '../../store/useGames';
import { toastError } from '../../helpers/toastError';
import { toastSuccess } from '../../helpers/toastSuccess';

type IOptionsType = {
  label: string;
  value: string;
};

interface IFormProps {
  name: string;
  years_playing: string;
  discord: string;
  hour_start: number;
  hour_end: number;
  use_voice_channel: string;
}

interface IResponseProps {
  games: {
    id: string;
    title: string;
  }[];
}

export function Modal() {
  const { isOpen, closeModal } = useModal((state) => state);
  const { colors } = useTheme();
  const [gameId, setGameId] = useState<string | number>(null);
  const [daysOnlyPlay, setDaysOnlyPlay] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<IFormProps>();
  const [options, setOptions] = useState<IOptionsType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useGames((state) => state);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    (async () => {
      try {
        const { data } = await api.get<IResponseProps>('/games');

        const formatedOptions = data.games.map((game) => ({
          value: game.id,
          label: game.title,
        }));
        setOptions(formatedOptions);
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      window.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });
    };
  }, []);

  const styles: StylesConfig = {
    container: (style) => ({
      ...style,
      background: colors.zinc[400],
      border: 0,
      outline: 0,
    }),
    control: (style) => ({
      ...style,
      border: 0,
      borderRadius: 0,
      background: colors.zinc[700],
      outline: 0,
      boxShadow: 'none',
      width: 410,
    }),
    menu: (style) => ({
      ...style,
      background: colors.zinc[700],
    }),
    option: (style) => ({
      ...style,
      background: 'transparent',
      ':hover': {
        background: colors.zinc[400],
      },
    }),
    singleValue: (style) => ({
      ...style,
      color: colors.white,
    }),
  };

  function activeAndAddDayInArray(day: string) {
    if (daysOnlyPlay.includes(day)) {
      return desactiveAndAddDayInArray(day);
    }

    setDaysOnlyPlay((prev) => [...prev, day]);
  }

  function desactiveAndAddDayInArray(day: string) {
    if (!daysOnlyPlay.includes(day)) return;

    const newArray = daysOnlyPlay.filter((dayPlay) => dayPlay !== day);
    console.log(newArray);
    setDaysOnlyPlay(newArray);
  }

  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    setIsLoading(true);
    const body = {
      name: data.name,
      years_playing: +data.years_playing,
      discord: data.discord,
      hour_start: +data.hour_start,
      hour_end: +data.hour_end,
      use_voice_channel: data.use_voice_channel === 'on' ? true : false,
      week_days: daysOnlyPlay,
    };

    try {
      await api.post(`games/${gameId}/ads`, body);
      await refetch();
      setIsLoading(false);
      toastSuccess('Convite adicionado com sucesso');
      closeModal();
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toastError('Infelizmente aconteceu um error ao cadastrar');
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Container onClick={closeModal}>
      <ModalStyles onClick={(e) => e.stopPropagation()}>
        <h3>Publique um anúncio</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Col>
            <span>Qual o game?</span>
            <Select
              options={options}
              placeholder="Selecione o game que deseja jogar"
              styles={styles}
              onChange={(e: IOptionsType) => setGameId(e.value)}
            />
          </Col>
          <Col>
            <span>Seu nome (ou nickname)</span>
            <input
              type="text"
              placeholder="Como te chamam dentro do game?"
              {...register('name')}
            />
          </Col>
          <Row>
            <Col>
              <span>Joga há quantos anos?</span>
              <input
                type="number"
                placeholder="Tudo bem ser Zero"
                className="input--min"
                {...register('years_playing')}
              />
            </Col>
            <Col>
              <span>Qual seu Discord?</span>
              <input
                type="text"
                placeholder="Usuario #0000"
                className="input--min"
                {...register('discord')}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Quando costuma jogar?</span>
              <ButtonsContainer>
                <CheckButton
                  onClick={() => activeAndAddDayInArray('Segunda')}
                  isActive={daysOnlyPlay.includes('Segunda')}
                  type="button"
                >
                  S
                </CheckButton>
                <CheckButton
                  onClick={() => activeAndAddDayInArray('Terca')}
                  isActive={daysOnlyPlay.includes('Terca')}
                  type="button"
                >
                  T
                </CheckButton>
                <CheckButton
                  onClick={() => activeAndAddDayInArray('Quarta')}
                  isActive={daysOnlyPlay.includes('Quarta')}
                  type="button"
                >
                  Q
                </CheckButton>
                <CheckButton
                  onClick={() => activeAndAddDayInArray('Quinta')}
                  isActive={daysOnlyPlay.includes('Quinta')}
                  type="button"
                >
                  Q
                </CheckButton>
                <CheckButton
                  onClick={() => activeAndAddDayInArray('Sexta')}
                  isActive={daysOnlyPlay.includes('Sexta')}
                  type="button"
                >
                  S
                </CheckButton>
                <CheckButton
                  onClick={() => activeAndAddDayInArray('Sabado')}
                  isActive={daysOnlyPlay.includes('Sabado')}
                  type="button"
                >
                  S
                </CheckButton>
                <CheckButton
                  onClick={() => activeAndAddDayInArray('Domingo')}
                  isActive={daysOnlyPlay.includes('Domingo')}
                  type="button"
                >
                  D
                </CheckButton>
              </ButtonsContainer>
            </Col>

            <Row>
              <Col>
                <span>Qual horário do dia?</span>
                <Row>
                  <input
                    type="number"
                    placeholder="De"
                    {...register('hour_start')}
                  />
                  <input
                    type="number"
                    placeholder="Até"
                    {...register('hour_end')}
                  />
                </Row>
              </Col>
            </Row>
          </Row>

          <CheckContainer>
            <RootCheck {...register('use_voice_channel')}>
              <IndicatorCheck>
                <Check size={20} />
              </IndicatorCheck>
            </RootCheck>
            <label>Costumo me conectar ao chat de voz</label>
          </CheckContainer>

          <FlexEnd>
            <Button text="Cancelar" variant="darken" onClick={closeModal} />

            {!isLoading && (
              <Button
                text="Encontrar duo"
                variant="solid"
                leftIcon={<GameController size={25} />}
              />
            )}
          </FlexEnd>
        </form>
      </ModalStyles>
    </Container>,
    document.getElementById('modal'),
  );
}
