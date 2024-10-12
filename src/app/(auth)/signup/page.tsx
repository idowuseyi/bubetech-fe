"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import logoImage from "@/assets/BUBETECH_LOGO.png"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { PasswordInput } from '@/app/components/input/PasswordInput';
import LoadingButton from '@/app/components/button/LoadingButton';
import { signUpSchema, SignUpValues } from '@/lib/validation';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import Slider from '@/app/components/slider/slider';
import { Button } from '@/components/ui/button';



const Page = () => {
    const router = useRouter();
    const [error, setError] = useState<string>();

    const [isPending, startTransition] = useTransition();

    const form = useForm<SignUpValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


    async function onSubmit(values: SignUpValues) {
        console.log("value", values);
        // Redirect to verify email page
        router.push("/verify-email");
    }
    return (
        <div className='flex xl:min-h-screen h-full'>
            <div className='hidden flex-[3] p-4 pt-8 max-w-[700px] bg-[#3F6A01] md:flex flex-col'>
                <Image
                    src={logoImage}
                    alt=""
                    className="hidden w-[80px] h-[100px] object-cover md:block"
                />
                <div className='mt-8'>
                    <h2 className='font-semibold text-5xl leading-[90px] text-white'>Crop Monitoring and Support Services</h2>
                    <p className='text-white max-w-[550px] text-start font-normal text-xl leading-[30.03px]'>Farmers can receive real-time advice and tips for their farm produce, enhancing productivity and supporting decision-making</p>
                </div>
                <Slider />
            </div>
            <div className='flex-[4] bg-[#F6F6F6]'>
                <div className='mt-10'>
                    <h2 className='font-semibold text-3xl text-center'>Create Account</h2>
                    <p className='text-center'>Kindly sign up to create an account</p>
                </div>
                <div className='flex items-start w-11/12 md:w-3/4 max-w-[550px] mx-auto mt-4'>
                    <Button className='bg-[#6FA521] h-[52px] flex-1 text-white'>Farmer</Button>
                    <Button className='bg-white flex-1 h-[52px] text-black'>Expert</Button>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3  w-11/12 md:w-3/4 max-w-[550px] mx-auto mt-8">
                        {error && <p className="text-center text-destructive">{error}</p>}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name *</FormLabel>
                                    <FormControl className='outline-none border border-red-500'>
                                        <Input placeholder="Enter your full name" {...field} className='outline-none p-4 rounded-[5px] border-[#E1E1E1] border' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address *</FormLabel>
                                    <FormControl className='outline-none border border-red-500'>
                                        <Input placeholder="Enter your email address" {...field} className='outline-none p-4 rounded-[5px] border-[#E1E1E1] border' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number *</FormLabel>
                                    <FormControl className='outline-none border border-red-500'>
                                        <Input placeholder="Enter your phone number" {...field} className='outline-none p-4 rounded-[5px] border-[#E1E1E1] border' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex items-center mb-14 justify-between font-medium text-xs'>
                            <p>By continuing, you agree to our Terms of service and Privacy policy.</p>
                        </div>
                        <div className="mt-20">
                            <LoadingButton loading={isPending} type="submit" className="w-full bg-[#3F6A01] p-4 lg:space-y-10">
                                Continue
                            </LoadingButton>

                        </div>
                    </form>
                </Form>
                <div className='mt-2 flex flex-col w-3/4 max-w-[550px] mx-auto gap-10'>
                    <div className='flex font-normal justify-center text-xs text-center w-full items-center gap-1'>
                        <p>Already have an account?</p>
                        <Link href="/login" className='text-[#6FA521] underline'>Sign in</Link>
                    </div>
                    <p className='text-[#4F4F4F] text-center font-normal text-xs'>or sign in with</p>
                    <div className='flex items-center gap-4 justify-center'>
                        <div className='bg-white cursor-pointer rounded-md w-[54px] h-[54px] flex items-center justify-center'>
                            <FcGoogle size={24} />
                        </div>
                        <div className='bg-white cursor-pointer rounded-md w-[54px] h-[54px] flex items-center justify-center'>
                            <SiApple size={24} />
                        </div>
                        <div className='bg-white cursor-pointer rounded-md w-[54px] h-[54px] flex items-center justify-center'>
                            <FaFacebook size={24} className='text-blue-400' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page