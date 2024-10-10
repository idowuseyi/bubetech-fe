"use client"
import React, { useState, useTransition } from 'react'
import amico from "@/assets/amico.png";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginValues } from '@/lib/validation';
import Link from 'next/link';
import LoadingButton from '@/app/components/button/LoadingButton';
import Image from 'next/image';

export default function Page() {
    const router = useRouter();
    const [error, setError] = useState<string>();

    const [isPending, startTransition] = useTransition();

    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: LoginValues) {
        console.log("value", values)
        router.push("/resetpassword");
    }
    return (
        <main className='flex md:items-center md:justify-center w-full h-screen px-4'>
            <div className='w-full md:w-1/2 xl:w-2/5 max-w-[700px] md:bg-white md:shadow-md rounded-3xl p-4 md:p-10'>
                <div className='hidden md:block w-full'>
                    <Image
                        src={amico}
                        alt=""
                        className="w-[156px]  mx-auto h-[140px] object-cover"
                    />
                </div>
                <div className='mt-8 text-[#323232]'>
                    <h2 className='font-semibold text-3xl text-start md:text-center'>Forgot Password</h2>
                    <p className='md:text-center text-start'>Kindly fill in the correct detail below to receive a code</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full mx-auto mt-16">
                        {error && <p className="text-center text-destructive">{error}</p>}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address/Phone Number</FormLabel>
                                    <FormControl className='outline-none border border-red-500'>
                                        <Input placeholder="Enter your email address" {...field} className='outline-none p-4 rounded-[5px] border-[#E1E1E1] border' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="">
                            <LoadingButton loading={isPending} type="submit" className="w-full bg-[#3F6A01] p-4 lg:space-y-10">
                                Next
                            </LoadingButton>

                        </div>
                    </form>
                </Form>
            </div>
        </main>
    )
}
