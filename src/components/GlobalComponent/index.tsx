import { useShallow } from 'zustand/react/shallow'

import Toaster from "@/components/ui/sonner";
import LoadingPencil from "@/components/Loading/LoadingPencil";
import ModalConfirm from "@/components/Modal/ModalConfirm";

import { useLayout } from "@/store/useLayout";

function GlobalComponent() {
    const isLoadingGlobal = useLayout(useShallow((state) => state.isLoadingGlobal));

    return (
        <>
            <Toaster />
            {isLoadingGlobal && <LoadingPencil />}
            <ModalConfirm />
        </>
    )
}

export default GlobalComponent;