"use client"
import { client } from "@/sanity/lib/client";
import { Food } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";



const Menu = ({ activeMenu , theme }: { activeMenu: string , theme:"White" | "Black"  }) => {
  const [menuItems, setMenuItems] = useState<Food[]>([])

  useEffect(() => {
    async function getData() {
      try {

        const response: Food[] = await client.fetch(`*[_type == "food" && category == $activeMenu ]{
  id,
    name,
    category,
    price,
    originalPrice,
    tags,
    "image":image.asset->url,
    description,
    available,
    "slug": slug.current
  }`, { activeMenu })
        console.log(response)
        setMenuItems(response)
      } catch (error) {
        console.error("Error While Fetching Menu Items" , error)
      }


    }
    getData()
  }, [activeMenu])

  return (
    <div className="text-white flex justify-center items-center ">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-sm:p-1 `}>
        {menuItems.map((subItem, index) => (
          <Link href={`/shop/${subItem.slug}`} key={index}>
            <div
              className="flex items-center rounded-lg p-4 shadow-lg w-full"
            >
              <Image
                src={subItem?.image || ""}
                alt={subItem?.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-md object-cover mr-4"
              />
              <div>
                <h3 className={`text-sm font-bold w-full ${theme == "White"? "text-black":"text-white"}`}>{subItem?.name}</h3>
                <p className="text-sm text-gray-400">{(subItem?.description).split(".")[0]}</p>
                <p className="text-yellow-400 font-bold mt-2">${subItem?.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
