import { IModalConfirm, useLayout } from "@/store/useLayout";
import { useTransition } from "react";
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

function ModalConfirm({ isOpen, title, des, onCancel = () => {}, onOk = () => {} }: IModalConfirm) {
    const [isPendingCancel, startTransitionCancel] = useTransition();
    const [isPendingOke, startTransitionOke] = useTransition();
    const closeModalConfirm = useLayout(useShallow(state => state.closeModalConfirm));

    const handleCancel = () => {
        startTransitionCancel(async () => {
            await onCancel();
            closeModalConfirm();
        }) 
    }
    const handleOke = () => {
        startTransitionOke(async () => {
            await onOk();
            closeModalConfirm();
        });
    }

    return (
        <AlertDialog open={isOpen} >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {des}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancel}>Cancel {isPendingCancel ? <Spinner /> : ''}</AlertDialogCancel>
                    <AlertDialogAction onClick={handleOke}>Continue {isPendingOke ? <Spinner /> : ''}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ModalConfirm;