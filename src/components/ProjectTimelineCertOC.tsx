import { Calendar, CheckCircle, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TimelineStage {
  stage: number;
  title: string;
  objective: string;
  icon: React.ReactNode;
}

const stages: TimelineStage[] = [
  {
    stage: 1,
    title: "Fase 1: Definir el problema de trazabilidad",
    objective: "Diagnóstico y mapeo de brechas en los procesos actuales de compras de materiales certificados y estandarizados.",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    stage: 2,
    title: "Fase 2: Revisar flujo actual.",
    objective: "Diseño del MVP y automatización del proceso de validación con Gatekeeper, integrando datos de SQL y formatos.",
    icon: <CheckCircle className="h-8 w-8" />,
  },
  {
    stage: 3,
    title: "Fase 3: Control y documentación",
    objective: "Control del log, KPI 100%, KPI −30% y alerta al Líder de Compras y usuario final.",
    icon: <Calendar className="h-8 w-8" />,
  },
];

const ProjectTimeline = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Fases de Implementación</h2>

      <div className="relative">
        {/* Timeline connector line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

        <div className="space-y-12">
          {stages.map((stage, index) => (
            <Card
              key={stage.stage}
              className="relative ml-0 md:ml-20 p-6 bg-card/80 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stage number badge */}
              <div className="absolute -left-4 md:-left-16 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg glow-orange">
                {stage.stage}
              </div>

              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary">{stage.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{stage.title}</h3>
                </div>
              </div>

              {/* Objective */}
              <div className="mt-4 pl-12">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Objetivo:</p>
                <p className="text-foreground">{stage.objective}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
