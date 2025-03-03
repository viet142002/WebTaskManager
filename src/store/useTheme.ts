import { create } from 'zustand';

interface ITheme {
    isDarkMode: boolean;
}

export const useTheme = create<ITheme>((set) => ({
    isDarkMode: false,
    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));