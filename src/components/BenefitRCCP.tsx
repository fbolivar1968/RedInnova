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
    title: "Consolidar RCCP por sección",
    description: "Validar capacidad de forja, mecanizado, soldadura y ensamble en un 100% de RCCP consolidado y validado, usando ITPM, datos históricos y validación por responsables de sección, consolidando bases para un plan maestro con restricciones reales, entre MVP y despliegue.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Reducir tiempo operativo",
    description: "Se reduce el tiempo invertido en la consolidación manual de la planeación de capacidad (RCCP)",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Mejorar la precisión del plan y la visibilidad del impacto de cambios.",
    description: "La automatización del RCCP aumenta la precisión del plan y la visibilidad del impacto de los cambios en la capacidad instalada.",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Alertas predictivas de saturación",
    description: "Detectar utilización >85% por sección y anticipar cuellos de botella.",
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
