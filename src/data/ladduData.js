import boondiImg from '../assets/image/boondi.webp'
import churmaImg from '../assets/image/churma.webp'
import motichoorImg from '../assets/image/motichoor.webp'
import magajImg from '../assets/image/magaj.webp'
import mathiyaaImg from '../assets/image/mathiyaa.webp'
import sugarfreeImg from '../assets/image/sugarfree.webp'
import festiveBannerImg from '../assets/image/festive_banner.webp'
import gondImg from '../assets/image/gond.webp'
import besanImg from '../assets/image/besan.webp'
import attaImg from '../assets/image/atta.webp'
import kajuPistaImg from '../assets/image/kaju_pista.webp'
import motaiyyaImg from '../assets/image/motaiyya.webp'

// Micro-optimized thumbnails (5-7 KB each)
import boondiThumb from '../assets/image/boondi_thumb.webp'
import churmaThumb from '../assets/image/churma_thumb.webp'
import motichoorThumb from '../assets/image/motichoor_thumb.webp'
import magajThumb from '../assets/image/magaj_thumb.webp'
import mathiyaaThumb from '../assets/image/mathiyaa_thumb.webp'
import sugarfreeThumb from '../assets/image/sugarfree_thumb.webp'

export { festiveBannerImg, attaImg, kajuPistaImg, motaiyyaImg }

export const laddus = [
  {
    id: 'boondi',
    name: 'Boondi Laddu',
    heading: 'Buy Traditional Boondi Laddu Online',
    anchorId: 'boondi-laddu',
    imageAlt: 'Traditional Indian Boondi Laddu',
    subheading: 'Juicy Golden Pearl Classic | Best Boondi Laddu in India',
    description: 'Looking to buy Boondi Laddu online? Enjoy the authentic taste of traditional Boondi Laddu (Boondi Ke Laddu), handcrafted from golden fried gram flour pearls infused with 100% pure desi ghee, melon seeds (magaz), and aromatic green cardamom. Inquire online to enjoy the finest festive Indian sweets with classic melt-in-mouth texture.',
    image: boondiImg,
    mainImage: boondiImg,
    thumbnail: boondiThumb,
    tag: 'All Time Classic',
    prices: { '250g': 200, '500g': 380, '1kg': 740 },
    highlights: ['Juicy Besan Pearls', 'Pure Premium Ghee', 'Melon Seeds (Magaz)', 'Cardamom & Cloves'],
    tasteProfile: 'Juicy, soft, syrupy festive sweetness with fragrant cardamom notes.',
    leftImage: boondiImg,
    rightImage: festiveBannerImg,
    seo: {
      question: 'What is Boondi Laddu?',
      shortAnswer: 'Boondi Laddu is an iconic, timeless traditional Indian sweet handcrafted from miniature golden droplets (boondi) of pure gram flour (besan) fried to golden crispness in 100% premium ghee, steeped in aromatic cardamom sugar syrup, and rolled into juicy festive spheres with melon seeds (magaz). Often celebrated as the best Boondi Laddu in India for family celebrations and festivals.',
      origin: 'Tracing back centuries across the royal kitchens of Northern, Western, and Southern India, Boondi Laddu (Boondi Ke Laddu) is revered in Vedic tradition as the sweetest offering of gratitude, sacred temple prasadam, and celebratory joy.',
      ingredientsList: [
        'Pure Gram Flour (Chana Besan) droplets',
        '100% Premium Desi Ghee',
        'Melon Seeds (Char Magaz) for crunch',
        'Green Cardamom (Elaichi) & Aromatic Cloves',
        'Natural Sugar Syrup with pure rose water'
      ],
      craftsmanship: 'The secret to authentic traditional Boondi Laddu lies in the slotted ladle (jhara) technique, where droplets are dropped into boiling desi ghee at precise temperatures. Once golden, the hot boondis absorb fragrant cardamom syrup before master halwais hand-roll each sphere warm.',
      occasions: 'Weddings, housewarmings (Griha Pravesh), Diwali, Raksha Bandhan, and sacred temple prasadam.'
    }
  },
  {
    id: 'churma',
    name: 'Churma Laddu',
    heading: 'Churma Laddu',
    anchorId: 'churma-laddu',
    imageAlt: 'Gujarati Churma Laddu',
    subheading: 'Authentic Khus Khus Coated Tradition | Traditional Gujarati Laddu',
    description: 'Looking for authentic Churma Laddu? This iconic pride of Gujarati and Rajasthani festive banquets is handcrafted from whole-wheat bati fried in 100% pure desi cow ghee, hand-crushed into rich coarse churma, sweetened with organic jaggery (gud), and rolled into majestic spheres generously coated with white poppy seeds (khus khus). Inquire online for festive occasions and family celebrations.',
    image: churmaImg,
    mainImage: churmaImg,
    thumbnail: churmaThumb,
    tag: 'Royal Festive Pride',
    prices: { '250g': 220, '500g': 420, '1kg': 820 },
    highlights: ['Stone-Ground Wheat Churma', 'Pure Organic Jaggery', 'Crisp White Poppy Seeds (Khus Khus)', 'Premium Ghee'],
    tasteProfile: 'Rustic, crunchy poppy seed crust with deep caramelized jaggery and roasted wheat warmth.',
    leftImage: churmaImg,
    rightImage: festiveBannerImg,
    seo: {
      question: 'What is Churma Laddu?',
      shortAnswer: 'Churma Laddu is the royal festive pride of Gujarati and Rajasthani banquets, prepared by frying whole-wheat flour batis in pure premium ghee, crushing them into rich coarse churma, sweetening naturally with unrefined organic jaggery (gud), and rolling each majestic sphere generously in white poppy seeds (khus khus).',
      origin: 'Born in the royal courts of Mewar, Marwar, and Gujarat as royal traveler nutrition, Churma Laddu evolved into the highest symbol of festive hospitality and sacred Ganesh Chaturthi prasad.',
      ingredientsList: [
        'Coarsely Ground Stone-Milled Whole Wheat Flour',
        '100% Premium Desi Ghee',
        'Pure Organic Desi Jaggery (Gur / Gud)',
        'Crunchy White Poppy Seeds (Khus Khus) outer crust',
        'Cardamom Seeds, Nutmeg & Chopped Dry Fruits'
      ],
      craftsmanship: 'Traditional wheat dough batis are slow-fried in pure ghee until crisp, then hand-crushed into golden crumbly churma. Warm ghee and melted natural jaggery are folded together before rolling the spherical laddus across a bed of crisp khus khus seeds.',
      occasions: 'Ganesh Utsav, traditional Gujarati wedding banquets, Shrimant, and auspicious family gatherings.'
    }
  },
  {
    id: 'motichoor',
    name: 'Motichoor Laddu',
    heading: 'Motichoor Laddu',
    anchorId: 'motichoor-laddu',
    imageAlt: 'Traditional Motichoor Laddu',
    subheading: 'The Royal Saffron Delicacy | Festive Special Laddu',
    description: 'Experience genuine Motichoor Laddu, the crowning jewel of traditional Indian sweets. Melt-in-your-mouth microscopic saffron pearls are slow-cooked in pure premium ghee and infused with aromatic green cardamom. Served in elegant royal presentation, topped with slivered emerald pistachios and almonds. Inquire online for wedding shagun, Diwali, and festive celebrations.',
    image: motichoorImg,
    mainImage: motichoorImg,
    thumbnail: motichoorThumb,
    tag: 'Festive Favorite',
    prices: { '250g': 240, '500g': 450, '1kg': 880 },
    highlights: ['Pure Kashmiri Saffron', 'Premium Ghee', 'Slivered Pistachios & Almonds', 'Served in Royal Paper Cups'],
    tasteProfile: 'Delicate, juicy, floral saffron sweetness with cardamom warmth.',
    leftImage: motichoorImg,
    rightImage: festiveBannerImg,
    seo: {
      question: 'What is Motichoor Laddu?',
      shortAnswer: 'Motichoor Laddu (literally "crushed pearls") is the crowning jewel of Indian artisanal sweets, handcrafted from microscopic droplets of fine gram flour (besan) batter slow-fried in 100% premium ghee, steeped in authentic Kashmiri saffron (kesar) and green cardamom syrup, and delicately rolled into juicy golden spheres presented in royal fluted paper cups.',
      origin: 'With roots in ancient Vedic texts and Mughal-era royal banquets, Motichoor Laddu represents divine grace and auspicious celebration. In Hindu tradition, it is the sacred favorite offering to Lord Ganesha, revered as the harbinger of prosperity.',
      ingredientsList: [
        'Fine Grade-A Chana Dal Gram Flour (Besan)',
        '100% Premium Desi Ghee',
        'Pure Mongra Kashmiri Saffron Strands (Real Kesar)',
        'Freshly Cracked Malabar Green Cardamom (Elaichi)',
        'Slivered Emerald Iranian Pistachios & California Almonds'
      ],
      craftsmanship: 'Crafting genuine Motichoor requires rare generational skill: batter is tapped through microscopic perforated ladles into boiling desi ghee to form miniature pearls. These tender golden pearls are soaked warm in saffron syrup until bursting with flavor, then pressed gently by hand without crushing their individual pearl structure.',
      occasions: 'Royal wedding shagun, Ganesh Chaturthi, Diwali puja, baby showers, luxury corporate gift boxes, and sacred temple prasadam.'
    }
  },
  {
    id: 'magaj',
    name: 'Magaj Laddu',
    heading: 'Magaj Laddu',
    anchorId: 'magaj-laddu',
    imageAlt: 'Gujarati Magaj Laddu',
    subheading: 'Traditional Magas Heritage | Authentic Gujarati Sweets',
    description: 'Authentic Gujarati Magaj Laddu (popularly known in Gujarat as Magas or Magaj na Ladu) is handcrafted from coarsely ground gram flour roasted to deep golden hazelnut brown in pure cultured cow ghee. Packed with toasted nuts, nutmeg, and crunchy magaz seeds. Inquire online for authentic Gujarati sweets delivered fresh across India.',
    image: magajImg,
    mainImage: magajImg,
    thumbnail: magajThumb,
    tag: 'Heritage Special',
    prices: { '250g': 230, '500g': 440, '1kg': 850 },
    highlights: ['Slow-Roasted Coarse Besan', 'Pure Premium Ghee', 'Watermelon Magaz Seeds', 'Nutmeg & Elaichi'],
    tasteProfile: 'Rich, melt-in-mouth roasted nutty aroma with comforting ghee depth.',
    leftImage: magajImg,
    rightImage: festiveBannerImg,
    seo: {
      question: 'What is Magaj Laddu (Magas)?',
      shortAnswer: 'Magaj Laddu (popularly known as Gujarati Magas) is a rich, slow-roasted traditional confectionery delicacy prepared by patient halwais roasting coarse gram flour (dardaro besan) in heavy brass kadhais with pure cultured premium ghee until deep hazelnut brown, then combined with toasted magaz seeds (watermelon seeds), nutmeg, and green cardamom.',
      origin: 'A prized winter and festive culinary heritage across Gujarat, Magaj Laddu is cherished for its deeply nourishing warmth, high protein content from gram flour, and easy digestibility through pure premium ghee.',
      ingredientsList: [
        'Stone-Ground Coarse Gram Flour (Dardaro Besan)',
        '100% Premium Desi Ghee',
        'Roasted Watermelon & Musk Melon Seeds (Char Magaz)',
        'Fragrant Hand-Ground Nutmeg (Jaiphal) & Green Cardamom',
        'Unrefined Fine Boora / Organic Sugar Crystals'
      ],
      craftsmanship: 'Master halwais slow-roast the coarse besan continuously on medium flames for over 90 minutes. The hallmark of authentic Magaj is the "dhanedaar" (granular) texture achieved when milk or ghee droplets are sprinkled during roasting to create delicate melt-in-the-mouth crumb.',
      occasions: 'Gujarati wedding banquets, Diwali hospitality, winter vitality gifting, and sacred temple offerings.'
    }
  },
  {
    id: 'mathiyaa',
    name: 'Mathiya Laddu',
    heading: 'Mathiya Laddu',
    anchorId: 'mathiya-laddu',
    imageAlt: 'Traditional Mathiya Laddu',
    subheading: 'Sacred Utsav Delicacy | Traditional Gujarati Laddu',
    description: 'Cherished as a festive Gujarati delicacy, Mathiya Laddu is handcrafted from slow-roasted fine flour blends, pure premium desi ghee, whole crunchy cashews, and fragrant green cardamom seeds. Beloved for sacred prasad, family milestones, and Diwali utsav. Inquire online for authentic handcrafted Mathiya Laddu.',
    image: mathiyaaImg,
    mainImage: mathiyaaImg,
    thumbnail: mathiyaaThumb,
    tag: 'Auspicious Tradition',
    prices: { '250g': 240, '500g': 460, '1kg': 890 },
    highlights: ['Traditional Flour Blend', 'Pure Premium Desi Ghee', 'Whole Crunchy Cashew Tops', 'Green Cardamom Infusion'],
    tasteProfile: 'Silky smooth, rich golden flavor with comforting roasted ghee aroma.',
    leftImage: mathiyaaImg,
    rightImage: festiveBannerImg,
    seo: {
      question: 'What is Mathiya Laddu?',
      shortAnswer: 'Mathiya Laddu is an auspicious Gujarati festive delicacy handcrafted from slow-roasted fine flour blends, pure premium ghee, whole toasted Goan cashews, and aromatic green cardamom seeds, prepared specially for sacred utsav celebrations and temple bhog offerings.',
      origin: 'Deeply ingrained in Gujarat\'s sacred festival folklore, Mathiya Laddu represents pristine purity and domestic harmony, offered as divine prasad during auspicious pujas and family milestones.',
      ingredientsList: [
        'Signature Roasted Flour Blend',
        '100% Premium Desi Ghee',
        'Whole Golden Toasted Cashews',
        'Freshly Ground Green Cardamom Seeds',
        'Pure Organic Sweetener'
      ],
      craftsmanship: 'The flour blend is gently roasted on low embers until emitting a warm buttery fragrance, then folded with warm ghee and whole cashews to form smooth, velvety golden spheres that retain their aroma for over 45 days.',
      occasions: 'Navratri, Diwali, family satsangs, wedding return gifts, and temple bhog.'
    }
  },
  {
    id: 'sugarfree',
    name: 'Dry Fruit Laddu',
    heading: 'Dry Fruit Laddu',
    anchorId: 'dry-fruit-laddu',
    imageAlt: 'Premium Dry Fruit Laddu',
    subheading: 'Zero Added Sugar Superfood | Nutritious Dry Fruit Laddu',
    description: 'Looking for healthy Dry Fruit Laddu? This luxurious guilt-free superfood confection is naturally sweetened only with premium Medjool dates and Afghan dried figs (anjeer). Overflowing with crunchy California almonds, Goan cashews, Iranian pistachios, pumpkin seeds, and poppy seeds with 100% zero refined sugar. Inquire online for wellness gifting and festive celebrations.',
    image: sugarfreeImg,
    mainImage: sugarfreeImg,
    thumbnail: sugarfreeThumb,
    tag: 'Zero Sugar & Healthy',
    prices: { '250g': 380, '500g': 720, '1kg': 1390 },
    highlights: ['100% Zero Added Sugar', 'Naturally Sweetened with Dates & Figs', 'Almonds, Cashews & Pistachios', 'Pumpkin & Poppy Seeds'],
    tasteProfile: 'Chewy, rich natural fruit sweetness with intense crunchy nutty layers.',
    leftImage: sugarfreeImg,
    rightImage: festiveBannerImg,
    seo: {
      question: 'What are Dry Fruit Laddu?',
      shortAnswer: 'Dry Fruit Laddu is an energy dense, guilt free superfood confection handcrafted with 100% zero added refined sugar, naturally bound and sweetened only with soft Arabian Medjool dates and Afghan dried figs (anjeer), blended with roasted California almonds, Goan cashews, Iranian pistachios, pumpkin seeds, and premium ghee.',
      origin: 'Conceived from Ayurvedic vitality principles (Rasayana), this laddu delivers clean sustained energy, essential minerals, natural fiber, and heart-healthy micronutrients for wellness-conscious individuals and diabetics.',
      ingredientsList: [
        '100% Zero Added Sugar (No White Sugar, No Sugar Alcohol)',
        'Naturally Sweetened with Medjool Dates & Afghan Figs (Anjeer)',
        'Californian Almonds, Whole Cashews & Iranian Pistachios',
        'Nutrient-Dense Pumpkin Seeds & Crisp Poppy Seeds',
        'A hint of Green Cardamom & Premium Ghee'
      ],
      craftsmanship: 'Whole dry fruits and seeds are lightly dry-roasted to activate essential oils and crunchy texture. Natural dates and figs are gently warmed with pure ghee to release natural sweetness, then folded with the roasted nuts and pressed warm into nutrient-packed spheres.',
      occasions: 'Healthy festive gifting, post-workout recovery, diabetic-friendly celebrations, fasting (Vrat), and daily morning energy.'
    }
  }
];

export const blogs = [
  {
    id: 1,
    title: 'Motichoor Laddu: The Royal Saffron Pearls of Indian Celebrations',
    author: 'Master Halwai',
    image: motichoorImg,
    date: 'March 14, 2026',
    description: 'Discover how fine besan pearls fried in premium ghee and steeped in saffron syrup became the quintessential symbol of joy and auspicious beginnings.',
    content: `
      <p><strong>Experience the Sacred Grandeur of Authentic Saffron Motichoor</strong></p>
      <p><strong>Motichoor Laddu</strong>, which literally translates from Sanskrit to <em>'crushed pearls'</em> (<em>Moti</em> = Pearl, <em>Choor</em> = Crushed), has reigned supreme across royal durbars, sacred temples, and family celebrations for hundreds of years. Unlike coarse commercial sweets, genuine Motichoor represents the peak of traditional halwai craftsmanship: microscopic droplets of pure chickpea flour batter fried in pure premium ghee, steeped in aromatic saffron sugar syrup, and delicately rolled into juicy golden spheres.</p>
      
      <h3>The Sacred Heritage & Cultural Significance</h3>
      <p>In ancient Vedic tradition, the laddu is honored as the beloved offering to <strong>Lord Ganesha</strong>, the remover of obstacles (Vighnaharta), symbolizing happiness, fullness of life, and prosperity. Across Rajasthan, Gujarat, and Northern India, no auspicious ceremony—from wedding shagun and baby showers (Shrimant) to Diwali and Ganesh Utsav—is considered complete without the blessing of fresh Motichoor laddus.</p>

      <h3>The Halwai Science of Microscopic Boondi Pearls</h3>
      <p>True artisanal Motichoor requires years of patient apprenticeship. The craftsmanship follows an exact culinary science:</p>
      <ul>
        <li><strong>Fine Sifted Besan Batter:</strong> Only triple-sifted, grade-A chana dal flour is whisked with filtered water to achieve a delicate pouring consistency free from lumps.</li>
        <li><strong>The Perforated Brass Jhara:</strong> Master halwais gently tap the batter through a specialized brass ladle (jhara) with microscopic needle holes directly above bubbling brass kadhais filled with 100% pure premium ghee.</li>
        <li><strong>Instant Golden Crispness:</strong> The tiny pearls float and fry within 30 to 45 seconds at controlled temperatures, creating airy pearls that absorb syrup without turning soggy.</li>
        <li><strong>Ek-Taar Saffron Infusion:</strong> The freshly fried pearls are immersed warm into single-string sugar syrup infused with pure Kashmiri Mongra saffron threads and hand-ground green cardamom seeds.</li>
      </ul>

      <h3>100% Real Saffron vs. Artificial Food Colors</h3>
      <p>Most commercial sweet shops rely on chemical dyes like Tartrazine and Sunset Yellow to achieve an artificial bright orange tint. In our kitchen in Surat, our luminous golden hue comes exclusively from <strong>authentic Kashmiri Mongra saffron</strong>. When warm ghee meets real saffron, it releases a lingering floral aroma and a natural sunset glow that is gentle on your health and pure for religious offerings.</p>

      <h3>Garnishes Fit for Royalty</h3>
      <p>Every sphere is rolled while still warm, folded with toasted watermelon seeds (char magaz), slivered Californian almonds, and crunchy Iranian emerald pistachios. For our ceremonial gift collections, each laddu is adorned with pure certified edible silver vark (chandi ka vark) and placed in individual fluted royal paper cups.</p>

      <h3>Natural Shelf Life & Freshness Secrets</h3>
      <p>Because every single droplet is cooked in <strong>100% pure premium ghee</strong> rather than vegetable oil, our Motichoor laddus possess a natural preservative quality. Stored at room temperature in our airtight food-grade tins, they remain tender, fragrant, and delicious for <strong>30 to 45 days</strong> without artificial stabilizers or refrigeration.</p>

      <h3>How to Serve & Festive Gifting Recommendations</h3>
      <p>Motichoor Laddu is best enjoyed at ambient room temperature, paired with savory festive snacks like Mathiya or alongside a warm cup of spiced masala chai. It makes the ultimate grand gift for wedding return invitations, festive corporate hampers, and religious puja prasad.</p>
    `
  },
  {
    id: 2,
    title: 'Ayurvedic Gond Laddu: Ancient Wisdom for Joint Health & Vitality',
    author: 'Master Halwai',
    image: gondImg,
    date: 'February 28, 2026',
    description: 'Explore the traditional science behind edible gum (dink/gond) combined with nuts and jaggery, providing natural warmth and immunity during season changes.',
    content: `
      <p><strong>Ancient Ayurvedic Nutrition for Lifelong Vitality & Joint Health</strong></p>
      <p>For centuries, Ayurvedic vaidyas and wise Indian grandmothers have revered <strong>Gond ke Laddu</strong> (also known as <em>Dinkache Ladoo</em> in Maharashtra and Gujarat) as a supreme rejuvenation food (<em>Rasayana</em>). Crafted from edible acacia tree resin (gondh), slow-roasted dry fruits, pure desi cow ghee, and unrefined country jaggery, this nourishing delicacy serves as both a culinary luxury and a potent natural vitality tonic.</p>

      <h3>What is Gondh? The Natural Calcium-Rich Tree Resin</h3>
      <p>Gondh is the dried, crystal-like sap harvested from wild acacia trees (Babool). In Ayurvedic pharmacology, it is celebrated for its soothing, demulcent, and strengthening properties. When fried in pure hot ghee, the hard amber crystals puff up into light, crunchy, cloud-like nuggets that effortlessly dissolve upon chewing.</p>

      <h3>Top Proven Health Benefits of Ayurvedic Gond Laddu</h3>
      <ul>
        <li><strong>🦴 Joint Lubrication & Bone Density:</strong> Natural plant resins in gondh are packed with calcium, magnesium, and collagen-boosting nutrients that nourish synovial fluids, helping alleviate knee pain, arthritis stiffness, and spinal discomfort.</li>
        <li><strong>🤱 Postpartum Recovery & Lactation Support:</strong> Traditionally prepared for new mothers during the postpartum confinement period (sootak), Gond laddus accelerate uterine recovery, replenish lost iron and calcium, and naturally support healthy lactation.</li>
        <li><strong>🔥 Internal Thermogenesis & Winter Immunity:</strong> Gondh exhibits warming potency (<em>Ushna Virya</em>), stimulating sluggish metabolic fires (Agni), protecting against seasonal coughs, and shielding the body from harsh cold drafts.</li>
        <li><strong>🍯 Zero Refined Sugar: Sweetened with Pure Gur:</strong> Unlike commercial sweets sweetened with bleached white sugar, authentic Gond laddus are sweetened exclusively with organic, unrefined jaggery, providing slow-release sustained energy without sharp insulin spikes.</li>
        <li><strong>🌰 Brain-Boosting California Nuts & Spices:</strong> Hand-cracked Californian almonds, Kashmiri walnuts, dry dates (kharik), poppy seeds (khus khus), dry ginger powder (sonth), and grated nutmeg provide abundant omega-3 fatty acids and antioxidants.</li>
      </ul>

      <h3>The Master Halwai Technique: Frying Gond to Perfection</h3>
      <p>Frying gondh is a delicate art. If the ghee is too hot, the crystals burn outside while remaining rock-hard inside. If too cool, the gum turns sticky. Our master sweetmakers maintain medium-low temperatures in heavy brass kadhais, allowing each crystal to puff evenly from within into airy golden pearls with a delightful crunch.</p>

      <h3>The Optimal Morning Ayurvedic Ritual</h3>
      <p>To experience the full regenerative power of Gond Laddu, consume <strong>one laddu every morning</strong> on an empty or semi-empty stomach with a glass of warm grass-fed cow milk. This enhances the absorption of fat-soluble vitamins and delivers sustained physical stamina throughout your day.</p>

      <h3>Shelf Life & Storage Instructions</h3>
      <p>Thanks to low moisture content and the natural preservative qualities of pure premium ghee, our authentic Gond Laddus remain wonderfully fresh, aromatic, and crunchy for <strong>60 to 75 days</strong> when kept in our vacuum-sealed luxury tins at ambient room temperature.</p>
    `
  },
  {
    id: 3,
    title: 'The Magic of Premium Ghee in Traditional Indian Sweets',
    author: 'Master Halwai',
    image: besanImg,
    date: 'January 19, 2026',
    description: 'Why the ancient Vedic two-way churning method produces ghee that elevates Indian mithai from ordinary sweet to divine sacred prasad.',
    content: `
      <p><strong>The Golden Heart & Sacred Soul of Authentic Indian Mithai</strong></p>
      <p>In Indian culinary philosophy, sweetmaking is considered a sacred art, and <strong>pure ghee</strong> is its very lifeblood. While mass-produced modern confectionery frequently cuts corners with cheap palm oils, hydrogenated fats (vanaspati), and synthetic flavor essences, traditional Indian halwais know that genuine flavor, sublime mouthfeel, and therapeutic health benefits can only be achieved through <strong>100% pure cultured premium ghee</strong>.</p>

      <h3>The Ancient Bilona Method: How Vedic Ghee is Made</h3>
      <p>Unlike commercial butter oil produced by industrial cream centrifugation, authentic Vedic ghee is crafted through the sacred five-stage traditional process:</p>
      <ul>
        <li><strong>Whole Grass-Fed Cow Milk:</strong> Sourced fresh from indigenous, grass-fed cows.</li>
        <li><strong>Culturing into Pure Curd:</strong> The boiled milk is naturally fermented overnight with natural starter curd (dahi).</li>
        <li><strong>Two-Way Wooden Churning (Bilona):</strong> The curd is hand-churned in bidirectional motions using a wooden churner (mathani) to separate pristine cultured butter (makkhan).</li>
        <li><strong>Slow Fire Clarification:</strong> The fresh butter is simmered on low flame in heavy brass vessels, slowly evaporating moisture and caramelizing milk solids into a golden liquid with a mesmerizing nutty aroma.</li>
      </ul>

      <h3>Why Pure Ghee is Superior for Roasting Flours</h3>
      <p>The culinary advantages of pure ghee go far beyond simple flavor:</p>
      <ul>
        <li><strong>High Smoke Point (250°C / 482°F):</strong> Ghee does not break down or produce harmful free radicals or acrolein during the extended 60 to 90 minute roasting required for flours like besan, wheat, and gondh.</li>
        <li><strong>Nutty Maillard Reaction:</strong> Slow roasting flours in ghee triggers deep caramelization, creating a velvety, granular texture (<em>dhanedaar</em>) that melts smoothly on the palate without sticking to the teeth.</li>
        <li><strong>Natural Preservative Power:</strong> With virtually zero moisture content, pure ghee seals and protects the sweets from microbial spoilage, allowing our artisanal laddus to stay fresh for 30 to 45 days at ambient room temperature.</li>
      </ul>

      <h3>Digestive Harmony & Gut Wellness</h3>
      <p>Ayurveda classifies pure ghee as a supreme <em>Yogavahi</em>—an active catalytic agent that carries the nutrients of herbs, dry fruits, and spices deep into the bodily tissues (Dhatus). Furthermore, ghee is one of nature's richest dietary sources of <strong>butyric acid</strong>, a short-chain fatty acid that repairs the intestinal lining, reduces gut inflammation, and supports healthy gut microbiota.</p>

      <h3>A Word of Caution on Commercial Confectionery Fats</h3>
      <p>Cheap commercial sweets made with hydrogenated vegetable fats (Dalda) or fractionated palm oil contain harmful trans-fatty acids that harden at room temperature, coat the palate with a greasy wax film, and trigger sluggish digestion. Choosing 100% pure ghee guarantees that every single bite is wholesome, nutrient-dense, and deeply nourishing.</p>

      <h3>The Sacred Prasadam Standard</h3>
      <p>In Hindu temples and festive ceremonies, only food prepared in pure ghee is deemed worthy of being offered as <em>Naivedya</em> to the Divine. When you share a box of our handcrafted laddus, you are sharing not just a dessert, but a sacred tradition of purity, gratitude, and genuine Indian hospitality.</p>
    `
  }
];

export const faqs = [
  {
    question: 'How can I buy or order Boondi Laddu online?',
    answer: 'You can easily place an inquiry to buy Boondi Laddu online directly through our website via WhatsApp (+91 88500 11652) or our quick inquiry form. Simply choose your preferred weight (250g, 500g, or 1kg) and our team in Surat will share freshly prepared packaging options, pricing, and express dispatch schedule.'
  },
  {
    question: 'What makes your Boondi Laddu the best traditional Boondi Laddu in India?',
    answer: 'Our traditional Boondi Laddu (Boondi Ke Laddu) is handcrafted using fine grade-A chana besan droplets slow-fried in 100% pure desi cow ghee, steeped in aromatic cardamom-rose syrup, and tossed with crunchy melon seeds (magaz). We use zero artificial food colors or preservatives, delivering authentic royal flavor and texture.'
  },
  {
    question: 'What are the different types of Gujarati and Indian Laddus available?',
    answer: 'Our traditional Indian and Gujarati sweet collection includes 6 authentic varieties: Boondi Laddu (golden gram flour pearls in pure ghee), Churma Laddu (coarsely ground wheat bati with organic jaggery and poppy seeds), Motichoor Laddu (microscopic saffron pearls), Magaj Laddu (dhanedaar slow-roasted gram flour with melon seeds), Mathiya Laddu (cherished festive utsav delicacy with cashews), and Dry Fruit Laddu (naturally sweetened with dates, figs, and loaded with crunchy nuts).'
  },
  {
    question: 'What is Boondi Laddu and how is it traditionally prepared?',
    answer: 'Boondi Laddu is an iconic Indian sweet made from miniature golden batter pearls (boondi) dropped through a perforated ladle (jhara) into sizzling 100% pure ghee. Once golden and crisp, the pearls absorb fragrant cardamom-infused sugar syrup before master halwais hand-roll each sphere warm.'
  },
  {
    question: 'What is the difference between Boondi Laddu and Motichoor Laddu?',
    answer: 'While both are made from gram flour (besan) and ghee, Boondi Laddu features larger, juicy golden pearls with crunchy melon seeds and a satisfying soft bite. Motichoor Laddu is crafted from microscopic, needle-fine pearls steeped in real Kashmiri saffron syrup, producing a delicate, ultra-melt-in-the-mouth texture.'
  },
  {
    question: 'How to store Laddu and keep it fresh?',
    answer: 'Because all our laddus are slow-roasted in 100% pure desi ghee with virtually zero moisture, they keep fresh naturally for 30 to 45 days at ambient room temperature in our airtight aroma-lock gift tins. Keep in a cool, dry place away from direct sunlight; no refrigeration is required.'
  },
  {
    question: 'Are these traditional Indian sweets suitable for festivals and celebrations?',
    answer: 'Yes! Our handcrafted laddus are the quintessential festive special laddu choice for Diwali, Ganesh Utsav, Raksha Bandhan, weddings, housewarmings, and temple bhog offerings. We offer custom gift packaging and bulk festive hampers across India.'
  },
  {
    question: 'Do you use any artificial colors, essence, or preservatives?',
    answer: 'Absolutely not. We adhere strictly to pure Vedic culinary principles. The vibrant golden hue comes from natural ingredients and real Kashmiri saffron, the aroma from hand-ground green cardamom and slow-roasted ghee, and we never add chemical preservatives.'
  }
];

import { policyData } from './policyData'
export const policies = policyData;
