import React from 'react';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

const DropSection: React.FC = () => {
  const { addToCart, openCart } = useCart();
  
  const dropItems: Product[] = [
    products.find(p => p.id === 1),
    products.find(p => p.id === 4),
    products.find(p => p.id === 5),
  ].filter((p): p is Product => p !== undefined);

  const handleAddToCart = (product: Product) => {
    addToCart(product, product.sizes[0]);
    openCart();
  };

  return (
    <section id="drops" className="bg-gloss-offwhite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gloss-rose font-medium uppercase font-body mb-4">
              LIMITED EDITION
            </p>
            <h2 className="font-display text-[40px] sm:text-[56px] leading-none text-gloss-black">
              DROP 04 / THE AFTER-DARK EDIT
            </h2>
            <p className="font-body text-[16px] text-gloss-grey mt-4 max-w-md">
              A limited run of 300 pieces. Once they're gone, they're gone forever.
            </p>

            {/* Countdown */}
            <div className="mt-10">
              <CountdownTimer targetHours={48} />
            </div>

            {/* Stock Bar */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-[14px] text-gloss-grey">
                  Only <span className="text-gloss-black font-semibold">47</span> of 300 left
                </span>
                <span className="font-body text-[14px] text-gloss-rose font-semibold">
                  84% claimed
                </span>
              </div>
              <div className="h-2 bg-gloss-light rounded-full overflow-hidden">
                <div className="h-full w-[84%] bg-gloss-rose rounded-full" />
              </div>
            </div>

            {/* CTA */}
            <button 
              onClick={() => {
                const element = document.getElementById('collection');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-8 bg-gloss-rose text-white py-5 text-[13px] font-body font-semibold tracking-[0.15em] uppercase hover:bg-gloss-rose-dark transition-colors"
            >
              CLAIM YOUR PAIR
            </button>
          </div>

          {/* Right Column - Mini Product Cards */}
          <div className="space-y-4">
            {dropItems.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-28 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      {product.tag && (
                        <span className="inline-block bg-gloss-rose text-white text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full mb-2">
                          {product.tag}
                        </span>
                      )}
                      <h3 className="font-body font-medium text-[15px] text-gloss-black">
                        {product.name}
                      </h3>
                      <p className="text-[12px] text-gloss-grey mt-0.5">
                        {product.shade}
                      </p>
                    </div>
                    <span className="font-body font-semibold text-[18px] text-gloss-black">
                      ${product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-3 text-gloss-rose text-[12px] font-body font-semibold tracking-wider uppercase hover:text-gloss-rose-dark transition-colors"
                  >
                    ADD TO BAG →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropSection;
