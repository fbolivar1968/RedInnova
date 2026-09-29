import { Lightbulb, Search, Cpu, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TimelineStage {
  stage: number;
  title: string;
  objective: string;
  deliverables: string;
  icon: React.ReactNode;
}

const stages: TimelineStage[] = [
  {
    stage: 1,
    title: "Fase 1: Definir (DMAIC) — Fundación Técnica, Alcance y Gobernanza",
    objective: "Formalización del Project Charter, alineación de stakeholders, definición de criterios SMART y consolidación de la lista maestra de normas y cálculos.",
    deliverables: "Project Charter firmado, matriz de partes interesadas, inventario priorizado de normas técnicas y arquitectura tecnológica base.",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    stage: 2,
    title: "Fase 2: Medir y Analizar — Diagnóstico Baseline, Causas Raíz y Proceso To-Be",
    objective: "Levantamiento de tiempos de ciclo actuales (5–30 min en consultas, 10–60+ min en cálculos), análisis Ishikawa 6M y selección de la solución de desarrollo web.",
    deliverables: "Métricas baseline documentadas, análisis 5 Porqués, mapa de flujo To-Be (Swimlane/VSM) y matriz de selección técnica.",
    icon: <Search className="h-8 w-8" />,
  },
  {
    stage: 3,
    title: "Fase 3: Mejorar e Implementar — Desarrollo MVP Calculadoras y Repositorio Normativo",
    objective: "Desarrollo del motor determinístico Python (chavetas, tolerancias ISO/DIN, roscas, pines, sprockets), carga documental OCR y asistente NLP/RAG con citas.",
    deliverables: "Módulos de cálculo parametrizados, repositorio de 300–500 normas con visor, asistente de consulta con guardrails y generador de memorias PDF trazables.",
    icon: <Cpu className="h-8 w-8" />,
  },
  {
    stage: 4,
    title: "Fase 4: Controlar y Sostener — Validación Técnica, Piloto y Despliegue",
    objective: "Validación mediante casos patrón aprobados por Ingeniería Senior, implementación del SOP-ENG-001, capacitación y monitoreo de telemetría y adopción.",
    deliverables: "Pruebas UAT aprobadas, procedimiento SOP-ENG-001 emitido, panel de control de telemetría y satisfacción (CSAT >85%) y despliegue productivo.",
    icon: <CheckCircle className="h-8 w-8" />,
  },
];

const ProjectTimelineBInt = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Fases de Implementación Lean Six Sigma / DMAIC
      </h2>

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

              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary mt-1">{stage.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{stage.title}</h3>
                </div>
              </div>

              {/* Objective & Deliverables */}
              <div className="mt-4 pl-0 md:pl-12 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Objetivo:</p>
                  <p className="text-foreground text-sm leading-relaxed">{stage.objective}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary mb-1">Entregables Clave:</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stage.deliverables}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimelineBInt;
