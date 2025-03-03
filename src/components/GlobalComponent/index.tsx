import { useShallow } from 'zustand/react/shallow'

import Toaster from "@/components/ui/sonner";
import LoadingPencil from "@/components/Loading/LoadingPencil";
import ModalConfirm from "@/components/Modal/ModalConfirm";

import { useLayout } from "@/store/useLayout";

function GlobalComponent() {
    const { modalConfirm, isLoadingGlobal } = useLayout(useShallow((state) => ({ modalConfirm: state.modalConfirm, isLoadingGlobal: state.isLoadingGlobal })));

    return (
        <>
            <Toaster />
            {isLoadingGlobal && <LoadingPencil />}
            {modalConfirm.isOpen && <ModalConfirm {...modalConfirm} />}
        </>
    )
}

export default GlobalComponent;