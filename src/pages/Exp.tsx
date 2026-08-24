import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import orangePlanet from "@/assets/orange-planet.png";
import { Users, Truck, Layers, Target } from "lucide-react";
import BenefitExp from "@/components/BenefitExp";
import ProgressTimelineExp from "@/components/ProgressTimelineExp";

const ProjectExp = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${orangePlanet})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="text-white hover:text-white"
            >
              ← Volver a proyectos
            </Button>

            <Button
              variant="hero"
              onClick={() => navigate("/progressExp")}
            >
              Ver Avance del Proyecto
            </Button>
          </div>

          {/* Project Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bienvenido al proyecto Logística Interna y Expedición
            </h1>

            <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50">
              <p className="text-lg text-foreground leading-relaxed">
                Optimizar integralmente la gestión de <strong className="text-primary">movimientos de inventario en planta</strong>, asegurando el registro formal y
                oportuno de los traslados, mejorando la trazabilidad, reduciendo discrepancias de inventario, habilitando visibilidad
                en tiempo real y fortaleciendo el control de calidad antes del movimiento de materiales  mediante metodologías <strong className="text-secondary">Lean & Agile</strong>.
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <ProgressTimelineExp />
          </div>

          {/* Important Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Información Importante
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in">
                <Truck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Contexto</h3>
                <p className="text-muted-foreground">
                  La gestión actual de movimientos de inventario en planta se basa en una aplicación de escritorio obsoleta,
                  incompatible con dispositivos móviles como tablets. Esta situación genera ineficiencias operacionales,
                  dependencia de procesos informales como chats, pérdida de información crítica, baja trazabilidad,
                  discrepancias de inventario y dificultad para tomar decisiones con información en tiempo real.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Layers className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Intereses de la empresa</h3>
                <p className="text-muted-foreground">
                  Aumentar la confiabilidad del inventario, reducir reprocesos y movimientos no registrados,
                  mejorar la eficiencia de logística interna y expeditación, facilitar la auditoría de movimientos,
                  habilitar reportes de desempeño y apoyar la toma de decisiones con información consolidada y oportuna.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Impacto en OTIF</h3>
                <p className="text-muted-foreground">
                  Alineación directa con los indicadores clave de desempeño de la compañía, elevando la confiabilidad del cumplimiento de entregas a los clientes.
                </p>
              </Card>
            </div>
          </section>

          {/* Benefits */}
          <BenefitExp />

          {/* Call to Action */}
          <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary text-center animate-pulse-glow">
            <p className="text-xl text-foreground">
              👉 Logística ágil y eficiente: convirtiendo el flujo de valor interno en una ventaja competitiva para la entrega oportuna a nuestros clientes.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectExp;
