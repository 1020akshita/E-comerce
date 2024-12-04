import React, { useState, useEffect, useContext } from 'react';

import Title from './Title';
import ShopContext from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { product } = useContext(ShopContext);

  // console.log(product)
  const [latestProduct, setLatestProduct] = useState([]);
  console.log(latestProduct)

  useEffect(() => {
    if (product.length > 0) {
      setLatestProduct(product.slice(0, 10));
    }
  }, [product]);



  return (
    <>
      <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <Title text1={"Latest"} text2={"Collection"} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis cumque nam inventore. Facere nam, odio accusamus et optio harum.
          </p>
        </div>

        {/* Rander Collection Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProduct.length > 0 ? (
            latestProduct.map((item) => (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <h1 className="text-gray-500 text-center col-span-full">Loading products...</h1>
          )}
        </div>
      </div>


    </>
  );
};

export default LatestCollection;
