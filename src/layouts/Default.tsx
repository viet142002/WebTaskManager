import { Outlet } from "react-router";

import MainSideBar from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useInitOverView } from "@/hooks/queries/useInitDashBoard";
import { memo } from "react";
// import { useAuth } from "@/store/useAuth";

function DefaultLayout() {
    const res = useInitOverView();

    console.log(res);
    
    return (
        <SidebarProvider>
            <MainSideBar />
            <main className="relative">
                <Outlet />
            </main>
        </SidebarProvider>
    );
}

export default memo(DefaultLayout);
