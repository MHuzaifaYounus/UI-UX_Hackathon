import React from "react";

const menuItems = [
    {
      id: 1,
      name: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/img/frame61.svg",
    },
    {
      id: 2,
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/img/frame62.svg",
    },
    {
      id: 3,
      name: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "/img/frame63.svg",
    },
    {
      id: 4,
      name: "Italian Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "/img/frame64.svg",
    },
    {
      id: 5,
      name: "Mild Butter",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/img/frame65.svg",
    },
    {
      id: 6,
      name: "Sliced Beef",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/img/frame66.svg",
    },
    {
      id: 7,
      name: "Fresh Bread",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/img/frame67.svg",
    },
    {
      id: 8,
      name: "Mushroom Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "/img/frame68.svg",
    },
  ];
  

const Menu = () => {
  return (
    <div className="text-white flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-sm:p-1">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center rounded-lg p-4 shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-md object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <p className="text-yellow-400 font-bold mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
