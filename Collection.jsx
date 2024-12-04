import React, { useContext, useEffect, useState } from 'react';
import ShopContext from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from "../components/ProductItem"

const Collection = () => {
  const { product } = useContext(ShopContext); // Products context se la rahe hain
  const [showFilter, setShowFilter] = useState(true); // Toggle filter visibility
  const [filterProduct, setfilterProduct] = useState([]); // Filtered products
  const [category, setCategory] = useState([]); // Selected categories
  const [sortOption, setSortOption] = useState(""); // Sort option
  const [searchTerm, setSearchTerm] = useState(""); // Search query

  // Category filter toggle karna
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    ));
  };

  // Category aur Search ke basis par products ko filter karna
  useEffect(() => {
    let filtered = product;

    // Category filter
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setfilterProduct(filtered); // Filtered products ko update karte hain
  }, [category, searchTerm, product]);

  // Sorting ke liye effect
  useEffect(() => {
    if (sortOption === "low-to-high") {
      setfilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sortOption === "high-to-low") {
      setfilterProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sortOption]);

  // Search bar ka handler function
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Search term update karega
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Option */}
        <div className="min-w-60">
          <p
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filters {showFilter ? '▲' : '▼'}
          </p>
          {/* Category Filters */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
            <p className="font-semibold text-gray-700">Category</p>
            <div className="space-y-2 mt-2">
              <p className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="men's clothing"
                  onChange={toggleCategory}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Men Cloths</span>
              </p>
              <p className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="women's clothing"
                  onChange={toggleCategory}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Women Cloths</span>
              </p>
              <p className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="jewelery"
                  onChange={toggleCategory}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Jewelery</span>
              </p>
              <p className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="electronics"
                  onChange={toggleCategory}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Electronics</span>
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='flex-1'>
        <Title text1={"All"} text2={"Collections"} />
          {/* Search and Sorting */}
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch} // Search handler
              className="border-2 border-gray-300 text-sm px-4 py-2 rounded-md w-full sm:w-auto"
            />
            <select
              className="border-2 border-gray-300 text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-md w-full sm:w-auto"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort by: Relevant</option>
              <option value="low-to-high">Sort by: Low to High</option>
              <option value="high-to-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Display Filtered Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProduct.map((item, index) => (
              <ProductItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;

