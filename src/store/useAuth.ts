import { IUser } from '@/utils/types';
import { create } from 'zustand';

interface IAuth {
    user: IUser | null;
    isAuth: boolean;
}

export const useAuth = create<IAuth>((set) => ({
    isAuth: false,
    user: null,
    login: (user: Omit<IUser, 'password'>) => set(() => ({
        isAuth: true,
        user: user
    })),
    logout: () => set(() => ({
        isAuth: false,
        user: null
    })),
}));