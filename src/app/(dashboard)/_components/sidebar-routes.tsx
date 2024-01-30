'use client';

import {Compass, Layout, Rabbit} from 'lucide-react';
import SidebarItem from "@/app/(dashboard)/_components/sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/'
    },
    {
        icon: Compass,
        label: 'Browse',
        href: '/search'
    },
    {
        icon: Rabbit,
        label: 'Rabbit',
        href: '/rabbit'
    },
]

export default function SidebarRoutes() {
    return (
        <div className='flex flex-col w-full'>
            {guestRoutes.map((route) => {
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
