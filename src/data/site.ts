import {
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  CreditCard,
  Headphones,
  Landmark,
  MapPinned,
  Plane,
  ShieldCheck,
  Stamp,
  UsersRound,
} from "lucide-react";

export const contact = {
  phone: "+91 7051693767",
  email: "jaffariskytravels@gmail.com",
  address: "Kashmir, India",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Kashmir Packages", href: "/kashmir-packages" },
  { label: "Hajj & Umrah", href: "/hajj-umrah" },
  { label: "Ticketing", href: "/ticketing" },
  { label: "Visa", href: "/visa-services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustItems = [
  { icon: BadgeCheck, title: "Best Price", text: "Transparent package quotes" },
  { icon: Headphones, title: "24/7 Support", text: "WhatsApp help when needed" },
  { icon: ShieldCheck, title: "Secure Booking", text: "Clear confirmation process" },
  { icon: CreditCard, title: "Easy Payments", text: "UPI, bank and cards" },
  { icon: Landmark, title: "Local Agency", text: "Kashmir-based guidance" },
];

export interface Destination {
  name: string;
  price: string;
  rating: string;
  discount: string;
  image: string;
  subtitle: string;
  distance: string;
  time: string;
  description: string;
  attractions: string[];
  mapUrl: string;
}

export const destinations: Destination[] = [
  {
    name: "Srinagar (Dal Lake)",
    price: "₹8,999",
    rating: "4.8 (2.4k)",
    discount: "-30%",
    image: "/images/destination-srinagar.jpg",
    subtitle: "THE JEWEL IN THE CROWN",
    distance: "0 km (Capital City)",
    time: "N/A",
    description: "Srinagar is the summer capital of Jammu and Kashmir, famous for its gardens, waterfronts, and houseboats. It is the core hub of Kashmiri culture and the starting point for most journeys.",
    attractions: [
      "Dal Lake & Nigeen Lake Shikara Rides",
      "Mughal Gardens (Shalimar & Nishat Bagh)",
      "Hazratbal Shrine",
      "Shankaracharya Temple",
      "Pari Mahal (Palace of Fairies)"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105676.62089408682!2d74.7214732155734!3d34.09279532588373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f2f25b29093%3A0xc3bba4f3743c4a22!2sSrinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Gulmarg, Ski Resort",
    price: "₹15,999",
    rating: "4.9 (1.8k)",
    discount: "-25%",
    image: "/images/destination-gulmarg.jpg",
    subtitle: "THE MEADOW OF FLOWERS",
    distance: "51 km from Srinagar",
    time: "Approx. 1.5 Hours",
    description: "A world-class ski destination and a spectacular summer retreat. Gulmarg boasts one of the highest cable cars in the world and stunning panoramic views of the Himalayas.",
    attractions: [
      "Gulmarg Gondola (Phase 1 & 2)",
      "Apharwat Peak",
      "Alpather Lake (Frozen Lake)",
      "Strawberry Valley",
      "Maharani Temple"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.7470659929!2d74.37397746187532!3d34.04870020475308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1ae1d6248b615%3A0xeab50d2e5b922736!2sGulmarg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Pahalgam, Betaab Valley",
    price: "₹8,999",
    rating: "4.7 (1.2k)",
    discount: "-20%",
    image: "/images/destination-pahalgam.jpg",
    subtitle: "VALLEY OF SHEPHERDS",
    distance: "90 km from Srinagar",
    time: "Approx. 2.5 Hours",
    description: "A scenic town nestled at the confluence of the Lidder River and Sheshnag Lake. Known for its lush green meadows and as the starting point of the Amarnath Yatra.",
    attractions: [
      "Betaab Valley",
      "Aru Valley",
      "Baisaran (Mini Switzerland)",
      "Chandanwari",
      "Lidder River"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26532.551608670154!2d75.30528657682226!3d34.015091728148816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e21a719c83eb8f%3A0x600fbce3199e1205!2sPahalgam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Sonmarg, Thajiwas",
    price: "₹14,999",
    rating: "5.0 (950)",
    discount: "-18%",
    image: "/images/destination-sonamarg.jpg",
    subtitle: "MEADOW OF GOLD",
    distance: "80 km from Srinagar",
    time: "Approx. 2.5 Hours",
    description: "A mesmerizing hill station surrounded by majestic glaciers and serene lakes. It serves as a vital base for treks and the gateway to Ladakh via the Zojila Pass.",
    attractions: [
      "Thajiwas Glacier",
      "Zojila Pass",
      "Zero Point",
      "Vishansar Lake",
      "Baltal Valley"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26391.134599180736!2d75.27553199672852!3d34.30325126300185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e235a9097782b1%3A0xe541c4fce45c7eb3!2sSonamarg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Dal Lake",
    price: "₹7,999",
    rating: "4.9 (1.5k)",
    discount: "-22%",
    image: "/images/destination-dal-lake.jpg",
    subtitle: "SERENE WATERS",
    distance: "In Srinagar",
    time: "N/A",
    description: "Experience the iconic shikara rides and floating markets on the tranquil waters of Dal Lake. Stay in a traditional houseboat for a complete Kashmiri experience.",
    attractions: [
      "Floating Post Office",
      "Meena Bazaar",
      "Nehru Park",
      "Floating Gardens",
      "Char Chinar"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26428.18247073155!2d74.84587841559868!3d34.11603502847683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1858a74e2d3df%3A0xeab50d2e5b922736!2sDal%20Lake!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Betaab Valley",
    price: "₹12,499",
    rating: "4.7 (890)",
    discount: "-15%",
    image: "/images/destination-betaab.jpg",
    subtitle: "CINEMATIC PARADISE",
    distance: "15 km from Pahalgam",
    time: "Approx. 30 Mins",
    description: "Famous for its role in Bollywood movies, Betaab Valley is surrounded by lush green meadows, snow-clad mountains, and dense pine and deodar forests.",
    attractions: [
      "Baisaran",
      "Lidder River Walks",
      "Pony Rides",
      "Photography Points",
      "Local Handicrafts"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.839841315574!2d75.34091761559869!3d34.0205215281488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e21baeb15b3e6d%3A0xeab50d2e5b922736!2sBetaab%20Valley!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  }
];

export const packages = [
  {
    slug: "classic-kashmir",
    name: "Classic Kashmir",
    duration: "4N/5D",
    destinations: "Srinagar, Gulmarg, Pahalgam",
    price: "Rs 8,999",
    originalPrice: "Rs 11,999",
    badge: "Best Seller",
    type: "Family",
    image: "/images/package-classic.jpg",
    inclusions: ["Hotel stay", "Breakfast and dinner", "Private vehicle", "Shikara ride"],
  },
  {
    slug: "kashmir-honeymoon-delight",
    name: "Kashmir Honeymoon Delight",
    duration: "5N/6D",
    destinations: "Srinagar, Gulmarg, Pahalgam, Dal Houseboat",
    price: "Rs 12,499",
    originalPrice: "Rs 15,999",
    badge: "Hot Deal",
    type: "Honeymoon",
    image: "/images/package-honeymoon.jpg",
    inclusions: ["Houseboat stay", "Candlelight dinner", "Sightseeing", "Private cab"],
  },
  {
    slug: "kashmir-family-special",
    name: "Kashmir Family Special",
    duration: "6N/7D",
    destinations: "Srinagar, Sonamarg, Gulmarg, Pahalgam",
    price: "Rs 14,999",
    originalPrice: "Rs 18,500",
    badge: "New Offer",
    type: "Family",
    image: "/images/package-family.jpg",
    inclusions: ["Family rooms", "Daily meals", "Airport pickup", "Flexible pacing"],
  },
  {
    slug: "winter-wonderland-kashmir",
    name: "Winter Wonderland Kashmir",
    duration: "5N/6D",
    destinations: "Srinagar, Gulmarg skiing, Pahalgam",
    price: "Rs 15,999",
    originalPrice: "Rs 19,999",
    badge: "Winter",
    type: "Adventure",
    image: "/images/package-winter.jpg",
    inclusions: ["Snow itinerary", "Ski support", "Warm hotels", "Transfers"],
  },
  {
    slug: "kashmir-valley-explorer",
    name: "Kashmir Valley Explorer",
    duration: "7N/8D",
    destinations: "Srinagar, Sonamarg, Pahalgam, Betaab Valley, Gulmarg, Doodhpathri",
    price: "Rs 18,499",
    originalPrice: "Rs 22,999",
    badge: "Explorer",
    type: "Group",
    image: "/images/package-explorer.jpg",
    inclusions: ["Extended route", "Local guide", "Meals", "Sightseeing"],
  },
  {
    slug: "grand-kashmir-ladakh",
    name: "Grand Kashmir & Ladakh",
    duration: "9N/10D",
    destinations: "Srinagar, Gulmarg, Pahalgam, Sonamarg, Kargil, Leh",
    price: "Rs 28,999",
    originalPrice: "Rs 34,999",
    badge: "Premium",
    type: "Adventure",
    image: "/images/package-ladakh.jpg",
    inclusions: ["Kargil route", "Leh stay", "Permits guidance", "SUV transfers"],
  },
  {
    slug: "vaishno-devi-kashmir",
    name: "Vaishno Devi + Kashmir",
    duration: "8N/9D",
    destinations: "Katra, Srinagar, Pahalgam, Gulmarg",
    price: "Rs 19,499",
    originalPrice: "Rs 23,499",
    badge: "Pilgrimage Combo",
    type: "Pilgrimage",
    image: "/images/package-vaishno.jpg",
    inclusions: ["Katra stay", "Kashmir tour", "Transfers", "Meals"],
  },
  {
    slug: "kashmir-group-budget-tour",
    name: "Kashmir Group Budget Tour",
    duration: "4N/5D",
    destinations: "Srinagar, Gulmarg, Pahalgam",
    price: "Rs 6,999",
    originalPrice: "Rs 9,999",
    badge: "Group Saver",
    type: "Group",
    image: "/images/package-group.jpg",
    inclusions: ["Min 10 pax", "Shared transport", "Budget hotels", "Meals"],
  },
];

export const serviceCards = [
  { icon: MapPinned, title: "Kashmir Packages", text: "Family, honeymoon, group and winter tours with local planning.", href: "/kashmir-packages" },
  { icon: Landmark, title: "Hajj & Umrah", text: "Guided qafila packages, visa support and on-ground care.", href: "/hajj-umrah" },
  { icon: Plane, title: "Air Ticketing", text: "Domestic, international, group and last-minute flight bookings.", href: "/ticketing" },
  { icon: Stamp, title: "Visa Services", text: "Tourist, business, student, work and Saudi visa assistance.", href: "/visa-services" },
  { icon: UsersRound, title: "Group Tours", text: "Managed retreats, pilgrim groups and custom travel planning.", href: "/contact" },
];

export const testimonials = [
  { name: "Sophia Wani", role: "Family traveler", text: "Jaffari Sky Travels arranged our Kashmir family tour perfectly. Hotels, vehicle and sightseeing were all handled with care." },
  { name: "Junaid Ahmad", role: "Umrah pilgrim", text: "Our Umrah group was managed very well. The guidance in Makkah and Madinah made the journey peaceful." },
  { name: "Olivia Mir", role: "Ticketing client", text: "Quick ticketing help and honest pricing. They sent options fast and issued the ticket the same day." },
];

export const umrahPackages = [
  { tier: "Economy Umrah", duration: "10 Days", price: "Rs 65,000", inclusions: ["Economy flights", "AC transport", "Kashmiri group leader", "3-star hotel"] },
  { tier: "Standard Umrah", duration: "15 Days", price: "Rs 1,15,000", inclusions: ["Priority check-in", "Full Ziyarat", "Taif day trip", "4-star hotel"] },
  { tier: "Premium Umrah", duration: "20 Days", price: "Rs 1,25,000", inclusions: ["5-star hotels", "Personal guide", "Full board dining", "Ihram kit"] },
  { tier: "Family Umrah", duration: "14 Days", price: "Rs 85,000/person", inclusions: ["Family seating", "Child-aware pacing", "Stroller assistance", "First-aid support"] },
  { tier: "Ramadan Umrah", duration: "10 Days", price: "Rs 1,80,000", inclusions: ["Haram-near hotel", "Taraweeh guide", "Ramadan program", "Premium support"] },
];

export const galleryItems = [
  { title: "Dal Lake houseboat evening", category: "Kashmir", image: "/images/gallery-dal.jpg" },
  { title: "Gulmarg winter route", category: "Kashmir", image: "/images/gallery-gulmarg.jpg" },
  { title: "Pilgrim guidance session", category: "Hajj & Umrah", image: "/images/gallery-umrah.jpg" },
  { title: "Family tour moment", category: "Happy Travelers", image: "/images/gallery-family.jpg" },
  { title: "Pahalgam valley stop", category: "Kashmir", image: "/images/gallery-pahalgam.jpg" },
  { title: "Group travel departure", category: "Group Tours", image: "/images/gallery-group.jpg" },
];

export const routeHighlights = [
  { icon: Plane, from: "Srinagar", to: "Delhi" },
  { icon: Plane, from: "Srinagar", to: "Dubai" },
  { icon: Plane, from: "Srinagar", to: "Riyadh" },
  { icon: Plane, from: "Delhi", to: "New York" },
  { icon: BriefcaseBusiness, from: "Group", to: "Corporate" },
  { icon: Clock3, from: "Urgent", to: "Last-minute" },
];
