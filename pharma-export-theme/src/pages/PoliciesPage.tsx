import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const policies: Record<string, { title: string; content: string }> = {
  envios: {
    title: "Política de Envíos",
    content: `**Cobertura:** Realizamos envíos a todo el territorio colombiano.

**Tiempos de entrega:**
- Ciudades principales: 2-3 días hábiles
- Ciudades intermedias: 3-5 días hábiles
- Zonas rurales: 5-8 días hábiles

**Envío gratis:** En pedidos desde $150.000 COP.

**Costo de envío:** Para pedidos menores a $150.000 COP, el costo de envío se calcula según la ciudad de destino al momento de finalizar la compra.

**Seguimiento:** Recibirás un correo con el número de guía para rastrear tu pedido una vez sea despachado.`,
  },
  devoluciones: {
    title: "Política de Devoluciones",
    content: `**Plazo:** Aceptamos devoluciones dentro de los 30 días calendario siguientes a la recepción del producto.

**Condiciones:**
- El producto debe estar sin abrir y en su empaque original
- Debe incluir factura o comprobante de compra
- No aplica para productos abiertos o parcialmente consumidos por razones sanitarias

**Proceso:**
1. Contacta a nuestro equipo por correo o WhatsApp
2. Te enviaremos una guía de devolución
3. Una vez recibido y verificado el producto, realizaremos el reembolso en un plazo de 5-10 días hábiles

**Reembolsos:** Se realizan por el mismo medio de pago utilizado en la compra.`,
  },
  privacidad: {
    title: "Política de Privacidad",
    content: `**Responsable:** VitalPlus S.A.S., con domicilio en Bogotá, Colombia.

**Datos que recopilamos:**
- Nombre, correo electrónico, teléfono y dirección de envío
- Información de pago (procesada de forma segura por nuestra pasarela de pagos)
- Historial de compras

**Uso de datos:**
- Procesar y enviar pedidos
- Comunicar actualizaciones de pedidos
- Enviar información sobre productos y ofertas (con tu consentimiento)

**Tus derechos:** De acuerdo con la Ley 1581 de 2012 de Colombia, tienes derecho a conocer, actualizar, rectificar y suprimir tus datos personales.

**Contacto:** Para ejercer tus derechos, escríbenos a privacidad@vitalplus.co.`,
  },
  terminos: {
    title: "Términos y Condiciones",
    content: `**Generalidades:** Al realizar una compra en VitalPlus aceptas los presentes términos y condiciones.

**Productos:** Nuestros productos son suplementos alimenticios. No están destinados a diagnosticar, prevenir, curar ni tratar enfermedades.

**Precios:** Los precios están expresados en pesos colombianos (COP) e incluyen IVA cuando aplica. Nos reservamos el derecho de modificar precios sin previo aviso.

**Disponibilidad:** Los productos están sujetos a disponibilidad de inventario. En caso de no disponibilidad, te contactaremos para ofrecer alternativas o reembolso.

**Propiedad intelectual:** Todo el contenido del sitio (textos, imágenes, logos, diseños) es propiedad de VitalPlus y está protegido por las leyes de propiedad intelectual colombianas.

**Legislación aplicable:** Estos términos se rigen por las leyes de la República de Colombia.

**Disclaimer médico:** Este producto es un suplemento alimenticio. No reemplaza una alimentación equilibrada ni un estilo de vida saludable. Consulte a un profesional de la salud antes de consumir. Resultados individuales pueden variar.`,
  },
};

const PoliciesPage = () => {
  const { type } = useParams<{ type: string }>();
  const policy = policies[type || ""];

  if (!policy) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-display font-bold">Página no encontrada</h1>
          <Link to="/" className="text-primary underline mt-4 inline-block">Volver al inicio</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{policy.title}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">{policy.title}</h1>
          <div className="space-y-4">
            {policy.content.split("\n\n").map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed whitespace-pre-line">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PoliciesPage;
