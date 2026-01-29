import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { ArrowRight, Rocket } from "lucide-react";

const projects = [
  {
    id: "ofv",
    name: "OFV",
    fullName: "Optimización del Flujo de Valor",
    description: "Reto 30-60-90: Procesos que Fluyen",
  },
  {
    id: "dm",
    name: "DM",
    fullName: "Data Master",
    description: "Gobernanza de datos Forjas Bolívar",
  },
];

const ProjectList = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-space">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 text-white hover:text-primary"
          >
            ← Volver al inicio
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Proyectos Disponibles
          </h1>
          
          <p className="text-center text-white/80 mb-12 text-lg">
            Selecciona un proyecto para ver más detalles
          </p>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="p-8 bg-card/90 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group border-2 hover:border-primary animate-fade-in"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Rocket className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {project.fullName}
                      </h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                  
                  <ArrowRight className="h-8 w-8 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectList;
