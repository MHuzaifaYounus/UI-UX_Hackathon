"use client";
import { client } from "@/sanity/lib/client";
import { Food } from "@/types";
import { useEffect, useState } from "react";
import Item from "./item";

const ProductGrid = ({ checkedCategories, searchInput }: { checkedCategories: string[], searchInput: string }) => {
  const [filteredProducts, setFilteredProducts] = useState<Food[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const changeCurrentPage = (btnType: "Next" | "Prev") => {
    if (btnType === "Next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (btnType === "Prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginateProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  useEffect(() => {
    async function getData() {
      const response: Food[] = await client.fetch(`*[_type == "food"]{
        name,
        category,
        price,
        originalPrice,
        tags,
        "image": image.asset->url,
        description,
        available,
        "slug": slug.current
      }`);

      if (checkedCategories.length !== 0 || searchInput) {
        const filtered: Food[] = response.filter((e) => {
          const matchesCategory = checkedCategories.length === 0 || 
            checkedCategories.some(
              (category) => category.toLowerCase() === e.category.toLowerCase()
            );
        
          const matchesSearch = !searchInput || 
            e.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            e.tags.some((tag) => tag.toLowerCase().includes(searchInput.toLowerCase()));
        
          // Include the item if it matches either condition or both
          return matchesCategory && matchesSearch;
        });
        
        console.log(filtered)
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(response);
      }
    
    }
    getData();
  }, [checkedCategories, searchInput]);

  useEffect(() => {
    setCurrentPage(1); 
  }, [filteredProducts]);

  return (
    <div className="p-4 w-[75%] max-lg:w-full">
      {/* Sort and Filter Options */}
      <div className="flex items-center mb-4 max-sm:w-full">
        <div>
          <label className="mr-2 text-xl font-medium">Sort By:</label>
          <select className="border border-gray-300 rounded p-1 focus:ring-orange-300 w-[236px] h-[46px] max-sm:w-[136px] max-sm:h-[46px]">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="pl-10 max-sm:pl-2">
          <label className="mr-2 text-xl font-medium">Show:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded p-1 focus:ring-orange-300 w-[236px] h-[46px] max-sm:w-[136px] max-sm:h-[46px]"
          >
            <option value={6}>6 per page</option>
            <option value={12}>12 per page</option>
            <option value={24}>24 per page</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {paginateProducts().map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => changeCurrentPage("Prev")}
          disabled={currentPage === 1}
          className={`px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          &lt;&lt;
        </button>
        <span className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => changeCurrentPage("Next")}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
