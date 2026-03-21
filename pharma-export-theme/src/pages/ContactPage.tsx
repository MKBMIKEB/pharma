import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado. Te responderemos pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-narrow max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Contacto</h1>
          <p className="text-muted-foreground mb-12">¿Tienes preguntas? Estamos aquí para ayudarte.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Nombre</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Correo electrónico</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensaje</label>
                  <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-green-medium font-semibold w-full">
                  Enviar mensaje
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="h-5 w-5" />, label: "Correo", value: "info@vitalplus.co" },
                { icon: <Phone className="h-5 w-5" />, label: "Teléfono", value: "+57 300 123 4567" },
                { icon: <MapPin className="h-5 w-5" />, label: "Ubicación", value: "Bogotá, Colombia" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-green-light text-primary flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-green-light rounded-xl text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
