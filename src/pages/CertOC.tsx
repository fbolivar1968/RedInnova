import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import orangePlanet from "@/assets/orange-planet.png";
import { Users, Truck, Layers, Target } from "lucide-react";
import ProjectTimelineCertOC from "@/components/ProjectTimelineCertOC";
import BenefitCertOC from "@/components/BenefitCertOC";

const ProjectCertOC = () => {
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
              onClick={() => navigate("/progressCertOC")}
            >
              Ver Avance del Proyecto
            </Button>
          </div>

          {/* Project Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bienvenido al proyecto Certificado de Orden De Compra
            </h1>

            <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50">
              <p className="text-lg text-foreground leading-relaxed">
                Diseñar e implementar un Bot Gatekeeper en Python que lea el repositorio de Compras, consulte en SQL Server los soportes técnicos de cada orden de compra, consolide la OC y sus anexos en un único PDF y genere una hoja de referencia para archivos no compatibles con PDF. El alcance incluye desarrollo del bot, pruebas E2E, despliegue y capacitación.
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <ProjectTimelineCertOC />
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
                  La Orden de Compra (OC) generada en el ERP PSL no incorpora los planos, fichas técnicas, cotizaciones y demás soportes.
                  Los archivos permanecen dispersos en rutas externas,
                  correo o WhatsApp, por lo que la OC no es un documento único, autosuficiente ni auditable.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Layers className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Intereses de la empresa</h3>
                <p className="text-muted-foreground">
                  Cumplimiento AS9100D, trazabilidad documental, reducción del riesgo de auditoría, eficiencia operativa,
                  disminución de reprocesos y control centralizado de la información.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Impacto en Auditorias</h3>
                <p className="text-muted-foreground">
                  Riesgo de incumplimiento AS9100D; duplicidad y gestión manual; dificultad para identificar versiones vigentes; enlaces rotos; y limitación para integrar formatos nativos. Meta: 100% de OCs con soporte y 90% en PDF único.
                </p>
              </Card>
            </div>
          </section>

          {/* Benefits */}
          <BenefitCertOC />

          {/* Call to Action */}
          <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary text-center hover:scale-105 transition-all duration-300">
            <p className="text-xl text-black/80">
              👉 Certificado de Orden de Compra Automatizado, <br />
              cumplimiento de los requisitos de la norma AS9100D
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectCertOC;
