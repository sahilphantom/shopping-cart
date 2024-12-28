import React from 'react'

import { motion, AnimatePresence } from 'framer-motion';
import { orderConform } from '../assets/img';

  export function OrderConfirmation({ isOpen, onClose, items, total }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <div className="text-center mb-6">
              <img 
                src={orderConform}
                alt="Order confirmed" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Order Confirmed</h2>
              <p className="text-gray-500">We hope you enjoy your food!</p>
            </div>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex gap-2">
                    <span>{item.quantity}x</span>
                    <span>{item.name}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 flex justify-between font-bold">
                <span>Order Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="w-full bg-[#C73B0F] text-white rounded-lg py-3 font-medium hover:bg-[#A62F0D] transition-colors"
            >
              Start New Order
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



