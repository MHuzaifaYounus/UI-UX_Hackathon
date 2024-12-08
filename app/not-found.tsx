import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from 'lucide-react'
import Link from 'next/link'

const Error = () => {
    return (
        <div>
            <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                <h1 className='pb-5 font-bold text-5xl text-white'>404 Error</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink href="/">404 Error</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-bold text-primary_color mb-4">404</h1>
                <p className="text-xl font-medium text-gray-700 mb-2">
                    Oops! Looks like something went wrong
                </p>
                <p className="text-gray-500 mb-6">
                    Page cannot be found! We'll have it figured out in no time. <br />
                    Meanwhile, check out these fresh ideas:
                </p>
                <button
                    className="bg-primary_color text-white px-6 py-2 rounded-md shadow-md hover:bg-primary_color transition"
                   
                >
                    <Link href={"/"}> Go to Home</Link>
                </button>
            </div>
        </div>
    )
}

export default Error