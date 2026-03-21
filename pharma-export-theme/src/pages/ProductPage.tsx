import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { getProductBySlug, products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Minus, Plus, Star, Check } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { toast } from "sonner";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-display font-bold">Producto no encontrado</h1>
          <Link to="/colecciones" className="text-primary underline mt-4 inline-block">Volver al catálogo</Link>
        </div>
      </Layout>
    );
  }

  const variant = product.variants[selectedVariant];
  const hasDiscount = variant.compareAtPrice && variant.compareAtPrice > variant.price;
  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    toast.success(`${product.title} agregado al carrito`);
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-narrow">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/colecciones" className="hover:text-foreground">Suplementos</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Gallery */}
            <div className="aspect-square bg-green-light/50 rounded-2xl flex items-center justify-center group cursor-zoom-in overflow-hidden">
              <div className="w-40 h-40 rounded-full green-gradient opacity-30 group-hover:scale-150 transition-transform duration-700" />
            </div>

            {/* Info */}
            <div>
              {product.badge && (
                <span className={`inline-block mb-3 ${product.badge === "new" ? "badge-new" : product.badge === "top" ? "badge-top" : "badge-discount"}`}>
                  {product.badge === "new" ? "Nuevo" : product.badge === "top" ? "Top ventas" : "Oferta"}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} reseñas)</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{formatPrice(variant.price)}</span>
                {hasDiscount && (
                  <span className="text-lg text-muted-foreground line-through ml-3">{formatPrice(variant.compareAtPrice!)}</span>
                )}
              </div>

              {/* Variants */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Presentación:</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => { setSelectedVariant(i); setQuantity(1); }}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        i === selectedVariant
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-sm font-semibold text-foreground">Cantidad:</p>
                <div className="flex items-center border border-border rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-muted-foreground hover:text-foreground">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium text-foreground min-w-[40px] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-muted-foreground hover:text-foreground">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3 mb-6">
                <Button size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-green-medium font-semibold" onClick={handleAddToCart}>
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Agregar al carrito
                </Button>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold px-8" onClick={() => { handleAddToCart(); }}>
                  Comprar ahora
                </Button>
              </div>

              {/* Quick benefits */}
              <div className="space-y-2">
                {product.metafields.benefits.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 gap-0">
                {["benefits", "ingredients", "howto", "warnings", "faq"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-medium"
                  >
                    {tab === "benefits" ? "Beneficios" : tab === "ingredients" ? "Ingredientes" : tab === "howto" ? "Cómo usar" : tab === "warnings" ? "Advertencias" : "FAQ"}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="benefits" className="pt-6">
                <ul className="space-y-3">
                  {product.metafields.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="ingredients" className="pt-6">
                <p className="text-foreground leading-relaxed">{product.metafields.ingredients}</p>
                <div className="mt-6 border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-muted"><th className="text-left p-3 font-semibold text-foreground">Campo</th><th className="text-left p-3 font-semibold text-foreground">Valor</th></tr></thead>
                    <tbody>
                      <tr className="border-t border-border"><td className="p-3 text-muted-foreground">Formato</td><td className="p-3 text-foreground">{product.metafields.format}</td></tr>
                      <tr className="border-t border-border"><td className="p-3 text-muted-foreground">Dosis</td><td className="p-3 text-foreground">{product.metafields.dosage}</td></tr>
                      <tr className="border-t border-border"><td className="p-3 text-muted-foreground">Público objetivo</td><td className="p-3 text-foreground">{product.metafields.targetAudience}</td></tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="howto" className="pt-6">
                <p className="text-foreground leading-relaxed">{product.metafields.howToUse}</p>
              </TabsContent>
              <TabsContent value="warnings" className="pt-6">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <p className="text-foreground leading-relaxed">{product.metafields.warnings}</p>
                </div>
              </TabsContent>
              <TabsContent value="faq" className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">¿Necesito receta médica?</h4>
                    <p className="text-muted-foreground text-sm">No, nuestros suplementos no requieren receta. Sin embargo, recomendamos consultar a un profesional de la salud.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">¿Cuánto tarda en llegar?</h4>
                    <p className="text-muted-foreground text-sm">El envío tarda entre 2 y 5 días hábiles a toda Colombia.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Productos relacionados</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
