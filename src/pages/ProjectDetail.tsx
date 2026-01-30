import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProjectTimeline from "@/components/ProjectTimeline";
import BenefitsSection from "@/components/BenefitsSection";
import orangePlanet from "@/assets/orange-planet.png";
import { Users, Clock, FolderOpen, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProjectDetail = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${orangePlanet})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="text-white hover:text-white"
            >
              ← Volver a proyectos
            </Button>

            <Button
              variant="hero"
              onClick={() => navigate("/progress")}
            >
              Ver Avance de Proyectos
            </Button>
          </div>

          {/* Project Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bienvenido al proyecto Optimización del Flujo de Valor
            </h1>

            <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50">
              <p className="text-lg text-foreground leading-relaxed">
                Nos complace anunciar el inicio de la <strong className="text-primary">Fase 2: Analizar y Mejorar</strong>,
                dentro de nuestro <strong className="text-secondary">Reto 30-60-90: Procesos que Fluyen</strong>.
                Este es un espacio para que juntos impulsemos la mejora continua, potenciemos nuestra creatividad
                y generemos un impacto real en la organización.
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <ProjectTimeline />
          </div>

          {/* Important Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Información Importante
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Formen su Equipo</h3>
                <p className="text-muted-foreground">
                  Elijan un nombre creativo que los represente y compártanlo.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Tiempo Protegido</h3>
                <p className="text-muted-foreground">
                  Cada equipo contará con 4 horas mensuales de trabajo protegido, exclusivamente dedicadas al proyecto.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <FolderOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">¿Dónde guardar la información?</h3>
                <p className="text-muted-foreground">
                  Se enviará al correo el acceso a la carpeta "reto 30-60-90". Dentro están los formatos DMAIC,
                  Project Charter y mapa de Gantt.
                </p>
              </Card>
            </div>
          </section>

          {/* Benefits */}
          <BenefitsSection />

          {/* Awards */}
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fade-in">
              🏆 Premiación
            </h2>

            <Card className="p-12 bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-md border-2 border-primary/60 shadow-2xl animate-fade-in">
              <div className="flex items-center justify-center gap-6 mb-10">
                <Award className="h-12 w-12 text-primary animate-pulse flex-shrink-0" />
                <p className="text-foreground text-xl font-semibold text-center max-w-3xl">
                  Compartiremos con toda la organización los resultados de cada equipo, mostrando el{" "}
                  <span className="text-primary font-bold">ANTES</span> y el{" "}
                  <span className="text-secondary font-bold">DESPUÉS</span> de las mejoras.
                </p>
                <Award className="h-12 w-12 text-secondary animate-pulse flex-shrink-0" />
              </div>

              <div className="flex justify-center items-end gap-4 md:gap-6 my-12">
                {/* 2nd Place */}
                <div
                  className="text-center p-8 bg-gradient-to-br from-gray-300/40 to-gray-400/40 rounded-2xl hover:scale-110 transition-all duration-500 cursor-pointer group animate-fade-in border-4 border-gray-300/60 shadow-xl hover:shadow-2xl"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="text-7xl mb-4 group-hover:scale-125 transition-transform">🥈</div>
                  <div className="text-6xl font-bold text-foreground mb-3 group-hover:scale-125 transition-transform">
                    2°
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">Segundo Lugar</div>
                </div>

                {/* 1st Place - Destacado */}
                <div
                  className="text-center p-12 bg-gradient-to-br from-yellow-400/50 via-yellow-500/40 to-yellow-600/50 rounded-3xl hover:scale-110 transition-all duration-500 cursor-pointer group animate-fade-in border-4 border-yellow-400/80 shadow-2xl hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] relative"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    ¡GANADOR!
                  </div>
                  <div className="text-8xl mb-4 group-hover:scale-125 transition-transform animate-pulse">🏆</div>
                  <div className="text-8xl font-bold text-foreground mb-4 group-hover:scale-125 transition-transform">
                    1°
                  </div>
                  <div className="text-2xl font-bold text-foreground">Primer Lugar</div>
                </div>

                {/* 3rd Place */}
                <div
                  className="text-center p-8 bg-gradient-to-br from-orange-400/40 to-orange-600/40 rounded-2xl hover:scale-110 transition-all duration-500 cursor-pointer group animate-fade-in border-4 border-orange-400/60 shadow-xl hover:shadow-2xl"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="text-7xl mb-4 group-hover:scale-125 transition-transform">🥉</div>
                  <div className="text-6xl font-bold text-foreground mb-3 group-hover:scale-125 transition-transform">
                    3°
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">Tercer Lugar</div>
                </div>
              </div>

              {/* 4th and 5th Place */}
              <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
                <div
                  className="text-center p-6 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in border-2 border-primary/40 shadow-lg"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">🎖️</div>
                  <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-125 transition-transform">
                    4°
                  </div>
                  <div className="text-base font-semibold text-muted-foreground">Cuarto Lugar</div>
                </div>

                <div
                  className="text-center p-6 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in border-2 border-secondary/40 shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">⭐</div>
                  <div className="text-5xl font-bold text-secondary mb-2 group-hover:scale-125 transition-transform">
                    5°
                  </div>
                  <div className="text-base font-semibold text-muted-foreground">Quinto Lugar</div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl border-2 border-primary/40">
                <p className="text-center text-foreground text-xl font-semibold leading-relaxed">
                  🎉 Cerraremos con una <span className="text-primary font-bold">ceremonia especial de premiación</span>,
                  donde se reconocerán los equipos con <span className="text-secondary font-bold">mayor impacto</span> en
                  la reducción de tiempos. 🎉
                </p>
              </div>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Preguntas Frecuentes
            </h2>

            <Card className="p-8 bg-card/90 backdrop-blur-sm">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    ¿Cómo formar un equipo?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Reúnete con tus compañeros interesados en participar, elijan un nombre creativo que los
                    identifique y repórtalo a tu coordinador de proyecto.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    ¿Cuántas horas puedo dedicar al proyecto?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Cada equipo cuenta con 4 horas mensuales de trabajo protegido. Las reuniones se coordinarán
                    según el flujo de trabajo de cada equipo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    ¿Qué documentos debo llenar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Dentro de tu carpeta del proyecto encontrarás el formato DMAIC, Project Charter y un mapa
                    de Gantt de seguimiento que deberás diligenciar.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </section>

          {/* Call to Action */}
          <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary text-center animate-pulse-glow">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ✨ ¡Este es el momento de poner a prueba nuestras ideas, aprender juntos y transformar nuestros procesos!
            </h2>
            <p className="text-xl text-foreground">
              👉 Súmate al reto, aporta tu creatividad y hagamos que los procesos fluyan.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
