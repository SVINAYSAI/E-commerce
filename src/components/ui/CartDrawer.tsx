import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer: React.FC = () => {
  const { cartItems, cartOpen, closeCart, removeFromCart, updateQuantity, cartSubtotal } = useCart();

  if (!cartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-gloss-dark z-50 transform transition-transform duration-300 ease-in-out translate-x-0 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="font-display text-2xl text-white">YOUR BAG</h2>
          <button 
            onClick={closeCart}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-white/30 mb-4" />
              <p className="text-white/60 font-body text-[16px]">Your bag is empty</p>
              <button 
                onClick={closeCart}
                className="mt-6 bg-gloss-rose text-white px-6 py-3 text-[13px] font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-gloss-rose-dark transition-colors"
              >
                SHOP NOW
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-body font-medium text-[14px] text-white">
                      {item.product.name}
                    </h4>
                    <p className="text-[12px] text-white/50 mt-0.5">
                      Size: {item.size}
                    </p>
                    <p className="font-body font-semibold text-[14px] text-white mt-1">
                      ${item.product.price}
                    </p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 bg-gloss-surface rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-white text-[13px] font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-white/40 hover:text-gloss-rose text-[12px] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/60 font-body text-[14px]">Subtotal</span>
              <span className="font-body font-semibold text-[18px] text-white">
                ${cartSubtotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-gloss-rose text-white py-4 text-[13px] font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-gloss-rose-dark transition-colors">
              CHECKOUT
            </button>
            <button 
              onClick={closeCart}
              className="w-full mt-3 text-white/60 text-[13px] font-medium hover:text-white transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
