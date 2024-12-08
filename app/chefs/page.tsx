import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from 'lucide-react'
import ChefGrid from '@/components/chefs'



const Chefs = () => {
    return (
        <div>
            <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                <h1 className='pb-5 font-bold text-5xl text-white'>Our Chefs</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink href="/chefs">Chefs</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="w-[80%] max-xl:w-full py-20 m-auto">
                <ChefGrid />

            </div>
        </div>
    )
}

export default Chefs