import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import StarRating from './StarRating';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, openCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuickAdd = () => {
    addToCart(product, product.sizes[0]);
    openCart();
  };

  return (
    <div className="bg-gloss-offwhite rounded-2xl overflow-hidden group cursor-pointer">
      {/* Image Area */}
      <div className="h-72 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Tag Badge */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-gloss-rose text-white text-[10px] tracking-widest uppercase px-2 py-1 rounded-full">
            {product.tag}
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart
            size={16}
            className={`${isWishlisted ? 'fill-gloss-rose text-gloss-rose' : 'text-gloss-grey'}`}
          />
        </button>

        {/* Quick Add Bar */}
        <div 
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 bg-gloss-rose text-white text-[12px] tracking-wider py-3 text-center uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer hover:bg-gloss-rose-dark"
        >
          QUICK ADD TO BAG +
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4">
        <h3 className="font-body font-medium text-[15px] text-gloss-black">
          {product.name}
        </h3>
        <p className="text-[12px] text-gloss-grey mt-0.5">
          {product.shade}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="font-body font-semibold text-[18px] text-gloss-black">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-gloss-grey text-[14px] line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} size={12} />
            <span className="text-[11px] text-gloss-grey">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
