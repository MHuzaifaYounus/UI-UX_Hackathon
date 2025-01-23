"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from "react";
import { Great_Vibes } from "next/font/google"
import Menu from './menu';
const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] })

const MenuSection = () => {
    const [activeMenu, setActiveMenu] = useState<string>("Appetizer")
    return (
        <div className="section6 w-[80%] min-h-[850px] flex flex-col justify-between mb-10 mt-20 text-white m-auto items-center max-sm:w-[90%]">
            <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl ${greatVibes.className}`}>
                Choos & pick
            </div>
            <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl max-lg:pt-10">
                <span className="text-primary_color">Fr</span>om Our Menu

            </h1>
            <div className="w-[80%] flex justify-center max-lg:pt-10 max-sm:w-full font-medium text-xl max-sm:text-sm max-lg:w-full max-lg:flex-col items-center ">
                <ul className="flex w-[50%] justify-evenly  max-sm:w-[90%] ">
                    <li id="0" className={`${activeMenu === "Appetizer" && "active"} cursor-pointer`} onClick={() => { setActiveMenu("Appetizer") }}>Appetizer</li>
                    <li id="5" className={`${activeMenu === "Main Course" && "active"} cursor-pointer`} onClick={() => { setActiveMenu("Main Course") }}>Main Course</li>
                    <li id="3" className={`${activeMenu === "Dessert" && "active"} cursor-pointer`} onClick={() => { setActiveMenu("Dessert") }}>Dessert</li>
                </ul>
                <ul className="flex w-[30%] justify-between max-lg:pt-4 max-sm:w-[50%]">
                    <li id="4" className={`${activeMenu === "Sandwich" && "active"} cursor-pointer`} onClick={() => { setActiveMenu("Sandwich") }}>Sandwich</li>
                    <li id="1" className={`${activeMenu === "Rolls" && "active"} cursor-pointer`} onClick={() => { setActiveMenu("Rolls") }}>Rolls</li>
                    <li id="6" className={`${activeMenu === "Drink" && "active"} cursor-pointer`} onClick={() => { setActiveMenu("Drink") }}>Drink</li>
                </ul>
            </div>

            <div className="flex w-full justify-between items-center max-xl:flex-col ">
                <div className="img flex justify-center items-center h-[406px] w-[35%] max-sm:w-full">

                    <Image
                        src={"/img/frame6side.svg"}
                        alt="Search Icon"
                        width={366}
                        height={362}
                    />
                </div>
                <div className="list flex  w-[70%] max-xl:w-full">
                    <Menu activeMenu={activeMenu} theme={"Black"}/>
                </div>
            </div>

        </div>
    )
}

export default MenuSection