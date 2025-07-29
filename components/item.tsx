import React, {useEffect, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Food } from '@/types'
import { WishlistProducts } from '@/app/global'


const Item = ({ product }: { product: Food }) => {

    const [isAddedtoWishList, setIsAddedtoWishList] = useState<boolean>(false)

    function wishlistHandler(id: string) {

        if (!WishlistProducts.find((productid) => productid === id)) {
            WishlistProducts.push(id)
            setIsAddedtoWishList(true)

        }
        else {
            WishlistProducts.forEach((productId) => {
                if (productId === id) {
                    WishlistProducts.splice(WishlistProducts.indexOf(productId), 1)
                    setIsAddedtoWishList(false)
                }
            })
        }

    }

    useEffect(() => {
        console.log(WishlistProducts)
        WishlistProducts.forEach((productId) => {
            if (productId === product?.slug) {
                setIsAddedtoWishList(true)
            }
        })
    }, [product?.slug,isAddedtoWishList])


    
    return (

        <div className="border border-gray-200 rounded cursor-pointer">
            <div className="relative">
                <Link href={`/shop/${product?.slug}`}>
                    <Image
                        src={product?.image || "/img/sample.jpg"}
                        alt={product?.name}
                        height={267}
                        width={312}
                        loading='lazy'
                        className="w-full h-[267px] object-cover rounded"
                    />
                </Link>

                {product?.originalPrice && (
                    <span className="absolute top-2 right-2 bg-primary_color text-white text-xs px-2 py-1 rounded">
                        -{Math.round(((product?.originalPrice - product?.price) / product?.originalPrice) * 100)}%
                    </span>
                )}

                <Button onClick={() => {
                    wishlistHandler(product?.slug)
                }} className={`absolute h-[40px] w-[40px] top-2 left-2 max-sm:right-4 rounded-full  hover:scale-110 transition-all ${isAddedtoWishList && "bg-primary_color hover:bg-primary_color"}`} variant={"secondary"} size={"sm"}>
                    <Image src={"/icons/wishlist.svg"} alt="no icon found" width={40} height={40}></Image>
                </Button>


            </div>
            <div className="mt-2 p-2">
                <h3 className="text-sm font-semibold">{product?.name}</h3>
                <div className="flex items-center space-x-2 text-sm mt-1">
                    <span className="text-primary_color font-bold">${product?.price.toFixed(2)}</span>
                    {product?.originalPrice && (
                        <span className="text-gray-500 line-through text-xs">
                            ${product?.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </div>
   
    )
}

export default Item