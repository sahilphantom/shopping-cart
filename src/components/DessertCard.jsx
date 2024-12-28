import React from 'react'

import { motion } from 'framer-motion';
import { addCart } from '../assets/img';

export function DessertCard({ dessert, onAddToCart }) {
  return (
    <div className="relative group" >
      <div className="overflow-hidden rounded-lg aspect-square">
        <img 
          src={dessert.image} 
          alt={dessert.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <p className="text-sm text-gray-500">{dessert.category}</p>
        <h3 className="font-medium">{dessert.name}</h3>
        <p className="text-[#C73B0F] font-semibold">${dessert.price.toFixed(2)}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onAddToCart(dessert)}
        className="mt-2 flex items-center justify-center gap-2 position: relative top-[-6.9rem] left-12 bg-white border border-gray-200 w-[160px] rounded-full py-2 px-3 text-sm hover:bg-gray-50 transition-colors "
      >
        <img src={addCart} alt="" className="w-5 h-5" />
        Add to Cart
      </motion.button>
    </div>
  );
}


