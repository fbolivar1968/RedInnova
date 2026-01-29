import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import universeBackground from "@/assets/universe-background.jpg";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main 
        className="flex-1 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${universeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white animate-float">
            Bienvenido a RedINNova
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Portal de Innovación para el Desarrollo de Proyectos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/projects")}
              className="animate-scale-in"
            >
              Buscar tu Proyecto
            </Button>
            
            <Button 
              variant="space" 
              size="xl"
              onClick={() => navigate("/register-idea")}
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              Registra tu Idea
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
