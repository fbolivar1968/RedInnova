import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import orangePlanet from "@/assets/orange-planet.png";
import { Users, DatabaseZap, FolderOpen } from "lucide-react";
import BenefitRCCP from "@/components/BenefitRCCP";
import ProjectTimelineRCCP from "@/components/ProjectTimelineRCCP";


const ProjectRCCP = () => {
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
                            onClick={() => navigate("/progressRccp")}
                        >
                            Ver Avance del Proyecto
                        </Button>
                    </div>

                    {/* Project Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Bienvenido al proyecto RCCP
                        </h1>

                        <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50">
                            <p className="text-lg text-foreground leading-relaxed">
                                El objetivo de este proyecto es migrar de una planeación manual y
                                reactiva a un modelo proactivo y automatizado que <strong className="text-primary">  reduzca tiempos operativos, mejore la precisión del plan,
                                    optimice </strong> el uso de la capacidad instalada y disminuya riesgos de incumplimiento.
                            </p>
                        </Card>
                    </div>

                    {/* Timeline */}
                    <div className="mb-16">
                        <ProjectTimelineRCCP />
                    </div>

                    {/* Important Information */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                            Información Importante
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in">
                                <DatabaseZap className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Contexto de la oportunidad</h3>
                                <p className="text-muted-foreground">
                                    La empresa enfrenta una planeación de capacidad altamente manual y dispersa, basada en Excel, consultas informales y comunicación no estructurada,
                                    lo que retrasa la validación de carga vs. capacidad y genera una reacción tardía ante cuellos de botella.                                 </p>
                            </Card>

                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                                <Users className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Intereses de la empresa</h3>
                                <p className="text-muted-foreground">
                                    Eficiencia operativa, optimización financiera de costos, mejor cumplimiento al cliente y menor volatilidad del plan para apoyar seguridad y sostenibilidad.                                </p>
                            </Card>

                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                <FolderOpen className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Impacto esperado</h3>
                                <p className="text-muted-foreground">
                                    Validar capacidad de forja, mecanizado, soldadura y ensamble en un 100% de RCCP consolidado y validado, usando ITPM,
                                    datos históricos y validación por responsables de sección, consolidando bases para un plan maestro con restricciones reales,
                                    entre MVP y despliegue.
                                </p>
                            </Card>
                        </div>
                    </section>

                    {/* Benefits */}
                    <BenefitRCCP />

                    {/* Call to Action */}
                    <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary text-center animate-pulse-glow">

                        <p className="text-xl text-foreground">
                            👉 Un sistema de planeación de capacidad que funcione en tiempo real y esté integrado con todos los procesos de planificación, desde el diseño del producto hasta la entrega final.
                        </p>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default ProjectRCCP;
