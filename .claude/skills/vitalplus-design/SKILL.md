---
name: vitalplus-design
description: Sistema de diseño de la tienda Shopify VitalPlus (suplementos farmacéuticos, Colombia). Úsala SIEMPRE que se toquen estilos visuales del tema — colores, tipografía, espaciado, componentes (botones, cards, hero, header) — para mantener consistencia. Se activa con pedidos como "mejora visual", "rediseño", "actualiza el estilo", "cambia colores/tipografía", o al editar assets/theme.css y archivos .liquid de sections/snippets.
---

# Sistema de diseño VitalPlus

Tienda Shopify de suplementos farmacéuticos en Colombia. Stack: **Shopify 2.0 (Liquid + JSON templates)**, **CSS puro** (`assets/theme.css`, ~3500 líneas, sin frameworks), **Vanilla JS** (IIFEs, sin frameworks). No introducir Tailwind, React, ni librerías de componentes — todo cambio visual debe usar CSS puro y encajar con las convenciones ya existentes en el archivo.

## Tokens de color (CSS custom properties, definidos en `layout/theme.liquid` desde `settings.color_*` en `config/settings_data.json`)

| Variable | Valor actual | Uso |
|---|---|---|
| `--color-primary` | `#1B4332` | Verde oscuro — marca principal, botones primarios, header |
| `--color-primary-foreground` | `#FAF9F7` | Texto/iconos sobre fondo primario |
| `--color-accent` | `#C9A84C` | Dorado — CTAs secundarios, detalles premium, shimmer |
| `--color-accent-foreground` | `#1A2E1A` | Texto sobre fondo accent |
| `--color-background` | `#FAF9F7` | Fondo general (crema/off-white) |
| `--color-foreground` | `#1A2E1A` | Texto principal (verde muy oscuro, casi negro) |
| `--color-card` | `#FFFFFF` | Fondo de tarjetas/cards |
| `--color-muted` | `#6B7C6B` | Texto secundario, placeholders |
| `--color-border` | `#E8E4DD` | Bordes sutiles |
| `--color-secondary-bg` | `#F5F3EF` | Fondos secundarios (secciones alternas) |
| `--color-destructive` | `#DC2626` | Errores, alertas |
| `--color-green-light` | `#E8F0E8` | Fondos suaves verdes (badges, highlights) |
| `--color-green-medium` | `#2D5A3E` | Gradientes con primary |
| `--color-gold-light` | `#D4B96A` | Gradientes con accent |

**Regla:** nunca hardcodear hex en CSS nuevo — siempre usar `var(--color-*)`. Si se necesita un color nuevo, agregarlo como setting en `config/settings_schema.json` + `settings_data.json`, no como literal.

## Tipografía
- `--font-heading`: Playfair Display (serif, weight 700) — títulos, hero, nombres de producto
- `--font-body`: Inter (weight 400) — texto general, UI
- Los headings usan `letter-spacing: -0.02em` y tienden a tamaños grandes (2.25rem base, 3rem en desktop ≥768px)

## Estilo visual / lenguaje de diseño
- **Glassmorphism**: fondos semi-transparentes con `backdrop-filter: blur(...)` en overlays y cards flotantes
- **Gradientes animados**: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-green-medium) 100%)` para primary; equivalente con accent/gold-light para dorado
- **Dot grid patterns**: fondos decorativos con puntos repetidos (background-image radial-gradient)
- **Shimmer text**: texto con `background-clip: text` + `animation: shimmer` en acentos dorados (ver `.hero__heading` en theme.css) — requiere `display: inline-block` y padding extra para no cortar letras cursivas/descendentes
- **Blobs animados**: formas orgánicas de fondo en el hero
- Bordes redondeados generosos, sombras suaves, sensación "premium/farmacéutica confiable" — no genérico ni saturado de color

## Convenciones de código
- Nomenclatura BEM-like: `.hero__heading`, `.product-card__title`, `.breadcrumbs__separator`
- Utility classes ya existentes para reusar: `.text-primary`, `.bg-accent`, `.border-border`, `.font-display`, `.font-body`, etc. — revisar `theme.css` antes de escribir una clase nueva por si ya existe
- Media query breakpoint principal: `768px` (mobile-first, luego desktop)
- Secciones clave: `sections/hero-banner.liquid` (carrusel con bloques "slide"), `sections/product-main.liquid` (landing de producto con compra directa), `sections/header.liquid`

## Flujo de trabajo para cambios visuales
1. Revisar tokens/clases existentes antes de crear nuevos — priorizar reuso
2. Cambios de color/tipografía van en `settings_schema.json` + `settings_data.json` si deben ser editables desde el Admin de Shopify; cambios estructurales van directo en `theme.css`
3. Probar en local si es posible (`shopify theme dev`) antes de push
4. Al hacer push, usar SIEMPRE `--only <archivo>` por cada archivo modificado (ver memoria `feedback_push_shopify` — un push completo sobreescribe `settings_data.json` y borra productos/config del Admin)
5. Verificar que el cambio no rompa el flujo de compra (botón "Comprar ahora", carrito, checkout)
