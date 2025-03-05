import { IUser } from '@/utils/types';
import { create } from 'zustand';

interface IAuth {
    user: IUser | null;
    isAuth: boolean;
    login: (user: Omit<IUser, 'password'>) => void;
    logout: () => void;
}

export const useAuth = create<IAuth>((set) => ({
    isAuth: false,
    user: null,
    login: (user) => set(() => ({
        isAuth: true,
        user: user
    })),
    logout: () => set(() => ({
        isAuth: false,
        user: null
    })),
}));