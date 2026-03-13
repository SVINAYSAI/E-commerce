export interface Product {
  id: number;
  name: string;
  category: string;
  tag: string | null;
  price: number;
  originalPrice: number | null;
  shade: string;
  sizes: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "The Midnight Gloss",
    category: "tights",
    tag: "NEW DROP",
    price: 26,
    originalPrice: null,
    shade: "Jet Black",
    sizes: ["XS","S","M","L","XL"],
    rating: 4.9,
    reviewCount: 842,
    inStock: true,
    description: "Ultra-shiny semi-opaque tights with our signature Gloss finish. Silky-smooth, ladder-resistant, and designed to turn heads. Pairs perfectly with everything.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
  },
  {
    id: 2,
    name: "The Runway Sheer",
    category: "tights",
    tag: null,
    price: 22,
    originalPrice: null,
    shade: "Nude / Barely-there",
    sizes: ["XS","S","M","L","XL"],
    rating: 4.8,
    reviewCount: 1203,
    inStock: true,
    description: "Barely-there sheerness with a luminous finish. Our thinnest, most delicate style — perfect for the office, date nights, and everything in between.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
  },
  {
    id: 3,
    name: "The High-Rise Silk",
    category: "thigh-highs",
    tag: "BESTSELLER",
    price: 29,
    originalPrice: null,
    shade: "Champagne",
    sizes: ["S","M","L","XL"],
    rating: 4.9,
    reviewCount: 2104,
    inStock: true,
    description: "Stay-up thigh-highs with a silk-touch feel and subtle sheen. The silicone lace band holds all day without digging in. A wardrobe staple.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
  },
  {
    id: 4,
    name: "The Body Veil",
    category: "bodystocking",
    tag: "NEW DROP",
    price: 38,
    originalPrice: null,
    shade: "Onyx",
    sizes: ["XS/S","M/L"],
    rating: 4.7,
    reviewCount: 314,
    inStock: true,
    description: "A full-body sheer stocking with a sculpting, second-skin feel. Features a high neckline and long sleeves. Statement-making and surprisingly comfortable.",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80"
  },
  {
    id: 5,
    name: "The Power Legging",
    category: "leggings",
    tag: "BESTSELLER",
    price: 45,
    originalPrice: 62,
    shade: "Midnight / Rose / Stone",
    sizes: ["XS","S","M","L","XL","XXL"],
    rating: 4.9,
    reviewCount: 3871,
    inStock: true,
    description: "High-waisted compression leggings with four-way stretch. Squat-proof, seamless waistband, with a subtle gloss finish that catches the light beautifully.",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80"
  },
  {
    id: 6,
    name: "The Statement Sock",
    category: "socks",
    tag: "2-PACK",
    price: 14,
    originalPrice: null,
    shade: "Black / Nude (2-pack)",
    sizes: ["One Size"],
    rating: 4.6,
    reviewCount: 591,
    inStock: true,
    description: "Sheer ankle socks with a glossy finish and reinforced toe. Pairs beautifully with heels, mules, or chunky sneakers. Sold as a 2-pack.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
  },
  {
    id: 7,
    name: "The Gloss Heel",
    category: "shoes",
    tag: "NEW",
    price: 89,
    originalPrice: 115,
    shade: "Black Patent / Nude",
    sizes: ["36","37","38","39","40","41"],
    rating: 4.8,
    reviewCount: 428,
    inStock: true,
    description: "A sleek 80mm block heel with a high-shine patent upper. Cushioned insole, non-slip outsole. Goes from desk to dance floor without missing a beat.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80"
  },
  {
    id: 8,
    name: "The Barely-There Boot",
    category: "shoes",
    tag: "SALE",
    price: 72,
    originalPrice: 110,
    shade: "Camel / Black",
    sizes: ["36","37","38","39","40","41"],
    rating: 4.7,
    reviewCount: 267,
    inStock: true,
    description: "Ankle boots with a pointed toe and slim heel. Stretch lycra upper hugs the ankle for a seamless look when worn with tights. The ultimate pairing.",
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&q=80"
  }
];
