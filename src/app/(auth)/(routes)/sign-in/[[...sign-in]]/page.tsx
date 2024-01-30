import {SignIn, UserButton} from '@clerk/nextjs';

export default function Page() {
    return (
        <div>
            <UserButton />
            <SignIn />
        </div>
    )
}
