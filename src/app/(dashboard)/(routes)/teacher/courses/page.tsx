import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function CoursesPage() {
    return (
        <div>
            <Link href='/teacher/create'>
                <Button className='m-2'>
                    Новый курс
                </Button>
            </Link>
        </div>
    )
}
