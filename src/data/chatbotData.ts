export interface ChatbotQA {
  id: string;
  keywords: string[];
  response: string;
  quickReplies: string[];
}

export const chatbotQA: ChatbotQA[] = [
  {
    id: "greeting",
    keywords: ["hi","hello","hey","hiya","howdy","good morning","good evening","sup","what's up"],
    response: "Hey there! 💖 Welcome to GLOSS™! I'm here to help you find your perfect style. Are you shopping for leggings, tights, shoes, or something else?",
    quickReplies: ["Leggings","Tights & hosiery","Shoes","Show bestsellers"]
  },
  {
    id: "bestsellers",
    keywords: ["best","bestseller","popular","top","most bought","trending","top rated"],
    response: "Our bestsellers right now are:\n\n⭐ The Power Legging — $45 (3,871 reviews!)\n⭐ The High-Rise Silk thigh-highs — $29\n⭐ The Midnight Gloss tights — $26\n\nShall I tell you more about any of these?",
    quickReplies: ["Tell me about leggings","Tell me about tights","Add to bag","See all products"]
  },
  {
    id: "size",
    keywords: ["size","sizing","fit","measurements","what size","which size","size guide","too small","too big"],
    response: "Great question! Here's a quick size guide:\n\nXS: UK 4–6 / US 0–2\nS: UK 8–10 / US 4–6\nM: UK 12–14 / US 8–10\nL: UK 16–18 / US 12–14\nXL: UK 20 / US 16\n\nFor tights — if you're between sizes, go up. For leggings — go true to size. Need more help?",
    quickReplies: ["Leggings sizing","Tights sizing","Shoe sizing","Chat with human"]
  },
  {
    id: "leggings",
    keywords: ["legging","leggings","yoga","gym","workout","activewear","compression","sports"],
    response: "Our leggings are a customer favourite! 🖤\n\nThe Power Legging ($45) is our hero style — high-waist, squat-proof, 4-way stretch with a subtle gloss finish. Available in Midnight, Rose, and Stone.\n\nThey're perfect for gym, running errands, or dressing up with heels!",
    quickReplies: ["What sizes?","See colours","View The Power Legging","Add to bag"]
  },
  {
    id: "tights",
    keywords: ["tight","tights","pantyhose","hosiery","sheer","opaque","nylon","stockings","semi-opaque"],
    response: "We have gorgeous tights for every vibe! ✨\n\n• The Midnight Gloss — ultra-shiny, jet black ($26)\n• The Runway Sheer — barely-there luminous nude ($22)\n• The High-Rise Silk — stay-up thigh-highs ($29)\n• The Body Veil — full bodystocking ($38)\n\nWhich style sounds like you?",
    quickReplies: ["I like sheer","I like opaque","Thigh-highs","Bodystockings"]
  },
  {
    id: "shoes",
    keywords: ["shoe","shoes","heel","heels","boot","boots","sneaker","footwear","pumps","stiletto"],
    response: "Our shoes are designed to pair perfectly with our legwear! 👠\n\n• The Gloss Heel — 80mm block heel, patent finish ($89, was $115)\n• The Barely-There Boot — ankle boot, lycra upper ($72, was $110)\n\nBoth look incredible with our tights and leggings. What's the occasion?",
    quickReplies: ["Casual wear","Going out","Office look","Sizes available"]
  },
  {
    id: "shipping",
    keywords: ["ship","shipping","delivery","how long","when","arrive","dispatch","courier"],
    response: "Here's our shipping info:\n\n🚚 Free shipping on orders over $40\n📦 Standard: 3–5 business days ($4.99 under $40)\n⚡ Express: 1–2 business days ($9.99)\n🌍 International: 7–14 business days\n\nOrders placed before 2pm are dispatched same day!",
    quickReplies: ["Track my order","Return policy","Order not arrived","Talk to support"]
  },
  {
    id: "returns",
    keywords: ["return","returns","refund","exchange","wrong size","doesn't fit","send back","money back"],
    response: "No worries — returns are easy! 🔄\n\nWe offer free returns within 30 days of delivery. Items must be unworn and in original packaging.\n\nTo start a return:\n1. Visit our Returns page\n2. Enter your order number\n3. Drop off at any post office\n\nRefunds processed within 3–5 business days.",
    quickReplies: ["Start a return","Exchange for size","Refund timeline","Track return"]
  },
  {
    id: "discount",
    keywords: ["discount","coupon","promo","code","offer","deal","sale","voucher","cheaper","off"],
    response: "Deals alert! 🎉 Here's what's on right now:\n\n✦ BUY 2 GET 1 FREE on all tights & socks\n✦ 30% off The Gloss Heel & Barely-There Boot\n✦ Join our email list for 10% off your first order\n✦ Bundle 3 items and save $12 automatically\n\nWant me to add the offer to your bag?",
    quickReplies: ["Buy 2 Get 1 Free","See sale items","Email signup","Bundle deal"]
  },
  {
    id: "newdrops",
    keywords: ["new","drop","drops","latest","just in","new arrival","recently","fresh","launch"],
    response: "New drops land every Friday! 🆕\n\nThis week's drop — The After-Dark Edit:\n• The Midnight Gloss tights — $26 🔥\n• The Body Veil bodystocking — $38\n• The Power Legging in Rose — $45\n\nOnly 300 pieces made! The timer is ticking ⏳",
    quickReplies: ["Shop the drop","Set a reminder","What dropped last week","New next week"]
  },
  {
    id: "order",
    keywords: ["order","track","tracking","my order","where is","order status","confirmation","number"],
    response: "To track your order, head to the Track Order page and enter your order number + email address. You'll see real-time updates from our courier.\n\nOrder numbers look like: GL-XXXXXX\n\nIf your order is more than 7 days late, drop me your order number and I'll escalate it! 📦",
    quickReplies: ["Track my order","Order hasn't arrived","Wrong item received","Contact support"]
  },
  {
    id: "bundle",
    keywords: ["bundle","kit","set","together","combination","pair","combo","package"],
    response: "Love the bundle idea! 💖 Our Gloss Kit builder lets you pick any 3 items and automatically saves you $12.\n\nPopular combinations:\n• Leggings + Tights + Socks\n• Two tights + one shoe style\n• Thigh-highs + Body Veil + Socks\n\nHead to the Bundle section on the page to build yours!",
    quickReplies: ["Build my bundle","What's the saving?","See bundle options","Add to bag"]
  },
  {
    id: "material",
    keywords: ["material","fabric","feel","texture","quality","soft","smooth","stretchy","ingredient","nylon","lycra","cotton","care","wash"],
    response: "Great question — quality is everything to us! 🧵\n\nOur tights & hosiery: 85% nylon, 15% lycra. Ultra-smooth, ladder-resistant, and colour-fast.\n\nOur leggings: 78% polyester, 22% spandex. 4-way stretch, squat-proof, moisture-wicking.\n\nCare tip: Hand wash cold or delicate cycle in a mesh bag. Lay flat to dry for best results!",
    quickReplies: ["Care instructions","Vegan/sustainable?","Sizes","Shop fabrics"]
  },
  {
    id: "sustainable",
    keywords: ["sustainable","eco","ethical","environment","vegan","cruelty","responsible","green","planet"],
    response: "We care about doing things right 🌍\n\n• All packaging is 100% recycled and plastic-free\n• Our fabrics are OEKO-TEX certified (no harmful chemicals)\n• We offset carbon emissions on every shipment\n• No animal-derived materials — all products are vegan\n\nWe're not perfect but we're on the journey!",
    quickReplies: ["More about GLOSS","Shop responsibly","Packaging info","Our story"]
  },
  {
    id: "quiz",
    keywords: ["quiz","recommend","recommendation","not sure","help me choose","which one","guide","style quiz","suggest"],
    response: "I love this! Let me help you find your perfect match 💫\n\nQuick 3 questions:\n\n1️⃣ What's the main occasion?\n→ Type: gym / work / going out / everyday / date night",
    quickReplies: ["Gym / workout","Work / office","Going out","Everyday casual"]
  },
  {
    id: "gym",
    keywords: ["gym","workout","exercise","sport","running","yoga","fitness","activewear","training"],
    response: "For the gym, I'd go straight to The Power Legging! 💪\n\n• High waist for full support\n• Squat-proof fabric (we tested it!)\n• Moisture-wicking keeps you dry\n• Subtle gloss finish looks fab for post-gym errands\n\nAt $45 it's our best-value performance piece. Want to add it?",
    quickReplies: ["Add Power Legging","What colours?","See size guide","View product"]
  },
  {
    id: "office",
    keywords: ["work","office","professional","business","smart","formal","corporate","desk"],
    response: "Office-ready outfit inspo! 👔✨\n\nOur top office picks:\n• The Runway Sheer tights ($22) — elegant nude, goes with everything\n• The Midnight Gloss tights ($26) — polished black for power outfits\n• The Gloss Heel ($89) — perfectly professional block heel\n\nThis combo is our most-worn work outfit by customers!",
    quickReplies: ["Shop the look","Sheer or opaque?","View shoes","Add to bag"]
  },
  {
    id: "nightout",
    keywords: ["night","out","party","club","event","dinner","date","evening","going out"],
    response: "Going out? Let's make it unforgettable 🔥\n\n• The Midnight Gloss tights — ultra-shiny, dramatic, perfect\n• The Body Veil bodystocking — for the most statement-making look\n• The High-Rise Silk thigh-highs — with a mini skirt? *chef's kiss*\n• The Gloss Heel — brings it all together\n\nWhich vibe are you going for?",
    quickReplies: ["Dramatic look","Subtle glam","All-black outfit","Party bundle"]
  },
  {
    id: "fallback",
    keywords: [],
    response: "I'm not sure I caught that one! 😊 I'm best at helping with:\n\n• Finding your perfect fit & size\n• Product recommendations\n• Shipping & returns\n• Current deals & bundles\n• New drops info\n\nWhat can I help you with?",
    quickReplies: ["Find my size","See bestsellers","Current deals","New drops"]
  }
];
