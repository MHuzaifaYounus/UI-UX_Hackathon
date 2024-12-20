"use client"
import React, { useState }  from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from 'lucide-react'
import Image from 'next/image'
import { Great_Vibes } from "next/font/google"
import TestimonialCard from '@/components/testimonal'
import Menu from '@/components/menu'

const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] })

const AboutPage = () => {
    const [activeMenu, setActiveMenu] = useState<number>(0)
    return (
        <div>
            <div className="hero w-full h-[320px] menu_bg flex flex-col items-center justify-center ">
                <h1 className='pb-5 font-bold text-5xl text-white'>About Us</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink href="/about">About</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="section1 w-[80%] m-auto max-lg:w-[95%] py-20 max-sm:py-4 flex justify-between max-lg:flex-col items-center">

                <div className="left flex flex-col md:flex-row items-center justify-center p-4 space-y-4 md:space-y-0 md:space-x-4 w-[50%] max-lg:w-full">
                    <div className="flex-1">
                        <Image
                            src="/img/about1.svg" 
                            alt="Tacos"
                            height={536}
                            width={100}
                            className="rounded-lg object-cover w-full h-[536px]"
                        />
                    </div>
                    <div className="flex flex-col flex-1 space-y-4">
                        <Image
                            src="/img/about2.svg" // Replace with your dipping image URL
                            alt="Dipping Sauce"
                            height={271}
                            width={100}
                            className="rounded-lg object-cover w-full h-[271px]"
                        />
                        <Image
                            src="/img/about3.svg" // Replace with your salad image URL
                            alt="Salad"
                            height={382}
                            width={100}
                            className="rounded-lg object-cover w-full h-[382px]"
                        />
                    </div>
                </div>

                <div className="text w-[40%] h-[452px] my-20 text-black z-10 max-sm:w-[90%] flex flex-col justify-between  items-start max-lg:w-full">

                    <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl ${greatVibes.className}`}>
                        About Us
                    </div>


                    <h1 className="text-5xl font-bold leading-tight max-sm:text-3xl">
                        <span className="text-primary_color">Fo</span>od is an important
                        part Of a balanced Diet
                    </h1>


                    <p className="text-gray-400 mt-4 max-sm:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>

                    <div className="flex items-center">
                        <button className=" border-2 border-primary_color  px-6 py-2 rounded-sm text-white bg-primary_color transition w-[190px] h-[60px] max-sm:w-[130px] max-sm:text-xs max-sm:h-[50px]">
                            Show More
                        </button>
                        <div className="flex items-center pl-5 max-sm:pl-1">
                            <div className="w-[60px] h-[60px] rounded-full bg-primary_color flex justify-center items-center">
                                <Image
                                    src={"/icons/Play.svg"}
                                    alt="Search Icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <h1 className="font-bold pl-5 max-sm:text-xs max-sm:pl-0">Play Now</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section2 bg-white py-12 max-sm:py-4 px-6 my-10 w-[80%] m-auto max-lg:w-[95%]">
                {/* Header Section */}
                <div className="text-center mb-12 ">
                    <h2 className="text-5xl font-bold mb-4 max-sm:text-3xl">Why Choose Us</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                        pellentesque bibendum non dui volutpat fringilla bibendum.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center w-full">
                    <Image
                        src="/img/aboutsec2.svg"
                        alt="Why Choose Us"
                        height={200}
                        width={100}
                        className=" object-cover w-full max-md:h-[200px]"
                    />
                </div>

                {/* Features Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 text-center max-xl:grid-cols-1" >
                    {/* Feature 1 */}
                    <div className='w-[359px] flex flex-col justify-between items-center max-sm:w-full'>
                        <div className="text-4xl mb-4 ">
                            <Image
                                src={"/icons/Student.svg"}
                                alt="Search Icon"
                                width={80}
                                height={80}
                            />
                        </div> {/* Replace with icon */}
                        <h3 className="font-bold text-xl mb-2">Best Chef</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            diam pellentesque bibendum non dui volutpat.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className='w-[359px] flex flex-col justify-between items-center max-sm:w-full'>
                        <div className="text-4xl mb-4"><Image
                            src={"/icons/Coffee2.svg"}
                            alt="Search Icon"
                            width={80}
                            height={80}
                        /></div> {/* Replace with icon */}
                        <h3 className="font-bold text-xl mb-2">120 Item Food</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            diam pellentesque bibendum non dui volutpat.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className='w-[359px] flex flex-col justify-between items-center max-sm:w-full'>
                        <div className="text-4xl mb-4"><Image
                            src={"/icons/Person.svg"}
                            alt="Search Icon"
                            width={80}
                            height={80}
                        /></div> {/* Replace with icon */}
                        <h3 className="font-bold text-xl mb-2">Clean Environment</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            diam pellentesque bibendum non dui volutpat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section3 text-white py-16 relative">



                {/* Header Section */}
                <div className="text-center mb-12 bg-primary_color absolute top-0 max-sm:top-[-100px] max-sm:mt-[50px] min-h-[300px] w-full py-10">
                    <h2 className="text-4xl font-bold">Team Member</h2>
                    <p className="text-lg mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
                        pharetra dictum neque massa congue.
                    </p>
                </div>

                {/* Team Members Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-20 w-[80%] m-auto max-sm:w-[90%]">
                    {/* Team Member Card */}
                    {[
                        { name: "Mark Henry", role: "Owner" },
                        { name: "Lucky Helen", role: "Chef" },
                        { name: "Moon Henry", role: "Founder" },
                        { name: "Tom Monrow", role: "Specialist" },
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-lg shadow-lg overflow-hidden max-sm:w-[95%] "
                        >
                            {/* Image Section */}
                            <div className="relative">
                                <Image
                                    src="/img/aboutsec3.svg" // Replace with actual image URL
                                    alt={member.name}
                                    height={310}
                                    width={100}
                                    className="w-full h-[310px] object-cover"
                                />
                                {/* Social Icons */}
                                <div className="absolute top-2 right-2 space-y-2">
                                    {["#facebook", "#twitter", "#instagram"].map((link, idx) => (
                                        <a
                                            key={idx}

                                            href="#"
                                            className="bg-white p-2 rounded-md shadow hover:shadow-lg hover:bg-gray-100"
                                            aria-label="Facebook"
                                        >

                                            {idx === 0 && <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.2c0-2.506 1.493-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563v1.873h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                            </svg>}
                                            {idx === 1 && <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M7.75 2h8.5A5.25 5.25 0 0 1 21.5 7.25v8.5A5.25 5.25 0 0 1 16.25 21h-8.5A5.25 5.25 0 0 1 2.5 15.75v-8.5A5.25 5.25 0 0 1 7.75 2zM12 7.25A4.75 4.75 0 1 0 12 16.75 4.75 4.75 0 0 0 12 7.25zm0 2A2.75 2.75 0 1 1 12 14 2.75 2.75 0 0 1 12 9.25zm4.5-2.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75z" />
                                            </svg>}
                                            {idx === 2 && <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M7.75 2h8.5A5.25 5.25 0 0 1 21.5 7.25v8.5A5.25 5.25 0 0 1 16.25 21h-8.5A5.25 5.25 0 0 1 2.5 15.75v-8.5A5.25 5.25 0 0 1 7.75 2zM12 7.25A4.75 4.75 0 1 0 12 16.75 4.75 4.75 0 0 0 12 7.25zm0 2A2.75 2.75 0 1 1 12 14 2.75 2.75 0 0 1 12 9.25zm4.5-2.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75z" />
                                            </svg>}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/* Info Section */}
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="section4 w-[80%] min-h-[489px] flex flex-col justify-between pb-10 pt-10 text-black m-auto">
                <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl text-start ${greatVibes.className}`}>
                    Testimonals
                </div>
                <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl text-start">
                    <span className="text-primary_color">Wh</span>at our client are saying

                </h1>
                <div className="">
                    <TestimonialCard />
                </div>



            </div>

            <div className="section5  w-[80%] min-h-[850px] flex flex-col justify-between mb-10 mt-20  m-auto items-center max-sm:w-[90%]">
                <div className=" text-center max-w-[428px]">
                    <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl max-lg:pt-10">
                        <span className="text-primary_color">Ou</span>r Food Menu
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Varius sed pharetra dictum neque massa congue</p>
                </div>
                <div className="w-[80%] flex justify-center max-lg:pt-10 max-sm:w-full font-medium text-xl max-sm:text-sm max-lg:w-full max-lg:flex-col items-center ">
                    <ul className="flex w-[50%] justify-evenly  max-sm:w-[90%] ">
                        <li id="0" className={`${activeMenu === 0 && "active"} cursor-pointer`} onClick={() => { setActiveMenu(0) }}>BreakFast</li>
                        <li id="1" className={`${activeMenu === 1 && "active"} cursor-pointer`} onClick={() => { setActiveMenu(1) }}>Lunch</li>
                        <li id="2" className={`${activeMenu === 2 && "active"} cursor-pointer`} onClick={() => { setActiveMenu(2) }}>Dinner</li>
                        <li id="3" className={`${activeMenu === 3 && "active"} cursor-pointer`} onClick={() => { setActiveMenu(3) }}>Desert</li>
                    </ul>
                    <ul className="flex w-[30%] justify-between max-lg:pt-4 max-sm:w-[50%]">
                        <li id="4" className={`${activeMenu === 4 && "active"} cursor-pointer`} onClick={() => { setActiveMenu(4) }}>Soups</li>
                        <li id="5" className={`${activeMenu === 5 && "active"} cursor-pointer`} onClick={() => { setActiveMenu(5) }}>Snacks</li>
                        <li id="6" className={`${activeMenu === 6 && "active"} cursor-pointer`} onClick={() => { setActiveMenu(6) }}>Drink</li>
                    </ul>
                </div>
                <div className="flex w-full justify-center items-center max-lg:flex-col ">

                    <Menu activeMenu={activeMenu} />

                </div>

            </div>

        </div>
    )
}

export default AboutPage