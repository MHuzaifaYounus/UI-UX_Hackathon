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
import Link from 'next/link'
import Image from 'next/image'
import { CheckoutProducts } from '../global'


const Checkout = () => {
    console.log(CheckoutProducts)
    const [subTotal, setSubTotal] = useState<number>(0)
    const [taxAmount, setTaxAmount] = useState<number>(0)
    const [finalTotal, setFinalTotal] = useState<number>(0)

    useEffect(() => {
        const newSubTotal = CheckoutProducts.reduce((total, product) => {
            return total + (product.totalPrice || product.price);
        }, 0);
        if (newSubTotal !== 0) {
            setSubTotal(newSubTotal);
            setFinalTotal(newSubTotal + taxAmount)
            setTaxAmount(50)
        }

    }, [taxAmount]);


    return (
        <div>
            <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                <h1 className='pb-5 font-bold text-5xl text-white'>CheckOut Page</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink href="/checkout">Checkout</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="p-8 max-md:p-1 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Shipping and Billing Form */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                        <form className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-11 gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="border p-2 rounded col-span-2 sm:col-span-1"
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <select className="border p-2 roundedmax-md:col-span-2">
                                <option>Choose country</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>UK</option>
                            </select>
                            <select className="border p-2 rounded max-md:col-span-2">
                                <option>Choose city</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Zip code"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Address 1"
                                className="border p-2 rounded col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Address 2"
                                className="border p-2 rounded col-span-2"
                            />
                        </form>
                        <div className="mt-6">
                            <label className="flex  flex-col ">
                                <h2 className='font-bold text-xl'>Billing Address</h2>
                                <div className="flex ">

                                    <input type="checkbox" className="mr-2" />
                                    Same as shipping address
                                </div>
                            </label>
                        </div>
                        <div className="flex justify-between items-center mt-6 max-sm:flex-col ">
                            <button className="bg-white w-[50%] max-sm:w-full h-[58px] text-black px-6 py-2  hover:bg-gray-500 border-2 border-gray-300">
                                <Link href={"/cart"}>&lt; Back to cart</Link>
                            </button>
                            <button className="bg-primary_color w-[50%] max-sm:w-full h-[58px] text-white px-6 py-2  max-sm:mt-5 hover:bg-primary_color">
                                Proceed to shipping &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">

                        <div className="space-y-4">
                            {CheckoutProducts.length === 0 ?
                                <h1 className='text-black'>No item Added to Cart</h1>
                                :
                                CheckoutProducts.map((item, index) => {

                                    return <div
                                        key={index}
                                        className="flex items-center justify-between border-b pb-4"
                                    >
                                        <Image
                                            src={item?.image || ""}
                                            alt={item.name}
                                            height={64}
                                            width={64}
                                            className="w-16 h-16 rounded-lg"
                                        />
                                        <div className="flex-1 px-4">
                                            <h3 className="text-lg font-semibold">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm">{item.price} per item  {item.quantity} items</p>
                                        </div>
                                        <span className="text-gray-600">${item.totalPrice}</span>
                                    </div>
                                })
                            }
                        </div>
                        <div className="border-t pt-4 mt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Sub-total</span>
                                <span>${subTotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${taxAmount}</span>
                            </div>
                        </div>
                        <div className="border-t pt-4 mt-4 flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>${finalTotal}</span>
                        </div>
                        <button className="w-full bg-primary_color text-white py-2 mt-6 rounded-lg hover:bg-primary_color h-[58px]">
                            Place an order &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout