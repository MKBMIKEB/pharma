# Mapping VitalPlus → Shopify

## Productos → Shopify Products
| Campo VitalPlus | Campo Shopify | Notas |
|---|---|---|
| title | Product Title | |
| slug | Handle | |
| description | Body HTML | |
| images | Product Images | Subir manualmente o vía API |
| category | Product Type + Collection | Asignar a Collection correspondiente |
| tags | Tags | |
| variants[].name | Variant Title (Option: Presentación) | |
| variants[].price | Variant Price | En COP (sin decimales) |
| variants[].compareAtPrice | Variant Compare At Price | |
| variants[].sku | Variant SKU | |
| variants[].stock | Variant Inventory | Habilitar tracking |

## Variantes → Shopify Variants
- Opción: "Presentación" → 30 / 60 / 90 cápsulas
- Shopify soporta hasta 3 opciones; solo usamos 1

## Colecciones → Shopify Collections
Crear como **Manual Collections** o **Automated Collections** usando tags:
- Salud Masculina (handle: salud-masculina)
- Energía (handle: energia)
- Vitaminas (handle: vitaminas)
- Sueño (handle: sueno)
- Inmunidad (handle: inmunidad)

## Metafields → Shopify Metafields
Namespace: `custom`

| Key | Tipo | Uso |
|---|---|---|
| ingredients | multi_line_text_field | Tab Ingredientes |
| dosage | single_line_text_field | Tabla especificaciones |
| warnings | multi_line_text_field | Tab Advertencias |
| target_audience | single_line_text_field | Tabla especificaciones |
| benefits | list.single_line_text_field | Tab Beneficios (lista) |
| format | single_line_text_field | Filtro + tabla |
| how_to_use | multi_line_text_field | Tab Cómo usar |

Para crear metafields: Shopify Admin → Settings → Custom data → Products → Add definition

## Badges
Implementar con tags de Shopify:
- Tag "badge-new" → Badge "Nuevo"
- Tag "badge-top" → Badge "Top"
- Compare At Price > Price → Badge con % descuento

## Apps NO necesarias
- ✅ Variantes: nativo de Shopify
- ✅ Reviews: pueden usar Shopify Product Reviews (gratis) o Judge.me
- ✅ Newsletter: Shopify Forms o sección nativa
- ✅ SEO: Shopify incluye SEO básico
- ✅ WhatsApp: enlace directo (sin app)
- ✅ Filtros: Shopify Storefront Filtering (nativo Online Store 2.0)
- ❌ No necesitas app de badges (se puede hacer con Liquid)
- ❌ No necesitas app de tabs (se puede hacer con secciones/bloques)

## Secciones → Theme Editor
Cada sección del home se recrea en el Theme Editor de Shopify:
1. **Announcement Bar** → Sección nativa de Shopify
2. **Hero Banner** → Sección "Image banner" o custom section
3. **Featured Categories** → "Collection list" con iconos custom
4. **Best Sellers** → "Featured collection" apuntando a collection "Best Sellers"
5. **Value Props** → "Multicolumn" o custom section
6. **Testimonials** → Custom section o app de reviews
7. **Newsletter** → Sección nativa de newsletter
8. **Footer** → Footer nativo con menús + disclaimer en texto rico

## Moneda
- Configurar en Shopify: Settings → Markets → Colombia → COP
- No se necesita app de conversión de moneda
