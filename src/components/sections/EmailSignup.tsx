import React, { useState } from 'react';
import { Calendar, Percent, Package, Gift, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Perk {
  icon: LucideIcon;
  text: string;
}

const perks: Perk[] = [
  { icon: Calendar, text: "Early drop access — 24hrs before public" },
  { icon: Percent, text: "10% off your first order" },
  { icon: Package, text: "Free returns always" },
  { icon: Gift, text: "Birthday surprise every year" },
];

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-gloss-rose py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[11px] tracking-[0.2em] text-white/60 font-medium uppercase font-body mb-4">
              FOR MEMBERS ONLY
            </p>
            <h2 className="font-display text-[40px] sm:text-[56px] leading-none text-white">
              GET EARLY ACCESS TO EVERY DROP
            </h2>
            <p className="text-white/80 font-body text-[16px] mt-6 max-w-lg leading-relaxed">
              Members get first pick before drops go public. Plus 10% off your first order and free returns always.
            </p>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-white text-gloss-black rounded-full px-6 py-4 text-[14px] font-body placeholder-gloss-midgrey outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="bg-gloss-black text-white rounded-full px-8 py-4 text-[13px] font-body font-semibold tracking-[0.15em] uppercase hover:bg-gloss-dark transition-colors"
                  >
                    JOIN THE CIRCLE
                  </button>
                </div>
                <p className="text-white/50 text-[11px] font-body mt-3">
                  No spam. Unsubscribe any time.
                </p>
              </form>
            ) : (
              <div className="mt-8 flex items-center gap-3 bg-white/20 rounded-full px-6 py-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Check size={18} className="text-gloss-rose" />
                </div>
                <div>
                  <p className="text-white font-body font-medium text-[16px]">
                    You're in! Check your inbox.
                  </p>
                  <p className="text-white/70 text-[12px] font-body">
                    Welcome to the GLOSS circle 💖
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right - Perks Cards */}
          <div className="relative hidden lg:block">
            <div className="space-y-3">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="bg-white/20 border border-white/30 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-sm"
                  style={{
                    marginLeft: `${index * 12}px`,
                  }}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <perk.icon size={20} className="text-white" />
                  </div>
                  <span className="text-white font-body text-[14px]">
                    {perk.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
