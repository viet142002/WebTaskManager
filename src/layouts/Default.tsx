import MainSideBar from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

interface DefaultLayoutProps {
    children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <SidebarProvider>
        <MainSideBar />
        <main>
            {children}
        </main>
    </SidebarProvider>
  )
}

export default DefaultLayout;
