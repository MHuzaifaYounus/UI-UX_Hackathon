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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { CartProducts, CheckoutProducts } from '../global'
import { client } from '@/sanity/lib/client'
import { CartFood, Food } from '@/types'




const Cart = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [cartProductsList, setCartProductsList] = useState<CartFood[]>([])
    const [subTotal, setSubTotal] = useState<number>(0)


    function quantityHandler(e: React.ChangeEvent<HTMLInputElement>, id: string) {
        const updatedQuantity = Number(e.target.value);

        setCartProductsList((prevList) =>
            prevList.map((product) =>
                product.slug === id
                    ? { ...product, totalPrice: product.price * updatedQuantity, quantity: updatedQuantity }
                    : product
            )
        );

    }
    function removeHandler(id: string) {
        const newList = cartProductsList.filter((product) => product.slug != id)
        CartProducts.splice(CartProducts.indexOf(id), 1)
        setCartProductsList(newList)

    }
    function finalize() {
        cartProductsList.forEach((product) => {
            const existingIndex = CheckoutProducts.findIndex((p) => p.slug === product.slug);
        
            if (existingIndex !== -1) {
              
                CheckoutProducts[existingIndex] = product;
            } else {
                
                CheckoutProducts.push(product);
            }
        });

    }



    useEffect(() => {
        const newSubTotal = cartProductsList.reduce((total, product) => {
            return total + (product.totalPrice || product.price);
        }, 0);

        setSubTotal(newSubTotal);

    }, [cartProductsList]);

    useEffect(() => {
        async function getData() {
            setIsLoading(true)

            const response: Food[] = await client.fetch(`*[_type == "food"]{
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
            const matchedProducts = response.filter((item) => {
                return CartProducts.includes(item.slug)
            });
            setCartProductsList(
                matchedProducts.map((product) => (
                    { ...product, totalPrice: product.price, quantity: 1 }
                ))
            )
            setIsLoading(false)


        }
        getData()
    }, [])
    useEffect(() => {
        console.log(cartProductsList);

    }, [cartProductsList])

    return (
        <div>
            <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                <h1 className='pb-5 font-bold text-5xl text-white'>Shopping Cart</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="w-[80%] m-auto max-lg:w-[95%]">
                <Table className='mt-20 mb-10 max-sm:text-xs '>
                    <TableHeader className='h-[72px] rounded-sm box_shadow'>
                        <TableRow className='border-none outline-none '>
                            <TableHead className='pl-4  '>Product</TableHead>
                            <TableHead className='pl-4 '>Price</TableHead>
                            <TableHead className='pl-4 '>Quantity</TableHead>
                            <TableHead className='pl-4 '>Subtotal</TableHead>
                            <TableHead className='pl-4 '>Remove</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody >
                        {isLoading ? <TableRow className='text-black font-semibold text-2xl'><TableCell className='pl-4 max-sm:pl-0'>Loading...</TableCell></TableRow> : cartProductsList.map((item, index) => {
                            return <TableRow key={index} className='h-[72px] rounded-sm box_shadow font-medium' >
                                <TableCell className='pl-4 max-sm:pl-0'>
                                    <div className="flex items-center">
                                        <Image src={item?.image || ""} alt='no img found' width={40} height={40}></Image>
                                        <h2 className='pl-4 max-sm:pl-1 max-sm:pr-2'>{item.name}</h2>
                                    </div>
                                </TableCell>
                                <TableCell className='pl-4'>${item.price}</TableCell>
                                <TableCell className='pl-4'>
                                    <Input className='w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs' value={(item?.quantity) || 1} onChange={(e) => { quantityHandler(e, item.slug) }} type='number' />
                                </TableCell>
                                <TableCell className='pl-4'>${item.totalPrice}</TableCell>
                                <TableCell className='pl-4 cursor-pointer hover:text-red-600' onClick={() => { removeHandler(item.slug) }}>X</TableCell>
                            </TableRow>
                        })}




                    </TableBody>
                </Table>

                <div className="p-6 rounded-lg py-20">
                    <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                        {/* Coupon Code Section */}
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Coupon Code</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                diam pellentesque bibendum non.
                            </p>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder="Enter Here code"
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                />
                                <button className="px-4 py-2 bg-primary_color text-white rounded hover:bg-primary_color">
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Total Bill Section */}
                        <div className=''>
                            <h3 className="font-semibold text-lg mb-2">Total Bill</h3>
                            <div className="p-4 rounded-md space-y-2 border border-gray-300">
                                <div className="flex justify-between text-lg font-semibold">
                                    <span >Cart Subtotal</span>
                                    <span className="font-medium">${subTotal}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping Charge</span>
                                    <span className="font-medium">$0.00</span>
                                </div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total Amount</span>
                                    <span>${subTotal}</span>
                                </div>
                            </div>
                            <button className="w-full mt-4 px-4 py-2 bg-primary_color text-white rounded hover:bg-primary_color">
                                <Link href={"/checkout"} onClick={finalize}> Proceed to Checkout</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart