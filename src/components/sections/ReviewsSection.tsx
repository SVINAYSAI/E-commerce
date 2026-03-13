import React from 'react';
import StarRating from '@/components/ui/StarRating';
import { reviews } from '@/data/reviews';
import { products } from '@/data/products';
import { Quote } from 'lucide-react';
import type { Review } from '@/data/reviews';

interface ReviewCardProps {
  review: Review;
  offset?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, offset = false }) => {
  const product = products.find(p => p.name === review.product);

  return (
    <div 
      className={`bg-white rounded-2xl p-6 w-72 flex-shrink-0 ${offset ? 'mt-12' : ''}`}
    >
      {/* Quote Icon */}
      <Quote size={32} className="text-gloss-rose fill-gloss-rose/20 mb-4" />
      
      {/* Review Text */}
      <p className="font-body text-[14px] text-gloss-grey italic leading-relaxed mb-4">
        "{review.text}"
      </p>
      
      {/* Stars */}
      <StarRating rating={review.rating} size={14} />
      
      {/* Name & City */}
      <div className="mt-4">
        <p className="font-body font-medium text-[14px] text-gloss-black">
          {review.name}
        </p>
        <p className="font-body text-[12px] text-gloss-grey">
          {review.city}
        </p>
      </div>
      
      {/* Product Tag */}
      {product && (
        <div className="mt-4 flex items-center gap-2 bg-gloss-offwhite rounded-full px-3 py-1.5">
          <img
            src={product.image}
            alt={product.name}
            className="w-6 h-6 object-cover rounded-full"
          />
          <span className="text-[11px] font-body text-gloss-grey truncate">
            {product.name}
          </span>
        </div>
      )}
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  const topRowReviews = reviews.filter((_, i) => i % 2 === 0);
  const bottomRowReviews = reviews.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-gloss-offwhite py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-[48px] sm:text-[64px] text-gloss-black">
            10,000+ LOVE STORIES
          </h2>
        </div>
      </div>

      {/* Scrollable Reviews - Full Width */}
      <div className="space-y-6">
        {/* Top Row */}
        <div className="flex gap-6 overflow-x-auto pb-2 px-4 sm:px-6 scrollbar-hide">
          <div className="flex gap-6">
            {[...topRowReviews, ...topRowReviews].map((review, i) => (
              <ReviewCard key={`top-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Offset */}
        <div className="flex gap-6 overflow-x-auto pb-2 px-4 sm:px-6 scrollbar-hide">
          <div className="flex gap-6 pl-12">
            {[...bottomRowReviews, ...bottomRowReviews].map((review, i) => (
              <ReviewCard key={`bottom-${i}`} review={review} offset />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
