import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProgressCircle from "@/components/ProgressCircle";
import { Users } from "lucide-react";

const link = "https://forjasbolivar.sharepoint.com/:f:/r/sites/POSEIDON/Transformacin%20Digital/Proyectos/2026/13.%20CertificadosCalidad/2_Dllo_Producto/Lean_Agile?d=w9aa65fc5c77e4db3b6aa514a6481e312&csf=1&web=1&e=hBY0v1https://forjasbolivar.sharepoint.com/:f:/r/sites/POSEIDON/Transformacin%20Digital/Proyectos/2026/14.%20Biblioteca%20Virtual%20de%20Ingenier%C3%ADa%20con%20Calculadoras%20Normativas%20y%20IA/2_Dllo_Producto/Lean-Agile?d=w4b49176e51ea440b8729d50721df500c&csf=1&web=1&e=mcFVP9";

const fases = [
    {
        id: 1,
        name: "Fase 1: Definir alcance / Fundación Técnica y Alcance",
        improvement: `• Diagnostico del estado actual del área de compras.
        • Identificación de partes interesadas, roles y responsabilidades.
        • Definición del alcance del proyecto y criterios de éxito.`,
        progress: 100,
    },
    {
        id: 2,
        name: "Fase 2: Medir y Analizar / Diagnóstico y Causas Raíz",
        improvement: `• Trazabilidad de OC por día,
        Porcentaje de cotizaciones por proveedor,
        Tipo de formato de evidencias.`,
        progress: 100,
    },
    {
        id: 3,
        name: "Fase 3: Mejorar e Implementar",
        improvement: `•Realizar primer MVP con archivos PDF,
        •Realizar segundo MVP con imagenes y archivos CAD ,
        •Realizar pruebas del MVP y recopilar feedback .`,
        progress: 0,
    },
    {
        id: 4,
        name: "Fase 4: Controlar y Sostener / Piloto, Gobernanza y Despliegue",
        improvement: `Implementación del certificado de compras, documentación y capacitación a usuarios`,
        progress: 0,
    },
];

const ProjectProgressCertOC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-space">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-12">
                <div className="max-w-7xl mx-auto">
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/project/certOC")}
                        className="mb-8 text-white hover:text-primary"
                    >
                        ← Volver al proyecto
                    </Button>

                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
                        Avance del Proyecto
                    </h1>

                    <p className="text-center text-white/80 mb-4 text-lg">
                        Bot generador de certificados de compras
                    </p>
                    <p className="text-center text-white/60 mb-10 text-sm max-w-2xl mx-auto">
                        Seguimiento del progreso y estado de implementación por fases metodológicas LAR
                    </p>

                    <div className="flex justify-center my-4">
                        <Button
                            variant="outline"
                            onClick={() => window.open(link, "_blank")}
                            className="text-primary hover:text-white"
                        >
                            Acceder al espacio de trabajo
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
                        {fases.map((fase, index) => (
                            <Card
                                key={fase.id}
                                className="p-6 bg-card/90 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary animate-fade-in flex flex-col justify-between"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div>
                                    {/* Team header */}
                                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                                        <div className="p-3 bg-primary/10 rounded-full shrink-0">
                                            <Users className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground leading-tight">{fase.name}</h3>
                                    </div>

                                    {/* Improvement description */}
                                    <div className="text-sm text-muted-foreground mb-6 whitespace-pre-line leading-relaxed">
                                        {fase.improvement}
                                    </div>
                                </div>

                                {/* Progress circle */}
                                <div className="flex justify-center items-center pt-4 border-t border-border/50">
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

export default ProjectProgressCertOC;
