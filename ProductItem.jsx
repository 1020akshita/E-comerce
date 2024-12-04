import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, title, price, rating, category }) => {

  return (
    <Link to={`/product/${id}`} className="block text-center">
      <div className="overflow-hidden rounded-lg bg-white shadow-md h-48">
        <img
          className="hover:scale-110 transition-transform ease-in-out max-w-full max-h-60 object-contain"
          src={image}
          alt={title}
        />
      </div>
      <p className="pt-3 text-sm font-medium">{title }</p>
      <p className="pt-3 text-sm font-medium">{category }</p>
      <p className="text-sm text-gray-700">${price }</p>
      <p className="text-sm text-yellow-500">Rating: {rating?.rate }</p>
    </Link>
  );
};

export default ProductItem;
