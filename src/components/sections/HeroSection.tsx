import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const HeroSection: React.FC = () => {
  const { addToCart, openCart } = useCart();
  const [loaded, setLoaded] = useState(false);
  
  const featuredProduct = products[0];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleQuickAdd = () => {
    addToCart(featuredProduct, featuredProduct.sizes[0]);
    openCart();
  };

  return (
    <section className="min-h-screen bg-gloss-white flex flex-col lg:flex-row overflow-hidden">
      {/* Left Column */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0">
        {/* Overline */}
        <p 
          className={`text-[11px] tracking-[0.2em] text-gloss-rose font-medium uppercase font-body mb-6 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          NEW SEASON — THE #1 SHINY TIGHTS IN AMERICA
        </p>

        {/* Headline */}
        <div className="space-y-0">
          <h1 
            className={`font-display text-[60px] sm:text-[80px] lg:text-[120px] leading-none text-gloss-black transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            SHINE
          </h1>
          <h1 
            className={`font-display text-[60px] sm:text-[80px] lg:text-[120px] leading-none text-transparent transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ WebkitTextStroke: '2px #0D0D0D' }}
          >
            YOUR
          </h1>
          <h1 
            className={`font-display text-[60px] sm:text-[80px] lg:text-[120px] leading-none text-gloss-rose transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            LEGS
          </h1>
        </div>

        {/* Sub-copy */}
        <p 
          className={`font-body text-[16px] text-gloss-grey font-light mt-6 max-w-md leading-relaxed transition-all duration-700 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Shiny tights, glossy pantyhose & sheer bodystockings — loved by Doja Cat. Ladder-resistant, buttery-smooth, and designed to turn heads.
        </p>

        {/* CTA Row */}
        <div 
          className={`flex flex-wrap gap-4 mt-8 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a 
            href="#drops"
            className="bg-gloss-rose text-white py-4 px-8 text-[13px] font-body font-semibold tracking-[0.15em] uppercase hover:bg-gloss-rose-dark transition-colors"
          >
            SHOP THE DROP
          </a>
          <a 
            href="#quiz"
            className="border-2 border-gloss-black text-gloss-black py-4 px-8 text-[13px] font-body font-semibold tracking-[0.15em] uppercase hover:bg-gloss-black hover:text-white transition-colors"
          >
            FIND MY FIT
          </a>
        </div>

        {/* Trust Row */}
        <div 
          className={`flex flex-wrap items-center gap-2 mt-8 text-[12px] text-gloss-grey font-body transition-all duration-700 delay-600 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="bg-gloss-offwhite px-3 py-1.5 rounded-full">Free shipping on all orders</span>
          <span className="text-gloss-rose">·</span>
          <span className="bg-gloss-offwhite px-3 py-1.5 rounded-full">Buy 2, Get 1 Free</span>
          <span className="text-gloss-rose">·</span>
          <span className="bg-gloss-offwhite px-3 py-1.5 rounded-full">100K+ happy customers</span>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-[45%] relative h-[50vh] lg:h-screen">
        <img
          src="/lechery-hero.png"
          alt="LECHERY Shiny Tights"
          className="w-full h-full object-cover"
        />
        
        {/* Floating Product Card */}
        <div 
          className={`absolute bottom-24 left-4 sm:left-8 bg-white rounded-xl shadow-xl p-4 max-w-[240px] transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex gap-3">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="w-16 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-body font-medium text-[13px] text-gloss-black">
                  {featuredProduct.name}
                </p>
                <p className="font-body font-semibold text-[16px] text-gloss-black mt-1">
                  ${featuredProduct.price}
                </p>
              </div>
              <button
                onClick={handleQuickAdd}
                className="bg-gloss-rose text-white text-[11px] font-body font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full hover:bg-gloss-rose-dark transition-colors mt-2"
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 right-8 flex items-center gap-3 transition-all duration-700 delay-800 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-px h-12 bg-gloss-black/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gloss-rose animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
          <span 
            className="font-body text-[11px] tracking-[0.2em] text-gloss-black/60 -rotate-90 origin-left"
            style={{ transform: 'rotate(-90deg) translateX(-100%)' }}
          >
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
