'use client';

import {BarChart, Compass, Layout, List, Rabbit} from 'lucide-react';
import SidebarItem from "@/app/(dashboard)/_components/sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: 'Дашборд',
        href: '/'
    },
    {
        icon: Compass,
        label: 'Поиск',
        href: '/search'
    },
    {
        icon: Rabbit,
        label: 'Кролик',
        href: '/rabbit'
    },
]

const teacherRoutes = [
    {
        icon: List,
        label: 'Курсы',
        href: '/teacher/courses'
    },
    {
        icon: BarChart,
        label: 'Аналитика',
        href: '/teacher/analytics'
    },
    {
        icon: Rabbit,
        label: 'Кролик',
        href: '/rabbit'
    },
]

export default function SidebarRoutes() {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes('/teacher');

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return (
        <div className='flex flex-col w-full'>
            {routes.map((route) => {
                return (
                   <SidebarItem
                       key={route.href}
                       icon={route.icon}
                       label={route.label}
                       href={route.href}
                   />
                )
            })}
        </div>
    )
}
