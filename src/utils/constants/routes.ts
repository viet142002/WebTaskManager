import IC_DASHBOARD from '@/assets/svg/ic_dashboard.svg?react';
import IC_BOOK from '@/assets/svg/ic_book.svg?react';
import IC_USER from '@/assets/svg/ic_user_octagon.svg?react';
import IC_MESSAGE from '@/assets/svg/ic_message.svg?react';
import IC_SETTING_1 from '@/assets/svg/ic_setting_1.svg?react';
import { IDS_ROUTE } from '@/utils/constants/keys';

export const ROUTES = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROJECTS: `/pros/:${IDS_ROUTE.PROJECT_ID}`,
    PROJECT_DETAIL: `/pros/:${IDS_ROUTE.PROJECT_ID}/detail`,
    TASKS: `/pros/:${IDS_ROUTE.PROJECT_ID}/t`,
    TASK_DETAIL: `/pros/:${IDS_ROUTE.PROJECT_ID}/t/:${IDS_ROUTE.TASK_ID}`,
    OVERVIEW: `/pros/:${IDS_ROUTE.PROJECT_ID}/overview`,
    SETTING: `/pros/:${IDS_ROUTE.PROJECT_ID}/settings`,
    MESSAGE: `/pros/:${IDS_ROUTE.PROJECT_ID}/mess`,
    MEMBERS: `/pros/:${IDS_ROUTE.PROJECT_ID}/mem`
}

export const ROUTES_SIDE_BAR = [
    {
        key: "OVERVIEW",
        title: "Overview",
        url: ROUTES.OVERVIEW,
        icon: IC_DASHBOARD,
    },
    {
        key: "TASKS",
        title: "Tasks",
        url: ROUTES.TASKS,
        icon: IC_BOOK,
    },
    {
        key: "MEMBER",
        title: "Members",
        url: ROUTES.MEMBERS,
        icon: IC_USER,
    },
    {
        key: "MESSAGE",
        title: "Message",
        url: ROUTES.MESSAGE,
        icon: IC_MESSAGE,
    },
    {
        key: "SETTINGS",
        title: "Settings",
        url: ROUTES.SETTING,
        icon: IC_SETTING_1,
    },
];