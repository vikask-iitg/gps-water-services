// =====================================================================
// GPS वाटर सर्विसेज़ — साइट की सारी जानकारी यहीं से बदलें।
// Edit rates, areas, timings and FAQs here; no other file needs changing.
// price: '' रखने पर साइट "रेट के लिए कॉल करें" दिखाएगी।
// =====================================================================

export type Bi = { hi: string; en: string };

export const business = {
  name: { hi: 'GPS वाटर सर्विसेज़', en: 'GPS Water Services' } as Bi,
  brand: 'GPS',
  iceBrand: 'GPS Pure Ice',
  tagline: { hi: 'शुद्ध और गुणवत्ता का प्रतीक', en: 'A symbol of purity and quality' } as Bi,
  owner: { hi: 'विनोद ठाकुर', en: 'Vinod Thakur' } as Bi,
  phone: '+91 62634 50248',
  phoneRaw: '+916263450248',
  whatsapp: '916263450248',
  email: '', // मालिक से मिलने पर भरें
  address: {
    hi: 'धनकर सर के घर के सामने, मेन रोड, कुसुमकसा, जि. बालोद (छ.ग.)',
    en: 'Opp. Dhankar Sir’s House, Main Road, Kusumkasa, Dist. Balod (C.G.)',
  } as Bi,
  locality: 'Kusumkasa',
  region: 'Chhattisgarh',
  postalCode: '491228', // पक्का करें
  geo: { lat: 20.6467, lng: 81.1347 }, // पक्का करें — Google Business Profile से
  mapQuery: 'Kusumkasa, Balod, Chhattisgarh',
  hours: { hi: 'रोज़ सुबह 6:00 – रात 8:00', en: 'Daily 6:00 AM – 8:00 PM' } as Bi, // पक्का करें
  certificate: 'ISO/IEC 17025:2017',
  ga4Id: '', // जैसे 'G-XXXXXXX'
};

export type Product = {
  slug: string;
  icon: 'jar' | 'bottle' | 'ice' | 'pouch';
  name: Bi;
  short: Bi;
  features: Bi[];
  buyers: Bi;
  orderWay: Bi;
  uses: Bi[];
  sizes: { label: Bi; price: string; unit: Bi }[];
};

export const products: Product[] = [
  {
    slug: '20-litre-ro-jar',
    icon: 'jar',
    name: { hi: '20 ली. RO चिल्ड वाटर जार', en: '20 L RO Chilled Water Jar' },
    short: {
      hi: 'RO + UV शुद्ध, ठंडा पानी — सीलबंद ढक्कन के साथ घर-ऑफ़िस तक।',
      en: 'RO + UV purified, chilled water with a sealed cap, delivered to your door.',
    },
    features: [
      { hi: 'RO + UV से शुद्ध', en: 'RO + UV purified' },
      { hi: 'ठंडा डिलीवर', en: 'Delivered chilled' },
      { hi: 'सीलबंद ढक्कन', en: 'Sealed cap' },
      { hi: 'इंसुलेटेड कैंपर — घंटों ठंडा', en: 'Insulated camper stays cold for hours' },
    ],
    buyers: { hi: 'घर, ऑफ़िस, होटल', en: 'Homes, offices, hotels' },
    orderWay: { hi: 'एक बार या साप्ताहिक सब्सक्रिप्शन', en: 'One-time or weekly subscription' },
    uses: [
      { hi: 'रोज़ पीने के लिए घर में', en: 'Daily drinking water at home' },
      { hi: 'ऑफ़िस, स्कूल, क्लिनिक, बैंक', en: 'Offices, schools, clinics, banks' },
      { hi: 'होटल और ढाबे', en: 'Hotels and dhabas' },
    ],
    sizes: [
      { label: { hi: 'नीला 20 ली. बोतल जार (रीफ़िल)', en: 'Blue 20 L bottle jar (refill)' }, price: '', unit: { hi: 'प्रति जार', en: 'per jar' } },
      { label: { hi: 'इंसुलेटेड चिल्ड कैंपर (रीफ़िल)', en: 'Insulated chilled camper (refill)' }, price: '', unit: { hi: 'प्रति जार', en: 'per jar' } },
      { label: { hi: 'नया जार (डिपॉज़िट)', en: 'New jar (deposit)' }, price: '', unit: { hi: 'एक बार', en: 'one-time' } },
    ],
  },
  {
    slug: 'ice-slab',
    icon: 'ice',
    name: { hi: 'बर्फ़ सिल्ली (GPS Pure Ice)', en: 'Ice Slab (GPS Pure Ice)' },
    short: {
      hi: 'शुद्ध पानी से बनी बर्फ़ — सुबह जल्दी डिलीवरी।',
      en: 'Ice made from purified water, with early-morning delivery.',
    },
    features: [
      { hi: 'शुद्ध पानी से बनी', en: 'Made from purified water' },
      { hi: 'सुबह जल्दी डिलीवरी', en: 'Early-morning delivery' },
      { hi: 'कुटी बर्फ़ माँग पर', en: 'Crushed ice on request' },
    ],
    buyers: { hi: 'मछली/मीट, जूस ठेले, कैटरर', en: 'Fish/meat sellers, juice carts, caterers' },
    orderWay: { hi: 'रोज़ का फ़िक्स ऑर्डर, बल्क कोटेशन', en: 'Fixed daily order, bulk quotation' },
    uses: [
      { hi: 'मछली और मीट को ताज़ा रखना', en: 'Keeping fish and meat fresh' },
      { hi: 'जूस और गन्ना रस', en: 'Juice and sugarcane carts' },
      { hi: 'कैटरिंग और समारोह', en: 'Catering and events' },
    ],
    sizes: [
      { label: { hi: 'पूरी सिल्ली', en: 'Full slab' }, price: '', unit: { hi: 'प्रति सिल्ली', en: 'per slab' } },
      { label: { hi: 'आधी सिल्ली', en: 'Half slab' }, price: '', unit: { hi: 'प्रति सिल्ली', en: 'per slab' } },
      { label: { hi: 'कुटी बर्फ़ (माँग पर)', en: 'Crushed ice (on request)' }, price: '', unit: { hi: 'प्रति किलो', en: 'per kg' } },
    ],
  },
  {
    slug: 'packaged-drinking-water',
    icon: 'bottle',
    name: { hi: 'पैक्ड पीने का पानी', en: 'Packaged Drinking Water' },
    short: {
      hi: '250 मिली से 2 ली. तक सीलबंद बोतलें — कार्यक्रम के लिए कस्टम लेबल भी।',
      en: 'Sealed bottles from 250 ml to 2 L, with custom labels for events.',
    },
    features: [
      { hi: 'सीलबंद बोतल', en: 'Sealed bottles' },
      { hi: 'कार्टन में सप्लाई', en: 'Supplied in cartons' },
      { hi: 'कार्यक्रम के लिए कस्टम लेबल', en: 'Custom labels for events' },
    ],
    buyers: { hi: 'दुकान, शादी, ऑफ़िस', en: 'Shops, weddings, offices' },
    orderWay: { hi: 'कार्टन, बल्क कोटेशन', en: 'By carton, bulk quotation' },
    uses: [
      { hi: 'शादी और समारोह', en: 'Weddings and functions' },
      { hi: 'दुकानों में बिक्री', en: 'Retail in shops' },
      { hi: 'ऑफ़िस मीटिंग', en: 'Office meetings' },
    ],
    sizes: [
      { label: { hi: '250 मिली बोतल', en: '250 ml bottle' }, price: '', unit: { hi: 'प्रति कार्टन', en: 'per carton' } },
      { label: { hi: '500 मिली बोतल', en: '500 ml bottle' }, price: '', unit: { hi: 'प्रति कार्टन', en: 'per carton' } },
      { label: { hi: '1 ली. बोतल', en: '1 L bottle' }, price: '', unit: { hi: 'प्रति कार्टन', en: 'per carton' } },
      { label: { hi: '2 ली. बोतल', en: '2 L bottle' }, price: '', unit: { hi: 'प्रति कार्टन', en: 'per carton' } },
    ],
  },
  {
    slug: 'water-pouch',
    icon: 'pouch',
    name: { hi: 'पानी पाउच', en: 'Water Pouch' },
    short: {
      hi: 'सस्ता और सीलबंद — भीड़ वाले कार्यक्रमों के लिए बढ़िया।',
      en: 'Affordable and sealed, ideal for crowded events.',
    },
    features: [
      { hi: 'सस्ता', en: 'Affordable' },
      { hi: 'सीलबंद', en: 'Sealed' },
      { hi: 'भीड़ के लिए बढ़िया', en: 'Great for crowds' },
    ],
    buyers: { hi: 'शादी, दुकान, साइट', en: 'Weddings, shops, work sites' },
    orderWay: { hi: 'बैग, बल्क कोटेशन', en: 'By bag, bulk quotation' },
    uses: [
      { hi: 'शादी और सभा', en: 'Weddings and gatherings' },
      { hi: 'दुकान और चाय ठेले', en: 'Shops and tea stalls' },
      { hi: 'निर्माण साइट', en: 'Construction sites' },
    ],
    sizes: [
      { label: { hi: '200 मिली पाउच', en: '200 ml pouch' }, price: '', unit: { hi: 'प्रति बैग', en: 'per bag' } },
      { label: { hi: '250 मिली पाउच', en: '250 ml pouch' }, price: '', unit: { hi: 'प्रति बैग', en: 'per bag' } },
    ],
  },
];

// डिलीवरी वाले गाँव/कस्बे — मालिक से पक्का करें
export const deliveryAreas: Bi[] = [
  { hi: 'कुसुमकसा', en: 'Kusumkasa' },
  { hi: 'बालोद', en: 'Balod' },
  { hi: 'दल्लीराजहरा', en: 'Dalli Rajhara' },
  { hi: 'गुंडरदेही', en: 'Gunderdehi' },
  { hi: 'डौंडी', en: 'Dondi' },
  { hi: 'डौंडीलोहारा', en: 'Dondi Lohara' },
  { hi: 'गुरुर', en: 'Gurur' },
  { hi: 'आसपास के गाँव', en: 'Nearby villages' },
];

export const plans = [
  { jars: 2, popular: false },
  { jars: 4, popular: true },
  { jars: 7, popular: false },
];

export const reviews: { name: string; place: Bi; text: Bi }[] = [
  // असली गूगल रिव्यू (अनुमति के साथ) मिलने पर इन्हें बदलें
  {
    name: 'रमेश साहू',
    place: { hi: 'कुसुमकसा', en: 'Kusumkasa' },
    text: { hi: 'हर हफ़्ते समय पर ठंडा जार आता है। पानी का स्वाद बढ़िया है।', en: 'A chilled jar arrives on time every week. The water tastes great.' },
  },
  {
    name: 'प्रिया होटल',
    place: { hi: 'बालोद', en: 'Balod' },
    text: { hi: 'होटल के लिए रोज़ बर्फ़ और जार मँगाते हैं, कभी देर नहीं हुई।', en: 'We order ice and jars daily for the hotel and have never had a delay.' },
  },
  {
    name: 'संजय वर्मा',
    place: { hi: 'दल्लीराजहरा', en: 'Dalli Rajhara' },
    text: { hi: 'बेटी की शादी में पाउच और बोतलें मँगाईं, सब समय पर पहुँचा।', en: 'Ordered pouches and bottles for my daughter’s wedding. Everything arrived on time.' },
  },
];

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: { hi: 'ऑर्डर कैसे करें?', en: 'How do I order?' },
    a: { hi: 'व्हाट्सऐप बटन दबाएँ, कॉल करें या ऑर्डर फ़ॉर्म भरें। हम तुरंत पक्का करेंगे।', en: 'Tap the WhatsApp button, call us, or fill the order form. We confirm right away.' },
  },
  {
    q: { hi: 'जार का डिपॉज़िट कितना है?', en: 'How much is the jar deposit?' },
    a: { hi: 'नया जार लेने पर एक बार डिपॉज़िट लगता है, जो जार लौटाने पर वापस मिलता है। रेट के लिए कॉल करें।', en: 'A one-time refundable deposit applies to a new jar. Call us for the amount.' },
  },
  {
    q: { hi: 'क्या डिलीवरी चार्ज लगता है?', en: 'Is there a delivery charge?' },
    a: { hi: 'हमारे डिलीवरी एरिया में नियमित ऑर्डर पर आमतौर पर कोई चार्ज नहीं। दूर के गाँव के लिए पूछें।', en: 'Usually free for regular orders within our area. Ask us about distant villages.' },
  },
  {
    q: { hi: 'पानी कैसे शुद्ध होता है?', en: 'How is the water purified?' },
    a: { hi: 'मल्टी-स्टेज RO, फिर UV से कीटाणु-नाश, और नियमित जाँच के बाद ही जार सील होता है।', en: 'Multi-stage RO, then UV disinfection, and regular testing before every jar is sealed.' },
  },
  {
    q: { hi: 'बर्फ़ कितनी जल्दी मिलती है?', en: 'How early is ice delivered?' },
    a: { hi: 'बर्फ़ सिल्ली की डिलीवरी सुबह जल्दी होती है। रोज़ का फ़िक्स ऑर्डर लगवा सकते हैं।', en: 'Ice slabs are delivered early in the morning. You can set up a fixed daily order.' },
  },
  {
    q: { hi: 'पेमेंट कैसे करें?', en: 'How do I pay?' },
    a: { hi: 'डिलीवरी पर नकद या UPI। ऑफ़िस के लिए मासिक बिल भी।', en: 'Cash or UPI on delivery. Monthly billing for offices.' },
  },
  {
    q: { hi: 'क्या GST बिल मिलेगा?', en: 'Do you provide a GST bill?' },
    a: { hi: 'हाँ, ऑफ़िस और संस्थानों के लिए GST बिल उपलब्ध है।', en: 'Yes, GST invoices are available for offices and institutions.' },
  },
  {
    q: { hi: 'शादी के लिए कितने दिन पहले ऑर्डर दें?', en: 'How early should I book for a wedding?' },
    a: { hi: 'कम से कम 3–5 दिन पहले कोटेशन माँगें, ताकि स्टॉक और गाड़ी पक्की हो सके।', en: 'Ask for a quote at least 3–5 days ahead so stock and delivery can be confirmed.' },
  },
  {
    q: { hi: 'सब्सक्रिप्शन रोक या बदल सकते हैं?', en: 'Can I pause or change my subscription?' },
    a: { hi: 'हाँ, व्हाट्सऐप पर एक मैसेज भेजें — जार की संख्या या दिन कभी भी बदलें।', en: 'Yes. Send a WhatsApp message to change jar count or days anytime.' },
  },
];

export const waLink = (text = '') =>
  `https://wa.me/${business.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
