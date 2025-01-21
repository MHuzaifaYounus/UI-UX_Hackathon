"use client"
import { client } from "@/sanity/lib/client";
import { Chef } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";



const ChefGrid = () => {
  const [chefs, setChefs] = useState<Chef[]>([])
  const [error, setError] = useState<string|null>(null)
  useEffect(() => {
    async function getData() {
      try {
        const response: Chef[] = await client.fetch(`*[_type == "chef"]{
    name,
    position,
    experience,
    specialty,
    "image":image.asset->url,
    description,
    available
  }`)
        console.log(response)
        setChefs(response)
      } catch (error) {
        console.error("Failed to fetch Chefs:", error);
        setError("Unable to load Chefs. Please try again later."); 
       

      }
    }
    getData()
  }, [])


  return (
    <div className="bg-gray-100 min-h-screen p-10 max-sm:p-3">
     {error ? <div className="errormsg w-full text-3xl text-red-500 flex justify-center items-center">
          <h1 className="font-semibold">{error}</h1>
        </div> :
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden "
          >
            <Image
              src={chef.image || "/img/sample.jpg"}
              alt={chef.name}
              height={379}
              width={200}
              loading="lazy"
              className="w-full h-[379px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {chef.name}
              </h2>
              <p className="text-gray-500">{chef.position}</p>
              <p>{chef.description}</p>
              <p className="text-primary_color">Specialty: {chef.specialty}</p>
              <p className="text-primary_color">Experice: {chef.experience} Years</p>

            </div>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default ChefGrid;
