import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const mainVariant = product.variants[0];
  const hasDiscount = mainVariant.compareAtPrice && mainVariant.compareAtPrice > mainVariant.price;

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image area */}
      <Link to={`/producto/${product.slug}`} className="relative aspect-square bg-green-light/50 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="w-24 h-24 rounded-full green-gradient opacity-20 group-hover:scale-125 transition-transform duration-500" />
        </div>
        {/* Badges */}
        {product.badge && (
          <span className={`absolute top-3 left-3 ${
            product.badge === "new" ? "badge-new" : product.badge === "top" ? "badge-top" : "badge-discount"
          }`}>
            {product.badge === "new" ? "Nuevo" : product.badge === "top" ? "Top" : `-${Math.round((1 - mainVariant.price / (mainVariant.compareAtPrice || mainVariant.price)) * 100)}%`}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
        <Link to={`/producto/${product.slug}`}>
          <h3 className="font-display font-semibold text-foreground text-sm leading-tight mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">{product.shortDescription}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? "text-gold" : "text-border"}`}>★</span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="font-semibold text-foreground">{formatPrice(mainVariant.price)}</span>
            {hasDiscount && (
              <span className="text-xs text-muted-foreground line-through ml-2">
                {formatPrice(mainVariant.compareAtPrice!)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-green-medium"
            onClick={(e) => {
              e.preventDefault();
              addItem(product, mainVariant);
            }}
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
