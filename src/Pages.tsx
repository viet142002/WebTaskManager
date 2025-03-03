import { RouterProvider, createBrowserRouter } from "react-router";
import { lazy } from "react";

import { ROUTES } from "@/utils/constants";

const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const WelcomePage = lazy(() => import("@/pages/Welcome"));
const ProtectPage = lazy(() => import("@/components/ProtectPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ProjectsPage = lazy(() => import("@/pages/Projects"));
const DashBoard = lazy(() => import("@/pages/DashBoard"));
const TaskPage = lazy(() => import("@/pages/Tasks"));
const MemberPage = lazy(() => import("@/pages/Member"));
const SettingPage = lazy(() => import("@/pages/Setting"));
const MessagePage = lazy(() => import("@/pages/Message"));
const DefaultLayout = lazy(() => import("@/layouts/Default"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />,
        index: true,
    },
    {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
    },
    {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
    },
    {
        element: <DefaultLayout />,
        children: [
            {
                element: <ProtectPage isAuth />,
                children: [
                    {
                        path: ROUTES.OVERVIEW,
                        element: <DashBoard />,
                    },
                    { path: ROUTES.TASKS, element: <TaskPage /> },
                    { path: ROUTES.MEMBERS, element: <MemberPage /> },
                    { path: ROUTES.SETTING, element: <SettingPage /> },
                    { path: ROUTES.MESSAGE, element: <MessagePage /> },
                    { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

function PageRouter() {
    return <RouterProvider router={router} />;
}

export default PageRouter;
