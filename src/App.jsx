import { useState } from 'react';
import { motion } from 'framer-motion';
import { desserts } from './data/desserts';
import { DessertCard } from './components/DessertCard';
import { Cart } from './components/Cart';
import { OrderConfirmation } from './components/OrderConfirmation';

   function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const addToCart = (dessert) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === dessert.id);
      if (existingItem) {
        return items.map(item =>
          item.id === dessert.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...dessert, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const confirmOrder = () => {
    setIsConfirmationOpen(true);
  };

  const startNewOrder = () => {
    setIsConfirmationOpen(false);
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-8">Desserts</h1>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {desserts.map((dessert) => (
                <DessertCard
                  key={dessert.id}
                  dessert={dessert}
                  onAddToCart={addToCart}
                />
              ))}
            </motion.div>
          </div>
          
          <div className="lg:sticky lg:top-8 h-fit">
            <Cart
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
              onConfirmOrder={confirmOrder}
              total={total}
            />
          </div>
        </div>
      </div>

      <OrderConfirmation
        isOpen={isConfirmationOpen}
        onClose={startNewOrder}
        items={cartItems}
        total={total}
      />
    </div>
  );
}

export default App;
