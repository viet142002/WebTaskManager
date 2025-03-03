import { create } from 'zustand';

export interface IModalConfirm {
    title: string,
    des: string,
    isOpen: boolean,
    onCancel?: (props?: unknown) => void
    onOk?: (props?: unknown) => void
}

interface ILayout {
    modalConfirm: IModalConfirm;
    openModalConfirm: (props: Partial<IModalConfirm>) => void,
    closeModalConfirm: () => void,
    isLoadingGlobal: boolean;
}

const INIT_VALUE: ILayout = {
    modalConfirm: {
        title: '',
        des: '',
        isOpen: false,
        onCancel: undefined,
        onOk: undefined
    },
    openModalConfirm: () => {},
    closeModalConfirm: () => {},
    isLoadingGlobal: false
};

export const useLayout = create<ILayout>((set) => ({
    modalConfirm: INIT_VALUE.modalConfirm,
    openModalConfirm: (props: Partial<IModalConfirm>) => set(() => ({ modalConfirm: { ...INIT_VALUE.modalConfirm, ...props } })),
    closeModalConfirm: () => set(() => ({
        modalConfirm: INIT_VALUE.modalConfirm
    })),

    isLoadingGlobal: INIT_VALUE.isLoadingGlobal,
    toggleLoadingGlobalL: () => set(state => ({ isLoadingGlobal: !state.isLoadingGlobal })),
}));