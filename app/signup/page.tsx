import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from 'lucide-react'
import SignUpForm from '@/components/signUp'


const SignUp = () => {
  return (
    <div>
         <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                <h1 className='pb-5 font-bold text-5xl text-white'>Sign Up</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink href="/signup">SignUP</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="py-20">
            <SignUpForm />
            </div>
    </div>
  )
}

export default SignUp