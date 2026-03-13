import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LookbookImage {
  id: number;
  url: string;
  product: string;
  span: string;
}

const lookbookImages: LookbookImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    product: "The Runway Sheer",
    span: "row-span-2",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    product: "The High-Rise Silk",
    span: "",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80",
    product: "The Body Veil",
    span: "",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    product: "The Power Legging",
    span: "row-span-2",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    product: "The Gloss Heel",
    span: "",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&q=80",
    product: "The Barely-There Boot",
    span: "",
  },
];

const LookbookSection: React.FC = () => {
  return (
    <section id="lookbook" className="bg-gloss-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-[48px] sm:text-[64px] text-gloss-black">
            STYLED BY YOU
          </h2>
          <p className="font-body text-[16px] text-gloss-grey mt-3">
            Tag us @weargloss to be featured
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {lookbookImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.span}`}
            >
              <img
                src={image.url}
                alt={`Lookbook style ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gloss-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="font-body font-medium text-white text-[14px] mb-2">
                  {image.product}
                </p>
                <a 
                  href="#collection"
                  className="flex items-center gap-2 text-gloss-rose text-[12px] font-body font-semibold tracking-wider uppercase hover:underline"
                >
                  SHOP THIS LOOK
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
