export interface Review {
  id: number;
  name: string;
  city: string;
  rating: number;
  product: string;
  text: string;
}

export const reviews: Review[] = [
  { 
    id: 1, 
    name: "Josy M.", 
    city: "New York", 
    rating: 5, 
    product: "The Midnight Gloss",
    text: "So chic and elegant. These tights feel like a second skin — I've worn them every week since I got them." 
  },
  { 
    id: 2, 
    name: "Leah K.", 
    city: "Los Angeles", 
    rating: 5, 
    product: "The Power Legging",
    text: "I truly love this brand. The leggings have the perfect amount of compression without feeling restrictive. Obsessed." 
  },
  { 
    id: 3, 
    name: "Priya S.", 
    city: "Chicago", 
    rating: 5, 
    product: "The High-Rise Silk",
    text: "These thigh-highs stayed up ALL DAY. No rolling, no slipping. Finally found my holy grail." 
  },
  { 
    id: 4, 
    name: "Amara T.", 
    city: "London", 
    rating: 5, 
    product: "The Gloss Heel",
    text: "Got so many compliments on these heels. The block heel makes them actually walkable. 10/10 would recommend." 
  },
  { 
    id: 5, 
    name: "Zoe R.", 
    city: "Miami", 
    rating: 4, 
    product: "The Runway Sheer",
    text: "Barely-there sheer but somehow feels really durable. Love the luminous finish — catches the light perfectly." 
  },
  { 
    id: 6, 
    name: "Kathleen B.", 
    city: "Toronto", 
    rating: 5, 
    product: "The Statement Sock",
    text: "Love how comfortable these are AND they look so elegant. The sheer sock trend is back and these are the best." 
  },
  { 
    id: 7, 
    name: "Mia C.", 
    city: "Sydney", 
    rating: 5, 
    product: "The Body Veil",
    text: "Wore this under a sheer dress for a party and felt absolutely incredible. Quality is outstanding for the price." 
  },
  { 
    id: 8, 
    name: "Sofia D.", 
    city: "Paris", 
    rating: 5, 
    product: "The Barely-There Boot",
    text: "These boots paired with the tights look like one seamless look. Genuinely changed how I style my outfits." 
  }
];
