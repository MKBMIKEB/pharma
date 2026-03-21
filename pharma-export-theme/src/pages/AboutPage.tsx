import Layout from "@/components/layout/Layout";
import { ShieldCheck, Users, Leaf, Award } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <div className="section-padding">
      <div className="container-narrow max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Sobre VitalPlus</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Somos una empresa colombiana dedicada a ofrecer suplementos de salud de calidad premium. 
          Nuestro compromiso es brindarte productos con ingredientes naturales, respaldados por la ciencia 
          y fabricados bajo los más altos estándares de calidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: <ShieldCheck className="h-8 w-8" />, title: "Calidad garantizada", desc: "Todos nuestros productos cumplen con las regulaciones del INVIMA y son fabricados en instalaciones certificadas." },
            { icon: <Users className="h-8 w-8" />, title: "Equipo experto", desc: "Contamos con un equipo de profesionales en salud y nutrición que supervisan cada formulación." },
            { icon: <Leaf className="h-8 w-8" />, title: "Ingredientes naturales", desc: "Seleccionamos cuidadosamente ingredientes de origen natural con evidencia científica." },
            { icon: <Award className="h-8 w-8" />, title: "Compromiso con Colombia", desc: "Fabricados en Colombia, apoyando el desarrollo de la industria nacional de suplementos." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-14 h-14 shrink-0 rounded-full bg-green-light text-primary flex items-center justify-center">{item.icon}</div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-light rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">Nuestra misión</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hacer accesibles suplementos de calidad premium para todos los colombianos, 
            contribuyendo a su bienestar a través de productos confiables, transparentes y respaldados por la ciencia.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
