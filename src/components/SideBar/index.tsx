import { NavLink, useParams } from "react-router";
import clsx from "clsx";
import { memo } from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { IDS_ROUTE, ROUTES_SIDE_BAR } from "@/utils/constants";
import SidebarProjectHeader from "@/components/SideBar/components/SidebarProjectHeader";

function MainSideBar() {
    const params = useParams();
    return (
        <Sidebar>
            <SidebarProjectHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {ROUTES_SIDE_BAR.map((item) => (
                                <MenuItem
                                    item={item}
                                    key={item.key}
                                    projectId={params?.[IDS_ROUTE.PROJECT_ID]}
                                />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}

export default memo(MainSideBar);

interface MenuItemProps {
    item: (typeof ROUTES_SIDE_BAR)[number];
    projectId?: string | number;
}

const MenuItem = ({ item, projectId }: MenuItemProps) => {
    return (
        <SidebarMenuItem key={item.title}>
            <NavLink
                to={item.url.replace(
                    `:${IDS_ROUTE.PROJECT_ID}`,
                    projectId + "",
                )}
                className={({ isActive }) =>
                    clsx({
                        "flex w-full gap-2 rounded-md p-2 hover:bg-gray-100 duration-200": true,
                        "text-blue-500": isActive,
                    })
                }
            >
                <item.icon className="!size-5" />
                <span>{item.title}</span>
            </NavLink>
        </SidebarMenuItem>
    );
};
