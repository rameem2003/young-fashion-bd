export type CategoryId = "men" | "ladies" | "kids" | "home";

export interface Category {
  id: CategoryId;
  label: string;
  cover: string;
  blurb: string;
  subs: string[];
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: CategoryId;
  tag: string;
  img: string;
}

export interface Service {
  no: string;
  title: string;
  text: string;
}

export interface Capability {
  id: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  img: string;
  alt: string;
}

export interface ProcessStep {
  no: string;
  title: string;
  text: string;
}

export interface Certification {
  name: string;
  note: string;
  logo: string;
}

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  address: "Flat # 5A, House # 20, Road # 5, Sector # 6, Uttara, Dhaka-1230, Bangladesh",
  phone: "+8801726925035",
  phoneHref: "tel:+8801726925035",
  email: "lutfor@youngfashionbd.net",
};

export const CATEGORIES: Category[] = [
  {
    id: "men",
    label: "Men's",
    cover: "/images/mens-4.jpg",
    blurb: "Denim, knit, sweater and woven staples developed for European and North American buyers.",
    subs: ["Denim", "Knit", "Sweater", "Woven"],
  },
  {
    id: "ladies",
    label: "Ladies",
    cover: "/images/ladies-4.jpg",
    blurb: "Dresses, knitwear and woven separates — developed to your fit, fabric and wash.",
    subs: ["Dress", "Knit", "Woven", "Denim"],
  },
  {
    id: "kids",
    label: "Kid's",
    cover: "/images/kids-7.jpg",
    blurb: "Comfortable outerwear, knitwear and denim built to international childrenswear standards.",
    subs: ["Outerwear", "Knit", "Dress", "Denim"],
  },
  {
    id: "home",
    label: "Home Textile",
    cover: "/images/home-1.jpg",
    blurb: "Bed linen, kitchen and bath collections produced alongside our apparel programmes.",
    subs: ["Bedding", "Kitchen", "Bath"],
  },
];

export const CATEGORY_LABEL: Record<CategoryId, string> = {
  men: "Men's",
  ladies: "Ladies",
  kids: "Kid's",
  home: "Home Textile",
};

export const PRODUCTS: Product[] = [
  { id: "m1", code: "YFB-M01", name: "Distressed Denim Shorts", category: "men", tag: "Denim", img: "/images/mens-1.jpg" },
  { id: "m2", code: "YFB-M02", name: "Striped Rugby Polo", category: "men", tag: "Knit", img: "/images/mens-2.jpg" },
  { id: "m3", code: "YFB-M03", name: "Cable-Knit Mock Neck", category: "men", tag: "Sweater", img: "/images/mens-3.jpg" },
  { id: "m4", code: "YFB-M04", name: "Chambray Casual Shirt", category: "men", tag: "Woven", img: "/images/mens-4.jpg" },
  { id: "m5", code: "YFB-M05", name: "Textured Crew Sweater", category: "men", tag: "Sweater", img: "/images/mens-5.jpg" },
  { id: "m6", code: "YFB-M06", name: "Paint-Splash Skinny Jeans", category: "men", tag: "Denim", img: "/images/mens-6.jpg" },
  { id: "m7", code: "YFB-M07", name: "Ripped Skinny Jeans", category: "men", tag: "Denim", img: "/images/mens-7.jpg" },
  { id: "m8", code: "YFB-M08", name: "Denim Hooded Jacket", category: "men", tag: "Denim", img: "/images/mens-8.jpg" },

  { id: "l1", code: "YFB-L01", name: "Boucle Knit Cardigan", category: "ladies", tag: "Knit", img: "/images/ladies-1.jpg" },
  { id: "l2", code: "YFB-L02", name: "Tie-Front Blouse", category: "ladies", tag: "Woven", img: "/images/ladies-2.jpg" },
  { id: "l3", code: "YFB-L03", name: "Stretch Skinny Jeans", category: "ladies", tag: "Denim", img: "/images/ladies-3.jpg" },
  { id: "l4", code: "YFB-L04", name: "Floral Midi Dress", category: "ladies", tag: "Dress", img: "/images/ladies-4.jpg" },
  { id: "l5", code: "YFB-L05", name: "Striped Shirt Dress", category: "ladies", tag: "Dress", img: "/images/ladies-5.jpg" },
  { id: "l6", code: "YFB-L06", name: "Peplum Blouse", category: "ladies", tag: "Woven", img: "/images/ladies-6.jpg" },
  { id: "l7", code: "YFB-L07", name: "V-Neck Cardigan", category: "ladies", tag: "Knit", img: "/images/ladies-7.jpg" },
  { id: "l8", code: "YFB-L08", name: "Wide-Leg Trousers", category: "ladies", tag: "Woven", img: "/images/ladies-8.jpg" },

  { id: "k1", code: "YFB-K01", name: "Boys Chambray Shirt", category: "kids", tag: "Woven", img: "/images/kids-1.jpg" },
  { id: "k2", code: "YFB-K02", name: "Colorblock Graphic Polo", category: "kids", tag: "Knit", img: "/images/kids-2.jpg" },
  { id: "k3", code: "YFB-K03", name: "Quilted Puffer Jacket", category: "kids", tag: "Outerwear", img: "/images/kids-3.jpg" },
  { id: "k4", code: "YFB-K04", name: "Hooded Softshell Jacket", category: "kids", tag: "Outerwear", img: "/images/kids-4.jpg" },
  { id: "k5", code: "YFB-K05", name: "Fur-Hood Winter Coat", category: "kids", tag: "Outerwear", img: "/images/kids-5.jpg" },
  { id: "k6", code: "YFB-K06", name: "Slim Fit Jeans", category: "kids", tag: "Denim", img: "/images/kids-6.jpg" },
  { id: "k7", code: "YFB-K07", name: "Rainbow Flutter Dress", category: "kids", tag: "Dress", img: "/images/kids-7.jpg" },
  { id: "k8", code: "YFB-K08", name: "Cable Knit Cardigan", category: "kids", tag: "Knit", img: "/images/kids-8.jpg" },

  { id: "h1", code: "YFB-H01", name: "Printed Bed Linen Set", category: "home", tag: "Bedding", img: "/images/home-1.jpg" },
  { id: "h2", code: "YFB-H02", name: "Kitchen and Dining Set", category: "home", tag: "Kitchen", img: "/images/home-2.jpg" },
  { id: "h3", code: "YFB-H03", name: "Floral Comforter Set", category: "home", tag: "Bedding", img: "/images/home-3.jpg" },
  { id: "h4", code: "YFB-H04", name: "Colour Towel Set", category: "home", tag: "Bath", img: "/images/home-4.jpg" },
];

export const STATS = [
  { value: 55, suffix: "+", label: "Associated factories" },
  { value: 6, suffix: "", label: "Own manufacturing units" },
  { value: 4, suffix: "", label: "Product divisions" },
  { value: 100, suffix: "%", label: "Export oriented" },
];

export const PROMISES = [
  "Best quality standards",
  "100% satisfaction guarantee",
  "Documented quality control system",
  "Commitment to customers",
  "Highly professional team",
  "Global fabric sourcing",
];

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Sourcing",
    text: "Associated with knit, woven and sweater factories plus every supporting unit — textile, accessories, print and embroidery — with a strong merchandising sense and a skilled quality control department.",
  },
  {
    no: "02",
    title: "Product Development",
    text: "In-house development teams build new products from local and imported materials, staying relentlessly updated with current fashion trends and buyer specifications.",
  },
  {
    no: "03",
    title: "Time and Action Plan",
    text: "Orders are closely monitored from sampling to shipment on a pro-active T&A plan, with daily status exchange so you always know where your order stands.",
  },
  {
    no: "04",
    title: "Production and Quality Control",
    text: "Each buyer receives a dedicated production and QC team. Workmanship plus rubbing, shrinkage and colour fastness tests are constantly checked, recorded and analysed.",
  },
  {
    no: "05",
    title: "Merchandising",
    text: "Every team is headed and monitored by a manager who routinely updates you on order progress — from the day of order placement until the date of shipment.",
  },
  {
    no: "06",
    title: "Inspections",
    text: "Our technical team carries out in-line and final inspection to international standards, plus buyer-nominated third-party inspection whenever required.",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "merchandising",
    label: "Merchandising",
    title: "One dedicated team per buyer",
    body: "Each team, headed and monitored by a manager, routinely and systematically updates the customer on the progress and status of the order. Daily communication and exchange of information is maintained with the customer from order placement until shipment.",
    points: [
      "Separate merchandising desk for each product range",
      "Daily order updates and sample follow-up",
      "Fabric, trims and accessory booking under one roof",
    ],
    img: "/images/merch-1.jpg",
    alt: "Fabric rolls and sample management in a garment showroom",
  },
  {
    id: "compliance",
    label: "Social Compliance",
    title: "Compliance is checked, not assumed",
    body: "Young Fashion BD Sourcing gives special emphasis on social compliance — most of our factories are BSCI, WRAP, SEDEX and STR approved. Our own compliance and audit team makes random checks on factories regarding all social compliance parameters.",
    points: [
      "Audited, buyer-approved factory base",
      "In-house compliance and audit team",
      "Regular unannounced factory checks",
    ],
    img: "/images/merch-2.jpg",
    alt: "Seamstress working at a sewing machine in a textile workshop",
  },
  {
    id: "inspections",
    label: "Inspections",
    title: "In-line and final, every order",
    body: "Our own technical team carries out in-line and final inspection of our products as per international standards. Third-party or buyer-nominated inspection — Bureau Veritas, SGS, ITS, AQM, Hohenstein — can be arranged as per customer requirements.",
    points: [
      "In-line, end-line and final AQL inspection",
      "Third-party inspection on buyer nomination",
      "Rubbing, shrinkage and colour fastness testing",
    ],
    img: "/images/qc-1.jpg",
    alt: "Quality control check for defects on a garment production line",
  },
];

export const PROCESS: ProcessStep[] = [
  { no: "01", title: "Enquiry and Development", text: "Tech pack review, fabric and trim sourcing, cost negotiation and development of counter samples." },
  { no: "02", title: "Sampling and Approval", text: "Fit, size-set and bulk samples developed in-line with your labelling and packaging requirements." },
  { no: "03", title: "Bulk Production", text: "Order placed with the right factory, monitored against a time & action plan until finishing." },
  { no: "04", title: "Inspection", text: "In-line and final AQL inspection by our team, plus third-party inspection if nominated." },
  { no: "05", title: "Shipment", text: "Documentation, consolidation and logistics assistance through to hand-over at port." },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "amfori BSCI", note: "Social compliance auditing", logo: "/images/cert-bsci.png" },
  { name: "WRAP", note: "Responsible apparel production", logo: "/images/cert-wrap.png" },
  { name: "SEDEX / SMETA", note: "Ethical trade audits", logo: "/images/cert-sedex.png" },
  { name: "ISO 9001:2015", note: "Quality management system", logo: "/images/cert-iso9001.jpg" },
  { name: "ISO 14001", note: "Environmental management", logo: "/images/cert-iso14001.jpg" },
  { name: "OHSAS 18001", note: "Occupational health & safety", logo: "/images/cert-ohsas.png" },
  { name: "Organic 100", note: "Textile Exchange content standard", logo: "/images/cert-gots.png" },
  { name: "OEKO-TEX 100", note: "Tested for harmful substances", logo: "/images/cert-organic.png" },
];

export const BUYERS = [
  { src: "/images/buyer-1.jpg", alt: "Valued buyer logo" },
  { src: "/images/buyer-2.png", alt: "Valued buyer logo" },
  { src: "/images/buyer-3.png", alt: "Valued buyer logo" },
  { src: "/images/buyer-4.png", alt: "Valued buyer logo" },
  { src: "/images/buyer-5.png", alt: "Valued buyer logo" },
];

export const MARQUEE_ITEMS = [
  "Sweater",
  "Knit",
  "Woven",
  "Denim",
  "Home Textile",
  "Product Development",
  "Merchandising",
  "Quality Control",
  "Social Compliance",
  "Inspections",
  "Logistics",
];
