import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { collections, getCollectionBySlug } from "@/data/collections";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState("popular");
  const [formatFilter, setFormatFilter] = useState("all");

  const collection = slug ? getCollectionBySlug(slug) : null;

  const filtered = useMemo(() => {
    let list = slug ? products.filter((p) => p.categorySlug === slug) : [...products];
    if (formatFilter !== "all") {
      list = list.filter((p) => p.metafields.format.toLowerCase().includes(formatFilter));
    }
    switch (sortBy) {
      case "price-asc": return list.sort((a, b) => a.variants[0].price - b.variants[0].price);
      case "price-desc": return list.sort((a, b) => b.variants[0].price - a.variants[0].price);
      case "new": return list.sort((a, b) => (b.badge === "new" ? 1 : 0) - (a.badge === "new" ? 1 : 0));
      default: return list.sort((a, b) => b.reviewCount - a.reviewCount);
    }
  }, [slug, sortBy, formatFilter]);

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-narrow">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{collection?.title || "Todos los suplementos"}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            {collection?.title || "Todos los suplementos"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {collection?.description || "Explora nuestra línea completa de suplementos de salud premium."}
          </p>

          {/* Category pills */}
          {!slug && (
            <div className="flex flex-wrap gap-2 mb-8">
              <Link to="/colecciones">
                <Button variant="default" size="sm" className="rounded-full">Todos</Button>
              </Link>
              {collections.map((c) => (
                <Link key={c.id} to={`/colecciones/${c.slug}`}>
                  <Button variant="outline" size="sm" className="rounded-full">{c.title}</Button>
                </Link>
              ))}
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]"><SelectValue placeholder="Ordenar por" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popularidad</SelectItem>
                <SelectItem value="new">Más nuevos</SelectItem>
                <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formatFilter} onValueChange={setFormatFilter}>
              <SelectTrigger className="w-[180px]"><SelectValue placeholder="Formato" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los formatos</SelectItem>
                <SelectItem value="cápsulas">Cápsulas</SelectItem>
                <SelectItem value="blandas">Cápsulas blandas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No se encontraron productos con estos filtros.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CollectionPage;
