import { Outlet, useNavigation } from "react-router";

import LoadingPencil from "@/components/Loading/LoadingPencil";
import MainSideBar from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

function DefaultLayout() {
    const navigation = useNavigation();
    console.log(navigation);
    
    const isNavigating = Boolean(navigation.location);
    return (
        <SidebarProvider>
            <MainSideBar />
            <main className="relative">
                {isNavigating && <LoadingPencil />}
                <Outlet />
            </main>
        </SidebarProvider>
    );
}

export default DefaultLayout;
