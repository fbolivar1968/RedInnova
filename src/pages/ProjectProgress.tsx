import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProgressCircle from "@/components/ProgressCircle";
import { Users } from "lucide-react";

const equipos = [
  {
    id: 1,
    name: "Equipo Comex_24/7 ✈️🚢",
    improvement: "Diseñar e implementar una plataforma colaborativa en la nube que centralice y estandarice la información de compras internacionales y operaciones logísticas (importaciones, exportaciones, nacionales y urbanas), permitiendo la trazabilidad end-to-end desde la orden de compra u orden de venta hasta la entrega final, con acceso en línea y en tiempo real para todos los usuarios internos.",
    progress: 100,
    Link: "https://forjasbolivar.sharepoint.com/:f:/r/sites/POSEIDON/Innovacin/Innovacion/00-Proyectos/_2025/EP_Eficiencia%20y%20Productividad/10.%20TiemposMuertos/2_Dllo_Producto/02_Plan%20de%20acci%C3%B3n/Reto30-60-90/Equipo_Comex_24_7?csf=1&web=1&e=smm7hU"
  },
  {
    id: 2,
    name: "Equipo 60-63 HRC-Los duros 🔨",
    improvement: "El proyecto busca estandarizar la forma de recepción y registro de solicitudes, reduciendo tiempos muertos y aumentando la eficiencia del equipo ",
    progress: 93,
    Link: "https://forjasbolivar.sharepoint.com/:f:/r/sites/POSEIDON/Innovacin/Innovacion/00-Proyectos/_2025/EP_Eficiencia%20y%20Productividad/10.%20TiemposMuertos/2_Dllo_Producto/02_Plan%20de%20acci%C3%B3n/Reto30-60-90/Equipo_%2060-63HRC-Los%20duros?csf=1&web=1&e=8iYbdl"
  },
  {
    id: 3,
    name: "GTRD 🧠",
    improvement: `Definir e implementar políticas de fabricación claras, consensuadas y técnicamente viables, alineadas entre ingeniería, fabricación (procesos), servicios y 
    Ops que establezcan criterios estándar de proceso desde la etapa de diseño. Esto permitirá reducir reprocesos en planos, minimizar cambios tardíos por ajustes de proceso, 
    disminuir retrabajos en fabricación y mejorar la estabilidad y confiabilidad del flujo productivo. `,
    progress: 82,
    Link: "https://forjasbolivar.sharepoint.com/:f:/r/sites/POSEIDON/Innovacin/Innovacion/00-Proyectos/_2025/EP_Eficiencia%20y%20Productividad/10.%20TiemposMuertos/2_Dllo_Producto/02_Plan%20de%20acci%C3%B3n/Reto30-60-90/Equipo_GTRD?csf=1&web=1&e=J3lnk0"
  },
  {
    id: 4,
    name: "Los calientes ♨️",
    improvement: "Reducir el tiempo de ciclo del proceso de montajes en caliente en la sección de Forja mediante la estandarización, documentación y socialización del conocimiento técnico, logrando una disminución sostenida de los tiempos de montaje, reprocesos y tiempos de capacitación, para incrementar la eficiencia operativa, mejorar el cumplimiento en las entregas y aumentar la satisfacción del cliente a través de decisiones basadas en datos y experiencias previas del proceso. ",
    progress: 98,
    Link: "https://forjasbolivar.sharepoint.com/:f:/r/sites/POSEIDON/Innovacin/Innovacion/00-Proyectos/_2025/EP_Eficiencia%20y%20Productividad/10.%20TiemposMuertos/2_Dllo_Producto/02_Plan%20de%20acci%C3%B3n/Reto30-60-90/Equipo_Los%20calientes?csf=1&web=1&e=f4TwZE"
  },
  {
    id: 5,
    name: "Costos 🤑",
    improvement: `Busca reducir la manualidad en la generación de informes de costos, 
                  especialmente el Informe de Costos Mensual general por producto entregado al cliente, 
                  que actualmente requiere descargar datos brutos de PSL, manipularlos extensamente en Excel, 
                  añadir fórmulas y columnas manuales, realizar conciliaciones y crear visualizaciones.`,
    progress: 10,
    Link: "https://forjasbolivar.sharepoint.com/:f:/s/POSEIDON/IgC6lvUwnmaCSJsYSbslxnTwAfuth8aBao-8D2F7IbmInTs?e=TqM9Ev"
  },

];

const ProjectProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-space">
      <Header />

      <main className="flex-1 container mx-auto px-5 py-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/project/ofv")}
            className="mb-8 text-white hover:text-white"
          >
            ← Volver al proyecto
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Avance de Proyectos
          </h1>

          <p className="text-center text-white/80 mb-12 text-lg">
            Seguimiento del progreso de cada equipo en el Reto 30-60-90
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipos.map((team, index) => (
              <Card
                key={team.id}
                className="p-6 bg-card/90 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Team header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{team.name}</h3>
                </div>

                {/* Improvement description */}
                <p className="text-sm text-muted-foreground mb-6 min-h-[80px]">
                  {team.improvement}
                </p>

                {/* Progress circle */}
                <div className="flex justify-center">
                  <ProgressCircle
                    teamName={team.name}
                    initialProgress={team.progress}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open(team.Link, "_blank")}
                    className="text-primary hover:text-white"
                  >
                    Acceder al espacio de trabajo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectProgress;
