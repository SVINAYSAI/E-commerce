import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 5, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={`${
            i < fullStars
              ? 'fill-gloss-rose text-gloss-rose'
              : i === fullStars && hasHalfStar
              ? 'fill-gloss-rose/50 text-gloss-rose'
              : 'fill-gloss-light text-gloss-light'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
