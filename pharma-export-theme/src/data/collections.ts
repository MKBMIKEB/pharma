export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export const collections: Collection[] = [
  {
    id: "c1",
    title: "Salud Masculina",
    slug: "salud-masculina",
    description: "Suplementos formulados para apoyar el bienestar del hombre.",
    icon: "Shield",
  },
  {
    id: "c2",
    title: "Energía",
    slug: "energia",
    description: "Fórmulas con vitaminas y adaptógenos para tu vitalidad diaria.",
    icon: "Zap",
  },
  {
    id: "c3",
    title: "Vitaminas",
    slug: "vitaminas",
    description: "Vitaminas y minerales esenciales para complementar tu nutrición.",
    icon: "Pill",
  },
  {
    id: "c4",
    title: "Sueño",
    slug: "sueno",
    description: "Ingredientes naturales que contribuyen a tu descanso nocturno.",
    icon: "Moon",
  },
  {
    id: "c5",
    title: "Inmunidad",
    slug: "inmunidad",
    description: "Nutrientes que apoyan el funcionamiento normal del sistema inmunitario.",
    icon: "Heart",
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((c) => c.slug === slug);
