import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Sus productos requieren receta médica?", a: "No, nuestros suplementos no requieren receta. Sin embargo, siempre recomendamos consultar a un profesional de la salud antes de iniciar cualquier suplementación." },
  { q: "¿Cuánto tarda el envío?", a: "El envío estándar tarda entre 2 y 5 días hábiles a las principales ciudades de Colombia. Para zonas rurales puede tardar hasta 8 días hábiles." },
  { q: "¿Cuál es la política de devoluciones?", a: "Aceptamos devoluciones dentro de los 30 días siguientes a la compra, siempre que el producto esté sin abrir y en su empaque original." },
  { q: "¿Sus productos tienen registro INVIMA?", a: "Sí, todos nuestros productos cumplen con la normativa colombiana y cuentan con los registros sanitarios correspondientes." },
  { q: "¿Puedo tomar varios suplementos al mismo tiempo?", a: "En general, sí, pero recomendamos consultar con un profesional de la salud para asegurarse de que no haya interacciones." },
  { q: "¿Hacen envíos internacionales?", a: "Actualmente solo realizamos envíos dentro de Colombia. Estamos trabajando para ampliar nuestra cobertura." },
  { q: "¿Cómo puedo pagar?", a: "Aceptamos tarjetas de crédito/débito, PSE, Nequi, Daviplata y pago contra entrega en ciudades principales." },
  { q: "¿Son seguros para personas con condiciones médicas?", a: "Nuestros suplementos son formulados con ingredientes de alta calidad, pero si tienes alguna condición médica, te recomendamos consultar a tu médico antes de consumirlos." },
];

const FAQPage = () => (
  <Layout>
    <div className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Preguntas Frecuentes</h1>
        <p className="text-muted-foreground mb-10">Encuentra respuestas a las dudas más comunes sobre nuestros suplementos.</p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </Layout>
);

export default FAQPage;
