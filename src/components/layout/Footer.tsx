import React from 'react';
import { Instagram, Video, Circle } from 'lucide-react';

const Footer: React.FC = () => {
  const shopLinks = ['New Drops', 'Collections', 'Bundles', 'Sale', 'Gift Cards'];
  const helpLinks = ['FAQ', 'Size Guide', 'Shipping', 'Returns', 'Track Order'];
  const brandLinks = ['Our Story', 'Lookbook', 'Sustainability', 'Press'];
  const legalLinks = ['Privacy', 'Terms', 'Cookies'];

  return (
    <footer className="bg-gloss-dark pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="font-display text-2xl text-gloss-rose flex items-start">
              LECHERY
              <span className="text-white text-[10px] ml-0.5 -mt-1">®</span>
            </a>
            <p className="text-white/60 font-body text-[14px] mt-3 max-w-xs">
              Your destination for shiny tights, glossy pantyhose & sheer bodystockings. Designed for women who crave shine and confidence.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gloss-rose transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gloss-rose transition-colors">
                <Video size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gloss-rose transition-colors">
                <Circle size={18} />
              </a>
            </div>

            {/* New Drops Badge */}
            <div className="mt-6 inline-block bg-gloss-rose/20 border border-gloss-rose/40 rounded-full px-4 py-2">
              <span className="text-gloss-rose text-[11px] font-body font-medium tracking-wider">
                New drops every Friday
              </span>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-gloss-rose text-[11px] font-body font-semibold tracking-[0.2em] uppercase mb-4">
              SHOP
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 font-body text-[14px] hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-gloss-rose text-[11px] font-body font-semibold tracking-[0.2em] uppercase mb-4">
              HELP
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 font-body text-[14px] hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Column */}
          <div>
            <h4 className="text-gloss-rose text-[11px] font-body font-semibold tracking-[0.2em] uppercase mb-4">
              BRAND
            </h4>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 font-body text-[14px] hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-gloss-rose text-[11px] font-body font-semibold tracking-[0.2em] uppercase mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 font-body text-[14px] hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-[12px]">
            © 2026 LECHERY® All rights reserved.
          </p>
          
          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-white/40 font-body text-[12px] uppercase tracking-wider">VISA</span>
            <span className="text-white/40 font-body text-[12px] uppercase tracking-wider">MC</span>
            <span className="text-white/40 font-body text-[12px] uppercase tracking-wider">PayPal</span>
            <span className="text-white/40 font-body text-[12px] uppercase tracking-wider">Apple Pay</span>
            <span className="text-white/40 font-body text-[12px] uppercase tracking-wider">Klarna</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
