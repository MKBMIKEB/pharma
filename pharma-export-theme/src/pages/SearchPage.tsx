import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const results = query.length >= 2
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-narrow max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Buscar</h1>
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar suplementos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-base"
              autoFocus
            />
          </div>

          {query.length >= 2 && (
            <>
              <p className="text-sm text-muted-foreground mb-6">{results.length} resultado(s) para "{query}"</p>
              {results.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {results.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No encontramos productos con ese término.</p>
                  <Link to="/colecciones" className="text-primary underline">Ver todos los suplementos</Link>
                </div>
              )}
            </>
          )}

          {query.length < 2 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Escribe al menos 2 caracteres para buscar.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
