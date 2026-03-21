import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const BestSellers = () => {
  const bestSellers = products.filter((p) => p.badge === "top" || p.rating >= 4.7).slice(0, 4);

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Los más vendidos
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Los productos favoritos de nuestra comunidad.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
