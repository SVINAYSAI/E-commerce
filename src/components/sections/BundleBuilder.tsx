import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

const BundleBuilder: React.FC = () => {
  const { addToCart, openCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);

  const toggleItem = (product: Product) => {
    setSelectedItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, product];
    });
  };

  const isSelected = (productId: number) => selectedItems.some(item => item.id === productId);

  const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const savings = selectedItems.length === 3 ? 12 : 0;
  const finalTotal = subtotal - savings;

  const handleAddKitToBag = () => {
    if (selectedItems.length === 3) {
      selectedItems.forEach(item => {
        addToCart(item, item.sizes[0]);
      });
      openCart();
      setSelectedItems([]);
    }
  };

  return (
    <section id="bundles" className="bg-gloss-offwhite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-[40px] sm:text-[56px] text-gloss-black">
            BUILD YOUR KIT · SAVE MORE
          </h2>
          <p className="font-body text-[16px] text-gloss-grey mt-3">
            Pick 3 items and save $12 automatically.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center gap-4 mb-10">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-semibold text-[14px] transition-all duration-300 ${
                selectedItems.length >= step
                  ? 'bg-gloss-rose text-white'
                  : 'bg-gloss-light text-gloss-grey'
              }`}
            >
              {selectedItems.length >= step ? <Check size={18} /> : `0${step}`}
            </div>
          ))}
        </div>

        {/* Product Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {products.map((product) => {
            const selected = isSelected(product.id);
            const disabled = !selected && selectedItems.length >= 3;

            return (
              <button
                key={product.id}
                onClick={() => toggleItem(product)}
                disabled={disabled}
                className={`relative bg-white rounded-2xl p-3 text-left transition-all duration-300 ${
                  selected
                    ? 'ring-2 ring-gloss-rose shadow-lg'
                    : disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-md hover:ring-1 hover:ring-gloss-light'
                }`}
              >
                {/* Checkmark Badge */}
                {selected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gloss-rose rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-xl mb-3"
                />
                <h4 className="font-body font-medium text-[13px] text-gloss-black line-clamp-1">
                  {product.name}
                </h4>
                <p className="font-body font-semibold text-[14px] text-gloss-black mt-1">
                  ${product.price}
                </p>
              </button>
            );
          })}
        </div>

        {/* Price Summary */}
        <div className="bg-white rounded-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-[14px] text-gloss-grey">
              Selected: {selectedItems.length}/3
            </span>
            <span className="font-body text-[14px] text-gloss-black">
              Subtotal ${subtotal}
            </span>
          </div>
          
          {savings > 0 && (
            <div className="flex items-center justify-between mb-4 text-gloss-rose">
              <span className="font-body text-[14px] font-medium">
                You save ${savings} 🎉
              </span>
              <span className="font-body font-semibold text-[16px]">
                ${finalTotal}
              </span>
            </div>
          )}

          <button
            onClick={handleAddKitToBag}
            disabled={selectedItems.length !== 3}
            className={`w-full py-4 text-[13px] font-body font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 ${
              selectedItems.length === 3
                ? 'bg-gloss-rose text-white hover:bg-gloss-rose-dark'
                : 'bg-gloss-light text-gloss-grey cursor-not-allowed'
            }`}
          >
            {selectedItems.length === 3 ? 'ADD KIT TO BAG' : `SELECT ${3 - selectedItems.length} MORE`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BundleBuilder;
