import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos M.", text: "He notado un cambio positivo en mi bienestar desde que uso Prostate Plus. Muy satisfecho con la calidad.", rating: 5 },
  { name: "Andrea L.", text: "El Multivitamínico Diario me ayuda a complementar mi alimentación. Lo recomiendo ampliamente.", rating: 5 },
  { name: "Jorge P.", text: "El Magnesio + Zinc me ha acompañado en mis noches. Me siento más descansado al despertar.", rating: 5 },
];

const Testimonials = () => (
  <section className="section-padding bg-green-light">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Experiencias reales de personas que confían en VitalPlus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-8">
        * Los testimonios reflejan experiencias individuales. Los resultados pueden variar de persona a persona.
      </p>
    </div>
  </section>
);

export default Testimonials;
