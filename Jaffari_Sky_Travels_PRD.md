# Product Requirements Document
## Jaffari Sky Travels — Official Website
**Version:** 1.0  
**Owner:** Adil Hussain Sofi  
**Contact:** 7051693767 | jaffariskytravels@gmail.com  
**Prepared by:** AI Design & Dev Specification  
**Date:** August 2026  

---

## 1. Project Overview

Jaffari Sky Travels is a full-service travel agency offering Kashmir tour packages, Hajj & Umrah pilgrimage services, Ziyarat tours, air ticketing, and visa services. The website is a multi-page public-facing platform that serves as the primary digital storefront, inquiry funnel, and brand identity anchor for the business.

The site does not replicate any existing competitor UI. It draws visual direction from the Travelora reference image — a clean, professional travel aesthetic with bold hero sections, destination cards with discount badges, search/booking widgets, testimonials, and a trust-bar. The design is adapted into a distinctive identity for Jaffari Sky Travels.

---

## 2. Business Goals

- Convert website visitors into WhatsApp/phone inquiries and form submissions
- Establish Jaffari Sky Travels as a credible, trusted agency for both Kashmir tourism and religious pilgrimage
- Present all service verticals (Kashmir packages, Hajj/Umrah, Ticketing, Visa) under one roof
- Build SEO presence for Kashmir tour and Hajj/Umrah searches from J&K and beyond
- Provide a gallery and social proof layer (testimonials, photos) to build trust

---

## 3. Target Audience

| Segment | Profile |
|--------|---------|
| Kashmir Tourists | Families, couples, honeymooners from across India booking Kashmir holidays |
| Pilgrims | Muslim households from J&K seeking Umrah, Hajj packages with Kashmiri group leaders |
| Corporate/Group Travelers | Companies or large groups wanting managed Kashmir retreats |
| International Tourists | Visitors from outside India needing visa + ticket + tour bundled |
| Local Residents | People in J&K needing air ticketing or visa processing |

---

## 4. Pages & Site Map

```
/                          → Home
/kashmir-packages          → Kashmir Packages (main listing)
/kashmir-packages/[slug]   → Individual Package Detail Page
/hajj-umrah               → Hajj & Umrah Services
/hajj-umrah/umrah         → Umrah Packages
/hajj-umrah/hajj          → Hajj Pre-Registration
/ticketing                → Air Ticketing Services
/visa-services            → Visa Services
/about                    → About Us
/gallery                  → Photo & Video Gallery
/blog                     → Blog/Travel Tips (optional Phase 2)
/contact                  → Contact Us
/privacy-policy           → Privacy Policy
/terms-and-conditions     → Terms & Conditions
```

---

## 5. Page-by-Page Requirements

---

### 5.1 Home Page (`/`)

**Purpose:** First impression, trust signal, service overview, inquiry capture.

#### Sections:

**A. Top Announcement Bar**
- Strip: "✈ Free Cancellation | 🏆 Best Price Guarantee | 🔒 Secure Booking | 📞 24/7 Support"
- Background: Deep blue or brand-teal
- Font: small, white, centered

**B. Header / Navigation**
- Logo: "Jaffari Sky Travels" with a subtle plane/wing icon
- Nav links: Home | Kashmir Packages | Hajj & Umrah | Ticketing | Visa | About | Contact
- CTA button: "Book Now" (primary brand color)
- Mobile: Hamburger menu, sticky on scroll
- Utility icons: Search (site search), WhatsApp direct link, Phone number

**C. Hero Section**
- Full-width cinematic background: Kashmir valley landscape (Dal Lake or Gulmarg meadow with mountains)
- Headline: "Explore Kashmir. Fulfil Your Hajj. Fly with Confidence."
- Subheadline: "Trusted travel partner for Kashmir tours, Umrah, Hajj, ticketing & visa services"
- Two CTAs: "Explore Packages →" and "Contact Us"
- Social proof pill: Avatar cluster + "Trusted by 5,000+ travelers"
- Floating badge: "Special Offer — Up to 30% OFF on Kashmir Packages"

**D. Search/Booking Widget**
- Tab row: Kashmir Tours | Hajj & Umrah | Air Tickets | Visa
- Each tab shows relevant form fields:
  - Kashmir Tours: Destination, Check-in, Check-out, Travelers → "Search Packages"
  - Hajj & Umrah: Package Type, Duration, Month, Group Size → "View Packages"
  - Air Tickets: From, To, Date, Travelers → "Search Flights" (links to ticketing page or WhatsApp)
  - Visa: Country, Nationality, Travel Date → "Enquire Now"
- Background: White card with subtle shadow, rounded corners

**E. Popular Kashmir Destinations**
- Section title: "Popular Destinations" with plane icon
- Horizontal scroll on mobile, grid on desktop
- Destination cards (6): Srinagar, Gulmarg, Pahalgam, Sonamarg, Dal Lake, Betaab Valley
- Each card: Background image, destination name, "Starting from ₹X", star rating, discount badge (-20%, -25% etc.)
- "View All Destinations →" link

**F. Top Kashmir Packages**
- Section: "Top Packages This Season"
- Cards (3–4 featured packages): Name, duration (5 Days/4 Nights), original price crossed out, sale price, "View Details →"
- Category badges: "Best Seller", "Hot Deal", "New Offer"
- Left promo tile: "Top Deals This Week — Limited time offers. Don't miss out! → Grab Deals"

**G. Services Overview**
- Section: "Our Services"
- 5 service tiles with icons: Kashmir Packages | Hajj & Umrah | Air Ticketing | Visa Services | Group Tours
- Each tile: Icon, title, one-line description, "Learn More →"

**H. Trust Bar**
- 5 icons in a row: Best Price Guarantee | 24/7 Support | Secure Booking | Easy Cancellation | Certified Agency

**I. Hajj & Umrah Promo Block**
- Full-width or split-card section
- Left: Brief copy about Umrah services, "Guided spiritual journeys since [year]"
- Package tier tags: Economy | Standard | Premium | Family | Ramadan
- CTA: "Explore Hajj & Umrah →"

**J. Testimonials**
- Section: "What Our Travelers Say"
- 3 visible cards with avatar, name, star rating, quote
- Carousel with prev/next arrows
- Right card: "Get Exclusive Offers & Travel Inspiration — Subscribe to our newsletter" with email input

**K. WhatsApp Floating Button**
- Fixed bottom-right: WhatsApp icon → `wa.me/917051693767` with pre-filled message
- "Chat with us"

**L. Footer**
- Logo + tagline
- Column 1: Company — About Us, Careers, Blog, Press, Contact Us
- Column 2: Support — FAQs, Booking Help, Returns, Privacy Policy, Terms
- Column 3: Top Destinations — Srinagar, Gulmarg, Pahalgam, Sonamarg, Betaab Valley
- Column 4: Contact — Phone: 7051693767, Email: jaffariskytravels@gmail.com, Address (if available)
- Social icons: Facebook, Instagram, YouTube, WhatsApp
- Payment icons: Visa, Mastercard, UPI/GPay, PayTM
- Copyright: © 2026 Jaffari Sky Travels. All rights reserved.

---

### 5.2 Kashmir Packages (`/kashmir-packages`)

**Purpose:** Browse and filter all Kashmir tour packages.

#### Sections:

**A. Page Hero**
- Background: Panoramic Kashmir image
- Headline: "Kashmir Tour Packages"
- Breadcrumb: Home > Kashmir Packages

**B. Filter Sidebar / Top Filter Bar**
- Filters: Duration (3N/4D, 5N/6D, 7N/8D, Custom), Package Type (Honeymoon, Family, Group, Adventure, Winter, Pilgrimage Combo), Budget Range (slider), Destinations Covered (checkboxes: Srinagar, Gulmarg, Pahalgam, Sonamarg, Betaab Valley, Doodhpathri, Yusmarg), Sort By (Popular, Price Low-High, Price High-Low, Duration)

**C. Package Cards Grid**
- Cards include: Package name, thumbnail, duration, destinations covered, inclusions summary, per-person price (original + discounted), star rating, "View Details" button, "Enquire on WhatsApp" quick button
- Pagination or "Load More"

#### Package Catalogue (minimum 8 packages):

| # | Name | Duration | Destinations | Approx. Price/person |
|---|------|----------|--------------|----------------------|
| 1 | Classic Kashmir | 4N/5D | Srinagar, Gulmarg, Pahalgam | ₹8,999 |
| 2 | Kashmir Honeymoon Delight | 5N/6D | Srinagar, Gulmarg, Pahalgam, Dal Houseboat | ₹12,499 |
| 3 | Kashmir Family Special | 6N/7D | Srinagar, Sonmarg, Gulmarg, Pahalgam | ₹14,999 |
| 4 | Winter Wonderland Kashmir | 5N/6D | Srinagar, Gulmarg (skiing), Pahalgam | ₹15,999 |
| 5 | Kashmir Valley Explorer | 7N/8D | Srinagar, Sonamarg, Pahalgam, Betaab Valley, Gulmarg, Doodhpathri | ₹18,499 |
| 6 | Grand Kashmir & Ladakh | 9N/10D | Srinagar, Gulmarg, Pahalgam, Sonamarg, Kargil, Leh | ₹28,999 |
| 7 | Vaishno Devi + Kashmir | 8N/9D | Katra, Srinagar, Pahalgam, Gulmarg | ₹19,499 |
| 8 | Kashmir Group Budget Tour | 4N/5D | Srinagar, Gulmarg, Pahalgam | ₹6,999 (min. 10 pax) |

---

### 5.3 Package Detail Page (`/kashmir-packages/[slug]`)

**Purpose:** Full itinerary, inclusions, booking form for one specific package.

#### Sections:

**A. Hero with gallery (lightbox grid)**
- 5+ high-res images, thumbnail strip

**B. Package Overview Bar**
- Duration | Destinations | Group Size | Meals | Accommodation rating

**C. Itinerary (Day-by-Day accordion)**
- Each day: Day number, title (e.g., "Day 1 — Arrival in Srinagar"), activities, meals, overnight location
- Example for Classic Kashmir (4N/5D):
  - Day 1: Arrive Srinagar → Houseboat check-in → Evening Shikara ride on Dal Lake → Dinner
  - Day 2: Gulmarg excursion → Gondola ride (Phase 1 & 2) → Khilanmarg meadow → Return Srinagar
  - Day 3: Drive to Pahalgam (3 hrs) → Betaab Valley → Aru Valley → Chandanwari → Lidder River walk
  - Day 4: Pahalgam local → Optional pony ride → Drive back to Srinagar → Mughal Gardens (Nishat Bagh, Shalimar Bagh, Chashme Shahi) → Hazratbal Shrine
  - Day 5: Breakfast → Check-out → Airport/Railway station drop

**D. Inclusions & Exclusions**
- Inclusions: Hotel accommodation (category), daily breakfast + dinner, all transfers by AC vehicle, airport/station pickup & drop, local sightseeing, Shikara ride, driver/guide allowances, toll & parking
- Exclusions: Air/train fare, personal expenses, gondola/entry tickets, optional activities, lunch, tips

**E. Accommodation Details**
- Hotel name (or "similar"), location, star rating, amenity icons

**F. Pricing Table**
- Per-person on twin sharing (base price)
- Extra bed, single occupancy, child with/without bed options
- Seasonal pricing notes

**G. Enquiry / Booking CTA sidebar (sticky)**
- "Book This Package" form: Name, Mobile, Date of Travel, No. of Travelers, Special Requests → Submit
- OR "Enquire on WhatsApp" → pre-filled message

**H. Similar Packages**
- 3 card carousel

---

### 5.4 Hajj & Umrah (`/hajj-umrah`)

**Purpose:** Overview landing page for the pilgrimage vertical.

#### Sections:

**A. Hero**
- Background: Masjid al-Haram / Kaaba image
- Headline: "Your Sacred Journey Begins Here"
- Subheadline: "Umrah, Hajj & Ziyarat packages from Kashmir — guided with care"
- CTAs: "View Umrah Packages" | "Hajj Pre-Registration"

**B. Stats Bar**
- 5,000+ Pilgrims Served | 98% Satisfaction Rate | 24/7 On-Ground Support | Kashmiri Group Leaders | Visa Included

**C. Services Split**
- Card 1: Umrah Packages → link to `/hajj-umrah/umrah`
- Card 2: Hajj 2027 → link to `/hajj-umrah/hajj`
- Card 3: Iraq/Iran Ziyarat → (optional, or enquiry form)

**D. Why Choose Us for Pilgrimage**
- Kashmiri-speaking group leaders
- Flights from Srinagar / Delhi
- Visa processing handled
- Hotel partnerships near Haram
- 24/7 on-ground support in Makkah & Madinah

**E. Affiliate Partner Hotels (Makkah & Madinah)**
- Logos/cards: Swissôtel Al Maqam, Pullman Zamzam, Hilton Suites, Concorde Al Madinah, Mövenpick Anwar Al Madinah, Manarat Misk
- Each card: Hotel name, distance from Masjid al-Haram, amenity tags

**F. Testimonials (pilgrimage-specific)**

---

### 5.5 Umrah Packages (`/hajj-umrah/umrah`)

**Purpose:** Detailed Umrah package listing with tier comparison.

#### Packages:

| Tier | Duration | Price/Person | Key Inclusions |
|------|----------|--------------|----------------|
| Economy Umrah | 10 Days | ₹65,000 | Economy flights (Srinagar/Delhi), AC transport, Kashmiri group leader, Umrah visa, 3-star hotel |
| Standard Umrah | 15 Days | ₹1,15,000 | Priority check-in flights, dedicated group guide, full Makkah + Madinah Ziyarat, Taif day trip, 4-star hotel |
| Premium Umrah | 20 Days | ₹1,25,000 | Haram-adjacent 5-star hotels, personal guide (1:5 ratio), full board dining, Zamzam water (5L) + Ihram kit |
| Family Umrah | 14 Days | ₹85,000/person | Family seating on flights, family-friendly guide, child-aware pacing, stroller assistance, pediatric first-aid |
| Ramadan Umrah | 10 Days | ₹1,80,000 | Premium hotel near Haram, Taraweeh night guide, dedicated prayer time scheduling, special Ramadan programme |

**Sections on page:**
- Filter tabs: All / Economy / Standard / Premium / Family / Ramadan
- Package cards with inclusions checklist
- "Why Ramadan Umrah is Special" highlight block
- FAQ accordion (What's included? Do you arrange visas? Can Ziyarat be combined? etc.)
- Enquiry CTA

---

### 5.6 Hajj Pre-Registration (`/hajj-umrah/hajj`)

**Purpose:** Collect pre-registrations for Hajj 2027 packages.

#### Sections:

**A. Hero with countdown timer**
- "Hajj 2027 Packages — Pre-Registration Open"
- Countdown to expected Hajj season

**B. Expected Package Preview**
- Hajj Shifting Package (30–40 days): Hajj visa + return flights, hotel shifting (Mecca → Mina → Arafat), dedicated Kashmiri Qafila leaders, full ritual guidance & transport

**C. Why Pre-Register (numbered list)**
- Priority slot allocation (quota is limited)
- Early price lock
- Dedicated guidance from Day 1

**D. Pre-Registration Form**
- Fields: Full Name, Phone/WhatsApp, Email, Preferred Package Tier, Group Size (solo/couple/family/group), Previous Hajj experience, Special requirements
- Submit button
- Confirmation message / WhatsApp follow-up note

**E. Hajj Gallery strip**

**F. FAQ**

---

### 5.7 Air Ticketing (`/ticketing`)

**Purpose:** Communicate ticketing services and generate WhatsApp/form inquiries.

#### Content:

**A. Hero**
- "Book Flights with Confidence"
- Subhead: "Domestic & international air tickets — quick, affordable, reliable"

**B. What We Offer**
- Domestic tickets (all Indian carriers)
- International tickets (Middle East, Southeast Asia, Europe, etc.)
- Group bookings
- Last-minute bookings
- Flight + hotel combos (with Kashmir packages)
- Ticket modifications and cancellation assistance

**C. How It Works (3 Steps)**
1. Share your travel details via WhatsApp or the form below
2. We compare fares and send you the best options within 2 hours
3. Confirm and pay — ticket issued same day

**D. Enquiry Form**
- Fields: From (city), To (city), Travel Date, Return Date (if round trip), No. of Passengers, Travel Class, Contact Number
- Submit / WhatsApp alternative

**E. Popular Routes**
- Srinagar → Delhi, Srinagar → Mumbai, Srinagar → Dubai, Srinagar → Riyadh (Umrah season), Delhi → New York (international sample)

---

### 5.8 Visa Services (`/visa-services`)

**Purpose:** Communicate visa assistance and generate enquiries.

#### Content:

**A. Hero**
- "Visa Made Simple"
- Subhead: "End-to-end visa assistance for tourism, business, pilgrimage & work"

**B. Visa Types Offered**
- Tourist visa (UAE, UK, Schengen, USA, Canada, Australia, etc.)
- Saudi Arabia visa (Umrah / Hajj / Work)
- Business visa
- Student visa
- Work/employment visa
- Transit visa

**C. Our Visa Process**
1. Submit documents (checklist provided)
2. We verify and lodge the application
3. Track status — regular updates from our team
4. Receive visa / passport

**D. Document Checklist (per major country)**
- Downloadable PDF checklist (UAE, Saudi, Schengen, UK)

**E. Enquiry Form**
- Country, Visa Type, Travel Date, Passport Holder Name, Contact Number, Upload Documents (optional)

**F. FAQ**
- How long does processing take?
- What if my visa is rejected?
- Do you handle Umrah visas separately?

---

### 5.9 About Us (`/about`)

**Purpose:** Full brand story, trust, team, credentials, and culture.

#### Sections:

**A. Hero**
- Background: Kashmir mountains or company photo
- "About Jaffari Sky Travels"
- Tagline: "Kashmir's trusted travel partner — for journeys that matter."

**B. Our Story**
- Founding story of Adil Hussain Sofi and Jaffari Sky Travels
- What drives the company — a love for Kashmir, service to pilgrims
- Growth timeline (year founded, milestones)
- [Placeholder text until client provides: "Founded by Adil Hussain Sofi, Jaffari Sky Travels was born from a passion for sharing Kashmir's unmatched beauty with travelers from across India and the world. From our base in Kashmir, we have built a reputation for honest pricing, attentive service, and deeply personal travel experiences."]

**C. What We Do (Services Grid)**
- Kashmir Tours | Hajj & Umrah | Air Ticketing | Visa Services
- Each with icon and 2-line description

**D. Why Choose Us**
- Local Kashmir expertise
- Transparent pricing — no hidden charges
- Kashmiri-speaking group leaders for Hajj/Umrah
- 24/7 WhatsApp support
- All-inclusive packages (hotels, transport, guides)
- IATA-affiliated / registered agency (if applicable)

**E. Stats / Numbers**
- X+ Happy Travelers | X+ Kashmir Packages | X+ Umrah Pilgrims Guided | Years in Business

**F. Meet the Team**
- Founder card: Adil Hussain Sofi — photo (placeholder), title, brief bio
- Additional team members if provided

**G. Certifications & Affiliations**
- Ministry of Tourism registration
- IATA membership (if applicable)
- Any other trade body logos

**H. Our Values**
- Trust | Transparency | Personalisation | 24/7 Care | Community

**I. Office / Contact Details**
- Address, phone, email, map embed (Google Maps)
- Office hours

**J. Social Proof**
- 3–4 testimonials specific to the brand

---

### 5.10 Gallery (`/gallery`)

**Purpose:** Photo and video gallery to build trust and inspire bookings.

#### Features:
- Category filters: Kashmir | Hajj & Umrah | Ziyarat | Group Tours | Happy Travelers
- Masonry grid layout (Pinterest-style)
- Lightbox on click
- Video thumbnails for video testimonials (YouTube embed or direct video)
- "Submit your photos" CTA for user-generated content

---

### 5.11 Contact Us (`/contact`)

**Purpose:** Inquiry and booking initiation.

#### Sections:

**A. Hero**
- "Get in Touch"

**B. Contact Cards**
- Phone: 7051693767
- Email: jaffariskytravels@gmail.com
- WhatsApp: Direct link
- Office address (if available)

**C. Contact Form**
- Fields: Name, Phone, Email, Service Interested In (dropdown), Message → Submit
- Success message with expected response time ("We'll get back to you within 2 hours")

**D. Google Maps Embed**

**E. FAQ Quick Links**

---

## 6. Design System & Visual Identity

### 6.1 Design Direction
Inspired by the Travelora reference image but adapted for Jaffari Sky Travels' dual identity: adventure travel (Kashmir) and spiritual pilgrimage (Hajj/Umrah). The design should feel premium yet accessible — warm, trustworthy, slightly editorial.

**Tone:** Elevated travel magazine meets community trust. Clean layouts, bold photography, warm gold accents.

### 6.2 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary Blue (nav, CTAs, headers) | Deep Kashmir Blue | `#1A3A6B` |
| Accent Gold (badges, highlights, Hajj sections) | Warm Gold | `#C89B3C` |
| Secondary Teal (service icons, hover) | Valley Teal | `#2A7F7F` |
| Background | Off-White | `#F8F7F2` |
| Card Background | Pure White | `#FFFFFF` |
| Text Primary | Deep Charcoal | `#1C1C1E` |
| Text Secondary | Slate | `#6B7280` |
| Success / Trust | Forest Green | `#16A34A` |
| Badge Red (Hot Deal) | Kashmir Crimson | `#DC2626` |

### 6.3 Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Hero Headlines | Playfair Display | 700, 800 |
| Section Headings | DM Serif Display | 600 |
| Body & UI | Plus Jakarta Sans | 400, 500 |
| Price / Numbers | Space Grotesk | 600, 700 |
| Accent (Hajj/Umrah sections) | Amiri (Arabic-inspired) | 400 |

### 6.4 Key UI Components

**Package Card:**
- Rounded corners (16px), subtle drop shadow
- Top-left: Discount badge (colored pill)
- Top-right: Category badge (Best Seller / Hot Deal / New)
- Bottom overlay gradient with destination name + "Starting from ₹X"
- Star rating row + hover reveals quick CTA

**Search Widget:**
- White card with 8px bottom shadow
- Tab row with underline indicator
- Dropdown fields with icon prefixes
- Bold "Search Now" blue button

**Testimonial Card:**
- Soft background, quotation mark icon top-left
- Avatar + name + star rating
- Constrained width for readability

**CTA Buttons:**
- Primary: Blue fill, white text, 8px radius
- Secondary: Blue outline, blue text
- WhatsApp: Green fill with WhatsApp icon
- All buttons: 8px radius, medium font weight, slight hover scale

### 6.5 Imagery Guidelines
- Use high-resolution Kashmir landscape photography: Dal Lake, Gulmarg snow, Pahalgam meadows, Betaab Valley, houseboats
- Hajj/Umrah sections: Kaaba with crowd, Masjid al-Nabawi, pilgrims in ihram
- People photography: real traveler moments, families, couples, groups — diverse but relatable
- No stock photo clichés; prefer cinematic, wide-angle, golden-hour shots
- Lazy load all images; use WebP format

---

## 7. Tech Stack

### 7.1 Recommended Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| **Frontend Framework** | Next.js 14 (App Router) | SSR/SSG for SEO, fast page loads, built-in image optimization |
| **Styling** | Tailwind CSS + custom CSS variables | Rapid development, consistent design tokens, responsive by default |
| **Animation** | Framer Motion | Smooth page transitions, scroll-triggered reveals, hero animations |
| **CMS (Content)** | Sanity.io | Headless CMS for package management, blog, gallery — client can update packages without dev help |
| **Database (Forms/Enquiries)** | Supabase (PostgreSQL) | Store form submissions, newsletter signups, Hajj pre-registrations |
| **Email** | Resend or Nodemailer | Auto-send confirmation email on form submission |
| **WhatsApp Integration** | WhatsApp Business API or wa.me links | Instant inquiry routing |
| **Maps** | Google Maps Embed API | Office location, destination maps |
| **Image CDN** | Cloudinary | Fast, optimized image delivery with transformations |
| **Search** | Algolia (Phase 2) or local filter | Package search + filter |
| **Analytics** | Google Analytics 4 + Google Search Console | Traffic, SEO, conversion tracking |
| **Deployment** | Vercel | Serverless, automatic CI/CD, global CDN |
| **Domain & Hosting** | Custom domain (e.g., jaffariskytravels.com) + Vercel |  |
| **Form Handling** | Supabase + email trigger OR Formspree (simple) | Reliable form submissions with email alerts |
| **SEO** | Next.js Metadata API + sitemap.xml + structured data (JSON-LD) | Google ranking for Kashmir tour and Hajj search terms |

### 7.2 Optional Enhancements

| Feature | Tech |
|---------|------|
| Live chat widget | Tidio or Crisp (free tier) |
| Customer testimonial video embeds | Cloudinary video or YouTube embeds |
| Package comparison tool | Local React state |
| Seasonal banner/announcements | Sanity CMS singleton document |
| Newsletter | Mailchimp integration or ConvertKit |
| Payment gateway (for deposits) | Razorpay (Phase 2) |
| Multi-language (Urdu/Kashmiri) | next-intl (Phase 2) |
| Blog (SEO content) | Sanity + MDX (Phase 2) |

---

## 8. Features & Functional Requirements

### 8.1 Core Features (Phase 1)

| Feature | Description |
|---------|-------------|
| Responsive Design | Mobile-first. Fully functional on iOS/Android/desktop browsers |
| Package Listing & Filter | Filter Kashmir packages by duration, type, budget, destinations |
| Package Detail Pages | Full itinerary, inclusions, photos, booking form, WhatsApp CTA |
| Hajj/Umrah Tier Comparison | Side-by-side tier cards with inclusions checklist |
| Hajj Pre-Registration Form | Form → Supabase → email alert to admin |
| Contact / Enquiry Forms | All pages have relevant form → Supabase + email alert |
| WhatsApp Floating Button | Persistent on all pages, pre-filled message |
| SEO Metadata | Per-page title, description, Open Graph, JSON-LD schema |
| Google Maps Embed | Contact and About pages |
| Gallery (Images) | Filtered masonry grid with lightbox |
| Cookie/Privacy Banner | GDPR-lite compliance |
| 404 Page | Custom branded not-found page |

### 8.2 SEO Requirements

**Target keywords to optimize for:**
- "Kashmir tour packages from Srinagar"
- "Kashmir honeymoon packages 2026"
- "Umrah packages from Kashmir"
- "Hajj packages from Srinagar 2027"
- "Air ticketing Kashmir"
- "Visa services Srinagar"
- "Jaffari Sky Travels"

**Technical SEO:**
- sitemap.xml auto-generated
- robots.txt configured
- Canonical URLs on all pages
- Breadcrumb schema (JSON-LD)
- TourPackage schema on package detail pages
- Organization schema on About page
- LocalBusiness schema with phone and address
- Page load time < 3s on mobile (Core Web Vitals passing)

---

## 9. Performance & Accessibility

| Requirement | Standard |
|------------|---------|
| Lighthouse Performance | > 85 (mobile) |
| Lighthouse Accessibility | > 90 |
| WCAG | 2.1 AA minimum |
| Images | WebP with lazy loading, alt text on all |
| Fonts | Preloaded, display=swap |
| First Contentful Paint | < 2s |
| Keyboard Navigation | Full keyboard accessibility |
| Screen Reader Support | Semantic HTML, ARIA labels |

---

## 10. Content Requirements (Client to Provide)

The following content must be supplied by Adil Hussain Sofi before or during development:

| Item | Notes |
|------|-------|
| Company founding year | For About Us story |
| Office address | For footer, Contact, About |
| Logo (or design brief) | Vector preferred |
| Profile photo (Adil Hussain Sofi) | For About/Team section |
| Package photos (Kashmir) | 5+ per package; high-res |
| Hajj/Umrah/Ziyarat photos | Gallery content |
| Team member details | Names, roles, optional photos |
| Exact package pricing | Seasonal or fixed |
| Certifications / Registration numbers | IATA, Ministry of Tourism, etc. |
| Social media handles | Facebook, Instagram, YouTube |
| Testimonials | 8–10 real client quotes with names |
| Bank/payment details | For Razorpay setup in Phase 2 |

---

## 11. Phases & Delivery

### Phase 1 (Core Launch)
- All pages above
- CMS setup (Sanity) with basic schema for packages
- Form → email pipeline (Supabase + Resend)
- Mobile-responsive build
- SEO metadata
- WhatsApp integration
- Deployment on Vercel

### Phase 2 (Growth)
- Blog with SEO articles
- Package comparison tool
- Razorpay deposit payment
- Multi-language (Urdu)
- Customer reviews/ratings
- Advanced analytics dashboard
- Ziyarat (Iraq/Iran) dedicated page

---

## 12. Design Instructions for Developer / Designer

The following points must guide the visual implementation:

1. **Hero sections** use full-bleed photography with a dark gradient overlay (bottom-up or center radial) so text is always legible. Never use a flat color hero.

2. **Kashmir sections** use warm, earthy tones: greens, blues, golden light. Think valley sunset, houseboat dusk.

3. **Hajj/Umrah sections** shift palette to deep green and gold — reverence, spirituality, warmth. Use Amiri or similar for any Arabic/Urdu text.

4. **Cards** have hover lift (translateY -4px, shadow deepen). No border on hover — shadow only.

5. **The navigation** is transparent on the home page hero, transitions to white with shadow on scroll.

6. **WhatsApp button** pulses gently (CSS pulse animation) to draw attention without being annoying.

7. **Mobile nav** is a full-screen slide-in overlay, not a dropdown — this keeps it clean on small screens.

8. **Package cards** have a "From ₹X" pricing pill anchored to the bottom-left of the image, not in a separate text row — like the Travelora reference.

9. **The search widget** uses colored tab underlines (not filled backgrounds) for the active tab — feels cleaner.

10. **Testimonials** must show real names. If avatars are unavailable, use initials in a colored circle (auto-generated from name hash).

11. **Fonts must be imported from Google Fonts.** No system fonts visible to end users.

12. **All CTAs** include an arrow icon → to signal action. "Book Now →", "View Packages →", "Enquire Now →".

13. **The footer** background is Deep Kashmir Blue (`#1A3A6B`), text white and light-blue for links.

14. **Discount badges** use the crimson `#DC2626` on a white background (not full-color badge backgrounds) to keep cards clean.

15. **Imagery loading:** All images use `loading="lazy"` and `sizes` attributes. Hero uses `priority` flag in Next.js Image component.

---

## 13. Open Questions for Client

Before development begins, confirm the following with Adil Hussain Sofi:

1. **Office address** — exact address for footer and Google Maps
2. **Year founded** — for the "X years of experience" copy
3. **Exact package prices** — or should the site use "Starting from" ranges with "Call for quote"?
4. **Do you want online payment** (deposit) in Phase 1, or enquiry-only (WhatsApp + form)?
5. **Do you have a logo** already, or should one be designed?
6. **Which languages** do you want the site in? English only, or also Urdu?
7. **Do you want a blog section** from day one, or Phase 2?
8. **Are the Ziyarat (Iraq/Iran) packages active**, or just Hajj/Umrah?
9. **Do you have a registered business name / GST number** to display?
10. **Social media accounts** — handles and which platforms are active?

---

*This PRD is version 1.0. Updates will be versioned as new decisions are confirmed.*

*Document prepared for Jaffari Sky Travels | jaffariskytravels@gmail.com | +91 7051693767*
