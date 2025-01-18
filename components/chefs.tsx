"use client"
import { client } from "@/sanity/lib/client";
import { Chef } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";



const ChefGrid = () => {
  const [chefs, setChefs] = useState<Chef[]>([])
  useEffect(() => {
    async function getData() {
      const response: Chef[] = await client.fetch(`*[_type == "chef"]{
    name,
    position,
    experience,
    specialty,
    "image":image.asset->url,
    description,
    available
  }`)
      setChefs(response)
    }
    getData()
  }, [])


  return (
    <div className="bg-gray-100 min-h-screen p-10 max-sm:p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden "
          >
            <Image
              src={chef.image || ""}
              alt={chef.name}
              height={379}
              width={200}
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
      </div>
    </div>
  );
};

export default ChefGrid;
