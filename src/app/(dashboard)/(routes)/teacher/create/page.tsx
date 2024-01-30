'use client';

import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage,
    FormItem
} from '@/components/ui/form';

const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Название необходимо'
    })
});

export default function Page() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ''
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }
    return (
        <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full m-3'>
           <div>
               <h1 className='text-2xl'>
                   Введите название курса
               </h1>
               <p className='text-sm text-slate-600'>Как вы хотите назвать ваш курс?</p>
               <Form {...form}>
                   <form
                       className='space-y-8 mt-8'
                       onSubmit={form.handleSubmit(onSubmit)}>
                       {/*<FormField*/}
                       {/*    name='title'*/}
                       {/*    render={({ field }) => {*/}
                       {/*        <FormItem>*/}
                       {/*            <FormLabel>*/}
                       {/*                Название курса*/}
                       {/*            </FormLabel>*/}
                       {/*            <FormControl>*/}
                       {/*                <Input></Input>*/}
                       {/*            </FormControl>*/}
                       {/*        </FormItem>*/}
                       {/*    }}*/}
                       {/*>*/}
                       {/*</FormField>*/}
                   </form>
               </Form>
           </div>
        </div>
    )
}
