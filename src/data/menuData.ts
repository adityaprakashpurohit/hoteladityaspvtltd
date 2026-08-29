import { MenuItem, MenuPageData, Testimonial, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'AURELIA',
  fullName: 'AURELIA HAUTE CUISINE & CELLAR',
  tagline: 'Where Every Dish Tells a Story',
  subTagline: 'Seasonal Artisanal Gastronomy & Sommelier Collection',
  foundingYear: '2016',
  michelinStars: 2,
  address: '428 Boulevard Saint-Honoré, Mayfair & 88 Grand Avenue',
  city: 'New York & Paris',
  phone: '+1 (212) 890-4420',
  conciergeEmail: 'reservations@aurelia-dining.com',
  hours: {
    lunch: 'Wednesday – Sunday: 12:00 PM – 2:30 PM',
    dinner: 'Tuesday – Sunday: 5:30 PM – 11:00 PM',
    chefTable: 'Nightly Seating at 6:30 PM & 9:00 PM',
    closed: 'Mondays',
  },
  social: {
    instagram: '@aurelia.cuisine',
    michelin: 'Michelin Guide 2-Star Selection',
  }
};

export const MENU_PAGES: MenuPageData[] = [
  // Page 0: Cover
  {
    pageNumber: 0,
    title: 'AURELIA',
    subtitle: 'CARTE DES METS & BOISSONS',
    sectionCategory: 'COVER',
    layoutType: 'cover',
    editorialQuote: 'A symphony of terroir, fire, and sensory precision.',
    chefNote: 'Autumn / Winter Degustation & À La Carte Selection'
  },

  // Page 1: Starters (Antipasti & Hors d’œuvres) - Left Spread
  {
    pageNumber: 1,
    title: 'HORS D’ŒUVRES',
    subtitle: 'The Prelude to the Senses',
    sectionCategory: 'Starters',
    layoutType: 'starters-left',
    editorialQuote: 'Delicate textures harvested at daybreak from coastal coves and organic gardens.',
    items: [
      {
        id: 'starter-1',
        name: 'Burrata Pugliese con Fichi',
        nativeName: 'Artisanal Puglian Burrata',
        description: 'Heirloom black mission figs, 25-year aged balsamic vinegar of Modena, crushed Bronte pistachios, organic micro-basil.',
        price: 26,
        formattedPrice: '$26',
        category: 'starters',
        tags: ['VEG', 'SIGNATURE'],
        winePairing: '2021 Roero Arneis DOCG, Bruno Giacosa',
        allergens: ['Dairy', 'Tree Nuts'],
        calories: '340 kcal'
      },
      {
        id: 'starter-2',
        name: 'Hokkaido Scallop Crudo',
        nativeName: 'Hand-Dived Scallops & Citrus',
        description: 'Finger lime pearls, cold-pressed Sicilian olive oil, compressed sea fennel, yuzu kosho emulsion, sea salt blossom.',
        price: 32,
        formattedPrice: '$32',
        category: 'starters',
        tags: ['CHEF_SPECIAL', 'GLUTEN_FREE'],
        winePairing: '2020 Chablis Grand Cru "Les Clos", Domaine Christian Moreau',
        allergens: ['Shellfish'],
        calories: '210 kcal'
      },
      {
        id: 'starter-3',
        name: 'Truffle Arancini al Tartufo Nero',
        nativeName: 'Black Winter Truffle Arancini',
        description: 'Crisp aged Carnaroli rice, molten alpine Fontina cheese heart, freshly grated Périgord black truffle, sage emulsion.',
        price: 24,
        formattedPrice: '$24',
        category: 'starters',
        tags: ['VEG', 'NEW'],
        winePairing: '2019 Franciacorta Brut Rosé, Bellavista',
        allergens: ['Dairy', 'Gluten'],
        calories: '380 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Hokkaido Scallop Crudo with Finger Lime Pearls'
  },

  // Page 2: Starters - Right Spread
  {
    pageNumber: 2,
    title: 'ANTIPASTI & CRUDO',
    subtitle: 'Land & Sea Harmonies',
    sectionCategory: 'Starters',
    layoutType: 'starters-right',
    items: [
      {
        id: 'starter-4',
        name: 'Wagyu Beef Carpaccio',
        nativeName: 'A5 Miyazaki Carpaccio',
        description: 'Thinly shaved cured tenderloin, cured egg yolk snow, pickled shallot pearls, caper berry chips, 36-month Parmigiano-Reggiano crisps.',
        price: 34,
        formattedPrice: '$34',
        category: 'starters',
        tags: ['SIGNATURE', 'GLUTEN_FREE'],
        winePairing: '2018 Barbaresco, Gaja',
        allergens: ['Egg', 'Dairy'],
        calories: '290 kcal'
      },
      {
        id: 'starter-5',
        name: 'Wild Forest Morel Crostini',
        nativeName: 'Morels & Whipped Stracciatella',
        description: 'Pan-roasted wild chanterelles and morels, whipped lemon thyme ricotta, grilled house-fermented sourdough, aged mountain honey.',
        price: 22,
        formattedPrice: '$22',
        category: 'starters',
        tags: ['VEG'],
        winePairing: '2020 Pinot Noir "Cuvée Aux Antipodes", Prophet’s Rock',
        allergens: ['Dairy', 'Gluten'],
        calories: '280 kcal'
      },
      {
        id: 'starter-6',
        name: 'Crispy Calamari & Gamberi Fritti',
        nativeName: 'Mediterranean Seafood Fritters',
        description: 'Baby squid and wild carabineros prawns in light rice flour crust, Espelette pepper dust, smoked saffron garlic aioli.',
        price: 28,
        formattedPrice: '$28',
        category: 'starters',
        tags: ['CHEF_SPECIAL'],
        winePairing: '2021 Vermentino di Sardegna "Capichera"',
        allergens: ['Shellfish', 'Egg'],
        calories: '420 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'A5 Miyazaki Carpaccio with Parmigiano Snow'
  },

  // Page 3: Main Courses (Primi & Secondi) - Left Spread
  {
    pageNumber: 3,
    title: 'PRIMI PIATTI',
    subtitle: 'Artisanal Pasta & Heritage Grains',
    sectionCategory: 'Mains',
    layoutType: 'mains-left',
    editorialQuote: 'Pasta crafted twice daily using organic stone-milled flour and pasture-raised golden yolks.',
    items: [
      {
        id: 'main-1',
        name: 'Handcrafted Truffle Tagliolini',
        nativeName: 'Tagliolini al Tartufo Pregiato',
        description: 'Silken 40-yolk egg ribbons, cultured Normandy butter, mountain Parmigiano brodo, table-shaved black winter truffles.',
        price: 48,
        formattedPrice: '$48',
        category: 'mains',
        tags: ['VEG', 'SIGNATURE', 'CHEF_SPECIAL'],
        winePairing: '2017 Barolo Monprivato, Giuseppe Mascarello',
        allergens: ['Dairy', 'Gluten', 'Egg'],
        calories: '560 kcal'
      },
      {
        id: 'main-2',
        name: 'Acquerello Wild Morel Risotto',
        nativeName: 'Risotto ai Funghi di Bosco',
        description: '7-year aged Carnaroli rice, forest mushroom essence, bone marrow mantecatura, crisp sage leaves, black garlic oil.',
        price: 42,
        formattedPrice: '$42',
        category: 'mains',
        tags: ['VEG', 'GLUTEN_FREE'],
        winePairing: '2019 Brunello di Montalcino, Biondi-Santi',
        allergens: ['Dairy'],
        calories: '510 kcal'
      },
      {
        id: 'main-3',
        name: 'Lobster & Saffron Agnolotti',
        nativeName: 'Agnolotti all’Astice Blu',
        description: 'Brittany blue lobster stuffing, sweet corn purée, saffron-infused shellfish bisque, sea urchin emulsion, chervil.',
        price: 54,
        formattedPrice: '$54',
        category: 'mains',
        tags: ['CHEF_SPECIAL', 'NEW'],
        winePairing: '2020 Meursault "Les Narvaux", Domaine d’Auvenay',
        allergens: ['Shellfish', 'Dairy', 'Gluten', 'Egg'],
        calories: '490 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Handcrafted Tagliolini with Périgord Black Truffle'
  },

  // Page 4: Main Courses (Secondi Piatti) - Right Spread
  {
    pageNumber: 4,
    title: 'SECONDI PIATTI',
    subtitle: 'The Hearth & The Ocean',
    sectionCategory: 'Mains',
    layoutType: 'mains-right',
    items: [
      {
        id: 'main-4',
        name: 'Patagonian Glacier Chilean Sea Bass',
        nativeName: 'Spigola Cilena in Guazzetto',
        description: 'Pan-seared sea bass, slow-braised baby artichoke barigoule, saffron fumet, sea herbs, crispy prosciutto veil.',
        price: 58,
        formattedPrice: '$58',
        category: 'mains',
        tags: ['SIGNATURE', 'GLUTEN_FREE'],
        winePairing: '2019 Corton-Charlemagne Grand Cru, Louis Latour',
        allergens: ['Fish'],
        calories: '460 kcal'
      },
      {
        id: 'main-5',
        name: '45-Day Dry-Aged Prime Ribeye',
        nativeName: 'Costata di Manzo al Fuoco',
        description: 'Prime Angus beef roasted over binchotan charcoal, smoked marrow emulsion, glazed Tokyo turnips, charred shallot bordelaise.',
        price: 68,
        formattedPrice: '$68',
        category: 'mains',
        tags: ['CHEF_SPECIAL', 'GLUTEN_FREE'],
        winePairing: '2016 Château Pontet-Canet, Pauillac Grand Cru',
        allergens: ['Dairy'],
        calories: '720 kcal'
      },
      {
        id: 'main-6',
        name: 'Herb-Crusted Rack of Colorado Lamb',
        nativeName: 'Carré d’Agnello alle Erbe',
        description: 'Bronte pistachio & wild rosemary crust, caramelized parsnip mousseline, baby rainbow carrots, lamb jus infused with lavender.',
        price: 62,
        formattedPrice: '$62',
        category: 'mains',
        tags: ['SIGNATURE'],
        winePairing: '2018 Côte-Rôtie "La Mouline", Guigal',
        allergens: ['Tree Nuts', 'Dairy'],
        calories: '640 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Charcoal-Grilled Prime Ribeye with Smoked Marrow Butter'
  },

  // Page 5: Signature Degustation Masterpieces - Left Spread
  {
    pageNumber: 5,
    title: 'SIGNATURE CREATIONS',
    subtitle: 'The Chef’s Grand Tasting Masterworks',
    sectionCategory: 'Signatures',
    layoutType: 'signatures-left',
    editorialQuote: 'A curated exploration of the rarest culinary treasures across continents.',
    featuredItem: {
      id: 'sig-1',
      name: 'Imperial Golden Osetra Caviar Tart',
      nativeName: 'Torta al Caviale & Granchio Reale',
      description: 'Crisp buckwheat sable shell, King Crab rillette, smoked crème fraîche, Meyer lemon gel, 30g Imperial Golden Osetra Caviar, 24-karat edible gold leaf.',
      price: 95,
      formattedPrice: '$95',
      category: 'signatures',
      tags: ['SIGNATURE', 'CHEF_SPECIAL', 'NEW'],
      winePairing: '2012 Dom Pérignon Vintage Champagne',
      allergens: ['Fish', 'Dairy', 'Gluten', 'Shellfish'],
      calories: '320 kcal',
      chefNote: 'Harvested from sustainably nurtured sturgeon aged over 14 years.'
    },
    items: [
      {
        id: 'sig-2',
        name: 'A5 Miyazaki Wagyu Tenderloin',
        nativeName: 'Miyazaki Wagyu al Tartufo',
        description: 'Snow-grade BMS 11 Wagyu, charred heirloom alliums, black garlic bone glaze, fermented mushroom sabayon.',
        price: 110,
        formattedPrice: '$110',
        category: 'signatures',
        tags: ['SIGNATURE', 'GLUTEN_FREE'],
        winePairing: '2015 Tenuta San Guido Sassicaia Bolgheri',
        allergens: ['Egg', 'Dairy'],
        calories: '590 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80',
    heroImageCaption: 'Golden Osetra Caviar Tart on Buckwheat Sable'
  },

  // Page 6: Signature Degustation Masterpieces - Right Spread
  {
    pageNumber: 6,
    title: 'EPICUREAN HARMONY',
    subtitle: 'Wood, Sea & Botanical Poetry',
    sectionCategory: 'Signatures',
    layoutType: 'signatures-right',
    featuredItem: {
      id: 'sig-3',
      name: 'Wood-Fired Dover Sole Meunière Moderne',
      nativeName: 'Sogliola di Dover alla Fiamma',
      description: 'Whole French Dover sole filleted tableside, brown butter noisette with finger lime caviar, sea grape tempura, baby chanterelles.',
      price: 88,
      formattedPrice: '$88',
      category: 'signatures',
      tags: ['SIGNATURE', 'CHEF_SPECIAL'],
      winePairing: '2018 Batard-Montrachet Grand Cru, Domaine Leflaive',
      allergens: ['Fish', 'Dairy'],
      calories: '490 kcal',
      chefNote: 'Flown directly from the Brittany coast within 24 hours of catch.'
    },
    items: [
      {
        id: 'sig-4',
        name: 'Smoked Pigeon & Foie Gras en Croûte',
        nativeName: 'Piccione di Bresse in Pasta Sfoglia',
        description: 'Bresse squab breast, duck liver parfait, spiced sour cherry reduction, puff pastry lattice, fresh autumn black truffle.',
        price: 76,
        formattedPrice: '$76',
        category: 'signatures',
        tags: ['CHEF_SPECIAL'],
        winePairing: '2016 Hermitage "La Chapelle", Paul Jaboulet Aîné',
        allergens: ['Gluten', 'Dairy'],
        calories: '610 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
    heroImageCaption: 'French Dover Sole with Brown Butter Noisette'
  },

  // Page 7: Desserts (Dolci Artigianali) - Left Spread
  {
    pageNumber: 7,
    title: 'DOLCI ARTIGIANALI',
    subtitle: 'The Sweet Finale',
    sectionCategory: 'Desserts',
    layoutType: 'desserts-left',
    editorialQuote: 'A delicate dialogue between intense cacao, heirloom cream, and orchard blossoms.',
    items: [
      {
        id: 'des-1',
        name: 'Aurelia Signature Tiramisù Sospeso',
        nativeName: 'Modern Deconstructed Tiramisù',
        description: 'Single-estate Ethiopian cold brew soak, crisp savoiardi crisps, whipped mascarpone gelato sphere, 70% Valrhona Guanaja cocoa dust.',
        price: 20,
        formattedPrice: '$20',
        category: 'desserts',
        tags: ['VEG', 'SIGNATURE'],
        winePairing: '2016 Vin Santo del Chianti Classico, Isole e Olena',
        allergens: ['Dairy', 'Egg', 'Gluten'],
        calories: '390 kcal'
      },
      {
        id: 'des-2',
        name: 'Valrhona Grand Cru Fondant',
        nativeName: 'Tortino al Cioccolato Caldo',
        description: 'Warm flowing molten core of 85% single-origin cacao, salted Brittany caramel, Tahitian bean Fior di Latte gelato, gold leaf.',
        price: 22,
        formattedPrice: '$22',
        category: 'desserts',
        tags: ['VEG', 'CHEF_SPECIAL'],
        winePairing: 'Taylor Fladgate 20-Year-Old Tawny Port',
        allergens: ['Dairy', 'Egg', 'Gluten'],
        calories: '480 kcal'
      },
      {
        id: 'des-3',
        name: 'Madagascar Vanilla & Saffron Panna Cotta',
        nativeName: 'Panna Cotta allo Zafferano',
        description: 'Silken infused cream, blood orange coulis, candied kumquat crisps, caramelized Bronte pistachio sand.',
        price: 19,
        formattedPrice: '$19',
        category: 'desserts',
        tags: ['GLUTEN_FREE', 'VEG'],
        winePairing: '2019 Château d’Yquem, Sauternes Premier Cru',
        allergens: ['Dairy', 'Tree Nuts'],
        calories: '310 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Aurelia Signature Tiramisù with Valrhona Dark Cocoa'
  },

  // Page 8: Desserts - Right Spread
  {
    pageNumber: 8,
    title: 'PASTRY & CHEESE',
    subtitle: 'Fromage & Artisanal Confections',
    sectionCategory: 'Desserts',
    layoutType: 'desserts-right',
    items: [
      {
        id: 'des-4',
        name: 'Basque Burnt Truffle Cheesecake',
        nativeName: 'Torta al Formaggio e Miele di Tartufo',
        description: 'Caramelized exterior, molten creamy center, white truffle acacia honey drizzle, sea salt flakes.',
        price: 21,
        formattedPrice: '$21',
        category: 'desserts',
        tags: ['VEG', 'NEW'],
        winePairing: '2017 Tokaji Aszú 5 Puttonyos, Royal Tokaji',
        allergens: ['Dairy', 'Egg'],
        calories: '440 kcal'
      },
      {
        id: 'des-5',
        name: 'Artisanal Gelato & Sorbetto Trilogy',
        nativeName: 'Trilogia di Gelati della Casa',
        description: 'Piedmont roasted hazelnut, Amalfi coast lemon verbena sorbet, and wild mountain blackberry infused with gin.',
        price: 18,
        formattedPrice: '$18',
        category: 'desserts',
        tags: ['VEG', 'GLUTEN_FREE'],
        winePairing: '2021 Moscato d’Asti, Vietti "Cascinetta"',
        allergens: ['Dairy', 'Tree Nuts'],
        calories: '260 kcal'
      },
      {
        id: 'des-6',
        name: 'Aurelia Reserve Fromage Cart',
        nativeName: 'Selezione di Formaggi d’Alpeggio',
        description: 'Five rare artisanal cheeses curated by Master Fromager, served with honeycomb, walnut bread, and spiced fig chutney.',
        price: 28,
        formattedPrice: '$28',
        category: 'desserts',
        tags: ['SIGNATURE'],
        winePairing: '2015 Madeira Malmsey Single Cask, Blandy’s',
        allergens: ['Dairy', 'Gluten', 'Tree Nuts'],
        calories: '420 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Warm Chocolate Fondant with Tahitian Vanilla Gelato'
  },

  // Page 9: Beverages & Mixology - Left Spread
  {
    pageNumber: 9,
    title: 'MIXOLOGY & APÉRITIFS',
    subtitle: 'Liquid Alchemy & Botanical Infusions',
    sectionCategory: 'Beverages',
    layoutType: 'beverages-left',
    editorialQuote: 'Hand-carved crystal ice, barrel-aged bitters, and botanical distillations.',
    items: [
      {
        id: 'bev-1',
        name: 'Aurelia Smoke & Gold Old Fashioned',
        nativeName: 'Signature Bourbon Alchemy',
        description: 'WhistlePig 10-Yr Rye, house-smoked rosemary essence, blood orange oleo saccharum, Aztec chocolate bitters, 24k gold leaf.',
        price: 26,
        formattedPrice: '$26',
        category: 'beverages',
        tags: ['SIGNATURE'],
        calories: '180 kcal'
      },
      {
        id: 'bev-2',
        name: 'Amalfi Coastal Sunburst',
        nativeName: 'Botanical Gin & Citrus',
        description: 'Monkey 47 Schwarzwald gin, clarified lemon verbena cordial, artisanal Limoncello di Sorrento, Franciacorta float, fresh thyme.',
        price: 24,
        formattedPrice: '$24',
        category: 'beverages',
        tags: ['NEW'],
        calories: '160 kcal'
      },
      {
        id: 'bev-3',
        name: 'Truffle & Fig Manhattan',
        nativeName: 'Black Truffle Infused Rye',
        description: 'Black truffle fat-washed Michter’s Rye, Carpano Antica formula vermouth, mission fig syrup, black walnut bitters.',
        price: 28,
        formattedPrice: '$28',
        category: 'beverages',
        tags: ['CHEF_SPECIAL', 'SIGNATURE'],
        calories: '190 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Aurelia Smoke & Gold with 24k Gold Flakes'
  },

  // Page 10: Non-Alcoholic, Teas & Grand Cru Coffee - Right Spread
  {
    pageNumber: 10,
    title: 'CELLAR & TEA SALON',
    subtitle: 'Zero-Proof Elixirs, Single-Estate Coffees',
    sectionCategory: 'Beverages',
    layoutType: 'beverages-right',
    items: [
      {
        id: 'bev-4',
        name: 'Silk & Spice Pomegranate Elixir (Mocktail)',
        nativeName: 'Zero-Proof Botanical Infusion',
        description: 'Cold-pressed wild pomegranate, house-brewed star anise and cinnamon cordial, sparkling yuzu, smoked rosemary cloud.',
        price: 16,
        formattedPrice: '$16',
        category: 'beverages',
        tags: ['VEG', 'GLUTEN_FREE'],
        calories: '90 kcal'
      },
      {
        id: 'bev-5',
        name: 'Grand Cru Pourover: Panama Geisha',
        nativeName: 'Hacienda La Esmeralda Single Farm',
        description: 'Notes of jasmine blossom, bergamot, and white peach. Prepared tableside via Chemex with spring water at 93°C.',
        price: 14,
        formattedPrice: '$14',
        category: 'beverages',
        tags: ['SIGNATURE'],
        calories: '5 kcal'
      },
      {
        id: 'bev-6',
        name: 'First-Harvest Silver Needle White Tea',
        nativeName: 'Fuding Mountain Imperial Harvest',
        description: 'Delicate sun-dried early spring buds, subtle honey aroma, and lingering velvety sweetness.',
        price: 12,
        formattedPrice: '$12',
        category: 'beverages',
        tags: ['VEG'],
        calories: '0 kcal'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Single-Origin Chemex Pour-Over Service'
  },

  // Page 11: Final Page / Epilogue & Concierge
  {
    pageNumber: 11,
    title: 'EPILOGUE & HOSPITALITY',
    subtitle: 'Join Us at Our Tables',
    sectionCategory: 'Concierge',
    layoutType: 'back-cover',
    editorialQuote: 'A dining experience is an ephemeral memory sculpted by flavor, hospitality, and shared laughter.',
    chefNote: 'Executive Chef Marco Laurent & Maître d’Hôtel Claire Dubois'
  }
];

export const SIGNATURE_DISHES_SHOWCASE = [
  {
    id: 'hero-1',
    name: 'Imperial Golden Osetra Caviar Tart',
    subtitle: 'Signature Tasting Course',
    description: 'Crisp buckwheat sable shell, King Crab rillette, smoked crème fraîche, 30g Imperial Golden Osetra Caviar, 24-karat edible gold leaf.',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Michelin Favorite', 'Rare Harvest', 'Tableside Caviar Service'],
    wine: '2012 Dom Pérignon Vintage Champagne'
  },
  {
    id: 'hero-2',
    name: 'Handcrafted Truffle Tagliolini',
    subtitle: 'Pasta Artigianale',
    description: 'Silken 40-yolk egg ribbons, cultured Normandy butter, mountain Parmigiano brodo, table-shaved black winter Périgord truffles.',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fresh Daily', 'Perigord Black Truffle', 'Cultured Butter'],
    wine: '2017 Barolo Monprivato, Giuseppe Mascarello'
  },
  {
    id: 'hero-3',
    name: '45-Day Dry-Aged Prime Ribeye',
    subtitle: 'The Wood-Fired Hearth',
    description: 'Prime Angus beef roasted over binchotan charcoal, smoked marrow emulsion, glazed Tokyo turnips, charred shallot bordelaise.',
    price: '$68',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    tags: ['Binchotan Charcoal', 'Smoked Marrow', '45-Day Dry-Aged'],
    wine: '2016 Château Pontet-Canet, Pauillac Grand Cru'
  },
  {
    id: 'hero-4',
    name: 'Valrhona Grand Cru Fondant',
    subtitle: 'Dolce Signature',
    description: 'Molten core of 85% single-origin Guanaja cacao, salted Brittany caramel, Tahitian bean Fior di Latte gelato, gold leaf.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Valrhona Grand Cru', 'Single Origin', 'Gold Leaf Accents'],
    wine: 'Taylor Fladgate 20-Year-Old Tawny Port'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    quote: 'A breathtaking demonstration of culinary finesse. The 40-yolk tagliolini with shaved black truffle is an absolute revelation, matching the peerless intimacy of the dining salon.',
    author: 'Chef Julien Mercier',
    role: 'Michelin Guide Inspector',
    source: 'The Michelin Guide 2025',
    year: '2025'
  },
  {
    id: 'rev-2',
    quote: 'Aurelia marries old-world European romance with daring modernist precision. It is, without reservation, the most poetic dining room open in the city today.',
    author: 'Elena Rostova',
    role: 'Chief Food & Wine Critic',
    source: 'Gourmet Gazette International',
    year: '2024'
  },
  {
    id: 'rev-3',
    quote: 'From the tactile weight of their gold-embossed menu book to the tableside carving of Dover Sole, every millisecond is orchestrated with divine theatrical grace.',
    author: 'Arthur Vance',
    role: 'Culinary Editor',
    source: 'Epicurean Monthly',
    year: '2025'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Grand Dining Salon',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hand-blown Murano chandeliers and bespoke velvet banquet seating.'
  },
  {
    id: 'g-2',
    title: 'The Open Hearth & Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Chef Marco Laurent and the brigade plating the tasting courses.'
  },
  {
    id: 'g-3',
    title: 'The Historic Vaulted Cellar',
    category: 'Cellar',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Over 3,400 rare vintages curated by Head Sommelier Claire Dubois.'
  },
  {
    id: 'g-4',
    title: 'The Garden Veranda',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Intimate evening dining under heated jasmine pergolas.'
  }
];

export const CHEF_PROFILE = {
  name: 'Chef Marco Laurent',
  title: 'Executive Chef & Culinary Director',
  quote: 'We do not simply cook; we curate emotional landscapes on porcelain. True luxury is the profound reverence for the ingredient at its absolute seasonal zenith.',
  bio: 'Trained under legends in Lyon and Modena before earning his first Michelin stars in Paris, Chef Marco brings over two decades of uncompromising mastery. At Aurelia, his kitchen operates as an alchemical sanctuary where ancient French techniques blend seamlessly with Italian heritage and modern gastronomy.',
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80',
  accolades: [
    'Best Chef of the Year — World Gastronomy Awards 2023',
    '3 Stars & 2 Michelin Keys — European Culinary Foundation',
    'Knight of the Order of Agricultural Merit'
  ],
  philosophy: [
    {
      title: 'Biodynamic & Ocean-to-Table',
      description: 'Every morning, our kitchen receives seafood caught within 24 hours and produce harvested at sunrise from our private biodynamic estate.'
    },
    {
      title: 'Fire & Patience',
      description: 'We honor ancient embers, dry-aging our meats for up to 60 days and simmering classical stocks for 36 uninterrupted hours.'
    },
    {
      title: 'Sensory Balance',
      description: 'Each plate balances acidity, salinity, texture, temperature, and visual stillness to provoke pure joy.'
    }
  ]
};
