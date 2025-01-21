"use client"
import React, { useEffect, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from 'lucide-react'
import Image from 'next/image'
import SocialMediaIcons from '@/components/socialIcons'
import { Food } from '@/types'
import { client } from '@/sanity/lib/client'
import { CartProducts } from '@/app/global'
import Item from '@/components/item'




const ShopItem = ({ params: { itemId } }: { params: { itemId: string } }) => {
    const [products, setProducts] = useState<Food[]>([])
    const [moreItems, setMoreItems] = useState<Food[]>([])
    const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)
    const [showMsg, setShowMsg] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    function addtoCart(id: string) {
        if (!CartProducts.find((productid) => productid === id)) {
            CartProducts.push(id)
            setIsAddedToCart(true)
            setShowMsg(true)
        }
    }

    useEffect(() => {
        async function getData() {
            try {


                const response: Food[] = await client.fetch(`*[_type == "food" && slug.current == $itemId ]{
            name,
            category,
            price,
            originalPrice,
            tags,
            "image":image.asset->url,
            description,
            available,
            "slug": slug.current
          }`, { itemId })
                setProducts(response)

                const response2: Food[] = await client.fetch(`*[_type == "food"]{
              name,
              category,
              price,
              originalPrice,
              tags,
              "image":image.asset->url,
              description,
              available,
              "slug": slug.current
            }`)
                setMoreItems(response2)
            } catch (error) {
                console.error("Failed to fetch products details:", error);
                setError("Unable to load products details. Please try again later.");

            }
        }
        getData()
    }, [itemId])
    useEffect(() => {
        CartProducts.forEach((id) => {
            if (id === itemId) {
                setIsAddedToCart(true)
            }
        })
    }, [itemId])

    useEffect(() => {
        if (showMsg) {
            setTimeout(() => {
                setShowMsg(false)
            }, 3000)
        }
    }, [showMsg])



    return (
        <div className="">
            {error ? <div className="errormsg w-full text-3xl text-red-500 flex justify-center items-center">
                <h1 className="font-semibold">{error}</h1>
            </div> :
                <div>
                    {showMsg && <div className='text-white bg-black border-2 border-primary_color rounded-xl fixed bottom-2 left-10 h-[50px] w-[250px] flex justify-center items-center'><p className='text-lg font-semibold'>Item Successfully Added</p></div>}
                    <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                        <h1 className='pb-5 font-bold text-5xl text-white'>Shop Details</h1>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem >
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem className='text-white'>
                                    <BreadcrumbLink href="/shop">Shop Deatails</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                    <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
                        <div className="left grid grid-cols-4 grid-rows-4 gap-2 max-xl:w-full">
                            <div className="">
                                <Image
                                    src={products[0]?.image || "/img/sample.jpg"}
                                    alt="user"
                                    width={132}
                                    height={129}
                                    loading='lazy'
                                    className='w-auto h-auto'

                                />
                            </div>
                            <div className="col-span-3 row-span-4">
                                <Image
                                    src={products[0]?.image || "/img/sample.jpg"}
                                    alt="user"
                                    width={491}
                                    height={596}
                                    loading='lazy'
                                    className='w-auto h-auto'

                                />
                            </div>
                            <div className="">
                                <Image
                                    src={products[0]?.image || "/img/sample.jpg"}
                                    alt="user"
                                    width={132}
                                    height={129}
                                    loading='lazy'
                                    className='w-auto h-auto'

                                />
                            </div>
                            <div className="">
                                <Image
                                    src={products[0]?.image || "/img/sample.jpg"}
                                    alt="user"
                                    width={132}
                                    height={129}
                                    loading='lazy'
                                    className='w-auto h-auto'
                                />
                            </div>
                            <div className="">
                                <Image
                                    src={products[0]?.image || "/img/sample.jpg"}
                                    alt="user"
                                    width={132}
                                    height={129}
                                    loading='lazy'
                                    className='w-auto h-auto'

                                />
                            </div>

                        </div>

                        <div className="w-[50%] h-[718px] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
                            {/* Stock status */}
                            <div className="px-4 py-2">
                                <span className="inline-block bg-primary_color text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    In stock
                                </span>
                            </div>

                            {/* Product Title */}
                            <div className="px-4 pb-15 text-black border-b border-gray-400">
                                <h2 className="text-5xl font-bold max-sm:text-2xl">{products[0]?.name}</h2>
                                <p className="text-gray-600 w-[608px] text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm">
                                    {products[0]?.description}
                                </p>
                            </div>

                            {/* Price and Rating */}
                            <div className="px-4 py-2">
                                <div className="flex  flex-col justify-between">
                                    <span className="text-3xl font-bold ">${products[0]?.price}</span>
                                    <div className="flex items-center">
                                        <span className="text-primary_color  text-xl mr-1">★★★★★</span>
                                        <span className="text-gray-600 text-sm">|5 rating | 22 Reviews</span>
                                    </div>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <div className="px-4 py-4">
                                <div className="flex items-center">

                                    <button className={`px-4 py-2 h-[50px] bg-primary_colortext-white text-sm font-medium rounded-md ${isAddedToCart ? "bg-gray-400" : "bg-primary_color"} text-white ml-4`} onClick={() => { addtoCart(itemId) }}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="px-4 py-2">
                                <div className="text-sm text-gray-600 flex flex-wrap flex-col gap-4">
                                    <span>Category: <strong>{products[0]?.category}</strong></span>
                                    <span>Tag: <strong>{products[0]?.tags}</strong></span>
                                </div>
                            </div>

                            {/* Social Share */}
                            <div className="w-full items-start">

                                <SocialMediaIcons />
                            </div>

                        </div>
                    </div>
                    <div className="section2 w-[80%] m-auto py-20  max-xl:w-[95%] ">
                        {/* Tabs */}
                        <div className="border-b border-gray-300 flex space-x-4 text-sm">
                            <button className="px-4 py-2 font-medium text-primary_color border-b-2 border-orange-500">
                                Description
                            </button>
                            <button className="px-4 py-2 font-medium text-gray-600 hover:text-orange-500">
                                Reviews ()
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-4 text-gray-700">
                            <p>
                                {products[0]?.description}
                            </p>

                        </div>

                        {/* Key Benefits */}
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-gray-800">Key Benefits</h3>
                            <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                                <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                                <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                                <li>Mauris eget diam magna, in blandit turpis.</li>
                            </ul>
                        </div>

                        {/* Similar Products */}
                        <div className="mt-10">
                            <h3 className="text-lg font-bold text-gray-800">Similar Products</h3>
                            <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-4 ">
                                {moreItems.map((product, index) => {
                                    if (index < 3) {
                                        return <Item key={index} product={product} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default ShopItem