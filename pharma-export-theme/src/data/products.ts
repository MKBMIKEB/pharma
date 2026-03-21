export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  stock: number;
}

export interface ProductMetafield {
  ingredients: string;
  dosage: string;
  warnings: string;
  targetAudience: string;
  benefits: string[];
  format: string;
  howToUse: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  variants: ProductVariant[];
  category: string;
  categorySlug: string;
  tags: string[];
  badge?: "new" | "top" | "discount";
  metafields: ProductMetafield;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Prostate Plus – Health Complex",
    slug: "prostate-plus",
    description: "Fórmula avanzada con Saw Palmetto, Zinc y Licopeno diseñada para apoyar la salud prostática masculina. Cada cápsula contiene 1000 mg de ingredientes activos seleccionados.",
    shortDescription: "Apoyo integral para la salud prostática masculina con ingredientes naturales.",
    images: [],
    variants: [
      { id: "1-30", name: "30 cápsulas", price: 89900, sku: "PP-30", stock: 50 },
      { id: "1-60", name: "60 cápsulas", price: 159900, compareAtPrice: 179800, sku: "PP-60", stock: 35 },
      { id: "1-90", name: "90 cápsulas", price: 219900, compareAtPrice: 269700, sku: "PP-90", stock: 20 },
    ],
    category: "Salud Masculina",
    categorySlug: "salud-masculina",
    tags: ["próstata", "hombre", "salud masculina", "saw palmetto"],
    badge: "top",
    metafields: {
      ingredients: "Saw Palmetto (320 mg), Zinc (15 mg), Licopeno (10 mg), Pygeum Africanum (100 mg), Semilla de Calabaza (200 mg), Beta-Sitosterol (90 mg), Vitamina E (30 UI)",
      dosage: "1000 mg por cápsula",
      warnings: "Este producto es un suplemento alimenticio. No reemplaza una alimentación equilibrada ni un estilo de vida saludable. Consulte a un profesional de la salud antes de consumir. No usar durante embarazo o lactancia. Mantener fuera del alcance de los niños.",
      targetAudience: "Hombres mayores de 40 años que desean apoyar su bienestar prostático.",
      benefits: ["Apoya la función urinaria normal", "Contribuye al bienestar prostático", "Fuente de zinc y antioxidantes", "Ingredientes de origen natural"],
      format: "Cápsulas",
      howToUse: "Tomar 1 cápsula al día con alimentos y un vaso de agua. No exceder la dosis recomendada.",
    },
    rating: 4.8,
    reviewCount: 234,
  },
  {
    id: "2",
    title: "Multivitamínico Diario",
    slug: "multivitaminico-diario",
    description: "Complejo multivitamínico completo con más de 20 vitaminas y minerales esenciales para complementar tu nutrición diaria.",
    shortDescription: "Nutrición completa con vitaminas y minerales esenciales para cada día.",
    images: [],
    variants: [
      { id: "2-30", name: "30 cápsulas", price: 49900, sku: "MV-30", stock: 100 },
      { id: "2-60", name: "60 cápsulas", price: 89900, compareAtPrice: 99800, sku: "MV-60", stock: 80 },
      { id: "2-90", name: "90 cápsulas", price: 119900, compareAtPrice: 149700, sku: "MV-90", stock: 45 },
    ],
    category: "Vitaminas",
    categorySlug: "vitaminas",
    tags: ["multivitamínico", "vitaminas", "minerales", "diario"],
    badge: "new",
    metafields: {
      ingredients: "Vitamina A (800 µg), Vitamina C (80 mg), Vitamina D3 (20 µg), Vitamina E (12 mg), Vitaminas B1, B2, B3, B5, B6, B9, B12, Hierro (14 mg), Zinc (10 mg), Selenio (55 µg), Magnesio (100 mg), Calcio (120 mg)",
      dosage: "1 cápsula diaria",
      warnings: "Este producto es un suplemento alimenticio. No reemplaza una alimentación equilibrada. Consulte a un profesional de la salud antes de consumir. Mantener fuera del alcance de los niños.",
      targetAudience: "Adultos que desean complementar su nutrición diaria.",
      benefits: ["Aporta vitaminas y minerales esenciales", "Contribuye al funcionamiento normal del sistema inmunitario", "Apoya los niveles de energía", "Fórmula completa y equilibrada"],
      format: "Cápsulas",
      howToUse: "Tomar 1 cápsula al día con el desayuno y un vaso de agua.",
    },
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: "3",
    title: "Omega 3 Premium",
    slug: "omega-3-premium",
    description: "Aceite de pescado purificado con alta concentración de EPA y DHA. Cápsulas blandas de fácil absorción sin retrogusto.",
    shortDescription: "Omega 3 de alta pureza con EPA y DHA para tu bienestar cardiovascular.",
    images: [],
    variants: [
      { id: "3-30", name: "30 cápsulas", price: 59900, sku: "OM-30", stock: 70 },
      { id: "3-60", name: "60 cápsulas", price: 109900, compareAtPrice: 119800, sku: "OM-60", stock: 55 },
      { id: "3-90", name: "90 cápsulas", price: 149900, compareAtPrice: 179700, sku: "OM-90", stock: 30 },
    ],
    category: "Vitaminas",
    categorySlug: "vitaminas",
    tags: ["omega 3", "EPA", "DHA", "aceite de pescado"],
    metafields: {
      ingredients: "Aceite de Pescado concentrado (1000 mg): EPA (360 mg), DHA (240 mg). Cápsula: Gelatina, Glicerina. Vitamina E (como antioxidante).",
      dosage: "1000 mg por cápsula blanda",
      warnings: "Este producto es un suplemento alimenticio. No apto para personas alérgicas al pescado. Consulte a un profesional de la salud. Mantener fuera del alcance de los niños.",
      targetAudience: "Adultos que desean apoyar su bienestar cardiovascular y cerebral.",
      benefits: ["Fuente concentrada de EPA y DHA", "Contribuye a la función cardíaca normal", "Apoya la función cerebral", "Sin retrogusto a pescado"],
      format: "Cápsulas blandas",
      howToUse: "Tomar 1–2 cápsulas al día con alimentos.",
    },
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "4",
    title: "Magnesio + Zinc – Sueño",
    slug: "magnesio-zinc-sueno",
    description: "Combinación de Magnesio bisglicinato y Zinc para apoyar la relajación muscular y contribuir a un descanso nocturno reparador.",
    shortDescription: "Magnesio y Zinc para favorecer la relajación y el descanso nocturno.",
    images: [],
    variants: [
      { id: "4-30", name: "30 cápsulas", price: 44900, sku: "MZ-30", stock: 90 },
      { id: "4-60", name: "60 cápsulas", price: 79900, compareAtPrice: 89800, sku: "MZ-60", stock: 60 },
      { id: "4-90", name: "90 cápsulas", price: 109900, compareAtPrice: 134700, sku: "MZ-90", stock: 40 },
    ],
    category: "Sueño",
    categorySlug: "sueno",
    tags: ["magnesio", "zinc", "sueño", "relajación", "descanso"],
    badge: "top",
    metafields: {
      ingredients: "Magnesio bisglicinato (400 mg de magnesio elemental), Zinc picolinato (15 mg), Vitamina B6 (5 mg), L-Teanina (100 mg)",
      dosage: "2 cápsulas antes de dormir",
      warnings: "Este producto es un suplemento alimenticio. No reemplaza una alimentación equilibrada. Consulte a un profesional de la salud. Resultados individuales pueden variar.",
      targetAudience: "Adultos que buscan apoyar su relajación y descanso nocturno.",
      benefits: ["Contribuye a la relajación muscular", "Apoya el descanso nocturno", "Magnesio de alta biodisponibilidad", "Con L-Teanina para la calma"],
      format: "Cápsulas",
      howToUse: "Tomar 2 cápsulas 30 minutos antes de dormir con agua.",
    },
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: "5",
    title: "Vitamina D3 + K2",
    slug: "vitamina-d3-k2",
    description: "Combinación sinérgica de Vitamina D3 y K2 (MK-7) para apoyar la absorción de calcio y contribuir a la salud ósea.",
    shortDescription: "Vitamina D3 y K2 para apoyar huesos fuertes y absorción de calcio.",
    images: [],
    variants: [
      { id: "5-30", name: "30 cápsulas", price: 39900, sku: "DK-30", stock: 85 },
      { id: "5-60", name: "60 cápsulas", price: 69900, compareAtPrice: 79800, sku: "DK-60", stock: 65 },
      { id: "5-90", name: "90 cápsulas", price: 94900, compareAtPrice: 119700, sku: "DK-90", stock: 50 },
    ],
    category: "Vitaminas",
    categorySlug: "vitaminas",
    tags: ["vitamina D", "vitamina K", "huesos", "calcio"],
    badge: "discount",
    metafields: {
      ingredients: "Vitamina D3 – Colecalciferol (2000 UI / 50 µg), Vitamina K2 – MK-7 (100 µg), Aceite de oliva extra virgen (como base)",
      dosage: "1 cápsula blanda al día",
      warnings: "Este producto es un suplemento alimenticio. Si toma anticoagulantes, consulte a su médico antes de consumir. No reemplaza una alimentación equilibrada. Mantener fuera del alcance de los niños.",
      targetAudience: "Adultos que desean apoyar su salud ósea y la absorción de calcio.",
      benefits: ["Contribuye a la absorción normal de calcio", "Apoya la salud ósea", "Vitamina K2 en forma MK-7 de alta absorción", "Base de aceite de oliva"],
      format: "Cápsulas blandas",
      howToUse: "Tomar 1 cápsula al día con una comida que contenga grasa.",
    },
    rating: 4.5,
    reviewCount: 98,
  },
  {
    id: "6",
    title: "Complejo Energía B12 + Adaptógenos",
    slug: "complejo-energia-b12",
    description: "Fórmula con Vitamina B12 metilcobalamina, Ashwagandha y Rhodiola para contribuir a los niveles de energía y la vitalidad diaria.",
    shortDescription: "B12 y adaptógenos naturales para apoyar tu energía y vitalidad.",
    images: [],
    variants: [
      { id: "6-30", name: "30 cápsulas", price: 54900, sku: "CE-30", stock: 75 },
      { id: "6-60", name: "60 cápsulas", price: 99900, compareAtPrice: 109800, sku: "CE-60", stock: 50 },
      { id: "6-90", name: "90 cápsulas", price: 139900, compareAtPrice: 164700, sku: "CE-90", stock: 25 },
    ],
    category: "Energía",
    categorySlug: "energia",
    tags: ["energía", "B12", "adaptógenos", "ashwagandha", "rhodiola"],
    badge: "new",
    metafields: {
      ingredients: "Vitamina B12 – Metilcobalamina (1000 µg), Ashwagandha KSM-66 (300 mg), Rhodiola Rosea (200 mg), Coenzima Q10 (50 mg), Vitamina B6 (5 mg), Ácido fólico (400 µg)",
      dosage: "1 cápsula al día",
      warnings: "Este producto es un suplemento alimenticio. No reemplaza una alimentación equilibrada. Consulte a un profesional de la salud. No usar durante embarazo o lactancia. Resultados individuales pueden variar.",
      targetAudience: "Adultos que buscan apoyo para sus niveles de energía y vitalidad.",
      benefits: ["Contribuye a los niveles normales de energía", "Con adaptógenos de origen natural", "B12 en forma metilcobalamina (alta absorción)", "Con CoQ10"],
      format: "Cápsulas",
      howToUse: "Tomar 1 cápsula por la mañana con el desayuno.",
    },
    rating: 4.7,
    reviewCount: 143,
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (categorySlug: string): Product[] =>
  products.filter((p) => p.categorySlug === categorySlug);

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);
