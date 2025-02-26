import { Link } from 'react-router';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ROUTES_SIDE_BAR } from "@/utils/constants";

function MainSideBar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {ROUTES_SIDE_BAR.map((item) => (
                <MenuItem item={item} key={item.key} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default MainSideBar;

interface MenuItemProps {
  item: (typeof ROUTES_SIDE_BAR)[0];
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <SidebarMenuItem key={item.title} onChange={(props) => console.log(props)}>
      <SidebarMenuButton asChild>
        <Link to={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
