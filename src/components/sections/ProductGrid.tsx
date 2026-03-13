import React, { useState, useMemo } from 'react';
import FilterTabs from '@/components/ui/FilterTabs';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

const ProductGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter(product => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="collection" className="bg-gloss-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-[48px] sm:text-[64px] text-gloss-black">
            THE COLLECTION
          </h2>
          <div className="w-24 h-1 bg-gloss-rose mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <FilterTabs 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-[16px] text-gloss-grey">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
