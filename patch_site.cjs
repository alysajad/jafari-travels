const fs = require('fs');

let lines = fs.readFileSync('src/data/site.ts', 'utf8').split('\n');

const startIdx = lines.findIndex(l => l.startsWith('export const packages = ['));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.startsWith('];'));

if (startIdx !== -1 && endIdx !== -1) {
  const newPackagesStr = `export const packages = [
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
      { day: 2, title: "Day trip to Gulmarg", details: "After breakfast, drive to Gulmarg (Meadow of Flowers). Enjoy the scenic Gondola cable car ride to Apharwat peak. Evening return to Srinagar." },
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
      { day: 2, title: "Mughal Gardens & Sunset", details: "Visit Nishat Bagh and Shalimar Bagh. Afternoon visit to Pari Mahal for panoramic views. Evening at leisure near Dal Lake." },
      { day: 3, title: "Gulmarg Winter Wonderland", details: "Drive to Gulmarg. Experience the Gondola ride together. Try skiing or snowboarding. Overnight stay in a premium Gulmarg hotel." },
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
      { day: 1, title: "Arrival in Srinagar", details: "Welcome by our representative. Check-in to hotel. Rest and acclimatize. Evening walk around Dal lake boulevard." },
      { day: 2, title: "Sonamarg Excursion", details: "Full day trip to Sonamarg (Meadow of Gold). Visit Thajiwas Glacier on ponies. Enjoy snow activities with kids. Return to Srinagar." },
      { day: 3, title: "Gulmarg Day Trip", details: "Drive to Gulmarg. Enjoy phase 1 and 2 of the Gondola ride. Family picnic in the meadows." },
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
      { day: 2, title: "Gulmarg Skiing Phase 1", details: "Drive to Gulmarg. Check-in to resort. Meet instructors and begin beginner skiing lessons on baby slopes." },
      { day: 3, title: "Gulmarg Gondola & Snowboarding", details: "Gondola ride to Apharwat peak for incredible snowscapes. Optional snowboarding or advanced skiing." },
      { day: 4, title: "Pahalgam Winter Trek", details: "Drive to Pahalgam. Experience the frozen Lidder river and snow-clad pine forests. Overnight in Pahalgam." },
      { day: 5, title: "Srinagar Houseboat", details: "Return to Srinagar. Stay in a cozy houseboat. Enjoy Kangri (traditional fire pot) and Kahwa." },
      { day: 6, title: "Departure", details: "Morning breakfast. Transfer to airport." }
    ]
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
    image: "/images/package-explorer.png",
    inclusions: ["Extended route", "Local guide", "Meals", "Sightseeing"],
    itinerary: [
      { day: 1, title: "Arrival & Srinagar Leisure", details: "Arrival in Srinagar. Transfer to hotel. Evening free to explore local markets and cuisine." },
      { day: 2, title: "Sonamarg Glaciers", details: "Day trip to Sonamarg. Visit the stunning Thajiwas Glacier and zero point. Return to Srinagar." },
      { day: 3, title: "Doodhpathri Exploration", details: "Visit the offbeat Valley of Milk, Doodhpathri. Enjoy the pristine alpine meadows and Shaliganga river." },
      { day: 4, title: "Gulmarg Adventure", details: "Drive to Gulmarg. Gondola ride and walk around the majestic meadows. Return to Srinagar." },
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
      { day: 1, title: "Srinagar Arrival", details: "Arrive in Srinagar. Local sightseeing of Mughal Gardens. Overnight stay." },
      { day: 2, title: "Gulmarg Excursion", details: "Day trip to Gulmarg. Enjoy the Gondola and beautiful landscapes." },
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
      { day: 4, title: "Srinagar Local Sightseeing", details: "Visit Mughal Gardens, Shankaracharya Temple, and enjoy a Shikara ride." },
      { day: 5, title: "Gulmarg Excursion", details: "Day trip to Gulmarg. Enjoy the Gondola ride and mountain views. Return to Srinagar." },
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
      { day: 2, title: "Gulmarg Group Excursion", details: "Shared coach to Gulmarg. Group guide for Gondola ticket assistance and sightseeing." },
      { day: 3, title: "Pahalgam Valleys", details: "Day trip to Pahalgam. Group visit to Betaab Valley and shared pony rides. Return to Srinagar." },
      { day: 4, title: "Srinagar Gardens", details: "Visit Mughal Gardens. Free time for group shopping at local markets." },
      { day: 5, title: "Departure", details: "Group drop at Srinagar airport." }
    ]
  }
];`;

  lines.splice(startIdx, endIdx - startIdx + 1, newPackagesStr);
  fs.writeFileSync('src/data/site.ts', lines.join('\n'));
  console.log('Replaced successfully.');
} else {
  console.log('Could not find start or end index.');
}
