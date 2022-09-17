import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { api } from '../../configs/global/axios';

export type IGameProps = {
  id: string;
  title: string;
  coverUrl: string;
  _count: {
    ad: number;
  };
};

interface IUseGamesProps {
  getAll(): Promise<void>;
  getGame(id: string): Promise<void>;
  refetch(): Promise<void>;
  games: IGameProps[] | null;
  game: IGameProps | null;
  isLoading: boolean;
  isError: boolean;
}

export const useGames = create<IUseGamesProps>()(
  devtools(
    persist(
      (set) => ({
        games: null,
        game: null,
        isError: false,
        isLoading: false,
        async getAll() {
          set((state) => ({ ...state, isLoading: true }));
          try {
            const { data } = await api.get('/games');

            set((state) => ({ ...state, isLoading: false, games: data.games }));
          } catch (err) {
            set((state) => ({ ...state, isError: true }));
          }
        },
        async refetch(interval?: number) {
          try {
            if (interval) {
              setInterval(async () => {
                const { data } = await api.get('/games');
                set((state) => ({
                  ...state,
                  isLoading: false,
                  games: data.games,
                }));
              }, interval);

              return;
            }

            const { data } = await api.get('/games');

            set((state) => ({ ...state, games: data.games }));
          } catch (err) {
            set((state) => ({ ...state, isError: true }));
          }
        },
        async getGame(id: string) {
          try {
            const { data } = await api.get(`/games/${id}`);

            set((state) => ({ ...state, game: data.game }));
          } catch (err) {
            set((state) => ({ ...state, isError: true }));
          }
        },
      }),
      { name: '@eSportsGames' },
    ),
  ),
);
