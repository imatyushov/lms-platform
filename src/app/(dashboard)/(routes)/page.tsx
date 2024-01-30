'use client';
import { UserButton, UserProfile } from '@clerk/nextjs';
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

    // useEffect(() => {
    //     redirect('/sign-up');
    //
    //     return () => {
    //         redirect('/')
    //     }
    // }, [])

    return (
        <div>
            Дашборд
            <UserProfile/>
        </div>
    )
}
