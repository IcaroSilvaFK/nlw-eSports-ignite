import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface IUseModalProps {
  isOpen: boolean;
  openModal(): void;
  closeModal(): void;
}

export const useModal = create<IUseModalProps>()(
  devtools((set) => ({
    isOpen: false,
    closeModal() {
      set((state) => ({ ...state, isOpen: false }));
    },
    openModal() {
      set((state) => ({ ...state, isOpen: true }));
    },
  })),
);
