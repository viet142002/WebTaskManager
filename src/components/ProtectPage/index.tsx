import { Outlet, useNavigate } from "react-router";

import { toast } from "sonner"
import { ROUTES } from "@/utils/constants";
import { useAuth } from "@/store/useAuth";
import { useLayout } from "@/store/useLayout";

interface ProtectPageProps {
    isAuth?: boolean;
    access?: Array<string | number>;
}

function ProtectPage({ isAuth, access }: ProtectPageProps) {
    const navigate = useNavigate();

    const userAccess = [1,2,3];
    const isLogin = useAuth((state) => state.isAuth);
    const openModalConfirm = useLayout(state => state.openModalConfirm);

    if (isAuth && !isLogin) {
        const currentPage = window.location;
        openModalConfirm({
            isOpen: true,
            title: 'Bạn chưa đăng nhập',
            des: "Vui lòng đăng nhập để truy cập",
            onOk: () => navigate(ROUTES.LOGIN + "?" + currentPage.pathname),
            onCancel: () => navigate(-1)
        })
        return;
    }

    // Kiểm tra quyền truy cập
    if (access) {
        if (!userAccess.some(a => access.includes(a))) {
            toast.warning('Bạn không có quyền truy cập. Vui lòng yêu cầu quyền và quay lại');
            // Nếu không thể go back thì chuyển hướng đến trang welcome
            navigate('/')
            return;
        }
    }

    return <Outlet />;
}

export default ProtectPage;
