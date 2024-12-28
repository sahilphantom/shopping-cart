import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { carbon, decCart, emptyCart, incCart, removeCart } from '../assets/img';

export function Cart({ items, onUpdateQuantity, onRemoveItem, onConfirmOrder, total }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Your Cart ({items.length})</h2>
      
      {items.length === 0 ? (
        <div className="text-center py-8">
          <img 
            src={emptyCart}
            alt="Empty cart" 
            className="w-32 h-32 mx-auto mb-4"
          />
          <p className="text-gray-500">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          ${item.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">
                          × {item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C73B0F] hover:bg-[#A62F0D] transition-colors"
                      >
                        <img src={decCart} alt="Decrease quantity" />
                      </motion.button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C73B0F] hover:bg-[#A62F0D] transition-colors"
                      >
                        <img src={incCart} alt="Increase quantity" />
                      </motion.button>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <img src={removeCart} alt="Remove item" className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Order Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#1EA575] mb-4">
              <img src={carbon} alt="" className="w-5 h-5" />
              This is a carbon-neutral delivery
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onConfirmOrder}
              className="w-full bg-[#C73B0F] text-white rounded-lg py-3 font-medium hover:bg-[#A62F0D] transition-colors"
            >
              Confirm Order
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}

