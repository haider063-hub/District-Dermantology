export const SITE = {
  name: "District Dermatology",
  phoneDisplay: "703-992-9211",
  phoneHref: "tel:7039929211",
  onlinePayUrl:
    "https://checkout.square.site/merchant/ML51ZV41YVSYF/checkout/AWGOAYXVMANSEXC7EACVHLZX",
  rating: "4.94/5",
  reviewCount: 264,
  tagline: "Dermatologists & Mohs Surgeons in McLean & Vienna, VA",
  social: {
    instagram: "https://www.instagram.com/districtdermatology/",
    twitter: "https://twitter.com/DistrictDerm",
    facebook: "https://www.facebook.com/districtderm/",
  },
} as const;

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/physicians", label: "Physicians" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/insurance-and-billing", label: "Insurance" },
] as const;

/** Featured services shown in the header dropdown (matches live site order) */
export const NAV_SERVICE_LINKS = [
  { href: "/services/acne", label: "Acne" },
  { href: "/services/hydrafacial", label: "HydraFacial" },
  { href: "/services/vbeam-prima", label: "VBeam Prima" },
  { href: "/services/hair-loss-treatment", label: "Hair Loss Treatment" },
  { href: "/services/basal-cell-carcinoma", label: "Basal Cell Carcinoma" },
  { href: "/services/melanoma", label: "Melanoma" },
  { href: "/services/botox", label: "Botox" },
  { href: "/services/skin-cancer", label: "Skin Cancer" },
] as const;

export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    slug: "al-damavandy",
    name: "Al Damavandy",
    credentials: "MD, FAAD, FACMS",
    title: "Board Certified Dermatologist & Mohs Surgeon",
    image: "/images/doctors/damavandy.png",
  },
  {
    slug: "sanna-ronkainen",
    name: "Sanna Ronkainen",
    credentials: "MD, FAAD",
    title: "Board Certified Dermatologist",
    image: "/images/doctors/ronkainen.png",
  },
  {
    slug: "monique-chheda",
    name: "Monique Chheda",
    credentials: "MD, FAAD",
    title: "Board Certified Dermatologist",
    image: "/images/doctors/chheda.png",
  },
  {
    slug: "olivia-schenck",
    name: "Olivia Schenck",
    credentials: "MD, FAAD",
    title: "Board Certified Dermatologist",
    image: "/images/doctors/schenck.png",
  },
  {
    slug: "karlyn-pollack",
    name: "Karlyn Pollack",
    credentials: "MD, FAAD",
    title: "Board Certified Dermatologist",
    image: "/images/doctors/pollack.png",
  },
  {
    slug: "melanie-tawfik",
    name: "Melanie Tawfik",
    credentials: "MD, FAAD",
    title: "Board Certified Dermatologist",
    image: "/images/doctors/tawfik.png",
  },
];

export type Service = {
  slug: string;
  name: string;
  image: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "acne",
    name: "Acne",
    image: "/images/services/acne.jpg",
    summary:
      "Personalized medical and procedural care for acne across all ages, including scarring prevention.",
  },
  {
    slug: "basal-cell-carcinoma",
    name: "Basal Cell Carcinoma",
    image: "/images/services/basal-cell-carcinoma.jpg",
    summary:
      "Expert diagnosis and treatment of the most common form of skin cancer, including surgical options.",
  },
  {
    slug: "melanoma",
    name: "Melanoma",
    image: "/images/services/melanoma.jpg",
    summary:
      "Thorough skin exams and advanced care pathways for melanoma detection and management.",
  },
  {
    slug: "botox",
    name: "Botox",
    image: "/images/services/botox.jpg",
    summary:
      "Precise Botox® injections to soften dynamic lines while preserving a natural expression.",
  },
  {
    slug: "skin-cancer",
    name: "Skin Cancer",
    image: "/images/services/skin-cancer.jpg",
    summary:
      "Education, routine screenings, and comprehensive treatment for all major skin cancers.",
  },
  {
    slug: "eczema",
    name: "Eczema",
    image: "/images/services/eczema.jpg",
    summary:
      "Relief-focused care plans for eczema and atopic dermatitis tailored to your skin barrier.",
  },
  {
    slug: "squamous-cell-carcinoma",
    name: "Squamous Cell Carcinoma",
    image: "/images/services/squamous-cell-carcinoma.jpg",
    summary:
      "Prompt evaluation and definitive treatment for squamous cell carcinoma.",
  },
  {
    slug: "acne-scars",
    name: "Acne Scars",
    image: "/images/services/acne-scars.jpg",
    summary:
      "Laser and procedural options designed to improve texture from acne scarring.",
  },
  {
    slug: "mohs-surgery",
    name: "Mohs Surgery",
    image: "/images/services/mohs-surgery.jpg",
    summary:
      "Fellowship-trained Mohs micrographic surgery for precise skin cancer removal.",
  },
  {
    slug: "mole-removal",
    name: "Mole Removal",
    image: "/images/services/mole-removal.jpg",
    summary:
      "Evaluation and removal of concerning or unwanted moles with careful technique.",
  },
  {
    slug: "chemical-peel",
    name: "Chemical Peel",
    image: "/images/services/chemical-peel.jpg",
    summary:
      "Medical-grade peels to refine tone, texture, and sun-related skin changes.",
  },
  {
    slug: "cyst",
    name: "Cyst",
    image: "/images/services/cyst.jpg",
    summary:
      "Comfortable, in-office evaluation and removal of cysts when indicated.",
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    image: "/images/services/dermal-fillers.png",
    summary:
      "Strategic filler treatments to restore volume and refine facial contours.",
  },
  {
    slug: "rosacea",
    name: "Rosacea",
    image: "/images/services/rosacea.jpg",
    summary:
      "Medical therapy and laser options, including VBeam, for redness and flush.",
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    image: "/images/services/skin-rejuvenation.jpg",
    summary:
      "Advanced laser therapies to smooth tone and texture for healthier-looking skin.",
  },
  {
    slug: "wrinkle-treatments",
    name: "Wrinkle Treatments",
    image: "/images/services/wrinkle-treatments.jpg",
    summary:
      "A full menu of injectables and rejuvenation treatments for softer lines.",
  },
  {
    slug: "hair-loss-treatment",
    name: "Hair Loss Treatment",
    image: "/images/services/hair-loss-treatment.jpg",
    summary:
      "Evaluation and treatment plans for thinning hair and alopecia concerns.",
  },
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    image: "/images/services/hydrafacial.jpg",
    summary:
      "Deep cleansing, extraction, and hydration for an immediate glow—call to book.",
  },
  {
    slug: "vbeam-prima",
    name: "VBeam Prima",
    image: "/images/services/vbeam-prima.jpg",
    summary:
      "Pulsed-dye laser therapy for vascular concerns, redness, and rosacea.",
  },
];

export type Testimonial = {
  quote: string;
  attribution: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "I have never interacted with a doctor that was so informative.",
    attribution: "Caitlyn C.",
    source: "Healthgrades",
  },
  {
    quote:
      "Can't say enough about the care I got from Dr. Damavandy. My surgery was painless.",
    attribution: "Verified Patient",
    source: "Vitals",
  },
  {
    quote:
      "Dr. Damavandy is really great. He was a total professional but really human too.",
    attribution: "Verified Patient",
    source: "Vitals",
  },
  {
    quote:
      "This is the best doctor I've ever seen! He was also very gentle during a small surgery that I had. I wish all doctors were like Dr. Damavandy—I'll follow him anywhere!",
    attribution: "Verified Patient",
    source: "Patient Review",
  },
];

export type Location = {
  slug: string;
  city: string;
  addressLines: string[];
  addressDisplay: string;
  mapQuery: string;
  yelpUrl?: string;
  hours: { day: string; hours: string }[];
  path: string;
};

export const locations: Location[] = [
  {
    slug: "mclean",
    city: "McLean, VA",
    addressLines: ["6711 Whittier Ave Suite 101", "McLean, VA 22101"],
    addressDisplay: "6711 Whittier Ave Suite 101, McLean, VA 22101",
    mapQuery: "6711+Whittier+Ave+Suite+101,+McLean,+VA+22101",
    yelpUrl: "https://www.yelp.com/biz/district-dermatology-mclean-2",
    path: "/location/va/mclean",
    hours: [
      { day: "Monday", hours: "8:00 am – 4:00 pm" },
      { day: "Tuesday", hours: "8:00 am – 4:00 pm" },
      { day: "Wednesday", hours: "8:00 am – 4:00 pm" },
      { day: "Thursday", hours: "8:00 am – 4:00 pm" },
      { day: "Friday", hours: "8:00 am – 4:00 pm" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  {
    slug: "vienna",
    city: "Vienna, VA",
    addressLines: ["1951 Kidwell Drive Suite 110", "Vienna, VA 22182"],
    addressDisplay: "1951 Kidwell Drive Suite 110, Vienna, VA 22182",
    mapQuery: "1951+Kidwell+Drive+Suite+110,+Vienna,+VA+22182",
    path: "/location/va/vienna",
    hours: [
      { day: "Monday", hours: "8:00 am – 4:00 pm" },
      { day: "Tuesday", hours: "8:00 am – 4:00 pm" },
      { day: "Wednesday", hours: "8:00 am – 4:00 pm" },
      { day: "Thursday", hours: "8:00 am – 4:00 pm" },
      { day: "Friday", hours: "8:00 am – 4:00 pm" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
];

export const aboutParagraphs = [
  "District Dermatology in McLean, Virginia, is a premier medical, surgical, and cosmetic dermatology practice founded by Dr. Al Damavandy that serves patients of all ages from communities across the greater Washington D.C. metropolitan area.",
  "Led by board-certified dermatologist, Dr. Al Damavandy, the practice strives to provide the best treatment solutions available to help improve the health and appearance of your skin.",
  "District Dermatology offers a complete menu of dermatological services, including skin cancer education and routine screenings, Mohs surgery, comprehensive care for common conditions such as acne, eczema, rosacea and psoriasis, Botox® injections, and advanced laser therapies for cosmetic skin rejuvenation.",
  "When you come to District Dermatology, you can expect to experience convenient, personal care in a warm and welcoming environment. Ensuring a positive experience for every patient who walks in the door is their top priority.",
  "Whether you have questions about an irregular mole or you'd like to smooth and soften the tone and texture of your skin, the team at District Dermatology can help. Their well-educated and attentive staff will support you through your entire experience, from easy scheduling to consistent follow-up.",
];

export const insuranceInNetwork = [
  "Medicare",
] as const;

export const insurancePpoCarriers = [
  "Aetna",
  "Cigna",
  "Anthem",
  "Carefirst and other Blue Cross Blue Shield plans",
  "United Healthcare",
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Do I need a referral to be seen?",
    answer:
      "Most patients can book directly with District Dermatology. Some insurance plans may require a referral—our team can help you confirm coverage when you call. Bring your insurance card and a list of current medications to your first visit.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Your visit typically includes a review of your concerns, a skin exam, and a clear treatment plan. Whether you are here for acne, a mole check, Mohs surgery consultation, or cosmetic care, our board-certified dermatologists take time to explain options and next steps.",
  },
  {
    question: "Do you treat both medical and cosmetic concerns?",
    answer:
      "Yes. We provide full medical and surgical dermatology—including skin cancer screenings and Mohs surgery—alongside cosmetic treatments such as Botox®, fillers, lasers, chemical peels, and HydraFacials.",
  },
  {
    question: "Which insurance plans do you accept?",
    answer:
      "We are in-network with Medicare and PPO plans from carriers including Aetna, Cigna, Anthem, Carefirst and other Blue Cross Blue Shield plans, and United Healthcare. For other plans we offer a reasonable self-pay fee schedule. Visit Insurance & Billing or call us for details.",
  },
  {
    question: "How do I book an appointment at McLean or Vienna?",
    answer:
      "Call 703-992-9211 to book at either location, or send a message through our Contact page. Office hours are Monday–Friday, 8:00 am–4:00 pm. Our staff will help you choose the location and physician that fit your needs.",
  },
];
