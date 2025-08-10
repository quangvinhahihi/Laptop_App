import { create } from 'zustand'

type Store = {
  countQuantityCart: number;
  incQuantityCart: () => void;
};

export const useStore = create<Store>()((set) => ({
  countQuantityCart: 100,
  incQuantityCart: () => set((state) => ({ countQuantityCart: state.countQuantityCart + 1 })),
}))