"use client"
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";


interface Categories {
    category: string
}

interface childComponentProp {
    onUpdateArray: (data: string[]) => void,
    onSearch:(input:string)=>void
}

const Sidebar: React.FC<childComponentProp> = ({ onUpdateArray, onSearch }) => {
    const [Categories, setCategories] = useState<string[]>([])
    const [checkedState, setCheckedState] = useState<string[]>([])
    const [searchInput, setSearchInput] = useState<string>("")

    const handleCheckboxChange = (category: string) => {
        setCheckedState((prevState) =>
            prevState.includes(category)
                ? prevState.filter((item) => item !== category)
                : [...prevState, category]
        );
    };
    function handleSearchbar(e: ChangeEvent<HTMLInputElement>) {
        setSearchInput(e.target.value)

    }
    function handleSearchItem() {
        onSearch(searchInput)
        
    }

    useEffect(() => {
        console.log(checkedState)
        onUpdateArray(checkedState)
    }, [checkedState, onUpdateArray])


    useEffect(() => {
        async function getCategories() {
            const response = await client.fetch(`*[_type == "food"]{
                category,
              }`)
            const array: string[] = []
            response.forEach((e: Categories) => {
                if (!array.includes(e.category)) {
                    array.push(e.category)
                }
            });

            setCategories(array)

        }
        getCategories()

    }, [])


    return (
        <div className="w-[312px] bg-white p-4 border border-gray-200 max-lg:hidden">
            {/* Search */}
            <div className="mb-6 flex ">
                <input
                    type="text"
                    placeholder="Search Product"
                    id="searchBox"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                    value={searchInput}
                    onChange={handleSearchbar}
                />
                <Button className="bg-primary_color h-[46] rounded-s-none"> <Image
                    src="/icons/search.svg"
                    alt="Starter Menu Dish"
                    width={24}
                    height={24}
                    onClick={handleSearchItem}
                /></Button>

            </div>

            {/* Categories */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Category</h3>
                <div className="space-y-2">
                    {Categories.map(
                        (category, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-orange-500" onChange={() => { handleCheckboxChange(category) }} />
                                <span>{category}</span>
                            </label>
                        )
                    )}
                </div>
            </div>

            {/* Advertisement */}
            <div className="mb-6 bg-gray-100  rounded shadow-md text-center">
                <div className="relative">
                    <Image
                        src="/img/sidebarad.svg"
                        alt="Classic Restaurant"
                        width={100}
                        height={100}
                        className="w-full h-auto rounded"
                    />
                    <div className="absolute top-5 left-5 bg-opacity-40 text-white flex flex-col justify-center items-start rounded">
                        <h4 className="font-bold">Perfect Taste</h4>
                        <p className="text-xl font-bold">Classic Restaurant</p>
                        <p className="font-bold mt-1 text-primary_color">45.00$</p>
                    </div>
                    <button className="absolute bottom-5 left-5 mt-3 px-4 py-2 underline text-white rounded hover:bg-orange-600">
                        Shop Now

                    </button>
                </div>

            </div>

            {/* Filter by Price */}
            <div className="mb-6">
                <h3 className="font-bold text-xl mb-2">Filter By Price</h3>
                <div>
                    <input
                        type="range"
                        min="0"
                        max="800"
                        className="w-full bg-primary_color"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>From $0</span>
                        <span>To $800</span>
                    </div>
                </div>

            </div>

            {/* Latest Products */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Latest Products</h3>
                <div className="space-y-4">
                    {["Pizza", "Cupcake", "Cookies", "Burger"].map((product) => (
                        <div
                            key={product}
                            className="flex items-center space-x-4 border-b pb-2"
                        >
                            <Image
                                src="/img/shop9.svg"
                                alt={product}
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded"
                            />
                            <div>
                                <p className="font-medium">{product}</p>
                                <p className="text-sm text-gray-500">$35.00</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Tags */}
            <div>
                <h3 className="font-semibold text-lg mb-2">Product Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {["Services", "Our Menu", "Pizza", "Cupcake", "Burger", "Cookies", "Our Shop", "Tandoori Chicken"].map(
                        (tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200 cursor-pointer"
                            >
                                {tag}
                            </span>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
