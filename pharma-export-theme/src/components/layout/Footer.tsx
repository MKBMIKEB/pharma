import { Link } from "react-router-dom";

const DISCLAIMER = "Este producto es un suplemento alimenticio. No reemplaza una alimentación equilibrada ni un estilo de vida saludable. Consulte a un profesional de la salud antes de consumir. Resultados individuales pueden variar.";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <span className="font-display font-bold text-sm">V+</span>
            </div>
            <span className="font-display text-xl font-bold">VitalPlus</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Suplementos de salud de calidad premium. Tu bienestar, nuestra prioridad.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4">Tienda</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/colecciones" className="hover:text-primary-foreground transition-colors">Todos los productos</Link></li>
            <li><Link to="/colecciones/salud-masculina" className="hover:text-primary-foreground transition-colors">Salud Masculina</Link></li>
            <li><Link to="/colecciones/vitaminas" className="hover:text-primary-foreground transition-colors">Vitaminas</Link></li>
            <li><Link to="/colecciones/energia" className="hover:text-primary-foreground transition-colors">Energía</Link></li>
            <li><Link to="/colecciones/sueno" className="hover:text-primary-foreground transition-colors">Sueño</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base font-semibold mb-4">Información</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/nosotros" className="hover:text-primary-foreground transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto" className="hover:text-primary-foreground transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/politicas/envios" className="hover:text-primary-foreground transition-colors">Política de Envíos</Link></li>
            <li><Link to="/politicas/devoluciones" className="hover:text-primary-foreground transition-colors">Devoluciones</Link></li>
            <li><Link to="/politicas/privacidad" className="hover:text-primary-foreground transition-colors">Privacidad</Link></li>
            <li><Link to="/politicas/terminos" className="hover:text-primary-foreground transition-colors">Términos y Condiciones</Link></li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 pt-8 border-t border-primary-foreground/10">
        <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-4xl">
          <strong>Aviso Legal:</strong> {DISCLAIMER}
        </p>
        <p className="text-xs text-primary-foreground/40 mt-4">
          © {new Date().getFullYear()} VitalPlus. Todos los derechos reservados. Colombia.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
