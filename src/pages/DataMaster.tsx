import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProjectTimelineDm from "@/components/ProjectTimelineDm";
import BenefitsSection from "@/components/BenefitsSection";
import orangePlanet from "@/assets/orange-planet.png";
import EquipoDm from "@/assets/Equipo-DataMaster.png";
import { Users, DatabaseZap, FolderOpen, Award } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import BenefitDM from "@/components/BenefitDm";


const ProjectDataMaster = () => {
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
                            className="text-white hover:text-primary"
                        >
                            ← Volver a proyectos
                        </Button>

                        <Button
                            variant="hero"
                            onClick={() => navigate("/progressDm")}
                        >
                            Ver Avance del Proyecto
                        </Button>
                    </div>

                    {/* Project Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Bienvenido al proyecto DataMaster
                        </h1>

                        <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/50">
                            <p className="text-lg text-foreground leading-relaxed">
                                El objetivo de este proyecto es<strong className="text-primary"> Transformar la empresa en una organización impulsada por datos, </strong>
                                donde cada decisión, desde la línea de producción hasta la alta dirección,
                                se base en información precisa y en tiempo real a través de la estandarización
                                de los datos que generan la elaboración de los productos.
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
                                <DatabaseZap className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Información sobre los datos</h3>
                                <p className="text-muted-foreground">
                                    Actualmente hay 48.535 ítems, de los cuales 47.865 están activos. Esto deja 54 ítems obsoletos y 616 inactivos. Además, 705 ítems pertenecen a la categoría de productos terminados, y existen 425 familias para PSL, de las cuales 343 están activas y 82 inactivas.
                                </p>
                            </Card>

                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                                <Users className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Formación de un equipo interdisciplinario</h3>
                                <p className="text-muted-foreground">
                                    Formación de un equipo interdisciplinario para la ejecución del proyecto, asegurando que se aborden las necesidades y desafíos específicos de la información en cada área.
                                </p>
                            </Card>

                            <Card className="p-6 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                <FolderOpen className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">Gobernanza de datos</h3>
                                <p className="text-muted-foreground">
                                    Implementar una estrategia de gobernanza de datos permitirá estandarizar los registros,
                                    mejorar la integridad de los datos en un 30% y reducir los costos y tiempos operativos mediante la automatización de procesos.
                                </p>
                            </Card>
                        </div>
                    </section>

                    {/* Benefits */}
                    <BenefitDM />

                    {/* Awards */}
                    <section className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fade-in">
                            Equipo de ejecución
                        </h2>

                        <Card className="p-12 bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-md border-2 border-primary/60 shadow-2xl animate-fade-in">
                            <div className="flex items-center justify-center gap-6 mt-5 mb-5">
                                <img src={EquipoDm} alt="Equipo DataMaster" />
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

export default ProjectDataMaster;
