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
    url: "https://cdn.shopify.com/s/files/1/0403/1342/1976/files/1_56486e82-3044-48fb-bea2-2f8048bcdbc5.jpg?v=1766714650",
    product: "Lustrous Semi-Opaque Pantyhose",
    span: "row-span-2",
  },
  {
    id: 2,
    url: "https://cdn.shopify.com/s/files/1/0403/1342/1976/files/SKU12012-WHITE-1.jpg?v=1766714170",
    product: "Lustrous Sheer Thigh-Highs",
    span: "",
  },
  {
    id: 3,
    url: "https://cdn.shopify.com/s/files/1/0403/1342/1976/files/SKU10003-NATURAL-6.jpg?v=1766715744",
    product: "Lustrous Silky Bodystocking",
    span: "",
  },
  {
    id: 4,
    url: "https://cdn.shopify.com/s/files/1/0403/1342/1976/files/1_fa0567fd-846c-4210-a875-888118848d71.jpg?v=1766715455",
    product: "Lustrous Shiny Sheer Pantyhose",
    span: "row-span-2",
  },
  {
    id: 5,
    url: "https://cdn.shopify.com/s/files/1/0403/1342/1976/files/SKU12012-PURPLE-6.jpg?v=1766714170",
    product: "Lustrous Thigh-Highs Purple",
    span: "",
  },
  {
    id: 6,
    url: "https://cdn.shopify.com/s/files/1/0403/1342/1976/files/SKU15002-WHITE-3.jpg?v=1766715882",
    product: "Lustrous Sheer Socks",
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
            Tag us @lechery.official to be featured
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
