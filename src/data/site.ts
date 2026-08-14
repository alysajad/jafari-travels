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
  { label: "Contact", href: "/aboutus#contact" },
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
    image: "/images/dal_lake_destination.jpg",
    subtitle: "THE JEWEL IN THE CROWN",
    distance: "0 km (Capital City)",
    time: "N/A",
    description: "Srinagar is the summer capital of Jammu and Kashmir, famous for its gardens, waterfronts, and houseboats. It is the core hub of Kashmiri culture and the starting point for most journeys.",
    attractions: [
      "Dal Lake & Nigeen Lake Shikara Rides",
      "Mughal Gardens (Shalimar & Nishat Bagh)",
      "Hazratbal Shrine",
      "Shankaracharya Temple",
      "Pari Mahal (Palace of Fairies)",
      "Lal Chowk Market"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105676.62089408682!2d74.7214732155734!3d34.09279532588373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f2f25b29093%3A0xc3bba4f3743c4a22!2sSrinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Gulmarg",
    price: "₹15,999",
    rating: "4.9 (1.8k)",
    discount: "-25%",
    image: "/images/gulamrg_destination_ski_resort.jpg",
    subtitle: "THE MEADOW OF FLOWERS",
    distance: "51 km from Srinagar",
    time: "Approx. 1.5 Hours",
    description: "A world-class ski destination and a spectacular summer retreat. Gulmarg boasts one of the highest cable cars in the world and stunning panoramic views of the Himalayas.",
    attractions: [
      "Gulmarg Gondola (Phase 1 & 2)",
      "Apharwat Peak",
      "Alpather Lake (Frozen Lake)",
      "Drung Waterfall",
      "Maharaja Palace",
      "Bota Pathri",
      "Khelanmarg",
      "Strawberry Valley"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.7470659929!2d74.37397746187532!3d34.04870020475308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1ae1d6248b615%3A0xeab50d2e5b922736!2sGulmarg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Pahalgam",
    price: "₹8,999",
    rating: "4.7 (1.2k)",
    discount: "-20%",
    image: "/images/betaab_valley_destination.jpg",
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
    name: "Sonamarg",
    price: "₹14,999",
    rating: "5.0 (950)",
    discount: "-18%",
    image: "/images/sonamarg_destination.jpg",
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
    name: "Gurez Valley",
    price: "₹11,999",
    rating: "4.9 (850)",
    discount: "-15%",
    image: "/images/gurez_destination.jpg",
    subtitle: "THE HIDDEN GEM",
    distance: "123 km from Srinagar",
    time: "Approx. 6 Hours",
    description: "A beautiful hidden valley in the high Himalayas, known for its stunning landscapes, traditional log houses, and the pristine Kishanganga River.",
    attractions: [
      "Habba Khatoon Peak",
      "Kishanganga River",
      "Dawar Village",
      "Tulail Valley",
      "Razdan Pass"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210515.68884914107!2d74.65485429999999!3d34.62263889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e15cba332b7bc5%3A0x6bbaea3f7ccb5e40!2sGurez%20Valley!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    name: "Doodhpathri",
    price: "₹9,999",
    rating: "4.8 (1.1k)",
    discount: "-20%",
    image: "/images/doodhpathri_destination.jpg",
    subtitle: "VALLEY OF MILK",
    distance: "42 km from Srinagar",
    time: "Approx. 1.5 Hours",
    description: "Known as the 'Valley of Milk', Doodhpathri is a beautiful alpine meadow surrounded by snow-clad mountains and forests of pine, fir, and deodar. The river flowing through the meadows looks like milk from a distance.",
    attractions: [
      "Tangnar",
      "Mujpathri",
      "Palmaidan",
      "Dishkal",
      "Shaliganga River"
    ],
    mapUrl: ""
  },
  {
    name: "Leh, Ladakh",
    price: "₹18,999",
    rating: "4.9 (1.5k)",
    discount: "-15%",
    image: "/images/ladakh destination.jpg",
    subtitle: "LAND OF HIGH PASSES",
    distance: "415 km from Srinagar",
    time: "Approx. 10 Hours",
    description: "A mesmerizing desert city in the Himalayas, famous for its Buddhist monasteries, stunning landscapes, and high-altitude mountain passes.",
    attractions: [
      "Pangong Lake",
      "Khardung La Pass",
      "Nubra Valley",
      "Shanti Stupa",
      "Magnetic Hill"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104576.49524029272!2d77.49129532842407!3d34.166318531766624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb21445fed85%3A0xd1bb09975086f710!2sLeh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
    image: "/images/package-classic.png",
    inclusions: ["Hotel stay", "Breakfast and dinner", "Private vehicle", "Shikara ride"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar & Houseboat", details: "Arrive at Srinagar airport. Meet our representative and transfer to a premium houseboat on Dal Lake. Evening enjoy a relaxing 1-hour Shikara ride." },
      { day: 2, title: "Day trip to Gulmarg", details: "After breakfast, drive to Gulmarg (Meadow of Flowers). Enjoy the scenic Gondola cable car ride to Apharwat peak. Visit Drung Waterfall and Bota Pathri. Evening return to Srinagar." },
      { day: 3, title: "Day trip to Pahalgam", details: "Drive to Pahalgam (Valley of Shepherds) via saffron fields. Visit Betaab Valley and Aru Valley. Enjoy the serene Lidder river. Return to Srinagar." },
      { day: 4, title: "Srinagar Sightseeing", details: "Visit the famous Mughal Gardens (Shalimar & Nishat Bagh), Hazratbal Shrine, and Shankaracharya Temple. Evening shopping at Lal Chowk." },
      { day: 5, title: "Departure", details: "Morning breakfast. Transfer to Srinagar airport for your onward journey with beautiful memories." }
    ]
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
    image: "/images/package-honeymoon.png",
    inclusions: ["Houseboat stay", "Candlelight dinner", "Sightseeing", "Private cab"],
    itinerary: [
      { day: 1, title: "Romantic Arrival & Houseboat Stay", details: "Welcome to Kashmir! Transfer to a luxury houseboat. Enjoy a private Shikara ride with floating market visit. Romantic candlelight dinner." },
      { day: 2, title: "Mughal Gardens & Sunset", details: "Visit Nishat Bagh and Shalimar Bagh. Afternoon visit to Pari Mahal for panoramic views. Evening shopping at Lal Chowk." },
      { day: 3, title: "Gulmarg Winter Wonderland", details: "Drive to Gulmarg. Experience the Gondola ride together. Visit Maharaja Palace and Khelanmarg. Try skiing or snowboarding. Overnight stay in a premium Gulmarg hotel." },
      { day: 4, title: "Journey to Pahalgam", details: "Travel to Pahalgam. Enjoy the romantic walks along the Lidder River. Visit Apple orchards on the way. Overnight in Pahalgam." },
      { day: 5, title: "Betaab Valley & Baisaran", details: "Take a pony ride to Baisaran (Mini Switzerland). Visit the stunning Betaab Valley. Relax amidst nature." },
      { day: 6, title: "Departure", details: "After breakfast, drive back to Srinagar airport for your flight back home." }
    ]
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
    image: "/images/package-family.png",
    inclusions: ["Family rooms", "Daily meals", "Airport pickup", "Flexible pacing"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", details: "Welcome by our representative. Check-in to hotel. Rest and acclimatize. Evening walk around Dal Lake boulevard and Lal Chowk." },
      { day: 2, title: "Sonamarg Excursion", details: "Full day trip to Sonamarg (Meadow of Gold). Visit Thajiwas Glacier on ponies. Enjoy snow activities with kids. Return to Srinagar." },
      { day: 3, title: "Gulmarg Day Trip", details: "Drive to Gulmarg. Enjoy phase 1 and 2 of the Gondola ride. Visit Drung Waterfall and Bota Pathri. Family picnic in the meadows." },
      { day: 4, title: "Transfer to Pahalgam", details: "Drive to Pahalgam. Visit Awantipora ruins and Bat factories on the way. Check-in to Pahalgam hotel." },
      { day: 5, title: "Pahalgam Sightseeing", details: "Visit Aru Valley, Betaab Valley, and Chandanwari. Evening free for local market exploration." },
      { day: 6, title: "Return to Srinagar & Houseboat", details: "Drive back to Srinagar. Check-in to a traditional houseboat. Evening Shikara ride." },
      { day: 7, title: "Departure", details: "Breakfast and drop at Srinagar airport." }
    ]
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
    image: "/images/package-winter.png",
    inclusions: ["Snow itinerary", "Ski support", "Warm hotels", "Transfers"],
    itinerary: [
      { day: 1, title: "Srinagar Arrival & Snow Views", details: "Arrive in snow-covered Srinagar. Transfer to central heated hotel. Evening walk to enjoy winter aesthetics." },
      { day: 2, title: "Gulmarg Skiing Phase 1", details: "Drive to Gulmarg. Check-in to resort. Visit Maharaja Palace. Meet instructors and begin beginner skiing lessons on baby slopes." },
      { day: 3, title: "Gulmarg Gondola & Snowboarding", details: "Gondola ride to Apharwat peak for incredible snowscapes. Optional snowboarding or advanced skiing." },
      { day: 4, title: "Pahalgam Winter Trek", details: "Drive to Pahalgam. Experience the frozen Lidder river and snow-clad pine forests. Overnight in Pahalgam." },
      { day: 5, title: "Srinagar Houseboat", details: "Return to Srinagar. Visit Lal Chowk market. Stay in a cozy houseboat. Enjoy Kangri (traditional fire pot) and Kahwa." },
      { day: 6, title: "Departure", details: "Morning breakfast. Transfer to airport." }
    ]
  },
  {
    slug: "kashmir-valley-explorer",
    name: "Kashmir Valley Explorer",
    duration: "7N/8D",
    destinations: "Srinagar, Sonamarg, Pahalgam, Gulmarg, Doodhpathri",
    price: "Rs 18,499",
    originalPrice: "Rs 22,999",
    badge: "Explorer",
    type: "Group",
    image: "/images/package-explorer.png",
    inclusions: ["Extended route", "Local guide", "Meals", "Sightseeing"],
    itinerary: [
      { day: 1, title: "Arrival & Srinagar Leisure", details: "Arrival in Srinagar. Transfer to hotel. Evening free to explore Lal Chowk market and local cuisine." },
      { day: 2, title: "Sonamarg Glaciers", details: "Day trip to Sonamarg. Visit the stunning Thajiwas Glacier and zero point. Return to Srinagar." },
      { day: 3, title: "Doodhpathri Exploration", details: "Visit the offbeat Valley of Milk, Doodhpathri. Enjoy the pristine alpine meadows and Shaliganga river." },
      { day: 4, title: "Gulmarg Adventure", details: "Drive to Gulmarg. Gondola ride and walk around the majestic meadows. Visit Drung Waterfall, Bota Pathri, and Khelanmarg. Return to Srinagar." },
      { day: 5, title: "Srinagar to Pahalgam", details: "Transfer to Pahalgam. Visit apple orchards and saffron fields. Check-in and relax." },
      { day: 6, title: "Pahalgam Valleys", details: "Extensive tour of Aru Valley, Betaab Valley, and Chandanwari. Scenic photography sessions." },
      { day: 7, title: "Houseboat & Shikara", details: "Return to Srinagar. Check-in to Houseboat. Evening sunset Shikara ride on Dal Lake." },
      { day: 8, title: "Departure", details: "Breakfast and safe drop at the airport." }
    ]
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
    image: "/images/package-ladakh.png",
    inclusions: ["Kargil route", "Leh stay", "Permits guidance", "SUV transfers"],
    itinerary: [
      { day: 1, title: "Srinagar Arrival", details: "Arrive in Srinagar. Local sightseeing of Mughal Gardens and Lal Chowk. Overnight stay." },
      { day: 2, title: "Gulmarg Excursion", details: "Day trip to Gulmarg. Enjoy the Gondola and beautiful landscapes. Visit Drung Waterfall and Maharaja Palace." },
      { day: 3, title: "Pahalgam Excursion", details: "Day trip to Pahalgam. Visit Betaab valley. Return to Srinagar." },
      { day: 4, title: "Srinagar to Kargil via Sonamarg", details: "Drive to Kargil via Sonamarg and Zojila Pass. Visit Drass war memorial. Overnight in Kargil." },
      { day: 5, title: "Kargil to Leh", details: "Drive to Leh via Lamayuru and Magnetic Hill. Check-in to Leh hotel to acclimatize." },
      { day: 6, title: "Leh Local Sightseeing", details: "Visit Shanti Stupa, Leh Palace, and local monasteries. Rest for altitude adjustment." },
      { day: 7, title: "Nubra Valley via Khardung La", details: "Drive to Nubra Valley over Khardung La (highest motorable road). Enjoy double-humped camel ride." },
      { day: 8, title: "Pangong Lake", details: "Drive to the mesmerizing Pangong Lake via Shyok river route. Overnight camping near the lake." },
      { day: 9, title: "Return to Leh", details: "Wake up to stunning lake views. Drive back to Leh via Chang La pass. Evening shopping." },
      { day: 10, title: "Departure from Leh", details: "Transfer to Kushok Bakula Rimpochee Airport for your flight home." }
    ]
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
    image: "/images/package-vaishno.png",
    inclusions: ["Katra stay", "Kashmir tour", "Transfers", "Meals"],
    itinerary: [
      { day: 1, title: "Arrival in Jammu & Katra", details: "Arrive at Jammu station/airport. Transfer to Katra. Check-in and relax." },
      { day: 2, title: "Mata Vaishno Devi Darshan", details: "Early morning trek/helicopter to the holy shrine of Mata Vaishno Devi. Return to Katra by evening." },
      { day: 3, title: "Katra to Srinagar", details: "Long scenic drive from Katra to Srinagar. Check-in to Srinagar hotel/houseboat." },
      { day: 4, title: "Srinagar Local Sightseeing", details: "Visit Mughal Gardens, Shankaracharya Temple, Lal Chowk shopping, and enjoy a Shikara ride." },
      { day: 5, title: "Gulmarg Excursion", details: "Day trip to Gulmarg. Enjoy the Gondola ride and mountain views. Visit Bota Pathri and Khelanmarg. Return to Srinagar." },
      { day: 6, title: "Srinagar to Pahalgam", details: "Drive to Pahalgam. Enjoy the scenic route. Check-in to Pahalgam hotel." },
      { day: 7, title: "Pahalgam Sightseeing", details: "Visit Betaab Valley and Aru Valley. Evening leisure time." },
      { day: 8, title: "Return to Jammu", details: "Drive back to Jammu. Check-in to hotel for overnight rest." },
      { day: 9, title: "Departure", details: "Morning breakfast and drop at Jammu airport/station." }
    ]
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
    image: "/images/package-group.png",
    inclusions: ["Min 10 pax", "Shared transport", "Budget hotels", "Meals"],
    itinerary: [
      { day: 1, title: "Group Arrival", details: "Receive the group at Srinagar airport. Transfer to budget hotel. Evening group Shikara ride." },
      { day: 2, title: "Gulmarg Group Excursion", details: "Shared coach to Gulmarg. Group guide for Gondola ticket assistance and sightseeing. Visit Drung Waterfall and Maharaja Palace." },
      { day: 3, title: "Pahalgam Valleys", details: "Day trip to Pahalgam. Group visit to Betaab Valley and shared pony rides. Return to Srinagar." },
      { day: 4, title: "Srinagar Gardens", details: "Visit Mughal Gardens. Free time for group shopping at Lal Chowk." },
      { day: 5, title: "Departure", details: "Group drop at Srinagar airport." }
    ]
  },
  {
    slug: "leh-ladakh-explorer",
    name: "Leh Ladakh Explorer",
    duration: "5N/6D",
    destinations: "Leh, Nubra Valley, Pangong Lake",
    price: "Rs 19,999",
    originalPrice: "Rs 24,999",
    badge: "Adventure",
    type: "Adventure",
    image: "/images/ladakh.jpg",
    inclusions: ["Leh hotel stay", "Permits", "SUV transfers", "Meals"],
    itinerary: [
      { day: 1, title: "Arrival in Leh", details: "Arrive at Kushok Bakula Rimpochee Airport. Transfer to hotel for acclimatization. Evening visit to Shanti Stupa." },
      { day: 2, title: "Leh Local Sightseeing", details: "Visit Magnetic Hill, Gurudwara Pathar Sahib, and Sangam (Confluence of Zanskar and Indus rivers)." },
      { day: 3, title: "Nubra Valley via Khardung La", details: "Drive to Nubra Valley over Khardung La, the highest motorable road. Enjoy the double-humped camel safari." },
      { day: 4, title: "Pangong Lake", details: "Travel to the mesmerizing Pangong Lake via Shyok river route. Overnight camping near the pristine blue waters." },
      { day: 5, title: "Return to Leh", details: "Wake up to stunning lake sunrise views. Drive back to Leh via Chang La pass. Evening at leisure for shopping." },
      { day: 6, title: "Departure", details: "Morning breakfast. Transfer to Leh airport for your onward flight." }
    ]
  },
  {
    slug: "leh-adventure",
    name: "Leh Adventure",
    duration: "3N/4D",
    destinations: "Leh",
    price: "Rs 6,200",
    originalPrice: "Rs 8,500",
    badge: "Budget",
    type: "Adventure",
    image: "/images/ladakh destination.jpg",
    inclusions: ["Budget stay", "Local sightseeing", "Airport transfers", "Breakfast"],
    itinerary: [
      { day: 1, title: "Arrival in Leh", details: "Arrive at Kushok Bakula Rimpochee Airport. Transfer to hotel for acclimatization. Evening visit to Shanti Stupa and Leh Palace." },
      { day: 2, title: "Sham Valley Tour", details: "Visit Magnetic Hill, Gurudwara Pathar Sahib, and Sangam (Confluence of Zanskar and Indus rivers)." },
      { day: 3, title: "Monasteries & Markets", details: "Visit Thiksey Monastery and Shey Palace. Evening free for shopping at Leh Main Market." },
      { day: 4, title: "Departure", details: "Morning breakfast. Transfer to Leh airport for your onward journey." }
    ]
  }
];

export const serviceCards = [
  { icon: MapPinned, title: "Kashmir Packages", text: "Family, honeymoon, group and winter tours with local planning.", href: "/kashmir-packages" },
  { icon: Landmark, title: "Hajj & Umrah", text: "Guided qafila packages, visa support and on-ground care.", href: "/hajj-umrah" },
  { icon: Plane, title: "Air Ticketing", text: "Domestic, international, group and last-minute flight bookings.", href: "/ticketing" },
  { icon: Stamp, title: "Visa Services", text: "Tourist, business, student, work and Saudi visa assistance.", href: "/visa-services" },
  { icon: UsersRound, title: "Group Tours", text: "Managed retreats, pilgrim groups and custom travel planning.", href: "/aboutus#contact" },
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

export interface RentalVehicle {
  id: string;
  name: string;
  category: "Sedan" | "MUV" | "SUV" | "Premium MUV" | "Luxury Van" | "Tempo" | "Bus";
  seats: number;
  bags: number;
  transmission: "Manual" | "Automatic";
  ac: boolean;
  pricePerDay: number;
  image: string;
  rating?: string;
  reviews?: string;
  duration?: string;
  badge?: string;
  luggageDetails?: string;
  parking?: string;
  tollTaxes?: string;
  assistance?: string;
}

export const rentalVehicles: RentalVehicle[] = [
  {
    id: "sedan",
    name: "Sedan",
    category: "Sedan",
    seats: 4,
    bags: 2,
    transmission: "Manual",
    ac: true,
    pricePerDay: 2499,
    image: "/images/rental_sedan_1786734700242.png",
    rating: "4.5",
    reviews: "10,230",
    duration: "4 hour 15 mins",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    category: "MUV",
    seats: 7,
    bags: 3,
    transmission: "Manual",
    ac: true,
    pricePerDay: 2899,
    image: "/images/rental_ertiga_1786734716088.png",
    rating: "4.5",
    reviews: "17,678",
    duration: "7 hour 10 mins",
    badge: "Deal of the Day",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "innova",
    name: "Toyota Innova",
    category: "MUV",
    seats: 7,
    bags: 4,
    transmission: "Manual",
    ac: true,
    pricePerDay: 3199,
    image: "/images/rental_innova_1786734730661.png",
    rating: "4.5",
    reviews: "12,178",
    duration: "4 hour 15 mins",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    category: "Premium MUV",
    seats: 7,
    bags: 4,
    transmission: "Automatic",
    ac: true,
    pricePerDay: 3899,
    image: "/images/rental_innova_crysta_1786734744684.png",
    rating: "4.5",
    reviews: "11,688",
    duration: "4 hour 10 mins",
    badge: "Limited Period Offer",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "urbania",
    name: "Force Urbania",
    category: "Luxury Van",
    seats: 12,
    bags: 8,
    transmission: "Manual",
    ac: true,
    pricePerDay: 5999,
    image: "/images/rental_urbania_1786734757749.png",
    rating: "4.5",
    reviews: "14,778",
    duration: "3 hour 10 mins",
    badge: "Offer of the day",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "fortuner",
    name: "Fortuner",
    category: "SUV",
    seats: 7,
    bags: 4,
    transmission: "Automatic",
    ac: true,
    pricePerDay: 5500,
    image: "/images/rental-fortuner.png",
    rating: "4.8",
    reviews: "8,945",
    duration: "3 hour 45 mins",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "tempo-12-14",
    name: "Tempo 12 & 14 Seater",
    category: "Tempo",
    seats: 14,
    bags: 6,
    transmission: "Manual",
    ac: true,
    pricePerDay: 5500,
    image: "/images/rental_tempo_1786734787211.png",
    rating: "4.2",
    reviews: "15,200",
    duration: "5 hour 20 mins",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "tempo-17-20",
    name: "Tempo 17 & 20 Seater",
    category: "Tempo",
    seats: 20,
    bags: 10,
    transmission: "Manual",
    ac: true,
    pricePerDay: 6000,
    image: "/images/rental_tempo_1786734787211.png",
    rating: "4.3",
    reviews: "11,100",
    duration: "6 hour 10 mins",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "bus-19",
    name: "Bus",
    category: "Bus",
    seats: 19,
    bags: 15,
    transmission: "Manual",
    ac: true,
    pricePerDay: 4999,
    image: "/images/bus.png",
    rating: "4.5",
    reviews: "12,678",
    duration: "1 hour 50 mins",
    badge: "Damaka Offer",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  },
  {
    id: "bus-large",
    name: "Bus (25/28/30/40 Seater)",
    category: "Bus",
    seats: 40,
    bags: 30,
    transmission: "Manual",
    ac: true,
    pricePerDay: 5999,
    image: "/images/rental-bus-40.jpg",
    rating: "4.4",
    reviews: "9,876",
    duration: "2 hour 30 mins",
    luggageDetails: "Inside",
    parking: "Paid",
    tollTaxes: "Paid",
    assistance: "24X7"
  }
];
