import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProgressCircle from "@/components/ProgressCircle";
import { Users } from "lucide-react";


const fases = [
  {
    id: 1,
    name: "Fase 1: Empatización con metodologías actual moldes y definición de requisitos",
    improvement: `•	Definición de la visión estratégica, objetivos a corto, mediano y largo plazo y alcance funcional del sistema de gestión de moldes. 
    •	Definición de la visión estratégica, objetivos a corto, mediano y largo plazo y alcance funcional del sistema de gestión de moldes.
     •	Depuración, estandarización y organización del inventario de moldes y herramentales, incluyendo familias, esquemas, nomenclaturas y atributos técnicos.
     •	Definición y documentación de requisitos funcionales, técnicos y operativos del sistema.
     •	Diseño de la estructura de codificación de moldes y herramentales, alineada con las órdenes de producción y los procesos de planta.
     •	Definición de políticas de entrega, recepción, uso y control de moldes durante su ciclo de vida.
     •	Alineación y validación con las áreas involucradas (producción, almacén, costos, moldes y operaciones) para asegurar coherencia y adopción del modelo definido.`,

    progress: 85,
  },
  {
    id: 2,
    name: "Fase 2: Diseño y Desarrollo del Sistema de Gestión de Moldes",
    improvement: `•	Diseño de la arquitectura tecnológica del sistema, incluyendo modelo de datos, estructura de base de datos y definición de componentes frontend y backend.
    •	Desarrollo de funcionalidades de gestión de usuarios, autenticación, autorización y seguridad de la información.
    •	Construcción de módulos para creación, consulta, actualización y control de moldes, herramentales y su documentación asociada.
    •	Desarrollo de vistas operativas y administrativas para visualización de información clave en planta y áreas de apoyo.
    •	Implementación de lógica de validación, integridad y trazabilidad de datos.
    •	Integración de herramientas complementarias como generación de códigos QR y consulta rápida de información.
    •	Preparación del entorno de despliegue, control de versiones, respaldos y carga inicial de información estructurada.`
    ,
    progress: 61,
  },
  {
    id: 3,
    name: "Fase 3: Implementación, Pruebas y Puesta en Marcha",
    improvement: `•	Planificación y ejecución del despliegue del sistema en ambiente productivo de forma controlada y progresiva.
    •	Ejecución de pruebas funcionales, técnicas y de usuario para validar el correcto funcionamiento del sistema y su alineación con los procesos definidos.
    •	Ajuste y optimización del sistema y de los flujos operativos a partir de los resultados de las pruebas.
    •	Capacitación estructurada de usuarios clave y responsables del proceso para asegurar el uso adecuado de la herramienta.
    •	Acompañamiento en la operación inicial y monitoreo de la estabilidad del sistema.
    •	Verificación del cumplimiento de los objetivos de trazabilidad, control, estandarización y confiabilidad de la información.`,
    progress: 50,
  },

];

const ProjectProgressGh = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-space">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/project/gh")}
            className="mb-8 text-white hover:text-white"
          >
            ← Volver al proyecto
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Avance del Proyecto
          </h1>

          <p className="text-center text-white/80 mb-12 text-lg">
            Seguimiento del progreso de cada Fase del proyecto Gestión de Herramentales
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fases.map((fase, index) => (
              <Card
                key={fase.id}
                className="p-6 bg-card/90 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Team header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{fase.name}</h3>
                </div>

                {/* Improvement description */}
                <p className="text-sm text-muted-foreground mb-6 min-h-[80px]">
                  {fase.improvement}
                </p>

                {/* Progress circle */}
                <div className="flex justify-center items-baseline-last">
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

export default ProjectProgressGh;
