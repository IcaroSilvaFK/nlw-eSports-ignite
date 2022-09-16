import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { api } from '../../configs/global/axios';

interface IAdsProps {
  id: string;
  discord: string;
  gameId: string;
  hourEnd: number;
  hourStart: number;
  name: string;
  useVoiceCahnnel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface IUseAdsProps {
  ads: IAdsProps[] | null;
  isError: boolean;
  getAds(id: string): Promise<void>;
  deleteAds(): void;
}

export const useAds = create<IUseAdsProps>()(
  devtools(
    persist(
      (set) => ({
        ads: null,
        isError: false,
        async getAds(id: string) {
          try {
            const { data } = await api.get(`/games/${id}/ads`);

            set((state) => ({ ...state, ads: data.ads }));
          } catch (err) {
            console.log(err);
            set((state) => ({ ...state, isError: true }));
          }
        },
        deleteAds() {
          set((state) => ({ ...state, ads: null }));
        },
      }),
      {
        name: '@Ads',
      },
    ),
  ),
);
