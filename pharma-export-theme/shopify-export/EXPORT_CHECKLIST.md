# Checklist de Exportación a Shopify

## 1. Crear/Configurar Tienda Shopify
- [ ] Crear cuenta en Shopify (o usar tienda existente)
- [ ] Configurar país: Colombia
- [ ] Configurar moneda: COP (Settings → Markets)
- [ ] Configurar idioma: Español (Settings → Languages)
- [ ] Configurar impuestos colombianos (Settings → Taxes)

## 2. Seleccionar/Crear Theme
- [ ] Usar Dawn (tema gratuito) como base o un tema compatible con OS 2.0
- [ ] Personalizar colores en Theme Editor:
  - Primary: #1B4332 (verde oscuro)
  - Accent: #C9A84C (dorado)
  - Background: #FAF9F7
  - Text: #1A2E1A
- [ ] Configurar tipografía:
  - Títulos: Playfair Display
  - Cuerpo: Inter (o similar sans-serif)

## 3. Crear Metafield Definitions
- [ ] Ir a Settings → Custom data → Products
- [ ] Crear cada metafield según `demo-data/metafields.json`:
  - `custom.ingredients` (multi_line_text_field)
  - `custom.dosage` (single_line_text_field)
  - `custom.warnings` (multi_line_text_field)
  - `custom.target_audience` (single_line_text_field)
  - `custom.benefits` (list.single_line_text_field)
  - `custom.format` (single_line_text_field)
  - `custom.how_to_use` (multi_line_text_field)

## 4. Crear Colecciones
- [ ] Crear colecciones según `demo-data/collections.json`
- [ ] Configurar como Automated Collections usando tags, o Manual Collections

## 5. Crear Productos
- [ ] Crear los 6 productos según `demo-data/products.json`
- [ ] Para cada producto:
  - [ ] Agregar título, descripción HTML, vendor, tipo
  - [ ] Crear opción "Presentación" con valores 30/60/90 cápsulas
  - [ ] Configurar precios, compare at price, SKU, inventario por variante
  - [ ] Agregar tags
  - [ ] Llenar metafields (ingredientes, dosis, advertencias, etc.)
  - [ ] Subir imágenes de producto
  - [ ] Asignar a colección correspondiente

## 6. Reconstruir Home con Theme Editor
- [ ] Agregar Announcement Bar: "Envío gratis en pedidos desde $150.000 COP"
- [ ] Hero Banner: configurar textos y CTAs
- [ ] Collection List: agregar las 5 categorías
- [ ] Featured Collection: apuntar a "Best Sellers" o productos destacados
- [ ] Multicolumn: crear value props (calidad, envío, soporte, natural)
- [ ] Testimonials: agregar como sección custom o texto rico
- [ ] Newsletter: agregar sección de newsletter
- [ ] Footer: configurar menús + agregar disclaimer legal

## 7. Crear Páginas
- [ ] Sobre Nosotros (handle: nosotros)
- [ ] Contacto (handle: contacto) — usar formulario de contacto nativo
- [ ] FAQ (handle: faq)
- [ ] Blog: crear blog y artículos
- [ ] Políticas: Envíos, Devoluciones, Privacidad, Términos (Settings → Policies)

## 8. Configurar Menús
- [ ] Menú principal: Inicio, Suplementos, Nosotros, Blog, Contacto
- [ ] Menú footer: Políticas, FAQ, Contacto

## 9. Configurar Checkout & Pagos
- [ ] Configurar pasarela de pagos (Mercado Pago, PayU, etc.)
- [ ] Configurar métodos: tarjeta, PSE, Nequi, contra entrega
- [ ] Personalizar checkout con colores de marca

## 10. SEO
- [ ] Verificar titles y meta descriptions de cada página
- [ ] Configurar sitemap (automático en Shopify)
- [ ] Agregar Schema markup (JSON-LD) para productos

## 11. WhatsApp
- [ ] Agregar botón flotante de WhatsApp (enlace directo o snippet en theme.liquid)
- [ ] URL: `https://wa.me/573001234567?text=Hola...`

## 12. Verificación Final
- [ ] Probar en móvil (responsive)
- [ ] Probar flujo de compra completo
- [ ] Verificar velocidad (PageSpeed Insights > 80)
- [ ] Revisar disclaimer legal en footer y páginas de producto
- [ ] Verificar que no haya claims médicos prohibidos
- [ ] Probar búsqueda de productos
- [ ] Verificar filtros de colección
- [ ] Probar carrito y checkout
