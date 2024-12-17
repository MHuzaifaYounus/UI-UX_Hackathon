import React from "react";

const menuItems = [
  [
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
  ],
  [
    {
      id: 1,
      name: "Caesar Salad",
      description: "Crisp lettuce with a creamy Caesar dressing.",
      price: "15.0$",
      image: "/img/frame61.svg"
    },
    {
      id: 2,
      name: "Grilled Cheese Sandwich",
      description: "Melted cheese between toasted golden bread.",
      price: "10.5$",
      image: "/img/frame62.svg"
    },
    {
      id: 3,
      name: "Breakfast Burrito",
      description: "Scrambled eggs, bacon, and cheese wrapped in a soft tortilla.",
      price: "13.5$",
      image: "/img/frame63.svg"
    },
    {
      id: 4,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, basil, and tomato on a thin crust.",
      price: "16.0$",
      image: "/img/frame64.svg"
    },
    {
      id: 5,
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter and herbs.",
      price: "8.5$",
      image: "/img/frame65.svg"
    },
    {
      id: 6,
      name: "Steak Frites",
      description: "Tender steak served with crispy French fries.",
      price: "18.0$",
      image: "/img/frame66.svg"
    },
    {
      id: 7,
      name: "BLT Sandwich",
      description: "Bacon, lettuce, and tomato on toasted bread.",
      price: "12.0$",
      image: "/img/frame67.svg"
    },
    {
      id: 8,
      name: "Mushroom Risotto",
      description: "Creamy risotto with sautéed mushrooms and Parmesan.",
      price: "14.0$",
      image: "/img/frame68.svg"
    }
  ],
  [
    {
      id: 1,
      name: "Grilled Salmon with Asparagus",
      description: "Succulent grilled salmon served with tender asparagus.",
      price: "22.5$",
      image: "/img/frame61.svg"
    },
    {
      id: 2,
      name: "Chicken Alfredo",
      description: "Creamy Alfredo sauce served with grilled chicken and fettuccine.",
      price: "18.5$",
      image: "/img/frame62.svg"
    },
    {
      id: 3,
      name: "Beef Wellington",
      description: "Tender beef wrapped in puff pastry with mushroom duxelles.",
      price: "35.0$",
      image: "/img/frame63.svg"
    },
    {
      id: 4,
      name: "Shrimp Scampi",
      description: "Garlic butter shrimp served over pasta with a hint of lemon.",
      price: "26.0$",
      image: "/img/frame64.svg"
    },
    {
      id: 5,
      name: "Roast Chicken with Vegetables",
      description: "Herb-roasted chicken served with roasted seasonal vegetables.",
      price: "20.0$",
      image: "/img/frame65.svg"
    },
    {
      id: 6,
      name: "Filet Mignon",
      description: "A perfectly cooked filet mignon served with mashed potatoes.",
      price: "32.5$",
      image: "/img/frame66.svg"
    },
    {
      id: 7,
      name: "Vegetarian Lasagna",
      description: "Layers of pasta, ricotta, and vegetables baked in marinara sauce.",
      price: "18.0$",
      image: "/img/frame67.svg"
    },
    {
      id: 8,
      name: "Lamb Chops with Mint Sauce",
      description: "Grilled lamb chops served with a refreshing mint sauce.",
      price: "28.5$",
      image: "/img/frame68.svg"
    }
  ],
  [
    {
      id: 1,
      name: "Chocolate Lava Cake",
      description: "Warm, rich chocolate cake with a molten center, served with vanilla ice cream.",
      price: "9.5$",
      image: "/img/frame61.svg"
    },
    {
      id: 2,
      name: "Tiramisu",
      description: "A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
      price: "7.5$",
      image: "/img/frame62.svg"
    },
    {
      id: 3,
      name: "Crème Brûlée",
      description: "Silky vanilla custard topped with a crispy caramelized sugar crust.",
      price: "8.5$",
      image: "/img/frame63.svg"
    },
    {
      id: 4,
      name: "Cheesecake with Berry Compote",
      description: "Creamy cheesecake topped with fresh berries and a sweet berry compote.",
      price: "10.0$",
      image: "/img/frame64.svg"
    },
    {
      id: 5,
      name: "Apple Pie à la Mode",
      description: "Warm apple pie served with a scoop of vanilla ice cream.",
      price: "7.0$",
      image: "/img/frame65.svg"
    },
    {
      id: 6,
      name: "Panna Cotta",
      description: "Delicate vanilla panna cotta topped with a raspberry coulis.",
      price: "6.5$",
      image: "/img/frame66.svg"
    },
    {
      id: 7,
      name: "Lemon Meringue Pie",
      description: "Tangy lemon filling topped with a light, fluffy meringue.",
      price: "8.0$",
      image: "/img/frame67.svg"
    },
    {
      id: 8,
      name: "Baklava",
      description: "Sweet, flaky pastry layers with honey and nuts, drizzled with syrup.",
      price: "6.0$",
      image: "/img/frame68.svg"
    }
  ],
  [
    {
      id: 1,
      name: "Tomato Basil Soup",
      description: "A creamy blend of tomatoes and fresh basil, served with a drizzle of cream.",
      price: "7.5$",
      image: "/img/frame61.svg"
    },
    {
      id: 2,
      name: "French Onion Soup",
      description: "Caramelized onions in a savory broth, topped with melted cheese and croutons.",
      price: "9.0$",
      image: "/img/frame62.svg"
    },
    {
      id: 3,
      name: "Chicken Noodle Soup",
      description: "A hearty soup with tender chicken, vegetables, and egg noodles in a flavorful broth.",
      price: "8.0$",
      image: "/img/frame63.svg"
    },
    {
      id: 4,
      name: "Lobster Bisque",
      description: "A rich and creamy soup made with fresh lobster, a touch of brandy, and herbs.",
      price: "14.5$",
      image: "/img/frame64.svg"
    },
    {
      id: 5,
      name: "Minestrone Soup",
      description: "A vegetable-packed Italian soup with beans, pasta, and a flavorful tomato broth.",
      price: "7.0$",
      image: "/img/frame65.svg"
    },
    {
      id: 6,
      name: "Butternut Squash Soup",
      description: "Smooth and velvety soup made from roasted butternut squash, seasoned with spices.",
      price: "8.5$",
      image: "/img/frame66.svg"
    },
    {
      id: 7,
      name: "Clam Chowder",
      description: "A creamy soup filled with tender clams, potatoes, and celery, served in a bread bowl.",
      price: "10.0$",
      image: "/img/frame67.svg"
    },
    {
      id: 8,
      name: "Pea and Ham Soup",
      description: "A hearty soup made with split peas and smoky ham, perfect for a cozy meal.",
      price: "8.0$",
      image: "/img/frame68.svg"
    }
  ],
  [
    {
      id: 1,
      name: "Guacamole with Tortilla Chips",
      description: "Creamy guacamole served with crispy tortilla chips.",
      price: "6.5$",
      image: "/img/frame61.svg"
    },
    {
      id: 2,
      name: "Mozzarella Sticks",
      description: "Crispy, golden-brown breaded mozzarella sticks served with marinara sauce.",
      price: "7.5$",
      image: "/img/frame62.svg"
    },
    {
      id: 3,
      name: "Hummus and Veggies",
      description: "A creamy hummus dip served with fresh, crunchy vegetable sticks.",
      price: "5.0$",
      image: "/img/frame63.svg"
    },
    {
      id: 4,
      name: "Mini Spring Rolls",
      description: "Crispy spring rolls filled with vegetables and served with sweet chili sauce.",
      price: "8.0$",
      image: "/img/frame64.svg"
    },
    {
      id: 5,
      name: "Nachos Supreme",
      description: "Tortilla chips loaded with melted cheese, jalapeños, and sour cream.",
      price: "9.0$",
      image: "/img/frame65.svg"
    },
    {
      id: 6,
      name: "Stuffed Potato Skins",
      description: "Potato skins filled with cheese, bacon, and green onions, served with sour cream.",
      price: "7.0$",
      image: "/img/frame66.svg"
    },
    {
      id: 7,
      name: "Crispy Onion Rings",
      description: "Golden, crispy onion rings served with a tangy dipping sauce.",
      price: "6.0$",
      image: "/img/frame67.svg"
    },
    {
      id: 8,
      name: "Chicken Tenders",
      description: "Juicy chicken tenders breaded and fried to perfection, served with dipping sauce.",
      price: "8.5$",
      image: "/img/frame68.svg"
    }
  ],
  [
    {
      id: 1,
      name: "Iced Lemonade",
      description: "Refreshing lemon juice served over ice with a hint of sweetness.",
      price: "4.5$",
      image: "/img/frame61.svg"
    },
    {
      id: 2,
      name: "Mango Smoothie",
      description: "A tropical blend of ripe mangoes, yogurt, and ice for a creamy, fruity treat.",
      price: "5.5$",
      image: "/img/frame62.svg"
    },
    {
      id: 3,
      name: "Iced Coffee",
      description: "Cold brewed coffee served over ice with milk and a touch of vanilla syrup.",
      price: "4.0$",
      image: "/img/frame63.svg"
    },
    {
      id: 4,
      name: "Coca-Cola",
      description: "Classic Coca-Cola served ice-cold for the perfect refreshment.",
      price: "2.5$",
      image: "/img/frame64.svg"
    },
    {
      id: 5,
      name: "Green Tea",
      description: "Freshly brewed green tea, light and refreshing.",
      price: "3.0$",
      image: "/img/frame65.svg"
    },
    {
      id: 6,
      name: "Pineapple Juice",
      description: "A refreshing and sweet juice made from fresh pineapples.",
      price: "4.0$",
      image: "/img/frame66.svg"
    },
    {
      id: 7,
      name: "Berry Smoothie",
      description: "A healthy blend of mixed berries, yogurt, and a touch of honey.",
      price: "5.0$",
      image: "/img/frame67.svg"
    },
    {
      id: 8,
      name: "Sparkling Water",
      description: "Refreshing carbonated water with a hint of natural flavor.",
      price: "3.5$",
      image: "/img/frame68.svg"
    }
  ]
]


const Menu = ({ activeMenu }: { activeMenu?: number }) => {
  return (
    <div className="text-white flex justify-center items-center ">
      {menuItems.map((item, index) => (
        <div key={index} className={` ${index === activeMenu ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 gap-6 p-6 max-sm:p-1 `}>
          {item.map((subItem, subIndex) => {
            return <div
              key={subIndex}
              className="flex items-center rounded-lg p-4 shadow-lg"
            >
              <img
                src={subItem.image}
                alt={subItem.name}
                className="w-20 h-20 rounded-md object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{subItem.name}</h3>
                <p className="text-sm text-gray-400">{subItem.description}</p>
                <p className="text-yellow-400 font-bold mt-2">{subItem.price}</p>
              </div>
            </div>
          })}

        </div>
      ))}
    </div>
  );
};

export default Menu;
