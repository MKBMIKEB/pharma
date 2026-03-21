import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const articles: Record<string, { title: string; date: string; category: string; content: string }> = {
  "beneficios-magnesio": {
    title: "5 beneficios del magnesio para tu bienestar",
    date: "2026-02-10",
    category: "Nutrición",
    content: `El magnesio es un mineral esencial que participa en más de 300 reacciones enzimáticas en el cuerpo. Aquí te compartimos cinco formas en que puede contribuir a tu bienestar:

1. **Relajación muscular**: El magnesio contribuye al funcionamiento normal de los músculos, favoreciendo la relajación después del ejercicio.

2. **Descanso nocturno**: Diversos estudios sugieren que niveles adecuados de magnesio pueden favorecer un descanso más reparador.

3. **Función del sistema nervioso**: Este mineral contribuye al funcionamiento normal del sistema nervioso.

4. **Salud ósea**: El magnesio es necesario para el mantenimiento de huesos en condiciones normales.

5. **Equilibrio electrolítico**: Contribuye al equilibrio electrolítico del organismo.

**Importante:** Este artículo es informativo y no constituye consejo médico. Consulte a un profesional de la salud antes de iniciar cualquier suplementación.`,
  },
  "vitamina-d-importancia": {
    title: "¿Por qué es importante la Vitamina D?",
    date: "2026-02-05",
    category: "Vitaminas",
    content: `La vitamina D es un nutriente esencial que nuestro cuerpo puede sintetizar a través de la exposición solar. Sin embargo, muchas personas no obtienen suficiente vitamina D solo del sol.

**Funciones principales:**
- Contribuye a la absorción normal de calcio y fósforo
- Apoya el mantenimiento de huesos normales
- Contribuye al funcionamiento normal del sistema inmunitario

**¿Cómo obtener suficiente vitamina D?**
La exposición solar moderada, una alimentación equilibrada y la suplementación pueden ayudar a mantener niveles adecuados.

**Nota:** Este artículo es informativo. Consulte a un profesional de la salud para evaluar sus niveles de vitamina D.`,
  },
  "adaptogenos-que-son": {
    title: "Adaptógenos: ¿qué son y cómo pueden apoyar tu energía?",
    date: "2026-01-28",
    category: "Bienestar",
    content: `Los adaptógenos son plantas y hongos que han sido utilizados durante siglos en la medicina tradicional. Entre los más conocidos se encuentran la Ashwagandha (Withania somnifera) y la Rhodiola Rosea.

**¿Qué son los adaptógenos?**
Son sustancias naturales que, según la tradición herbal, pueden ayudar al organismo a adaptarse al estrés ocasional.

**Adaptógenos populares:**
- **Ashwagandha**: Utilizada en la tradición ayurvédica por sus propiedades adaptogénicas.
- **Rhodiola Rosea**: Planta utilizada tradicionalmente en regiones nórdicas.

**Importante:** Los suplementos con adaptógenos no están destinados a diagnosticar, prevenir ni curar enfermedades. Consulte a un profesional de la salud.`,
  },
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles[slug || ""];

  if (!article) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-display font-bold">Artículo no encontrado</h1>
          <Link to="/blog" className="text-primary underline mt-4 inline-block">Volver al blog</Link>
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
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{article.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{article.category}</span>
            <span className="text-xs text-muted-foreground">{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">{article.title}</h1>
          <div className="prose prose-green max-w-none text-foreground">
            {article.content.split("\n\n").map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-4 whitespace-pre-line">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
