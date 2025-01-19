import React from 'react'
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




const ShopItem = async ({ params: { itemId } }: { params: { itemId: string } }) => {
    const products: Food[] = await client.fetch(`*[_type == "food" && slug.current == $itemId ]{
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

    const moreItems: Food[] = await client.fetch(`*[_type == "food"]{
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



    return (
        <div>
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
                            src={products[0]?.image || ""}
                            alt="user"
                            width={132}
                            height={129}

                        />
                    </div>
                    <div className="col-span-3 row-span-4">
                        <Image
                            src={products[0]?.image || ""}
                            alt="user"
                            width={491}
                            height={596}

                        />
                    </div>
                    <div className="">
                        <Image
                            src={products[0]?.image || ""}
                            alt="user"
                            width={132}
                            height={129}

                        />
                    </div>
                    <div className="">
                        <Image
                            src={products[0]?.image || ""}
                            alt="user"
                            width={132}
                            height={129}

                        />
                    </div>
                    <div className="">
                        <Image
                            src={products[0]?.image || ""}
                            alt="user"
                            width={132}
                            height={129}

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
                            <span className="text-3xl font-bold ">{products[0]?.price}</span>
                            <div className="flex items-center">
                                <span className="text-primary_color  text-xl mr-1">★★★★★</span>
                                <span className="text-gray-600 text-sm">|5 rating | 22 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="px-4 py-4">
                        <div className="flex items-center">
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="w-12 h-[50px] text-center border border-gray-300 rounded-md"
                            />
                            <button className="ml-4 px-4 py-2 h-[50px] bg-primary_colortext-white text-sm font-medium rounded-md bg-primary_color">
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
                                return <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                                >
                                    <Image
                                        src={product?.image || ""}
                                        alt={product.name}
                                        height={267}
                                        width={267}
                                        className="w-full h-[267px] object-cover"
                                    />
                                    <div className="p-4">
                                        <h4 className="font-semibold text-gray-800">{product.name}</h4>
                                        <div className="mt-1">
                                            <span className="text-primary_color  font-bold text-lg">${product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-gray-500 line-through text-sm ml-2">
                                                    ${product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem