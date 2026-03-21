import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("¡Gracias por suscribirte! Recibirás nuestras novedades.");
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Recibe ofertas exclusivas
          </h2>
          <p className="text-muted-foreground mb-8">
            Suscríbete y obtén un 10% de descuento en tu primera compra.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-green-medium font-semibold px-6">
              Suscribirme
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
