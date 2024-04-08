"use client"
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import {Bell, CircleUser, Search, Video} from 'lucide-react'
import {Anton} from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '@/lib/firebase'
import toast from 'react-hot-toast'

const anton = Anton({weight: "400", subsets:['latin']})

const Navbar = () => {
    const isAuthenticated = false;
    const handleGoogleSignIn = async()=>{
        try {
        const provider = new GoogleAuthProvider();
          const response = await signInWithPopup(auth, provider);
          console.log(response)
        } catch (error) {
          console.log(error)
          toast.error("Something went wrong. Please try again")
        }
      }
  return (
    <div className='flex items-center justify-between p-2'>
        <Link href={"/"}>
            <div className='flex items-center justify-start gap-x-1'>
                <Image src={'/logo.png'} width={48} height={48} alt='logo'/>
                <p className={cn(
                    'text-2xl font-semibold',
                    anton.className
                )}>YouTube</p>            
            </div>
        </Link>
        <div className='flex items-center justify-center'>
            <Input placeholder='Search' className='rounded-full rounded-r w-[40rem]'/>
            <div className='bg-[#f8f8f8] hover:bg-[#f3f3f3] cursor-pointer transition duration-300 ease-in-out p-2 px-4 rounded-full rounded-l border border-input border-l-none'>
                <Search className='text-[#8e8e8e] w-6 h-6'/>
            </div>
        </div>
        <div>
            <div className='flex items-center justify-center gap-x-3'>
                {
                    isAuthenticated && (
                        <>
                            <div className='p-2 rounded-full hover:bg-[#f3f3f3] cursor-pointer transition duration-300 ease-in-out'>
                    <Video className='text-[#404040] w-6 h-6 font-thin'/>
                </div>
                <div className='p-2 rounded-full hover:bg-[#f3f3f3] cursor-pointer transition duration-300 ease-in-out'>
                    <Bell className='text-[#404040] w-6 h-6 font-bold'/>
                </div>
                <div className='p-2 rounded-full hover:bg-[#f3f3f3] cursor-pointer transition duration-300 ease-in-out'>
                    <Image className='rounded-full' src="https://github.com/shadcn.png" alt='avatar' height={30} width={30}/>
                </div>
                        </>
                    )
                }
                {
                    !isAuthenticated && 
                        <Button onClick={handleGoogleSignIn} className='rounded-full bg-white border border-input hover:bg-blue-200 cursor-pointer transition duration-400 ease-in-out'>
                        <div className='flex items-center justify-center gap-x-2'>
                            <CircleUser className='text-[#4880dd]'/>
                            <p className='text-[#4880dd]'>Sign in</p>
                        </div>
                    </Button>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar