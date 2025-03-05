import { create } from 'zustand';

export interface IModalConfirm {
    title: string,
    des: string,
    isOpen: boolean,
    titleCancel?: string;
    titleOk?: string;
    onCancel?: (props?: unknown) => void
    onOk?: (props?: unknown) => void
}

interface ILayout {
    modalConfirm: IModalConfirm;
    openModalConfirm: (props: Partial<IModalConfirm>) => void,
    closeModalConfirm: () => void,

    isLoadingGlobal: boolean;
    toggleLoadingGlobal: () => void;
}

const INIT_VALUE: ILayout = {
    modalConfirm: {
        title: '',
        des: '',
        titleOk: undefined,
        titleCancel: undefined,
        isOpen: false,
        onCancel: undefined,
        onOk: undefined
    },
    openModalConfirm: () => {},
    closeModalConfirm: () => {},
    isLoadingGlobal: false,
    toggleLoadingGlobal: () => {}
};

export const useLayout = create<ILayout>((set) => ({
    modalConfirm: INIT_VALUE.modalConfirm,
    openModalConfirm: (props: Partial<IModalConfirm>) => set(() => ({ modalConfirm: { ...INIT_VALUE.modalConfirm, ...props } })),
    closeModalConfirm: () => set(() => ({
        modalConfirm: INIT_VALUE.modalConfirm
    })),

    isLoadingGlobal: INIT_VALUE.isLoadingGlobal,
    toggleLoadingGlobal: () => set(state => ({ isLoadingGlobal: !state.isLoadingGlobal })),
}));