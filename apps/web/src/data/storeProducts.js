// Demo catalogue for the NeuroDigital Support store.
//
// The store is a preview: products, prices and options are placeholders until the client confirms
// the range and connects payments (card checkout and/or a print-on-demand / dropshipping partner).
// To change the catalogue, edit this file only: the store, product pages, basket and checkout read
// everything from here. Prices are in GBP pence to avoid rounding errors.

export const CURRENCY = 'GBP';

export const CATEGORIES = [
  { id: 'all', label: 'All products' },
  { id: 'apparel', label: 'Apparel' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'stationery', label: 'Stationery' },
  { id: 'comfort', label: 'Comfort & Sensory' }
];

const APPAREL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const PRODUCTS = [
  {
    slug: 'nd-support-classic-tshirt',
    name: 'ND Support Classic T-Shirt',
    category: 'apparel',
    price: 2200,
    image: '/images/store/tshirt.webp',
    alt: 'White T-shirt with the colourful ND support logo, hanging on a wooden rail',
    badge: 'Bestseller',
    summary: 'A soft, everyday tee with the colourful ND support logo.',
    description:
      'Our signature T-shirt in a soft, breathable cotton with the full-colour ND support logo on the chest. A relaxed fit that is easy to wear all day, with a tag-free neck label for extra comfort.',
    details: ['Soft cotton jersey', 'Tag-free printed neck label', 'Relaxed, unisex fit', 'Machine washable at 30°C'],
    options: { Size: APPAREL_SIZES, Colour: ['White'] }
  },
  {
    slug: 'nd-support-hoodie',
    name: 'ND Support Hoodie',
    category: 'apparel',
    price: 4200,
    image: null,
    alt: 'ND Support hoodie, photo coming soon',
    badge: 'New',
    summary: 'A cosy pullover hoodie with the ND support logo.',
    description:
      'A heavyweight, brushed-fleece hoodie for calm days in and busy days out. Features the ND support logo, a roomy front pocket and soft ribbed cuffs.',
    details: ['Brushed fleece lining', 'Front kangaroo pocket', 'Ribbed cuffs and hem', 'Unisex fit'],
    options: { Size: APPAREL_SIZES, Colour: ['White', 'Lavender', 'Navy'] }
  },
  {
    slug: 'neurodigitalsupport-mug',
    name: 'NeuroDigitalSupport Mug',
    category: 'accessories',
    price: 1200,
    image: '/images/store/mug.webp',
    alt: 'White ceramic mug with the rainbow neurodigitalsupport wordmark, holding a latte',
    summary: 'A classic ceramic mug with our rainbow wordmark.',
    description:
      'Start the day with a little colour. A glossy white ceramic mug printed with the rainbow neurodigitalsupport wordmark, sized for a generous tea or coffee.',
    details: ['Ceramic, 11 oz', 'Dishwasher and microwave safe', 'Wraparound print'],
    options: {}
  },
  {
    slug: 'nd-support-canvas-tote',
    name: 'ND Support Canvas Tote',
    category: 'accessories',
    price: 1500,
    image: '/images/store/tote-bag.webp',
    alt: 'Natural canvas tote bag with the ND support logo',
    summary: 'A sturdy natural canvas tote for everyday essentials.',
    description:
      'A roomy natural-canvas tote with long handles and the ND support logo. Ideal for shopping, sensory kits, books or a day out.',
    details: ['Heavyweight natural canvas', 'Long shoulder handles', 'Fits A4 folders'],
    options: {}
  },
  {
    slug: 'lavender-water-bottle',
    name: 'Lavender Water Bottle',
    category: 'accessories',
    price: 2000,
    image: '/images/store/water-bottle.webp',
    alt: 'Matte lavender metal water bottle printed with the neurodigitalsupport wordmark',
    summary: 'An insulated bottle in calming lavender.',
    description:
      'Stay hydrated with a double-walled, insulated stainless-steel bottle in a calming matte lavender, printed with the neurodigitalsupport wordmark and ND icon.',
    details: ['Double-walled stainless steel', 'Keeps drinks cold or hot for hours', 'Leak-resistant screw lid', 'Approx. 500 ml'],
    options: {}
  },
  {
    slug: 'neurodigitalsupport-cap',
    name: 'NeuroDigitalSupport Cap',
    category: 'apparel',
    price: 1800,
    image: '/images/store/cap.webp',
    alt: 'White baseball cap embroidered with the rainbow neurodigitalsupport wordmark',
    summary: 'A white cotton cap with the embroidered rainbow wordmark.',
    description:
      'A classic six-panel cotton cap with the neurodigitalsupport wordmark embroidered in rainbow thread and an adjustable strap for a comfortable fit.',
    details: ['Cotton twill', 'Embroidered wordmark', 'Adjustable back strap', 'One size'],
    options: {}
  },
  {
    slug: 'nd-support-notebook-pen-set',
    name: 'Notebook & Pen Set',
    category: 'stationery',
    price: 1000,
    image: '/images/store/notebook.webp',
    alt: 'Spiral notebook with the ND support logo and a rainbow wave, with a matching white pen',
    summary: 'A spiral notebook and matching pen for notes and journalling.',
    description:
      'A spiral-bound A5 notebook with the ND support logo and rainbow wave cover, paired with a matching pen. Great for planning, journalling or tracking what helps.',
    details: ['A5 spiral-bound', 'Lined pages', 'Matching ND pen included'],
    options: {}
  },
  {
    slug: 'sensory-friendly-headphones',
    name: 'Sensory-Friendly Headphones',
    category: 'comfort',
    price: 4500,
    image: '/images/store/headphones.webp',
    alt: 'White over-ear headphones with the ND support logo on the ear cup',
    badge: 'Sensory',
    summary: 'Soft, cushioned over-ear headphones to help reduce noise.',
    description:
      'Comfortable over-ear headphones with deep, soft cushions to help reduce everyday noise, finished in white with the ND support logo. Use them for music, calm audio or simply a quieter moment.',
    details: ['Cushioned over-ear design', 'Adjustable headband', 'Helps reduce background noise', 'Not a medical device'],
    options: {}
  },
  {
    slug: 'nd-support-comfort-blanket',
    name: 'Comfort Blanket',
    category: 'comfort',
    price: 3000,
    image: '/images/store/blanket.webp',
    alt: 'Soft white fleece blanket with the embroidered ND support logo',
    summary: 'A soft fleece throw for calm, cosy moments.',
    description:
      'A soft, plush fleece throw with the embroidered ND support logo. A comforting texture for winding down, quiet time or a sensory corner.',
    details: ['Plush fleece', 'Embroidered logo', 'Machine washable'],
    options: {}
  },
  {
    slug: 'canvas-pencil-pouch',
    name: 'Canvas Pencil Pouch',
    category: 'stationery',
    price: 900,
    image: '/images/store/pouch.webp',
    alt: 'Natural canvas zip pouch printed with the rainbow neurodigitalsupport wordmark, with coloured pens',
    summary: 'A zip pouch for pens, fidgets or small essentials.',
    description:
      'A natural canvas zip pouch printed with the rainbow neurodigitalsupport wordmark. Keeps pens, fidget tools, chargers or medication reminders together in one place.',
    details: ['Natural canvas', 'Black zip closure', 'Pens not included'],
    options: {}
  },
  {
    slug: 'nd-support-phone-case',
    name: 'ND Support Phone Case',
    category: 'accessories',
    price: 1600,
    image: '/images/store/phone-case.webp',
    alt: 'White phone case with the ND support logo and a rainbow wave',
    summary: 'A slim, protective case with the ND logo and rainbow wave.',
    description:
      'A slim, impact-resistant phone case in white with the ND support logo and rainbow wave design. Available for popular iPhone and Android models.',
    details: ['Slim, impact-resistant shell', 'Raised edges for screen and camera', 'Wireless-charging friendly'],
    options: { Model: ['iPhone 15', 'iPhone 16', 'iPhone 17', 'Samsung Galaxy S25', 'Google Pixel 9'] }
  }
];

export const getProduct = (slug) => PRODUCTS.find((product) => product.slug === slug) || null;

export const formatPrice = (pence) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: CURRENCY }).format(pence / 100);
