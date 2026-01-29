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
    improvement: "Optimización del proceso de recepción de materiales para reducir tiempos de espera en almacén",
    progress: 17,
    Link: "https://forjasbolivar.sharepoint.com/:f:/s/POSEIDON/IgDbo3H7s8diSqxId4A6k13tAZORcVNhfkuAbSL08703l5w?e=dxiSik"
  },
  {
    id: 2,
    name: "Equipo 60-63 HRC-Los duros 🔨",
    improvement: "Implementación de metodología 5S en área de producción para mejorar eficiencia operacional",
    progress: 23,
    Link: "https://forjasbolivar.sharepoint.com/:f:/s/POSEIDON/IgCxrVngZXfrQaq9APAJoiUnATA6GaOSvnesREB_ZyYB5Wk?e=oJt3nv"
  },
  {
    id: 3,
    name: "GTRD 🧠",
    improvement: "Digitalización del proceso de control de calidad para acelerar la detección de no conformidades",
    progress: 17,
    Link: "https://forjasbolivar.sharepoint.com/:f:/s/POSEIDON/IgAJwEyHnyx4SaCXZc3LA-riAd82GoDoirCoDne_jp7i9xk?e=Va4saI"
  },
  {
    id: 4,
    name: "Los calientes ♨️",
    improvement: "Reducción de movimientos innecesarios en línea de ensamble mediante redistribución de estaciones",
    progress: 17,
    Link: "https://forjasbolivar.sharepoint.com/:f:/s/POSEIDON/IgA9XtDQDJLwSokvdRAj12sAAcPOzSt5SAI6h66ITAIK3lE?e=PMsC6E"
  },

];

const ProjectProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-space">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/project/ofv")}
            className="mb-8 text-white hover:text-primary"
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
                    className="text-primary hover:text-primary/80"
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
