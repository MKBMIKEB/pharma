import { motion } from "framer-motion";
import { ShieldCheck, Truck, Headphones, Leaf } from "lucide-react";

const props = [
  { icon: <ShieldCheck className="h-7 w-7" />, title: "Calidad certificada", desc: "Ingredientes de grado farmacéutico con trazabilidad completa." },
  { icon: <Truck className="h-7 w-7" />, title: "Envío rápido", desc: "Entrega en 2-5 días hábiles a toda Colombia." },
  { icon: <Headphones className="h-7 w-7" />, title: "Soporte experto", desc: "Atención personalizada por WhatsApp y correo." },
  { icon: <Leaf className="h-7 w-7" />, title: "Ingredientes naturales", desc: "Fórmulas con ingredientes de origen natural respaldados por la ciencia." },
];

const ValueProps = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {props.map((prop, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-green-light text-primary flex items-center justify-center mx-auto mb-4">
              {prop.icon}
            </div>
            <h3 className="font-display font-semibold text-foreground text-sm mb-2">{prop.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{prop.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
