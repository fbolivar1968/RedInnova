import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProgressCircle from "@/components/ProgressCircle";
import { Users } from "lucide-react";
import ProjectProgress from "./ProjectProgress";

const fases = [
  {
    id: 1,
    name: "Fase 1: Preparación y Análisis Inicial",
    improvement: "Esta fase está centrada en la sensibilización sobre la importancia de los datos y en el establecimiento de las bases para la estandarización. En ella, se busca comprender profundamente el entorno de los datos, identificar sus fuentes y cómo se gestionan dentro de la organización.",
    progress: 100,
  },
  {
    id: 2,
    name: "Fase 2: Definición y Establecimiento de Procedimientos",
    improvement: "En esta fase, el proyecto se enfoca en definir de manera clara los objetivos y las reglas para la gobernanza de los datos, estableciendo un marco para la estandarización y el flujo de trabajo. Esta etapa también es clave para garantizar que todos los involucrados estén alineados en cuanto a los procedimientos a seguir Establecer GD, misión y alcance *Adopción de flujo de trabajo * Términos de referencia e instructivos de estandarización.* Obtención de recursos necesarios * Creación chatbot “AIVA” Para consulta de gobierno de datos.",
    progress: 78,
  },
  {
    id: 3,
    name: "Fase 3: Implementación y Mejora Continua",
    improvement: " Desarrollo de herramientas para el cambio de estructura de datos (Generador de códigos) *Mejorar y prevenir errores * Comunicación de acciones, feedback y mejora continua  ",
    progress: 37,
  },

];

const ProjectProgressDm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-space">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/project/dm")}
            className="mb-8 text-white hover:text-primary"
          >
            ← Volver al proyecto
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Avance del Proyecto
          </h1>

          <p className="text-center text-white/80 mb-12 text-lg">
            Seguimiento del progreso de cada Fase del proyecto DataMaster
          </p>

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

export default ProjectProgressDm;
