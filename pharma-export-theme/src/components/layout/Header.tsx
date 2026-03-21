import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Suplementos", to: "/colecciones" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full green-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">V+</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">VitalPlus</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link to="/buscar">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/wishlist" className="hidden md:inline-flex">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/carrito" className="relative">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-card animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-medium text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
