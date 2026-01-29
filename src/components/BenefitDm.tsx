import { Brain, Lightbulb, Rocket, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Experiencia en desarrollo de proyectos de mejora de procesosEstandarización de los datos para mejorar la calidad y eficiencia",
    description: "Al eliminar duplicidades y errores, se optimizan los tiempos de procesamiento y se facilita la coordinación entre los distintos departamentos, desde la producción hasta la alta dirección.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Fortalecimiento de capacidades internas en gobernanza y estandarización de datos",
    description: "Impulsamos el desarrollo de habilidades y conocimientos clave dentro de la organización para asegurar una gestión de datos más eficiente y controlada.",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Implementación de herramientas de automatización con tecnologías avanzadas",
    description: "Se desarrollan soluciones tecnológicas que aceleran la integración y mejora de procesos, optimizando el uso de recursos y reduciendo tiempos de implementación.",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Innovación en la resolución de problemas relacionados con los datos",
    description: "Fomentamos la creatividad para abordar desafíos como la calidad, accesibilidad y gestión de la información, impulsando la mejora continua en todas las fases del proyecto.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        ¿Cuáles son los beneficios?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="p-6 text-center hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center mb-4 text-primary group-hover:text-secondary transition-colors">
              {benefit.icon}
            </div>
            <h3 className="text-sm pb-2 font-medium text-white">{benefit.title}</h3>
            <p className="text-sm  text-muted-foreground">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
