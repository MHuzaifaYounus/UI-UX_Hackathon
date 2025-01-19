"use client"
import React, { useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from 'lucide-react'
import Sidebar from '@/components/sidebar'
import ProductGrid from '@/components/productGrid'




const Shop = () => {
    const [checkedCategories, setCheckedCategories] = useState<string[]>([])
   
    async function handleData(data:string[]) {
       
        
        setCheckedCategories(data)
      
    }

    return (
        <div>
            <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                <h1 className='pb-5 font-bold text-5xl text-white'>Our Shop</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%]">

                <ProductGrid checkedCategories={checkedCategories}/>

                <Sidebar onUpdateArray={handleData} />


            </div>
        </div>
    )
}

export default Shop