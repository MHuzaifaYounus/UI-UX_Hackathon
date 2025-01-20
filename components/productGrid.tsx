"use client"
import { client } from "@/sanity/lib/client";
import { Food } from "@/types";
import React, { useEffect, useState } from "react";
import Item from "./item";

const ProductGrid = ({ checkedCategories, searchInput }: { checkedCategories: string[], searchInput: string }) => {
  console.log(searchInput)
  const [products, setProducts] = useState<Food[]>([])



  useEffect(() => {
    async function getData() {
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

      if ((checkedCategories.length != 0) || searchInput) {
        console.log("chala he")
        const array: Food[] = []
        response.forEach((e) => {
          if (checkedCategories.includes(e.category)) {
            array.push(e)
          }
          if ((e.name).toLocaleLowerCase() === searchInput.toLocaleLowerCase() || e.tags.includes(searchInput)) {
            array.push(e)
          }
        })
        setProducts(array)
      }

      else {
        setProducts(response)

      }


    }
    getData()

  }, [checkedCategories, searchInput])


  return (
    <div className="p-4 w-[75%] max-lg:w-full">
      {/* Sort and Filter Options */}
      <div className="flex items-center mb-4 max-sm:w-full">
        <div className="">
          <label className="mr-2 text-xl font-medium">Sort By:</label>
          <select className="border border-gray-300 rounded p-1 focus:ring-orange-300 w-[236px] h-[46px] max-sm:w-[136px] max-sm:h-[46px]">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="pl-10 max-sm:pl-2">
          <label className="mr-2 text-xl font-medium">Show:</label>
          <select className="border border-gray-300 rounded p-1 focus:ring-orange-300 w-[236px] h-[46px] max-sm:w-[136px] max-sm:h-[46px]">
            <option>Default</option>
            <option>6 per page</option>
            <option>12 per page</option>
          </select>
        </div>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {products.map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &lt;&lt;
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          1
        </button>
        <button className="px-3 py-1 mx-1 text-white bg-primary_color rounded">2</button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          3
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
