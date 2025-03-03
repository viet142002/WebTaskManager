import { useTransition } from "react";
import { useNavigate } from "react-router";

import { Button, ButtonProps } from "@/components/ui/button";
import Spinner from "@/components/Loading/Spinner";

interface IButtonNavProps extends ButtonProps {
    to: string;
    viewTransition?: boolean;
}
function ButtonNav({ children, to, onClick, viewTransition = false, ...props }: IButtonNavProps) {
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate();

    const handleNavigate = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        startTransition(async () => {
            await navigate(to, {
                viewTransition: viewTransition
            });
            if (onClick) {
                onClick(e);
            }
        });
    };
    return (
        <Button onClick={handleNavigate} {...props}>
            {children} {isPending && <Spinner />}
        </Button>
    );
}

export default ButtonNav;
