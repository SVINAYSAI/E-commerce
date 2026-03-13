import React from 'react';

const tickerContent = "FREE SHIPPING ON ALL ORDERS ✦ BUY 2 GET 1 FREE ✦ NEW DROPS EVERY FRIDAY ✦ 30-DAY RETURNS ✦ 10,000+ 5-STAR REVIEWS ✦ ";

const MarqueeTicker: React.FC = () => {
  return (
    <div className="bg-gloss-black h-12 overflow-hidden flex items-center">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className="font-display text-white text-[16px] tracking-widest mx-4"
          >
            {tickerContent.split('✦').map((part, j) => (
              <React.Fragment key={j}>
                {part}
                {j < tickerContent.split('✦').length - 1 && (
                  <span className="text-gloss-rose mx-2">✦</span>
                )}
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
