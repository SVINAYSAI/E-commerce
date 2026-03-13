import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'NEW DROPS', href: '#drops' },
  { label: 'COLLECTIONS', href: '#collection' },
  { label: 'BUNDLES', href: '#bundles' },
  { label: 'LOOKBOOK', href: '#lookbook' },
  { label: 'QUIZ', href: '#quiz' },
  { label: 'SALE', href: '#sale' },
];

const Navbar: React.FC = () => {
  const { cartCount, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 bg-gloss-white h-16 transition-all duration-300 ${
          scrolled ? 'shadow-md border-b border-gloss-light' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-3xl text-gloss-black flex items-start">
            LECHERY
            <span className="text-gloss-rose text-[10px] ml-0.5 -mt-1">®</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-body text-[14px] font-medium tracking-wider text-gloss-black hover:text-gloss-rose transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gloss-rose transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-gloss-black hover:text-gloss-rose transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gloss-black hover:text-gloss-rose transition-colors hidden sm:block">
              <Heart size={20} />
            </button>
            <button 
              onClick={toggleCart}
              className="relative text-gloss-black hover:text-gloss-rose transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gloss-rose text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Quiz Button - Desktop */}
            <a 
              href="#quiz"
              className="hidden md:block bg-gloss-rose text-white rounded-full px-4 py-1.5 text-[11px] font-body font-semibold tracking-wider uppercase hover:bg-gloss-rose-dark transition-colors"
            >
              TAKE THE QUIZ
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gloss-black"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gloss-white z-[60] lg:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gloss-light">
              <span className="font-display text-2xl text-gloss-black">
                LECHERY<span className="text-gloss-rose text-[10px]">®</span>
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} className="text-gloss-black" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-[32px] text-gloss-black hover:text-gloss-rose transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-gloss-rose text-white rounded-full px-8 py-3 text-[13px] font-body font-semibold tracking-wider uppercase"
              >
                TAKE THE QUIZ
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
