import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const { items, updateQuantity, removeItem, clearCart, formattedSubtotal, subtotal } = useCart();
  const freeShippingThreshold = 150000;
  const remaining = freeShippingThreshold - subtotal;

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-narrow max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Tu carrito</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground mb-6">Tu carrito está vacío</p>
              <Link to="/colecciones">
                <Button className="bg-primary text-primary-foreground hover:bg-green-medium">Ver suplementos</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Items */}
              <div className="md:col-span-2 space-y-4">
                {remaining > 0 && (
                  <div className="bg-green-light rounded-lg p-4 text-sm text-foreground">
                    ¡Te faltan <strong>{formatPrice(remaining)}</strong> para envío gratis!
                  </div>
                )}
                {items.map((item) => (
                  <div key={item.variant.id} className="flex gap-4 border border-border rounded-xl p-4 bg-card">
                    <div className="w-20 h-20 rounded-lg bg-green-light/50 flex items-center justify-center shrink-0">
                      <div className="w-10 h-10 rounded-full green-gradient opacity-30" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/producto/${item.product.slug}`} className="font-semibold text-foreground text-sm hover:text-primary line-clamp-1">
                        {item.product.title}
                      </Link>
                      <p className="text-xs text-muted-foreground">{item.variant.name}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-lg">
                          <button onClick={() => updateQuantity(item.variant.id, item.quantity - 1)} className="px-2 py-1 text-muted-foreground hover:text-foreground">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-sm font-medium text-foreground">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.variant.id, item.quantity + 1)} className="px-2 py-1 text-muted-foreground hover:text-foreground">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-foreground text-sm">{formatPrice(item.variant.price * item.quantity)}</span>
                          <button onClick={() => removeItem(item.variant.id)} className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive underline">
                  Vaciar carrito
                </button>
              </div>

              {/* Summary */}
              <div className="bg-card border border-border rounded-xl p-6 h-fit sticky top-24">
                <h3 className="font-display font-semibold text-foreground mb-4">Resumen</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground font-medium">{formattedSubtotal}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Envío</span><span className="text-foreground font-medium">{subtotal >= freeShippingThreshold ? "Gratis" : "Calculado al finalizar"}</span></div>
                  <div className="border-t border-border pt-3 flex justify-between"><span className="font-semibold text-foreground">Total</span><span className="font-bold text-foreground text-lg">{formattedSubtotal}</span></div>
                </div>
                <Button className="w-full mt-6 bg-accent text-accent-foreground hover:bg-gold-light font-semibold" size="lg">
                  Finalizar compra
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  El checkout es gestionado de forma segura.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
