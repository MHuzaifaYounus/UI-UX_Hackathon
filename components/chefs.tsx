import React from "react";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/img/chef1.svg" },
  { name: "Jorina Begum", role: "Chef", image: "/img/chef2.svg" },
  { name: "M. Mohammad", role: "Chef", image: "/img/chef3.svg" },
  { name: "Munna Kathy", role: "Chef", image: "/img/chef4.svg" },
  { name: "Bisnu Devgon", role: "Chef", image: "/img/chef5.svg" },
  { name: "Motin Molladsf", role: "Chef", image: "/img/chef6.svg" },
  { name: "William Rumi", role: "Chef", image: "/img/chef7.svg" },
  { name: "Kets William Roy", role: "Chef", image: "/img/chef8.svg" },
  { name: "Mahmud Kholil", role: "Chef", image: "/img/chef9.svg" },
  { name: "Ataur Rahman", role: "Chef", image: "/img/chef10.svg" },
  { name: "Monalisa Holly", role: "Chef", image: "/img/chef11.svg" },
  { name: "Monalisa Holly", role: "Chef", image: "/img/chef12.svg" },
];

const ChefGrid = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-[379px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {chef.name}
              </h2>
              <p className="text-gray-500">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
