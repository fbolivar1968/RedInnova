import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import orangePlanet from "@/assets/orange-planet.png";
import { BookOpen, Calculator, Database, ShieldAlert } from "lucide-react";
import BenefitBInt from "@/components/BenefitBInt";
import ProjectTimelineBInt from "@/components/ProjectTimelineBInt";

const ProjectBInt = () => {
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
              onClick={() => navigate("/progressBInt")}
            >
              Ver Avance del Proyecto
            </Button>
          </div>

          {/* Project Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bienvenido a la Biblioteca Interactiva de Ingeniería
            </h1>

            <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50">
              <p className="text-lg text-foreground leading-relaxed">
                Desarrollo de una plataforma web centralizada e interactiva para consolidar el conocimiento técnico crítico de Forjas Bolívar y{" "}
                <strong className="text-primary">automatizar cálculos mecánicos parametrizados</strong> bajo normas técnicas (ASTM, SAE, ISO, DIN, ANSI),{" "}
                integrando un <strong className="text-secondary">asistente de consulta técnica con IA (NLP/RAG)</strong> bajo metodología Lean Six Sigma / DMAIC.
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <ProjectTimelineBInt />
          </div>

          {/* Important Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Información Importante
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in">
                <Database className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Contexto del Problema</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  La información técnica crítica para diseñar y calcular componentes mecánicos (roscas, tolerancias, chavetas, cadenas, resortes y piñones) se encuentra dispersa en archivos Excel personales, PDFs y libros físicos, obligando a búsquedas repetitivas de 5 a 30 min y recálculos manuales de hasta 60+ min.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Intereses de la Empresa</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Estandarización técnica entre Diseño, Proyectos y Operaciones, eliminación de discrepancias por versiones obsoletas, protección del capital intelectual institucional, liberación de horas productivas del equipo de ingeniería y mitigación de riesgos operativos.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <ShieldAlert className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Mitigación de Errores</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Llevar a cero los errores y reprocesos causados por transcripción o lectura errónea de tablas normativas, mediante modelos matemáticos determinísticos validados formalmente por Ingeniería Senior con doble verificación técnica.
                </p>
              </Card>
            </div>
          </section>

          {/* Benefits */}
          <BenefitBInt />

          {/* Call to Action */}
          <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary text-center animate-pulse-glow">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ingeniería ágil, estandarizada y potenciada por inteligencia artificial
            </h3>
            <p className="text-lg text-white/80">
              👉 Transformando el conocimiento técnico disperso en una fuente única de verdad para el diseño y la fabricación de precisión en Forjas Bolívar.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectBInt;
