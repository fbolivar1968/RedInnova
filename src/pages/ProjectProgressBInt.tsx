import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProgressCircle from "@/components/ProgressCircle";
import { Users } from "lucide-react";

const link = "https://forjasbolivar.sharepoint.com/:f:/r/sites/POSEIDON/Transformacin%20Digital/Proyectos/2026/14.%20Biblioteca%20Virtual%20de%20Ingenier%C3%ADa%20con%20Calculadoras%20Normativas%20y%20IA/2_Dllo_Producto/Lean-Agile?d=w4b49176e51ea440b8729d50721df500c&csf=1&web=1&e=mcFVP9";

const fases = [
  {
    id: 1,
    name: "Fase 1: Definir (DMAIC) / Fundación Técnica y Alcance",
    improvement: `• Formalización del Project Charter, alineación de stakeholders (Eddy Lara - Sponsor, Sebastian Deossa - Líder de proyecto).
• Levantamiento del inventario crítico y priorización de normas técnicas (ASTM A36, A29, SAE J429, DIN, ISO, ANSI).
• Definición de arquitectura tecnológica (FastAPI, Python determinístico, PostgreSQL, Microsoft Entra ID).
• Establecimiento de criterios de aceptación SMART y casos patrón de validación de ingeniería.`,
    progress: 46,
  },
  {
    id: 2,
    name: "Fase 2: Medir y Analizar / Diagnóstico y Causas Raíz",
    improvement: `• Levantamiento de métricas baseline: consultas manuales de 5 a 30 min y tiempos de cálculo de 10 a 60+ min.
• Análisis de causa raíz (Ishikawa 6M y 5 Porqués) sobre dispersión de archivos y recálculos manuales.
• Mapeo del proceso To-Be (Swimlane y VSM) para eliminar reprocesos por mala transcripción.
• Selección de la alternativa óptima: Calculadoras normativas estructuradas con biblioteca y soporte NLP/RAG.`,
    progress: 20,
  },
  {
    id: 3,
    name: "Fase 3: Mejorar e Implementar / Desarrollo MVP de Calculadoras y Biblioteca",
    improvement: `• Desarrollo del motor determinístico para cálculo de chavetas (DIN 6885), tolerancias (ISO 286 / DIN 7168), roscas y elementos mecánicos.
• Ingesta, indexación y visor documental para 300–500 normas y especificaciones técnicas oficiales.
• Integración del asistente NLP/RAG explicativo con citas a fuentes y derivación estricta a algoritmos validados.
• Generación de memorias de cálculo trazables en PDF con registro de versiones, usuario y fecha.`,
    progress: 0,
  },
  {
    id: 4,
    name: "Fase 4: Controlar y Sostener / Piloto, Gobernanza y Despliegue",
    improvement: `• Ejecución de pruebas patrón (UAT) y doble validación técnica con Ingeniería Senior.
• Implementación de telemetría de uso, tiempo de respuesta y monitoreo de satisfacción del usuario (CSAT >85%).
• Emisión y socialización del Procedimiento Operativo Estándar (SOP-ENG-001) para la gobernanza de datos técnicos.
• Despliegue productivo, plan de control mensual y auditorías de conocimiento institucionalizado.`,
    progress: 0,
  },
];

const ProjectProgressBInt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-space">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/project/BInt")}
            className="mb-8 text-white hover:text-primary"
          >
            ← Volver al proyecto
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Avance del Proyecto
          </h1>

          <p className="text-center text-white/80 mb-4 text-lg">
            Plataforma Centralizada de Conocimiento Técnico y Calculadoras Normativas con IA
          </p>
          <p className="text-center text-white/60 mb-10 text-sm max-w-2xl mx-auto">
            Seguimiento del progreso y estado de implementación por fases metodológicas LAR
          </p>

          <div className="flex justify-center my-4">
            <Button
              variant="outline"
              onClick={() => window.open(link, "_blank")}
              className="text-primary hover:text-white"
            >
              Acceder al espacio de trabajo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {fases.map((fase, index) => (
              <Card
                key={fase.id}
                className="p-6 bg-card/90 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary animate-fade-in flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  {/* Team header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">{fase.name}</h3>
                  </div>

                  {/* Improvement description */}
                  <div className="text-sm text-muted-foreground mb-6 whitespace-pre-line leading-relaxed">
                    {fase.improvement}
                  </div>
                </div>

                {/* Progress circle */}
                <div className="flex justify-center items-center pt-4 border-t border-border/50">
                  <ProgressCircle
                    teamName={fase.name}
                    initialProgress={fase.progress}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectProgressBInt;
