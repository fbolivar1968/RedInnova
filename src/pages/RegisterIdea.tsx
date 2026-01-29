import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import galaxyBackground from "@/assets/galaxy-background.jpg";
import einsteinQuote from "@/assets/einstein-quote.jpg";
import { Lightbulb, ExternalLink, Sparkles, Target, Award } from "lucide-react";
const RegisterIdea = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen flex flex-col" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${galaxyBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 text-white hover:text-primary">
            ← Volver al inicio
          </Button>
          
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block p-4 bg-primary/20 rounded-full mb-6 animate-pulse-glow">
              <Sparkles className="h-16 w-16 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Tus ideas construyen el futuro
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comparte tu visión innovadora y sé parte del cambio en Forjas Bolívar
            </p>
            
            <Button variant="hero" size="xl" onClick={() => window.open("https://forms.office.com/r/jkU9iMS3Wp", "_blank")} className="gap-3 animate-scale-in">
              <Lightbulb className="h-6 w-6" />
              Registrar tu Idea
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
          
          {/* About EcoInnova */}
          <section className="mb-16">
            <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">Acerca de RedINNova</h2>
              
              <div className="space-y-4 text-foreground text-lg">
                <p className="text-base">
                  <strong>RedINNova</strong> es el portal de innovación de Forjas Bolívar, diseñado para
                  impulsar la creatividad y el desarrollo de proyectos transformadores dentro de nuestra organización.
                </p>
                
                <p>
                  Nuestro objetivo es crear un ecosistema donde cada empleado pueda contribuir con sus ideas, 
                  participar activamente en proyectos de mejora continua y ser reconocido por su aporte al 
                  crecimiento de la compañía.
                </p>
              </div>
            </Card>
          </section>
          
          {/* Benefits */}
          <section className="mb-16 content-center ">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              Beneficios de Participar
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6 px-[21px]">
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Visibilidad</h3>
                <p className="text-muted-foreground">
                  Tu idea será vista por los líderes de la organización y tendrá la oportunidad de implementarse
                </p>
              </Card>
              
              
              
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Impacto</h3>
                <p className="text-muted-foreground">
                  Sé parte del cambio y contribuye activamente a la innovación de la compañía
                </p>
              </Card>
            </div>
          </section>
          
          {/* Motivational Video Section */}
          <section>
            <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                Inspírate y Transforma el Mundo
              </h2>
              
              <div className="rounded-lg overflow-hidden bg-background/50 flex items-center justify-center p-8">
                <img src={einsteinQuote} alt="Cita de Albert Einstein sobre las ideas" className="w-full max-w-2xl h-auto rounded-lg shadow-elegant" />
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>;
};
export default RegisterIdea;