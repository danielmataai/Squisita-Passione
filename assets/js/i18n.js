/* =====================================================
   SQUISITA PASSIONE - Internationalization (i18n)
   English (EN) & French (FR) Support
   ===================================================== */

const translations = {
  en: {
    // Navigation
    'nav.experiences': 'Experiences',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.tours': 'Tours',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    
    // Hero
    'hero.eyebrow': 'Authentic Italian Culinary Experiences',
    'hero.title': 'Squisita Passione',
    'hero.subtitle': 'by Chef Davide Rizzardi',
    'hero.description': "I bring Italy to the table through public dinner workshops, chef-curated private dinners, and informal gastronomic tours across Italy. Each experience is designed for Canadians who love cooking, traveling, and discovering history through food. Warm, elegant, and personal, my approach is rooted in authentic Italian flavors, traditions, and the stories that make them unforgettable.",
    'hero.cta.explore': 'Explore Experiences',
    'hero.cta.contact': 'Get in Touch',
    'hero.scroll': 'Scroll to discover',
    
    // Services
    'services.eyebrow': 'What I Offer',
    'services.title': 'Culinary Experiences',
    'services.subtitle': 'Three unique ways to immerse yourself in the art of Italian cuisine',
    'services.cta': 'Learn More',
    
    'services.workshop.badge': 'Popular',
    'services.workshop.title': 'Italian Cooking Workshops',
    'services.workshop.description': 'Hands-on classes where you\'ll learn to prepare authentic Italian dishes, from fresh pasta to traditional regional recipes. Perfect for food lovers of all skill levels.',
    'services.workshop.duration': '3-4 hours',
    'services.workshop.guests': '2-12 guests',
    
    'services.private.badge': 'Exclusive',
    'services.private.title': 'Private Chef',
    'services.private.description': 'An intimate dining experience in your home or venue. I\'ll craft a personalized menu and prepare a memorable Italian feast for your special occasion.',
    'services.private.availability': 'By appointment',
    'services.private.location': 'Canada',
    
    'services.tours.badge': 'Adventure',
    'services.tours.title': 'Informal Gastronomic Tours',
    'services.tours.description': 'Informal culinary adventures through Italy\'s finest food destinations. Discover hidden gems, meet local artisans, and taste authentic regional flavors.',
    'services.tours.duration': 'Multi-day',
    'services.tours.location': 'Tuscany & more',
    
    // About
    'about.eyebrow': 'About Me',
    'about.title': 'Chef Davide Rizzardi',
    'about.quote': '"Cooking is not just about food—it\'s about connection, tradition, and sharing the passion that makes Italian cuisine so special."',
    'about.text1': 'Davide Rizzardi is an experienced chef with 21 years working in different countries behind a kitchen. He is energetic and dynamic, with a bright personality, passionate, creative and capable to cook and create a dish with any available ingredients on hand.',
    'about.text2': 'He has a devotion for traditional Italian cuisine that loves to share with his diners and customers, also sharing his knowledge when teaching cooking courses around the world.',
    'about.feature1.title': 'Authentic Traditions',
    'about.feature1.text': 'Recipes passed down through generations',
    'about.feature2.title': 'Fresh Ingredients',
    'about.feature2.text': 'Quality products, locally sourced',
    'about.feature3.title': 'Personal Touch',
    'about.feature3.text': 'Intimate, customized experiences',
    'about.feature4.title': 'Italian Passion',
    'about.feature4.text': 'Love for food and la dolce vita',
    
    // Gallery
    'gallery.eyebrow': 'Visual Journey',
    'gallery.title': 'Moments of Passion',
    'gallery.subtitle': 'A glimpse into the experiences, flavors, and memories we create together',
    
    // Tours
    'tours.eyebrow': 'Firenze & Beyond',
    'tours.title': 'Tour Destinations',
    'tours.subtitle': 'Discover the authentic flavors of Tuscany through these carefully curated experiences with my trusted friends and partners',
    
    // CTA
    'cta.title': 'Ready to Experience Italian Cuisine?',
    'cta.text': 'Whether you\'re looking for a cooking workshop, a private dining experience, or an unforgettable tour through Italy, let\'s create something special together.',
    'cta.button': 'Request a Quote',
    
    // Testimonials
    'testimonials.eyebrow': '5 Stars Only',
    'testimonials.title': 'What People Say About Chef Davide',
    'testimonials.subtitle': 'Around the World',
    'testimonials.1': '"My husband and I did the pasta making with wine pairing class with chef Davide and sommelier Georgia. We truly had a wonderful experience. The hands on pasta making experience was very helpful. The food and wine pairings were both delicious! The team was professional and well educated but also created a very fun environment."',
    'testimonials.2': '"Wow! What an incredible experience! I thought it would be boring, but this class was so much fun! Davide was a great instructor and a very funny guy. He made the experience interesting and was engaging with his audience. My husband ended up having a blast. I highly recommend this class for a fun, unique, and interactive experience."',
    'testimonials.3': '"Before I retired, I was a university professor of education in curriculum and instruction. Basically, I taught already certified teachers how to think about and improve their practice of teaching. In my class Davide would have been an A student. He is extremely good at what he does!"',
    'testimonials.4': '"This pasta making class with Chef Davide is an amazing experience. It was recommended to us by our friends, and we\'ll be recommending it to everyone else. Learn to make 4 styles of pasta. The \'Pasta Whisperer\' will show you how to save your pasta from any of your kitchen missteps. A lot of fun with wine and essentially dinner as well."',
    'testimonials.5': '"It was a great experience and we had a lot of fun! Chef Davide was amazing: he taught us techniques, made us participate so the ambiance was very nice because it made us feel like you\'re cooking with your friends or family. He\'s funny so he made this cooking class entertaining! The food was delicious. I really recommend the experience!"',
    'testimonials.6': '"This class was amazing! Davide was excellent! He was super nice and extremely talented! It was so fun and covered so many things! He made the class special! I definitely recommend!!!"',
    'testimonials.7': '"Merci pour la belle expérience avec les enfants au Time Out Market. Nous avons été accueillis par une équipe sympathique. Le chef est attentionné et aime les enfants. Il les fait participer dans le plaisir. Vraiment agréable."',
    'testimonials.8': '"I took a pasta-making class here and absolutely loved it! Not only did we learn how to make pasta, but we also learned how to make three completely different sauces. The class was super hands-on and interactive. Highly recommend signing up for a workshop!"',
    'testimonials.9': '"We had an incredible evening. From start to finish, the experience was perfect. The staff was amazing, the service was excellent, and they truly know how to make guests feel welcomed and taken care of. The food was absolutely outstanding - every dish was memorable. Highly recommend!"',
    'testimonials.10': '"Wow! What an experience. I am an avid cook and like to experiment in the kitchen. They have cooking classes or \'experiences\' featuring local chefs and from abroad. Not only do you eat very well, you learn how to make the dishes. The current resident chef is from Italy (Davide) - I now have mastered making pasta, what a treat! Five star experience!"',
    
    // Availability
    'availability.title': 'Where to Find Me',
    'availability.canada': 'Canada',
    'availability.canada.dates': 'February & March 2026',
    'availability.italy': 'Italy',
    'availability.italy.dates': 'September 2026',
    
    // Contact
    'contact.eyebrow': 'Get in Touch',
    'contact.title': 'Let\'s Create Something Delicious',
    'contact.text': 'Have questions about my services? Ready to book an experience? I\'d love to hear from you. Reach out and let\'s start planning your culinary journey.',
    'contact.email.label': 'Email',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.location.label': 'Location',
    'contact.location.text': 'Canada & Italy',
    
    // Form
    'form.name.label': 'Name *',
    'form.email.label': 'Email *',
    'form.service.label': 'Interested In *',
    'form.service.placeholder': 'Select an experience',
    'form.service.workshop': 'Cooking Workshop',
    'form.service.private': 'Private Chef',
    'form.service.tour': 'Gastronomy Tour',
    'form.service.other': 'Other',
    'form.date.label': 'Preferred Date',
    'form.guests.label': 'Number of Guests',
    'form.message.label': 'Message *',
    'form.submit': 'Send Request',
    
    // Footer
    'footer.tagline': 'Authentic Italian culinary experiences by <a href="https://www.instagram.com/chef_daviderizzardi/" target="_blank" rel="noopener" class="footer__chef-link">Chef Davide Rizzardi</a>. Creating genuine connections through food, travel, and the Italian way of life.',
    'footer.nav.experiences': 'Experiences',
    'footer.nav.workshops': 'Cooking Workshops',
    'footer.nav.private': 'Private Chef',
    'footer.nav.tours': 'Gastronomy Tours',
    'footer.nav.company': 'Company',
    'footer.nav.about': 'About Chef Davide',
    'footer.nav.gallery': 'Gallery',
    'footer.nav.contact': 'Contact',
    'footer.nav.connect': 'Connect',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Workshops Page
    'workshops.hero.eyebrow': 'Experience',
    'workshops.hero.title': 'Italian Cooking Workshops',
    'workshops.hero.description': 'Hands-on classes where tradition meets passion',
    'workshops.intro.title': 'Learn the Art of Italian Cooking',
    'workshops.intro.text1': 'Join me for an immersive cooking experience where you\'ll discover the secrets behind authentic Italian cuisine. My workshops are designed for food lovers of all skill levels—whether you\'re a complete beginner or an experienced home cook looking to refine your techniques.',
    'workshops.intro.text2': 'Each workshop focuses on a specific theme or regional cuisine, taking you on a culinary journey through Italy without leaving your city. You\'ll work with fresh, quality ingredients and learn the traditional methods that have been passed down through generations of Italian families.',
    'workshops.experience.title': 'What You\'ll Experience',
    'workshops.experience.item1.title': 'Hands-on Learning',
    'workshops.experience.item1.text': 'Roll up your sleeves and cook alongside me',
    'workshops.experience.item2.title': 'Fresh Pasta Making',
    'workshops.experience.item2.text': 'Master the art from scratch',
    'workshops.experience.item3.title': 'Traditional Techniques',
    'workshops.experience.item3.text': 'Learn methods passed through generations',
    'workshops.experience.item4.title': 'Recipes to Take Home',
    'workshops.experience.item4.text': 'Continue your Italian journey',
    'workshops.experience.item5.title': 'Sit-Down Meal',
    'workshops.experience.item5.text': 'Enjoy everything you\'ve created',
    'workshops.themes.title': 'Workshop Themes',
    'workshops.themes.northern.title': 'Northern Italian Pasta Masterclass',
    'workshops.themes.northern.description': '3h class — Pasta making and sauces, 1 Italian charcuterie board, 3 pastas menu.',
    'workshops.themes.southern.title': 'Southern Italian Pasta Masterclass',
    'workshops.themes.southern.description': '3h class — Pasta making and sauces, 1 Italian charcuterie board, 3 pastas menu.',
    'workshops.themes.risotto.title': 'Risotto Experience',
    'workshops.themes.risotto.description': '3h class — Stock making, 2 risottos, 1 dessert.',
    'workshops.sidebar.details': 'Workshop Details',
    'workshops.sidebar.duration': 'Duration',
    'workshops.sidebar.duration.value': '3 hours',
    'workshops.sidebar.group': 'Group Size',
    'workshops.sidebar.group.value': '2-12 guests',
    'workshops.sidebar.location': 'Location',
    'workshops.sidebar.location.value': 'Canada',
    'workshops.sidebar.includes': 'Includes',
    'workshops.sidebar.includes.value': 'All ingredients & recipes',
    'workshops.sidebar.perfectfor': 'Perfect For',
    'workshops.sidebar.tag1': 'Date Night',
    'workshops.sidebar.tag2': 'Team Building',
    'workshops.sidebar.tag3': 'Birthday Party',
    'workshops.sidebar.tag4': 'Girls Night',
    'workshops.sidebar.tag5': 'Family Gathering',
    'workshops.sidebar.tag6': 'Bridal Shower',
    'workshops.cta.title': 'Ready to Cook Italian?',
    'workshops.cta.text': 'Book your workshop today and embark on a delicious journey through Italian cuisine.',
    'workshops.cta.button': 'Book a Workshop',
    
    // Tours Page
    'tours.page.choose.eyebrow': 'Your Adventure, Your Way',
    'tours.page.choose.title': 'Choose Your Experience',
    'tours.page.hero.eyebrow': 'Discover Tuscany',
    'tours.page.hero.title': 'Informal Gastronomic Tours',
    'tours.page.hero.description': 'Choose your perfect Italian culinary adventure, from a full week to a single day',
    'tours.page.intro.main': 'Chef Davide offers three ways to experience the authentic flavors of Tuscany. Whether you want the complete immersion, the culinary experiences without accommodation, or just a taste of a single day. There\'s a perfect option for you.',
    
    // Tour Selector
    'tours.page.selector.badge1': 'Complete Package',
    'tours.page.selector.badge2': 'Activities Only',
    'tours.page.selector.badge3': 'Single Day',
    'tours.page.selector.title1': 'The Full Tuscan Experience',
    'tours.page.selector.title2': 'Activities & Experiences',
    'tours.page.selector.title3': 'Day Experience',
    'tours.page.selector.dates1': 'September 1 – 7, 2026',
    'tours.page.selector.dates2': 'September 1 – 7, 2026',
    'tours.page.selector.dates3': 'Flexible dates',
    'tours.page.selector.desc1': '7 days of culinary adventures with accommodation, all meals, activities, and transportation included.',
    'tours.page.selector.desc2': 'All the same culinary experiences and activities. Arrange your own accommodation in Florence.',
    'tours.page.selector.desc3': 'Pick a single day experience from our curated Tuscan adventures. Perfect for a taste of the Italian food culture.',
    'tours.page.selector.cta1': 'View Full Itinerary',
    'tours.page.selector.cta2': 'View Activities',
    'tours.page.selector.cta3': 'Explore Days',
    
    // Tour Section Headers
    'tours.page.t1.title': 'The Full Tuscan Experience',
    'tours.page.t1.desc': 'A complete week of culinary adventures through the heart of Florence and Tuscany. Accommodation, all meals, activities, and transportation included.',
    'tours.page.t2.title': 'Activities & Experiences',
    'tours.page.t2.desc': 'All the same incredible culinary experiences from Tour 1, without accommodation. Perfect if you already have your own place to stay in Florence or prefer to arrange your own lodging.',
    'tours.page.t2.included.title': 'What\'s Included',
    'tours.page.t2.included.subtitle': 'Everything from the full experience, minus the accommodation.',
    'tours.page.t2.excluded': 'Accommodation not included, choose your own stay in Florence',
    'tours.page.t1.cta.title': 'Ready to Book the Full Experience?',
    'tours.page.t1.cta.text': 'Send Chef Davide a message to reserve your spot for the complete Tuscan adventure.',
    'tours.page.t1.cta.button': 'Book via WhatsApp',
    'tours.page.t2.cta.title': 'Interested in the Activities Package?',
    'tours.page.t2.cta.text': 'Contact Chef Davide directly for pricing and availability.',
    'tours.page.t2.cta.button': 'Message on WhatsApp',
    'tours.page.t3.title': 'Day Experience',
    'tours.page.t3.desc': 'Not ready for a full week? Pick a single day experience from our curated Tuscan adventures. Each day can be booked individually, perfect for travelers who want a taste of the authentic Italian food culture during their stay in Florence.',
    'tours.page.t3.day1.short': 'Market tour with artisanal tasting, followed by a hands-on pasta class with unlimited Tuscan wine.',
    'tours.page.t3.day2.short': 'Full day exploring the Chianti region. 2 wineries, rolling hills, and a traditional Tuscan lunch.',
    'tours.page.t3.day3.short': 'Live like a local. Pastries in the hills of Fiesole, historic walk, and dinner at Chef Davide\'s favorite trattoria.',
    'tours.page.t3.day4.short': 'Florence\'s best street food, from traditional lampredotto to Tuscan tacos, gelato, and an optional natural wine aperitivo.',
    'tours.page.t3.day5.short': 'Visit the legendary Macelleria Cecchini and learn to cut a Florentine steak with a master butcher.',
    'tours.page.t3.day6.short': 'Horseback riding or e-bikes through the Tuscan countryside, followed by lunch at a beautiful Agriturismo.',
    'tours.page.t3.day7.short': 'Learn to mix the perfect Italian aperitivo, then enjoy a 4-course meal prepared by Chef Davide.',
    'tours.page.t3.cta.title': 'Interested in a Day Experience?',
    'tours.page.t3.cta.text': 'Send Chef Davide a message to check availability, pricing, and to book your perfect day in Tuscany.',
    'tours.page.t3.cta.button': 'Book via WhatsApp',
    
    'tours.page.intro.p1': 'Starting at the vibrant Mercato di Sant\'Ambrogio, you\'ll taste some of Italy\'s most authentic artisanal cheeses and charcuterie, meeting the flavors and stories behind each bite.',
    'tours.page.intro.p2': 'From horseback riding through the rolling Tuscan countryside, to sipping natural Italian wines in the heart of Florence, to mastering the art of the perfect aperitivo cocktail alongside a professional bartender, Chef Davide will guide you through his passion, rooted deeply in his own country.',
    'tours.page.intro.p3': 'Your week will be filled with relaxed moments, genuine connections, unforgettable food, and experiences that turn into lifelong memories.',
    'tours.page.day1.eyebrow': 'Morning & Afternoon',
    'tours.page.day1.title': 'Mercato Sant\'Ambrogio & Pasta Class',
    'tours.page.day1.text': 'Stefano is a master selector of cheese and charcuterie. We will start our tour with a beautiful tasting of refined Italian products and wine, plus Chef Davide will bring you around the market to buy some of his favourite Italian delicacies. In the afternoon, we are going to learn how to make 3 fresh pasta and 3 sauces in the heart of Florence with unlimited Tuscan wine.',
    'tours.page.day2.eyebrow': 'Full Day Experience',
    'tours.page.day2.title': 'Chianti Wine Tour',
    'tours.page.day2.text': 'Starting in the morning we will discover the beauty of the Chianti region with Sommelier Matteo. We\'ll visit 2 stunning wineries, explore the rolling hills of Chianti, and finish the day with a great traditional lunch surrounded by vineyards.',
    'tours.page.day3.eyebrow': 'A Typical Chef Davide Day',
    'tours.page.day3.title': 'Fiesole & Trattoria Sabatino',
    'tours.page.day3.text': 'This day will be dedicated to living a day like Chef Davide. Starting with a nice espresso and a traditional sweet at the Pasticceria Alcedo, we will discover Florence\'s oldest settlement, Fiesole, a hilltop town with breathtaking views. For dinner, Chef Davide will bring you to his favorite Trattoria in town. Let him show you how to eat like a local.',
    'tours.page.day4.eyebrow': 'Street Food & Aperitivo',
    'tours.page.day4.title': 'Italian Street Food Day',
    'tours.page.day4.text': 'During this day Chef Davide will bring you to taste Florence\'s old traditional street food, but also make you discover a hidden gem where chef friend Tommaso creates savory tacos with Tuscan products. As an option you can choose to have an Aperitivo with natural wine at Vineria Sonora, an amazing wine bar with more than 2,000 different wines from all over Italy.',
    'tours.page.day5.eyebrow': 'Immersive Experience',
    'tours.page.day5.title': 'Tuscan Butchery Day',
    'tours.page.day5.text': 'Tuscany\'s butchery tradition is known worldwide. Let Chef Davide take you to discover this amazing tradition. We will start visiting one of the oldest butcheries in Tuscany, the famous Macelleria Cecchini, where we will have an amazing aperitivo. In the afternoon, we will be accompanied by Master Butcher Felipe to learn how to cut a beautiful Florentine steak. We will cook it together and enjoy it in a beautiful location.',
    'tours.page.day6.eyebrow': 'Tuscan Countryside',
    'tours.page.day6.title': 'Horseback Riding & Lunch in a Casale',
    'tours.page.day6.text': 'This day will be dedicated to the beauty of the Tuscan hills. We will have the choice to discover it by horseback riding or e-bikes, taking in the breathtaking landscapes that make this region legendary. We will have lunch in a Tuscan Agriturismo, surrounded by olive groves and vineyards.',
    'tours.page.day7.eyebrow': 'The Gran Finale',
    'tours.page.day7.title': 'Aperitivo Class & Chef Davide\'s Final Dinner',
    'tours.page.day7.text': 'The grand finale. Accompanied by Master Bartender Luca, we will learn how to mix the perfect ingredients for a real Italian aperitivo cocktail. For dinner, Chef Davide will delight you with a traditional Italian 4-course meal, a surprise farewell feast to close an unforgettable week.',
    'tours.page.included.title': 'What\'s Included',
    'tours.page.included.subtitle': 'The package provides everything you need for an unforgettable week in Tuscany.',
    'tours.page.included.i1': 'All culinary experiences & activities',
    'tours.page.included.i2': '7-night accommodation',
    'tours.page.included.i3': 'All meals & food tastings',
    'tours.page.included.i4': 'Transportation outside Florence',
    'tours.page.included.i5': 'Horseback riding or e-bike tour',
    'tours.page.included.i6': 'Pasta class in Florence',
    'tours.page.included.i7': 'Chianti wine tour (full day)',
    'tours.page.included.i8': 'Aperitivo cocktail masterclass',
    'tours.page.included.note': '<strong>Please note:</strong> During the days in Florence we will walk around 10,000 steps, so please provide comfortable shoes and a water bottle.',
    'tours.page.booking.title': 'Booking Requirements',
    'tours.page.booking.subtitle': 'To secure your spot, you\'ll need to:',
    'tours.page.booking.b1': 'Make a <strong>$1,000 deposit</strong> through the checkout page once available',
    'tours.page.booking.b2': 'Agree to our <strong>cancellation policy</strong> and <strong>payment schedule</strong>',
    'tours.page.booking.note': '<strong>Please note:</strong> $500 of the $1,000 room deposit is non-refundable at any time.',
    'tours.page.payment.title': 'Payment Schedule',
    'tours.page.payment.s1.title': 'Initial Deposit — $1,000 per room',
    'tours.page.payment.s1.text': 'Due upon booking by one person. This confirms your spot (good for two people) and is applied toward your total balance.',
    'tours.page.payment.s2.title': 'First Installment',
    'tours.page.payment.s2.text': 'Due 10 months before tour start. Invoices will be emailed two weeks before each due date.',
    'tours.page.payment.s3.title': 'Second Installment',
    'tours.page.payment.s3.text': 'Due 7 months before tour start.',
    'tours.page.payment.s4.title': 'Final Installment',
    'tours.page.payment.s4.text': 'Due 4 months before tour start.',
    'tours.page.payment.note': 'Guests can choose during registration to be billed by group leader, per room, or per person. However, the deposit must be from one person covering the entire room\'s deposit. If you would like to book as a group of rooms, please email <a href="mailto:chefdavide@squisitapassione.com" style="color: var(--color-tomato); font-weight: 500;">chefdavide@squisitapassione.com</a> for more information.',
    'tours.page.terms.title': 'Terms & Conditions',
    'tours.page.terms.t1': '$500 of the initial deposit is <strong>non-refundable</strong> at all times.',
    'tours.page.terms.t2': 'Cancellations made <strong>more than 120 days</strong> before the tour start date will receive a refund of all payments minus the $500 non-refundable portion of the deposit.',
    'tours.page.terms.t3': 'Cancellations made <strong>120 days or less</strong> before the tour start date are non-refundable, but the spot may be transferred to another guest.',
    'tours.page.terms.t4': 'By booking, you confirm that you are <strong>18 or older</strong>, and you agree to the payment schedule and terms listed above.',
    'tours.page.faq.title': 'Frequently Asked Questions',
    'tours.page.faq.q1': 'How long is the tour?',
    'tours.page.faq.a1': 'The tour is a 7-day, all-inclusive package that covers accommodation, all culinary experiences, food, and transportation outside of Florence.',
    'tours.page.faq.q2': 'What\'s included in the tour?',
    'tours.page.faq.a2': 'The package includes all experiences, food, accommodation, and transportation outside Florence. Flights are not included.',
    'tours.page.faq.q3': 'How many people can join?',
    'tours.page.faq.a3': 'To maintain the intimate, personal nature of the experience, groups are kept small. The deposit covers a room for two people. Contact us for group bookings.',
    'tours.page.faq.q4': 'When is the best time to visit?',
    'tours.page.faq.a4': 'Tuscany is beautiful year-round. Spring (April–June) offers mild weather and blooming landscapes. Fall (September–November) brings harvest season and truffle hunting. Summer is warm and vibrant, while winter offers a quieter, more authentic local experience.',
    'tours.page.faq.q5': 'What should I bring?',
    'tours.page.faq.a5': 'During the days in Florence we will walk around 10,000 steps, so please bring comfortable shoes and a water bottle. Pack light and dress comfortably — this is an informal, relaxed experience.',
    'tours.page.faq.q6': 'Still have questions?',
    'tours.page.faq.a6': 'We\'re here to help! Email us at <a href="mailto:chefdavide@squisitapassione.com" style="color: var(--color-tomato);">chefdavide@squisitapassione.com</a> or reach out via WhatsApp for personal assistance.',
    'tours.page.cta.title': 'Ready for a Culinary Adventure?',
    'tours.page.cta.text': 'Let\'s plan your perfect Italian food journey. Contact Chef Davide to start designing your unforgettable experience in Tuscany.',
    'tours.page.cta.button': 'Reserve Your Spot'
  },
  
  fr: {
    // Navigation
    'nav.experiences': 'Expériences',
    'nav.about': 'À Propos',
    'nav.gallery': 'Galerie',
    'nav.tours': 'Tours',
    'nav.contact': 'Contact',
    'nav.book': 'Réserver',
    
    // Hero
    'hero.eyebrow': 'Expériences Culinaires Italiennes Authentiques',
    'hero.title': 'Squisita Passione',
    'hero.subtitle': 'par le Chef Davide Rizzardi',
    'hero.description': "J'apporte l'Italie à votre table à travers des ateliers de cuisine, des dîners privés organisés par un chef et des circuits gastronomiques informels à travers l'Italie. Chaque expérience est conçue pour les Canadiens qui aiment cuisiner, voyager et découvrir l'histoire à travers la nourriture. Chaleureux, élégant et personnel, mon approche est ancrée dans les saveurs italiennes authentiques, les traditions et les histoires qui les rendent inoubliables.",
    'hero.cta.explore': 'Découvrir les Expériences',
    'hero.cta.contact': 'Nous Contacter',
    'hero.scroll': 'Défiler pour découvrir',
    
    // Services
    'services.eyebrow': 'Ce que je propose',
    'services.title': 'Expériences Culinaires',
    'services.subtitle': 'Trois façons uniques de vous immerger dans l\'art de la cuisine italienne',
    'services.cta': 'En Savoir Plus',
    
    'services.workshop.badge': 'Populaire',
    'services.workshop.title': 'Ateliers de Cuisine Italienne',
    'services.workshop.description': 'Des cours pratiques où vous apprendrez à préparer des plats italiens authentiques, des pâtes fraîches aux recettes régionales traditionnelles. Parfait pour les amoureux de la cuisine de tous niveaux.',
    'services.workshop.duration': '3-4 heures',
    'services.workshop.guests': '2-12 personnes',
    
    'services.private.badge': 'Exclusif',
    'services.private.title': 'Chef Privé',
    'services.private.description': 'Une expérience gastronomique intime chez vous ou dans votre lieu de réception. Je créerai un menu personnalisé et préparerai un festin italien mémorable pour votre occasion spéciale.',
    'services.private.availability': 'Sur rendez-vous',
    'services.private.location': 'Canada',
    
    'services.tours.badge': 'Aventure',
    'services.tours.title': 'Tours Gastronomiques Informels',
    'services.tours.description': 'Des aventures culinaires informelles à travers les meilleures destinations gastronomiques d\'Italie. Découvrez des trésors cachés, rencontrez des artisans locaux et goûtez aux saveurs régionales authentiques.',
    'services.tours.duration': 'Plusieurs jours',
    'services.tours.location': 'Toscane et plus',
    
    // About
    'about.eyebrow': 'À Propos',
    'about.title': 'Chef Davide Rizzardi',
    'about.quote': '"La cuisine n\'est pas seulement une question de nourriture—c\'est une question de connexion, de tradition et de partage de la passion qui rend la cuisine italienne si spéciale."',
    'about.text1': 'Davide Rizzardi est un chef expérimenté avec 21 ans de travail dans différents pays derrière une cuisine. Il est énergique et dynamique, avec une personnalité rayonnante, passionné, créatif et capable de cuisiner et créer un plat avec tous les ingrédients disponibles.',
    'about.text2': 'Il a une dévotion pour la cuisine traditionnelle italienne qu\'il aime partager avec ses convives et clients, partageant également ses connaissances lors de cours de cuisine à travers le monde.',
    'about.feature1.title': 'Traditions Authentiques',
    'about.feature1.text': 'Recettes transmises de génération en génération',
    'about.feature2.title': 'Ingrédients Frais',
    'about.feature2.text': 'Produits de qualité, localement sourcés',
    'about.feature3.title': 'Touche Personnelle',
    'about.feature3.text': 'Expériences intimes et personnalisées',
    'about.feature4.title': 'Passion Italienne',
    'about.feature4.text': 'Amour de la cuisine et de la dolce vita',
    
    // Gallery
    'gallery.eyebrow': 'Voyage Visuel',
    'gallery.title': 'Moments de Passion',
    'gallery.subtitle': 'Un aperçu des expériences, des saveurs et des souvenirs que nous créons ensemble',
    
    // Tours
    'tours.eyebrow': 'Florence et Au-delà',
    'tours.title': 'Destinations des Tours',
    'tours.subtitle': 'Découvrez les saveurs authentiques de la Toscane à travers ces expériences soigneusement sélectionnées avec mes amis et partenaires de confiance',
    
    // CTA
    'cta.title': 'Prêt à Découvrir la Cuisine Italienne?',
    'cta.text': 'Que vous recherchiez un atelier de cuisine, une expérience de dîner privé ou un tour inoubliable à travers l\'Italie, créons ensemble quelque chose de spécial.',
    'cta.button': 'Demander un Devis',
    
    // Testimonials
    'testimonials.eyebrow': '5 Étoiles Seulement',
    'testimonials.title': 'Ce Que Les Gens Disent du Chef Davide',
    'testimonials.subtitle': 'À Travers le Monde',
    'testimonials.1': '"Mon mari et moi avons suivi le cours de fabrication de pâtes avec accord mets-vins avec le chef Davide et la sommelière Georgia. Nous avons vraiment vécu une expérience merveilleuse. L\'expérience pratique de fabrication de pâtes était très utile. Les accords mets-vins étaient délicieux! L\'équipe était professionnelle et bien formée, mais a aussi créé un environnement très amusant."',
    'testimonials.2': '"Wow! Quelle expérience incroyable! Je pensais que ce serait ennuyeux, mais ce cours était tellement amusant! Davide était un excellent instructeur et un homme très drôle. Il a rendu l\'expérience intéressante et captivait son public. Mon mari s\'est éclaté. Je recommande vivement ce cours pour une expérience amusante, unique et interactive."',
    'testimonials.3': '"Avant ma retraite, j\'étais professeur universitaire en éducation, spécialisé en curriculum et pédagogie. En gros, j\'enseignais aux enseignants certifiés comment améliorer leur pratique. Dans mon cours, Davide aurait été un étudiant A. Il est extrêmement bon dans ce qu\'il fait!"',
    'testimonials.4': '"Ce cours de fabrication de pâtes avec le Chef Davide est une expérience incroyable. Nos amis nous l\'ont recommandé, et nous le recommanderons à tout le monde. Apprenez à faire 4 styles de pâtes. Le \'Chuchoteur de Pâtes\' vous montrera comment sauver vos pâtes de vos erreurs en cuisine. Beaucoup de plaisir avec du vin et essentiellement un dîner aussi."',
    'testimonials.5': '"C\'était une super expérience et on s\'est bien amusés! Le Chef Davide était incroyable: il nous a appris des techniques, nous a fait participer donc l\'ambiance était très agréable car on avait l\'impression de cuisiner avec des amis ou de la famille. Il est drôle donc il a rendu ce cours de cuisine divertissant! La nourriture était délicieuse. Je recommande vraiment l\'expérience!"',
    'testimonials.6': '"Ce cours était incroyable! Davide était excellent! Il était super gentil et extrêmement talentueux! C\'était tellement amusant et couvrait tellement de choses! Il a rendu le cours spécial! Je recommande absolument!!!"',
    'testimonials.7': '"Merci pour la belle expérience avec les enfants au Time Out Market. Nous avons été accueillis par une équipe sympathique. Le chef est attentionné et aime les enfants. Il les fait participer dans le plaisir. Vraiment agréable."',
    'testimonials.8': '"J\'ai suivi un cours de fabrication de pâtes ici et j\'ai absolument adoré! Non seulement nous avons appris à faire des pâtes, mais nous avons aussi appris à faire trois sauces complètement différentes. Le cours était super pratique et interactif. Je recommande vivement de s\'inscrire à un atelier!"',
    'testimonials.9': '"Nous avons passé une soirée incroyable. Du début à la fin, l\'expérience était parfaite. Le personnel était incroyable, le service excellent, et ils savent vraiment comment faire sentir les invités bienvenus et bien pris en charge. La nourriture était absolument exceptionnelle - chaque plat était mémorable. Je recommande vivement!"',
    'testimonials.10': '"Wow! Quelle expérience. Je suis un cuisinier passionné et j\'aime expérimenter en cuisine. Ils ont des cours de cuisine ou des \'expériences\' avec des chefs locaux et de l\'étranger. Non seulement on mange très bien, mais on apprend à faire les plats. Le chef résident actuel vient d\'Italie (Davide) - j\'ai maintenant maîtrisé la fabrication des pâtes, quel régal! Expérience cinq étoiles!"',
    
    // Availability
    'availability.title': 'Où Me Trouver',
    'availability.canada': 'Canada',
    'availability.canada.dates': 'Février & Mars 2026',
    'availability.italy': 'Italie',
    'availability.italy.dates': 'Septembre 2026',
    
    // Contact
    'contact.eyebrow': 'Contactez-nous',
    'contact.title': 'Créons Quelque Chose de Délicieux',
    'contact.text': 'Vous avez des questions sur mes services? Prêt à réserver une expérience? J\'aimerais beaucoup avoir de vos nouvelles. Contactez-moi et commençons à planifier votre voyage culinaire.',
    'contact.email.label': 'Email',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.location.label': 'Emplacement',
    'contact.location.text': 'Canada et Italie',
    
    // Form
    'form.name.label': 'Nom *',
    'form.email.label': 'Email *',
    'form.service.label': 'Intéressé par *',
    'form.service.placeholder': 'Sélectionnez une expérience',
    'form.service.workshop': 'Atelier de Cuisine',
    'form.service.private': 'Chef Privé',
    'form.service.tour': 'Tour Gastronomique',
    'form.service.other': 'Autre',
    'form.date.label': 'Date Préférée',
    'form.guests.label': 'Nombre de Personnes',
    'form.message.label': 'Message *',
    'form.submit': 'Envoyer la Demande',
    
    // Footer
    'footer.tagline': 'Expériences culinaires italiennes authentiques par <a href="https://www.instagram.com/chef_daviderizzardi/" target="_blank" rel="noopener" class="footer__chef-link">le Chef Davide Rizzardi</a>. Créer des connexions authentiques à travers la nourriture, les voyages et l\'art de vivre à l\'italienne.',
    'footer.nav.experiences': 'Expériences',
    'footer.nav.workshops': 'Ateliers de Cuisine',
    'footer.nav.private': 'Chef Privé',
    'footer.nav.tours': 'Tours Gastronomiques',
    'footer.nav.company': 'Entreprise',
    'footer.nav.about': 'À Propos du Chef Davide',
    'footer.nav.gallery': 'Galerie',
    'footer.nav.contact': 'Contact',
    'footer.nav.connect': 'Connecter',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    
    // Workshops Page
    'workshops.hero.eyebrow': 'Expérience',
    'workshops.hero.title': 'Ateliers de Cuisine Italienne',
    'workshops.hero.description': 'Cours pratiques où tradition et passion se rencontrent',
    'workshops.intro.title': 'Apprenez l\'Art de la Cuisine Italienne',
    'workshops.intro.text1': 'Rejoignez-moi pour une expérience culinaire immersive où vous découvrirez les secrets de la cuisine italienne authentique. Mes ateliers sont conçus pour les amoureux de la cuisine de tous niveaux—que vous soyez débutant ou cuisinier expérimenté cherchant à perfectionner vos techniques.',
    'workshops.intro.text2': 'Chaque atelier se concentre sur un thème ou une cuisine régionale spécifique, vous emmenant dans un voyage culinaire à travers l\'Italie sans quitter votre ville. Vous travaillerez avec des ingrédients frais et de qualité et apprendrez les méthodes traditionnelles transmises de génération en génération.',
    'workshops.experience.title': 'Ce que Vous Vivrez',
    'workshops.experience.item1.title': 'Apprentissage Pratique',
    'workshops.experience.item1.text': 'Retroussez vos manches et cuisinez à mes côtés',
    'workshops.experience.item2.title': 'Fabrication de Pâtes Fraîches',
    'workshops.experience.item2.text': 'Maîtrisez l\'art depuis le début',
    'workshops.experience.item3.title': 'Techniques Traditionnelles',
    'workshops.experience.item3.text': 'Apprenez des méthodes transmises de génération en génération',
    'workshops.experience.item4.title': 'Recettes à Emporter',
    'workshops.experience.item4.text': 'Continuez votre voyage italien',
    'workshops.experience.item5.title': 'Repas Assis',
    'workshops.experience.item5.text': 'Savourez tout ce que vous avez créé',
    'workshops.themes.title': 'Thèmes des Ateliers',
    'workshops.themes.northern.title': 'Masterclass Pâtes du Nord de l\'Italie',
    'workshops.themes.northern.description': 'Cours de 3h — Fabrication de pâtes et sauces, 1 planche de charcuterie italienne, menu 3 pâtes.',
    'workshops.themes.southern.title': 'Masterclass Pâtes du Sud de l\'Italie',
    'workshops.themes.southern.description': 'Cours de 3h — Fabrication de pâtes et sauces, 1 planche de charcuterie italienne, menu 3 pâtes.',
    'workshops.themes.risotto.title': 'Expérience Risotto',
    'workshops.themes.risotto.description': 'Cours de 3h — Préparation du bouillon, 2 risottos, 1 dessert.',
    'workshops.sidebar.details': 'Détails de l\'Atelier',
    'workshops.sidebar.duration': 'Durée',
    'workshops.sidebar.duration.value': '3 heures',
    'workshops.sidebar.group': 'Taille du Groupe',
    'workshops.sidebar.group.value': '2-12 personnes',
    'workshops.sidebar.location': 'Lieu',
    'workshops.sidebar.location.value': 'Canada',
    'workshops.sidebar.includes': 'Inclus',
    'workshops.sidebar.includes.value': 'Tous les ingrédients et recettes',
    'workshops.sidebar.perfectfor': 'Parfait Pour',
    'workshops.sidebar.tag1': 'Soirée en Amoureux',
    'workshops.sidebar.tag2': 'Team Building',
    'workshops.sidebar.tag3': 'Fête d\'Anniversaire',
    'workshops.sidebar.tag4': 'Soirée Entre Filles',
    'workshops.sidebar.tag5': 'Réunion de Famille',
    'workshops.sidebar.tag6': 'Enterrement de Vie de Jeune Fille',
    'workshops.cta.title': 'Prêt à Cuisiner Italien?',
    'workshops.cta.text': 'Réservez votre atelier aujourd\'hui et embarquez pour un délicieux voyage à travers la cuisine italienne.',
    'workshops.cta.button': 'Réserver un Atelier',
    
    // Tours Page
    'tours.page.choose.eyebrow': 'Votre Aventure, À Votre Façon',
    'tours.page.choose.title': 'Choisissez Votre Expérience',
    'tours.page.hero.eyebrow': 'Découvrez la Toscane',
    'tours.page.hero.title': 'Tours Gastronomiques Informels',
    'tours.page.hero.description': 'Choisissez votre aventure culinaire italienne, d\'une semaine complète à une seule journée',
    'tours.page.intro.main': 'Le Chef Davide propose trois façons de vivre les saveurs authentiques de la Toscane. Que vous souhaitiez une immersion complète, les expériences culinaires sans hébergement, ou simplement un avant-goût d\'une journée. Il y a une option parfaite pour vous.',
    
    // Tour Selector
    'tours.page.selector.badge1': 'Forfait Complet',
    'tours.page.selector.badge2': 'Activités Seulement',
    'tours.page.selector.badge3': 'Journée Unique',
    'tours.page.selector.title1': 'L\'Expérience Toscane Complète',
    'tours.page.selector.title2': 'Activités et Expériences',
    'tours.page.selector.title3': 'Expérience d\'une Journée',
    'tours.page.selector.dates1': '1 – 7 Septembre 2026',
    'tours.page.selector.dates2': '1 – 7 Septembre 2026',
    'tours.page.selector.dates3': 'Dates flexibles',
    'tours.page.selector.desc1': '7 jours d\'aventures culinaires avec hébergement, tous les repas, activités et transport inclus.',
    'tours.page.selector.desc2': 'Toutes les mêmes expériences culinaires. Organisez votre propre hébergement à Florence.',
    'tours.page.selector.desc3': 'Choisissez une expérience d\'une journée parmi nos aventures toscanes. Parfait pour un avant-goût de la culture culinaire italienne.',
    'tours.page.selector.cta1': 'Voir l\'itinéraire complet',
    'tours.page.selector.cta2': 'Voir les activités',
    'tours.page.selector.cta3': 'Explorer les journées',
    
    // Tour Section Headers
    'tours.page.t1.title': 'L\'Expérience Toscane Complète',
    'tours.page.t1.desc': 'Une semaine complète d\'aventures culinaires au cœur de Florence et de la Toscane. Hébergement, tous les repas, activités et transport inclus.',
    'tours.page.t2.title': 'Activités et Expériences',
    'tours.page.t2.desc': 'Toutes les mêmes expériences culinaires incroyables du Tour 1, sans hébergement. Parfait si vous avez déjà un logement à Florence ou préférez organiser le vôtre.',
    'tours.page.t2.included.title': 'Ce Qui Est Inclus',
    'tours.page.t2.included.subtitle': 'Tout de l\'expérience complète, sans l\'hébergement.',
    'tours.page.t2.excluded': 'Hébergement non inclus, choisissez votre propre logement à Florence',
    'tours.page.t1.cta.title': 'Prêt à Réserver l\'Expérience Complète?',
    'tours.page.t1.cta.text': 'Envoyez un message au Chef Davide pour réserver votre place pour l\'aventure toscane complète.',
    'tours.page.t1.cta.button': 'Réserver via WhatsApp',
    'tours.page.t2.cta.title': 'Intéressé par le Forfait Activités?',
    'tours.page.t2.cta.text': 'Contactez le Chef Davide directement pour les tarifs et disponibilités.',
    'tours.page.t2.cta.button': 'Message sur WhatsApp',
    'tours.page.t3.title': 'Expérience d\'une Journée',
    'tours.page.t3.desc': 'Pas prêt pour une semaine complète? Choisissez une expérience d\'une journée parmi nos aventures toscanes. Chaque journée peut être réservée individuellement, parfait pour les voyageurs qui veulent goûter à la culture culinaire italienne authentique pendant leur séjour à Florence.',
    'tours.page.t3.day1.short': 'Visite du marché avec dégustation artisanale, suivie d\'un cours de pâtes avec vin toscan à volonté.',
    'tours.page.t3.day2.short': 'Journée complète dans la région du Chianti. 2 vignobles, collines ondulantes et déjeuner toscan traditionnel.',
    'tours.page.t3.day3.short': 'Vivez comme un local. Pâtisseries dans les collines de Fiesole, promenade historique et dîner à la trattoria préférée du Chef Davide.',
    'tours.page.t3.day4.short': 'Le meilleur street food de Florence, du lampredotto traditionnel aux tacos toscans, gelato et aperitivo optionnel au vin naturel.',
    'tours.page.t3.day5.short': 'Visitez la légendaire Macelleria Cecchini et apprenez à découper une Fiorentina avec un maître boucher.',
    'tours.page.t3.day6.short': 'Équitation ou vélo électrique dans la campagne toscane, suivi d\'un déjeuner dans un bel Agriturismo.',
    'tours.page.t3.day7.short': 'Apprenez à préparer l\'aperitivo italien parfait, puis savourez un repas de 4 services préparé par le Chef Davide.',
    'tours.page.t3.cta.title': 'Intéressé par une Expérience d\'une Journée?',
    'tours.page.t3.cta.text': 'Envoyez un message au Chef Davide pour vérifier la disponibilité, les tarifs et réserver votre journée parfaite en Toscane.',
    'tours.page.t3.cta.button': 'Réserver via WhatsApp',
    
    'tours.page.intro.p1': 'En commençant par le vibrant Mercato di Sant\'Ambrogio, vous goûterez certains des fromages et charcuteries artisanaux les plus authentiques d\'Italie, découvrant les saveurs et les histoires derrière chaque bouchée.',
    'tours.page.intro.p2': 'De l\'équitation à travers la campagne toscane, à la dégustation de vins naturels italiens au cœur de Florence, en passant par la maîtrise de l\'art du cocktail aperitivo parfait aux côtés d\'un barman professionnel, le Chef Davide vous guidera à travers sa passion, profondément enracinée dans son propre pays.',
    'tours.page.intro.p3': 'Votre semaine sera remplie de moments détendus, de connexions authentiques, de nourriture inoubliable et d\'expériences qui deviendront des souvenirs pour la vie.',
    'tours.page.day1.eyebrow': 'Matin et Après-midi',
    'tours.page.day1.title': 'Mercato Sant\'Ambrogio et Cours de Pâtes',
    'tours.page.day1.text': 'Stefano est un maître sélectionneur de fromages et charcuteries. Nous commencerons notre tour avec une belle dégustation de produits italiens raffinés et de vin, puis le Chef Davide vous emmènera dans le marché pour acheter ses délices italiens préférés. L\'après-midi, nous apprendrons à faire 3 pâtes fraîches et 3 sauces au cœur de Florence avec du vin toscan à volonté.',
    'tours.page.day2.eyebrow': 'Expérience Journée Complète',
    'tours.page.day2.title': 'Tour des Vins du Chianti',
    'tours.page.day2.text': 'En commençant le matin, nous découvrirons la beauté de la région du Chianti avec le sommelier Matteo. Nous visiterons 2 vignobles magnifiques, explorerons les collines du Chianti et terminerons la journée avec un excellent déjeuner traditionnel entouré de vignobles.',
    'tours.page.day3.eyebrow': 'Une Journée Typique du Chef Davide',
    'tours.page.day3.title': 'Fiesole et Trattoria Sabatino',
    'tours.page.day3.text': 'Cette journée sera dédiée à vivre comme le Chef Davide. En commençant par un bon espresso et une pâtisserie traditionnelle à la Pasticceria Alcedo, nous découvrirons le plus ancien établissement de Florence, Fiesole, une ville perchée avec des vues à couper le souffle. Pour le dîner, le Chef Davide vous emmènera dans sa Trattoria préférée. Laissez-le vous montrer comment manger comme un local.',
    'tours.page.day4.eyebrow': 'Street Food et Aperitivo',
    'tours.page.day4.title': 'Journée Street Food Italien',
    'tours.page.day4.text': 'Pendant cette journée, le Chef Davide vous fera goûter la cuisine de rue traditionnelle de Florence, mais aussi découvrir un trésor caché où le chef ami Tommaso crée de savoureux tacos avec des produits toscans. En option, vous pourrez choisir un Aperitivo avec du vin naturel à la Vineria Sonora, un bar à vin incroyable avec plus de 2 000 vins différents de toute l\'Italie.',
    'tours.page.day5.eyebrow': 'Expérience Immersive',
    'tours.page.day5.title': 'Journée Boucherie Toscane',
    'tours.page.day5.text': 'La tradition bouchère de la Toscane est connue dans le monde entier. Laissez le Chef Davide vous faire découvrir cette tradition incroyable. Nous commencerons par visiter l\'une des plus anciennes boucheries de Toscane, la célèbre Macelleria Cecchini, où nous dégusterons un aperitivo extraordinaire. L\'après-midi, nous serons accompagnés par le Maître Boucher Felipe pour apprendre à découper une belle Fiorentina. Nous la cuisinerons ensemble et la dégusterons dans un lieu magnifique.',
    'tours.page.day6.eyebrow': 'Campagne Toscane',
    'tours.page.day6.title': 'Équitation et Déjeuner dans un Casale',
    'tours.page.day6.text': 'Cette journée sera dédiée à la beauté des collines toscanes. Nous aurons le choix de les découvrir à cheval ou en vélo électrique, profitant des paysages à couper le souffle qui rendent cette région légendaire. Nous déjeunerons dans un Agriturismo toscan, entouré d\'oliviers et de vignobles.',
    'tours.page.day7.eyebrow': 'Le Grand Final',
    'tours.page.day7.title': 'Cours d\'Aperitivo et Dîner Final du Chef Davide',
    'tours.page.day7.text': 'Le grand finale. Accompagnés par le Maître Barman Luca, nous apprendrons à mélanger les ingrédients parfaits pour un vrai cocktail aperitivo italien. Pour le dîner, le Chef Davide vous enchantera avec un repas traditionnel italien de 4 services, un festin d\'adieu surprise pour clôturer une semaine inoubliable.',
    'tours.page.included.title': 'Ce Qui Est Inclus',
    'tours.page.included.subtitle': 'Le forfait comprend tout ce dont vous avez besoin pour une semaine inoubliable en Toscane.',
    'tours.page.included.i1': 'Toutes les expériences culinaires et activités',
    'tours.page.included.i2': 'Hébergement 7 nuits',
    'tours.page.included.i3': 'Tous les repas et dégustations',
    'tours.page.included.i4': 'Transport hors de Florence',
    'tours.page.included.i5': 'Équitation ou tour en vélo électrique',
    'tours.page.included.i6': 'Cours de pâtes à Florence',
    'tours.page.included.i7': 'Tour des vins du Chianti (journée complète)',
    'tours.page.included.i8': 'Masterclass cocktail aperitivo',
    'tours.page.included.note': '<strong>Veuillez noter :</strong> Pendant les journées à Florence, nous marcherons environ 10 000 pas, veuillez donc prévoir des chaussures confortables et une bouteille d\'eau.',
    'tours.page.booking.title': 'Conditions de Réservation',
    'tours.page.booking.subtitle': 'Pour réserver votre place, vous devrez :',
    'tours.page.booking.b1': 'Effectuer un <strong>dépôt de 1 000 $</strong> via la page de paiement une fois disponible',
    'tours.page.booking.b2': 'Accepter notre <strong>politique d\'annulation</strong> et notre <strong>calendrier de paiement</strong>',
    'tours.page.booking.note': '<strong>Veuillez noter :</strong> 500 $ du dépôt de 1 000 $ pour la chambre sont non remboursables à tout moment.',
    'tours.page.payment.title': 'Calendrier de Paiement',
    'tours.page.payment.s1.title': 'Dépôt Initial — 1 000 $ par chambre',
    'tours.page.payment.s1.text': 'Dû lors de la réservation par une personne. Cela confirme votre place (valable pour deux personnes) et est appliqué à votre solde total.',
    'tours.page.payment.s2.title': 'Premier Versement',
    'tours.page.payment.s2.text': 'Dû 10 mois avant le début du tour. Les factures seront envoyées par email deux semaines avant chaque date d\'échéance.',
    'tours.page.payment.s3.title': 'Deuxième Versement',
    'tours.page.payment.s3.text': 'Dû 7 mois avant le début du tour.',
    'tours.page.payment.s4.title': 'Versement Final',
    'tours.page.payment.s4.text': 'Dû 4 mois avant le début du tour.',
    'tours.page.payment.note': 'Les invités peuvent choisir lors de l\'inscription d\'être facturés par chef de groupe, par chambre ou par personne. Cependant, le dépôt doit être effectué par une seule personne couvrant le dépôt de la chambre entière. Si vous souhaitez réserver en groupe de chambres, veuillez envoyer un email à <a href="mailto:chefdavide@squisitapassione.com" style="color: var(--color-tomato); font-weight: 500;">chefdavide@squisitapassione.com</a> pour plus d\'informations.',
    'tours.page.terms.title': 'Termes et Conditions',
    'tours.page.terms.t1': '500 $ du dépôt initial sont <strong>non remboursables</strong> à tout moment.',
    'tours.page.terms.t2': 'Les annulations effectuées <strong>plus de 120 jours</strong> avant la date de début du tour recevront un remboursement de tous les paiements moins la portion non remboursable de 500 $ du dépôt.',
    'tours.page.terms.t3': 'Les annulations effectuées <strong>120 jours ou moins</strong> avant la date de début du tour ne sont pas remboursables, mais la place peut être transférée à un autre invité.',
    'tours.page.terms.t4': 'En réservant, vous confirmez que vous avez <strong>18 ans ou plus</strong>, et vous acceptez le calendrier de paiement et les termes énumérés ci-dessus.',
    'tours.page.faq.title': 'Questions Fréquentes',
    'tours.page.faq.q1': 'Quelle est la durée du tour ?',
    'tours.page.faq.a1': 'Le tour est un forfait tout inclus de 7 jours qui couvre l\'hébergement, toutes les expériences culinaires, la nourriture et le transport hors de Florence.',
    'tours.page.faq.q2': 'Qu\'est-ce qui est inclus dans le tour ?',
    'tours.page.faq.a2': 'Le forfait comprend toutes les expériences, la nourriture, l\'hébergement et le transport hors de Florence. Les vols ne sont pas inclus.',
    'tours.page.faq.q3': 'Combien de personnes peuvent participer ?',
    'tours.page.faq.a3': 'Pour maintenir la nature intime et personnelle de l\'expérience, les groupes restent petits. Le dépôt couvre une chambre pour deux personnes. Contactez-nous pour les réservations de groupe.',
    'tours.page.faq.q4': 'Quelle est la meilleure période pour visiter ?',
    'tours.page.faq.a4': 'La Toscane est belle toute l\'année. Le printemps (avril-juin) offre un temps doux et des paysages fleuris. L\'automne (septembre-novembre) apporte la saison des récoltes et la chasse aux truffes. L\'été est chaud et vibrant, tandis que l\'hiver offre une expérience locale plus calme et authentique.',
    'tours.page.faq.q5': 'Que dois-je apporter ?',
    'tours.page.faq.a5': 'Pendant les journées à Florence, nous marcherons environ 10 000 pas, alors veuillez apporter des chaussures confortables et une bouteille d\'eau. Voyagez léger et habillez-vous confortablement — c\'est une expérience informelle et détendue.',
    'tours.page.faq.q6': 'Vous avez encore des questions ?',
    'tours.page.faq.a6': 'Nous sommes là pour vous aider ! Envoyez-nous un email à <a href="mailto:chefdavide@squisitapassione.com" style="color: var(--color-tomato);">chefdavide@squisitapassione.com</a> ou contactez-nous via WhatsApp pour une assistance personnelle.',
    'tours.page.cta.title': 'Prêt pour une Aventure Culinaire ?',
    'tours.page.cta.text': 'Planifions votre voyage culinaire italien parfait. Contactez le Chef Davide pour commencer à concevoir votre expérience inoubliable en Toscane.',
    'tours.page.cta.button': 'Réservez Votre Place'
  }
};

// ==================== I18N CLASS ====================
class I18n {
  constructor(defaultLang = 'en') {
    this.currentLang = this.getSavedLanguage() || defaultLang;
    this.translations = translations;
    this.init();
  }
  
  init() {
    this.updatePageLanguage();
    this.setupLanguageButtons();
  }
  
  getSavedLanguage() {
    return localStorage.getItem('squisita_lang');
  }
  
  saveLanguage(lang) {
    localStorage.setItem('squisita_lang', lang);
  }
  
  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      this.saveLanguage(lang);
      this.updatePageLanguage();
      this.updateLanguageButtons();
      
      // Update HTML lang attribute
      document.documentElement.lang = lang;
    }
  }
  
  translate(key) {
    return this.translations[this.currentLang][key] || key;
  }
  
  updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translate(key);
      
      if (translation) {
        // Handle different element types
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else if (element.tagName === 'OPTION') {
          element.textContent = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
    
    // Handle HTML translations (elements with links, etc.)
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    
    htmlElements.forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = this.translate(key);
      
      if (translation) {
        element.innerHTML = translation;
      }
    });
    
    // Update page title
    document.title = `Squisita Passione | Chef Davide Rizzardi`;
  }
  
  setupLanguageButtons() {
    const langButtons = document.querySelectorAll('[data-lang]');
    
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
    
    this.updateLanguageButtons();
  }
  
  updateLanguageButtons() {
    const langButtons = document.querySelectorAll('[data-lang]');
    
    langButtons.forEach(button => {
      const lang = button.getAttribute('data-lang');
      button.classList.toggle('header__lang-btn--active', lang === this.currentLang);
    });
  }
}

// Initialize i18n
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n('en');
});
