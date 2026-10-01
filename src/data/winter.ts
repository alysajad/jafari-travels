import type { TourPackage } from "./site";

export const winterPricingNote = "Package prices are indicative and may vary depending on travel dates, hotel category, group size and availability. Christmas, New Year and peak snowfall dates may attract additional charges. A final quotation will be shared after confirming your travel details.";
export const honeymoonPriceNote = "*Starting price for two adults sharing one room. Travel dates, hotel category and availability determine the final couple quotation.";

export const winterInclusions = [
  "Hotel accommodation as per package",
  "Daily breakfast & dinner",
  "Private cab as per itinerary",
  "Srinagar Airport pickup & drop",
  "Sightseeing as per itinerary",
  "Jaffari Sky Travels travel assistance",
];

export const winterExclusions = [
  "Flights or train tickets to and from Kashmir, and travel insurance",
  "Lunch, extra meals, personal shopping, tips and laundry",
  "Gondola tickets, skiing lessons, equipment hire, sledging and other optional activities",
  "Shikara rides, monument entry fees and local guides unless included in your written quotation",
  "Local union taxis, snow-chain vehicles and additional transfers where required, unless quoted",
  "Festive gala dinners, room upgrades and heating supplements unless included in your quotation",
  "Additional stays or services outside the confirmed itinerary; applicable taxes will be itemised in your quotation",
];

export const winterTerms = [
  { title: "Prices & confirmation", text: `${winterPricingNote} An enquiry does not reserve rooms or transport. Your written confirmation lists the hotels, room type, vehicle, inclusions, taxes and payment schedule.` },
  { title: "Snow, roads & sightseeing", text: "Snowfall is a natural event and cannot be guaranteed. Weather, road access and local restrictions may change the order or availability of sightseeing. Our team will discuss accessible alternatives; any additional services or costs will be explained before you agree to them." },
  { title: "Gondola & snow activities", text: "Gondola rides depend on ticket availability, weather and operator clearance. Skiing, sledging and other optional activities cost extra unless your quotation includes them. Follow the instructions of local operators and guides." },
  { title: "Hotels, rooms & meals", text: "Accommodation follows the hotel category and room arrangement in your confirmation. Breakfast and dinner follow the hotel meal plan. Please request room heating, dietary requirements, extra beds and accessibility arrangements when enquiring so the team can confirm availability and any supplements." },
  { title: "Children & group travel", text: "Please share the ages of all children and your room requirements. Child, extra-bed, single-room and group rates are quoted separately. The honeymoon starting price applies to a couple sharing one room; other displayed winter rates are per person." },
  { title: "Christmas & New Year", text: "Holiday departures and peak snowfall dates may carry hotel, transport or mandatory gala-dinner supplements. We will include applicable charges in the quotation before you confirm." },
  { title: "Payments, changes & cancellations", text: "The booking advance and balance due dates follow your written confirmation and our general booking terms. Send cancellation or date-change requests in writing. Hotel, transport and activity-provider charges apply, and peak-season bookings may be non-refundable. Ask for the cancellation conditions for your dates before paying." },
];

const base = { season: "winter", priceUnit: "person", inclusions: winterInclusions } as const;

export const winterPackages: TourPackage[] = [
  {
    ...base, slug: "kashmir-winter-special", name: "Kashmir Winter Special", duration: "4N/5D",
    destinations: "Srinagar, Gulmarg, Pahalgam", price: "₹14,999", badge: "Winter Escape", type: "Family", audience: "Families",
    image: "/images/winter-special.webp", stayPlan: "4 nights in Srinagar",
    overview: "A five-day introduction to Kashmir in winter, with Srinagar as your base. Spend a day in Gulmarg, take a scenic drive to Pahalgam and leave time for Dal Lake views and the city's markets. Private transfers and a single hotel base make this a practical choice for families.",
    highlights: ["Dal Lake waterfront", "Gulmarg snow day", "Pahalgam pine valleys"],
    itinerary: [
      { day: 1, title: "Welcome to Srinagar", details: "Meet our team at Srinagar Airport and transfer to your hotel. Settle in, then take a short walk along the Dal Lake boulevard if arrival time and weather allow. Dinner and overnight in Srinagar." },
      { day: 2, title: "Gulmarg snow day", details: "After breakfast, drive towards Gulmarg through Tangmarg. Enjoy the snowy meadow and mountain views. Choose a Gondola ride or sledging at extra cost, subject to tickets and operating conditions. Return to Srinagar for dinner and your overnight stay." },
      { day: 3, title: "Pahalgam valley excursion", details: "Drive to Pahalgam for views of the Lidder River and pine-covered slopes. Explore accessible areas at an easy pace. Optional visits to Aru or Betaab Valley require a local taxi at extra cost and depend on road access. Return to Srinagar for dinner and overnight." },
      { day: 4, title: "Srinagar sights & local markets", details: "Visit accessible Srinagar sights such as Hazratbal and the Mughal Garden terraces, which have a quiet winter character rather than spring flowers. Leave time for Lal Chowk shopping. An optional Shikara ride costs extra and depends on lake conditions. Overnight in Srinagar after dinner." },
      { day: 5, title: "Airport departure", details: "Have breakfast and check out. Your private transfer takes you to Srinagar Airport with a time buffer for winter road conditions and airport checks." },
    ],
  },
  {
    ...base, slug: "kashmir-snow-honeymoon", name: "Kashmir Snow Honeymoon", duration: "5N/6D",
    destinations: "Srinagar, Gulmarg, Pahalgam", price: "₹21,999", priceUnit: "couple", badge: "For Two", type: "Honeymoon", audience: "Honeymoon Couples",
    image: "/images/winter-honeymoon.webp", stayPlan: "3 nights in Srinagar · 2 nights in Pahalgam",
    overview: "Six days for two, with unhurried lakefront walks, a Gulmarg excursion and two nights among Pahalgam's pine valleys. Travel by private cab and leave room for slow mornings. Request a special dinner or room decoration when enquiring; the team will quote these extras separately.",
    highlights: ["Time together in Pahalgam", "Gulmarg mountain views", "Srinagar lakefront walks"],
    itinerary: [
      { day: 1, title: "Arrive & settle into Srinagar", details: "Your private cab meets you at Srinagar Airport. Check in and spend the evening at leisure, with time for a lakefront stroll if conditions allow. Dinner and overnight in Srinagar." },
      { day: 2, title: "Gulmarg together", details: "Take a day trip to Gulmarg for snowy landscapes and photographs among the fir trees. A Gondola ride is optional, payable separately and subject to tickets and weather. Return to your Srinagar hotel for dinner and overnight." },
      { day: 3, title: "A scenic drive to Pahalgam", details: "After breakfast, travel to Pahalgam and check in for two nights. Enjoy a relaxed afternoon with views of the Lidder River from accessible walking areas. Dinner and overnight in Pahalgam." },
      { day: 4, title: "A quiet day in the valley", details: "Spend time exploring Pahalgam at your own pace. If roads permit, arrange an optional local-taxi excursion to Aru or Betaab Valley at additional cost. Return for dinner and a second night in Pahalgam." },
      { day: 5, title: "Return to Srinagar", details: "Drive back to Srinagar, with time for local crafts shopping or an optional Shikara ride if the lake conditions permit. Any special dinner or decoration can be arranged in advance at extra cost. Dinner and overnight in Srinagar." },
      { day: 6, title: "Departure", details: "Breakfast, check-out and a private transfer to Srinagar Airport for your onward journey." },
    ],
  },
  {
    ...base, slug: "gulmarg-snow-adventure", name: "Gulmarg Snow Adventure", duration: "3N/4D",
    destinations: "Srinagar, Tangmarg, Gulmarg", price: "₹12,999", badge: "Snow Adventure", type: "Adventure", audience: "Friends & Couples",
    image: "/images/winter-adventure.webp", stayPlan: "3 nights in Srinagar · 2 Gulmarg excursions",
    overview: "A short winter break with two days set aside for Gulmarg. Use the first to explore the snow-covered meadow and the second for an optional ski lesson or Gondola ride. Srinagar stays and private road transfers form the package; activities and equipment are quoted separately so you can choose what suits you.",
    highlights: ["Two days around Gulmarg", "Optional beginner skiing", "Gondola ticket assistance"],
    itinerary: [
      { day: 1, title: "Arrive in Srinagar", details: "Airport pickup and transfer to your hotel. Meet the team to discuss your preferred snow activities and current operating conditions. Dinner and overnight in Srinagar." },
      { day: 2, title: "Gulmarg & the snowy meadow", details: "Drive via Tangmarg to Gulmarg. Explore designated accessible snow areas or book an optional Gondola ride, subject to ticket availability and weather. Activity fees and any required snow-chain transfer are extra unless quoted. Return to Srinagar for dinner and overnight." },
      { day: 3, title: "Choose your snow adventure", details: "Return to Gulmarg for a second day. Try a beginner ski session with a local instructor, sledging or a snow photography walk. Lessons, equipment and activities cost extra and depend on safe operating conditions. Return to Srinagar for dinner and overnight." },
      { day: 4, title: "Departure", details: "Breakfast and check-out, followed by your transfer to Srinagar Airport. Allow extra travel time during snowfall." },
    ],
  },
  {
    ...base, slug: "premium-kashmir-winter-tour", name: "Premium Kashmir Winter Tour", duration: "6N/7D",
    destinations: "Srinagar, Gulmarg, Pahalgam", price: "₹32,999", badge: "Premium Stays", type: "Luxury", audience: "Luxury Travellers",
    image: "/images/winter-premium.webp", stayPlan: "3 nights in Srinagar · 1 night in Gulmarg · 2 nights in Pahalgam",
    overview: "Take a week to explore Kashmir with an overnight stay in Gulmarg and two nights in Pahalgam. A private cab and a slower itinerary leave time to enjoy the surroundings. The team will confirm your premium hotel options, heating arrangements and room category in the final quotation.",
    highlights: ["An overnight stay in Gulmarg", "Premium hotel options", "Private touring at your pace"],
    itinerary: [
      { day: 1, title: "Arrival & Srinagar check-in", details: "Meet your driver at Srinagar Airport and transfer to the hotel named in your confirmation. Enjoy a relaxed evening and dinner. Overnight in Srinagar." },
      { day: 2, title: "Srinagar at your pace", details: "Explore accessible lakefront viewpoints, garden terraces and local crafts shops with your private cab. An optional Shikara ride can be added if lake conditions permit. Dinner and overnight in Srinagar." },
      { day: 3, title: "Into the mountains at Gulmarg", details: "Travel to Gulmarg and check in for one night. Spend the afternoon enjoying the mountain scenery. Optional Gondola tickets and snow activities are extra and subject to availability. Dinner and overnight in Gulmarg." },
      { day: 4, title: "Gulmarg to Pahalgam", details: "After breakfast, drive to Pahalgam with comfort stops along the way. Settle into your hotel for a two-night stay. Dinner and overnight in Pahalgam." },
      { day: 5, title: "Pahalgam valley day", details: "Enjoy a slow morning and accessible riverside viewpoints. The team can arrange an optional local-taxi trip to Aru or Betaab Valley at extra cost if roads are open. Dinner and overnight in Pahalgam." },
      { day: 6, title: "Back to Srinagar", details: "Return to Srinagar and spend the afternoon shopping for local crafts or relaxing at your hotel. Additional guided visits can be quoted on request. Dinner and overnight in Srinagar." },
      { day: 7, title: "Private airport transfer", details: "Breakfast and check-out, then transfer to Srinagar Airport with a buffer for winter travel conditions." },
    ],
  },
  {
    ...base, slug: "christmas-new-year-kashmir", name: "Christmas & New Year Kashmir", duration: "4N/5D",
    destinations: "Srinagar, Gulmarg, Pahalgam", price: "₹24,999", badge: "Festive Escape", type: "Holiday", audience: "Holiday Travellers",
    image: "/images/winter-festive.webp", stayPlan: "4 nights in Srinagar",
    overview: "Spend your Christmas or New Year break exploring Kashmir's winter scenery. This five-day itinerary combines Gulmarg and Pahalgam excursions with relaxed Srinagar evenings. Share your holiday dates early so the team can confirm rooms and any mandatory hotel gala-dinner charges before you book.",
    highlights: ["Christmas or New Year departures", "Gulmarg winter excursion", "Time for festive evenings"],
    itinerary: [
      { day: 1, title: "Arrive for your holiday break", details: "Airport pickup and hotel check-in in Srinagar. Meet the team to review your holiday itinerary and any pre-booked festive arrangements. Dinner and overnight in Srinagar." },
      { day: 2, title: "A winter day in Gulmarg", details: "Travel to Gulmarg for snow scenery and mountain views. Choose optional sledging or a Gondola ride at extra cost, subject to availability. Return for dinner and overnight in Srinagar." },
      { day: 3, title: "Pahalgam excursion", details: "Take a day trip to Pahalgam to enjoy pine forests and accessible Lidder River viewpoints. Local valley excursions cost extra and depend on road access. Return to Srinagar for dinner and overnight." },
      { day: 4, title: "Srinagar & a holiday evening", details: "Explore Srinagar's lakefront and markets at a relaxed pace. Keep the evening free for your own celebrations or a hotel event arranged in advance. Gala dinners and event entry are not included unless stated in your quotation. Overnight in Srinagar. The order of days can be adjusted to your festive date." },
      { day: 5, title: "Departure", details: "Enjoy breakfast before checking out. Transfer to Srinagar Airport for your return journey." },
    ],
  },
  {
    ...base, slug: "kashmir-winter-family-holiday", name: "Kashmir Winter Family Holiday", duration: "5N/6D",
    destinations: "Srinagar, Gulmarg, Pahalgam", price: "₹19,999", badge: "Family Time", type: "Family", audience: "Families & Groups",
    image: "/images/winter-family.webp", stayPlan: "3 nights in Srinagar · 2 nights in Pahalgam",
    overview: "Six days with room for snow play, sightseeing and rest. Stay in Srinagar and Pahalgam, take a Gulmarg excursion and travel in a private vehicle suited to your group. Share children's ages and room preferences so the team can quote the right accommodation and extra-bed arrangements.",
    highlights: ["A relaxed family itinerary", "Two nights in Pahalgam", "Private transport for your group"],
    itinerary: [
      { day: 1, title: "A relaxed arrival in Srinagar", details: "Meet your driver at Srinagar Airport and transfer to your hotel. Settle in and rest after your journey. A short lakefront outing is possible if time and weather allow. Dinner and overnight in Srinagar." },
      { day: 2, title: "Family snow day in Gulmarg", details: "Drive to Gulmarg for mountain views and time in designated snow-play areas. Optional Gondola rides or sledging cost extra and are subject to age restrictions, availability and weather. Return to Srinagar for dinner and overnight." },
      { day: 3, title: "Travel to Pahalgam", details: "After breakfast, drive to Pahalgam with breaks along the route. Check into your hotel and enjoy a relaxed afternoon near accessible river viewpoints. Dinner and overnight in Pahalgam." },
      { day: 4, title: "Pahalgam at your family's pace", details: "Spend the day enjoying the valley with time for rest and photographs. Optional local-taxi visits to Aru or Betaab Valley can be arranged at extra cost when roads permit. Dinner and a second overnight stay in Pahalgam." },
      { day: 5, title: "Srinagar sightseeing & shopping", details: "Return to Srinagar for accessible city sights and local markets. An optional Shikara ride depends on lake conditions and costs extra. Dinner and overnight in Srinagar." },
      { day: 6, title: "Airport drop", details: "After breakfast, check out and transfer to Srinagar Airport. Your driver will plan extra time for the road and airport checks." },
    ],
  },
];
