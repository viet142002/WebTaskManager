import IC_DASHBOARD from '@/assets/svg/ic_dashboard.svg?react';
import IC_BOOK from '@/assets/svg/ic_book.svg?react';
import IC_USER from '@/assets/svg/ic_user_octagon.svg?react';
import IC_MESSAGE from '@/assets/svg/ic_message.svg?react';
import IC_SETTING_1 from '@/assets/svg/ic_setting_1.svg?react';

export const ROUTES_SIDE_BAR = [
    {
        key: "OVERVIEW",
        title: "Overview",
        url: "/overview",
        icon: IC_DASHBOARD,
    },
    {
        key: "TASKS",
        title: "Tasks",
        url: "/tasks",
        icon: IC_BOOK,
    },
    {
        key: "MENTORS",
        title: "Mentors",
        url: "/mentors",
        icon: IC_USER,
    },
    {
        key: "MESSAGE",
        title: "Message",
        url: "/message",
        icon: IC_MESSAGE,
    },
    {
        key: "SETTINGS",
        title: "Settings",
        url: "/settings",
        icon: IC_SETTING_1,
    },
];

export const ROUTES = {
    LOGIN: '/login',
    REGISTER: '/register'
}