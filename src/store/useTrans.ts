import { create } from 'zustand';

interface ITrang {
    lang: 'vi' | 'en';
}

export const useTrans = create<ITrang>((set) => ({
    lang: 'vi',
    changeLang: (lang: 'vi' | 'en') => set(() => ({ lang: lang })),
}));