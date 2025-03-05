import { useLayout } from "@/store/useLayout";
import { memo, useTransition } from "react";
import { useShallow } from "zustand/react/shallow";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Spinner from "@/components/Loading/Spinner";
import { useTranslation } from "@/hooks";

function ModalConfirm() {
    const [isPendingCancel, startTransitionCancel] = useTransition();
    const [isPendingOke, startTransitionOke] = useTransition();
    const { t } = useTranslation(); 
    const { closeModalConfirm, modalConfirm } = useLayout(
        useShallow((state) => ({
            closeModalConfirm: state.closeModalConfirm,
            modalConfirm: state.modalConfirm,
        })),
    );

    const handleCancel = () => {
        startTransitionCancel(async () => {
            if (modalConfirm.onCancel) {
                await modalConfirm.onCancel();
            }
            closeModalConfirm();
        });
    };
    const handleOke = () => {
        startTransitionOke(async () => {
            if (modalConfirm.onOk) {
                await modalConfirm.onOk();
            }
            closeModalConfirm();
        });
    };

    return (
        <AlertDialog open={modalConfirm.isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{modalConfirm.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {modalConfirm.des}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancel}>
                        {modalConfirm?.titleCancel ?? t('cancel')} {isPendingCancel && <Spinner />}
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleOke}>
                        {modalConfirm?.titleOk ?? t('confirm')} {isPendingOke && <Spinner />}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default memo(ModalConfirm);
