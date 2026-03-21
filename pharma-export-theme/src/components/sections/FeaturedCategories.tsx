import { Link } from "react-router-dom";
import { Shield, Zap, Pill, Moon, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { collections } from "@/data/collections";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  Pill: <Pill className="h-8 w-8" />,
  Moon: <Moon className="h-8 w-8" />,
  Heart: <Heart className="h-8 w-8" />,
};

const FeaturedCategories = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Categorías destacadas
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Encuentra el suplemento ideal según tus necesidades de bienestar.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {collections.map((col, i) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={`/colecciones/${col.slug}`}
              className="group flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {iconMap[col.icon]}
              </div>
              <h3 className="font-semibold text-foreground text-sm">{col.title}</h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCategories;
