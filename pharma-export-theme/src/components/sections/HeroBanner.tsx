import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Imagen de fondo ubicada en /public (ruta literal con espacios y coma)
const HERO_BG = "/ChatGPT Image 16 feb 2026, 07_47_54 p.m..png";

const HeroBanner = () => (
  <section className="relative overflow-hidden text-primary-foreground">
    {/* Fondo con imagen */}
    <div
      className="absolute inset-0 -z-10 bg-center bg-cover"
      style={{ backgroundImage: `url("${HERO_BG}")` }}
      aria-hidden="true"
    />
    {/* Capa de color para legibilidad */}
    <div className="absolute inset-0 -z-10 green-gradient opacity-60 md:opacity-50" aria-hidden="true" />

    <div className="container-narrow px-4 md:px-8 py-20 md:py-32 relative z-10 min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 text-primary-foreground/70"
        >
          Suplementos Premium
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6"
        >
          Tu salud merece{" "}
          <span className="text-gold">lo mejor</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-lg"
        >
          Suplementos de calidad farmacéutica con ingredientes naturales respaldados por la ciencia. Fabricados en Colombia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/colecciones">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold text-base px-8">
              Ver suplementos
            </Button>
          </Link>
          <Link to="/colecciones/salud-masculina">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
              Comprar ahora
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
    {/* Decorativo */}
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 70% 50%, hsl(var(--gold) / 0.3) 0%, transparent 60%)",
      }} />
    </div>
  </section>
);

export default HeroBanner;
