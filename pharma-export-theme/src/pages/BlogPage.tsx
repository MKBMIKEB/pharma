import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const blogPosts = [
  { slug: "beneficios-magnesio", title: "5 beneficios del magnesio para tu bienestar", excerpt: "Descubre cómo el magnesio puede contribuir a tu relajación muscular, descanso y bienestar general.", date: "2026-02-10", category: "Nutrición" },
  { slug: "vitamina-d-importancia", title: "¿Por qué es importante la Vitamina D?", excerpt: "La vitamina D juega un papel fundamental en la absorción de calcio y la salud ósea. Conoce más.", date: "2026-02-05", category: "Vitaminas" },
  { slug: "adaptogenos-que-son", title: "Adaptógenos: ¿qué son y cómo pueden apoyar tu energía?", excerpt: "Los adaptógenos como la Ashwagandha y Rhodiola son ingredientes ancestrales que están ganando popularidad.", date: "2026-01-28", category: "Bienestar" },
];

const BlogPage = () => (
  <Layout>
    <div className="section-padding">
      <div className="container-narrow max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Blog</h1>
        <p className="text-muted-foreground mb-10">Artículos sobre salud, nutrición y bienestar.</p>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
              <article className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">{post.title}</h2>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default BlogPage;
