import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProjectTimelineDm from "@/components/ProjectTimelineDm";
import orangePlanet from "@/assets/orange-planet.png";
import EquipoGIM from "@/assets/EquipoGIM.png";
import { Users, TriangleAlert, Warehouse } from "lucide-react";
import BenefitGh from "@/components/BenefitGh";


const ProjectGh = () => {
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
                            onClick={() => navigate("/progressGh")}
                        >
                            Ver Avance del Proyecto
                        </Button>
                    </div>

                    {/* Project Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Bienvenido al proyecto Gestion de Herramentales
                        </h1>

                        <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50">
                            <p className="text-lg text-foreground leading-relaxed">
                                El objetivo de este proyecto es<strong className="text-primary"> Implementar un sistema digital de control y trazabilidad que permita
                                    gestionar integralmente los herramentales, </strong>asegurando su identificación, ubicación en tiempo real y control de inventario desde su salida del
                                almacén hasta su uso en máquina o taller.
                            </p>
                        </Card>
                    </div>

                    {/* Timeline */}
                    <div className="mb-16">
                        <ProjectTimelineDm />
                    </div>

                    {/* Important Information */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                            Información Importante
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in">
                                <TriangleAlert className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Estado actual</h3>
                                <p className="text-muted-foreground">
                                    Actualmente el área de moldes es una de las áreas más críticas a nivel compañía apareciendo en el NO OTIF de Ing de procesos con un 19%.
                                    Esto por falta de trazabilidad, demoras en entrega y falta de información centralizada sobre el estado del molde.
                                </p>
                            </Card>

                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                                <Warehouse className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Almacen de moldes</h3>
                                <p className="text-muted-foreground">
                                    Actualmente hay más de 2000 moldes en el almacén de moldes algunos con una existencia de más de 10 años y sin una identificación total de su ubicación y estado.
                                </p>
                            </Card>

                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                <Users className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Equipo de ejecución</h3>
                                <p className="text-muted-foreground">
                                    Creación de un equipo interdisciplinar para la ejecución del proyecto y así tener en cuenta los dolores de la información en cada área.
                                </p>
                            </Card>
                        </div>
                    </section>

                    {/* Benefits */}
                    <BenefitGh />

                    {/* Awards */}
                    <section className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fade-in">
                            Equipo de ejecución
                        </h2>

                        <Card className="p-12 bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-md border-2 border-primary/60 shadow-2xl animate-fade-in">
                            <div className="flex items-center justify-center gap-6 mt-5 mb-5">
                                <img className="backdrop-opacity-80" src={EquipoGIM} alt="Equipo GIM" />
                            </div>
                        </Card>
                    </section>



                    {/* Call to Action */}
                    <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary text-center animate-pulse-glow">

                        <p className="text-xl text-foreground">
                            👉 Transformar los datos en decisiones es el primer paso hacia un futuro más eficiente, ágil e innovador, donde cada acción está impulsada por la inteligencia de la información.
                        </p>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default ProjectGh;
