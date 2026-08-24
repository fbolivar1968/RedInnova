import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProgressCircle from "@/components/ProgressCircle";
import { Users } from "lucide-react";

const link = "https://forjasbolivar.sharepoint.com/:f:/s/POSEIDON/IgBukNp8rGT1RYN59XvK4Io1AVS56gOgLVIct-SI_vIVk10?e=pw9pgE"
const fases = [
  {
    id: 1,
    name: "Fase 1: Identificación del problema",
    improvement: `• Confirmar problema, alcance y objetivos.  
    •Identificar usuarios clave. 
    •Priorizar funcionalidades del MVP. 
    •Formalizar patrocinio, recursos y criterios de éxito. `,
    progress: 30,
  },
  {
    id: 2,
    name: "Fase 2: Diagnóstico, Mapeo de Flujo (VSM) y Requisitos",
    improvement: `• Levantar línea base de traslados, trazabilidad, tiempos, discrepancias y visibilidad. 
    • Analizar causas raíz. 
    • Mapear flujo actual. 
    • Identificar brechas.`,
    progress: 20,
  },
  {
    id: 3,
    name: "Fase 3: Desarrollo de la Solución Digital",
    improvement: `• Diseñar y desarrollar la PWA/Híbrida, construir solicitudes, dashboard, ejecución móvil, observaciones,
    integración ERP/PSL, reportes, control de calidad y permisos.`,
    progress: 0,
  },
  {
    id: 4,
    name: "Fase 4: Implementación Piloto, Capacitación y Despliegue",
    improvement: `• Ejecución de prueba piloto en áreas seleccionadas de expedición y logística interna.
    • Capacitación y entrenamiento estructurado al equipo operativo y administrativo.
    • Monitoreo de indicadores clave (OTIF, tiempos de ciclo, precisión de despachos).
    • Ajustes finales, documentación de lecciones aprendidas y despliegue definitivo.`,
    progress: 0,
  },
];

const ProjectProgressExp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-space">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/project/exp")}
            className="mb-8 text-white hover:text-white"
          >
            ← Volver al proyecto
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Avance del Proyecto
          </h1>


          <p className="text-center text-white/80 mb-12 text-lg">
            Seguimiento del progreso de cada Fase del proyecto Logística Interna y Expedición
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fases.map((fase, index) => (
              <Card
                key={fase.id}
                className="p-6 bg-card/90 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Team header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{fase.name}</h3>
                </div>

                {/* Improvement description */}
                <p className="text-sm text-muted-foreground mb-6 min-h-[80px]">
                  {fase.improvement}
                </p>

                {/* Progress circle */}
                <div className="flex justify-center items-baseline-last">
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

export default ProjectProgressExp;
