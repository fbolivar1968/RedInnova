import { Brain, ScanBarcode, AlarmClockCheck, SquareTerminal } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <ScanBarcode className="h-10 w-10" />,
    title: "Trazabilidad total de los moldes",
    description: "permitiendo conocer en tiempo real su ubicación, estado y disponibilidad durante todo su ciclo de vida. ",
  },
  {
    icon: <AlarmClockCheck className="h-10 w-10" />,
    title: "Reducción de tiempos muertos y reprocesos",
    description: "al eliminar la búsqueda manual y la dependencia del conocimiento informal del personal.",
  },
  {
    icon: <SquareTerminal className="h-10 w-10" />,
    title: "Digitalización de un área crítica",
    description: "reemplazando procesos manuales y mejorar el control, la trazabilidad y la confiabilidad de la información mediante una herramienta digital transversal que beneficia tanto a producción como a las áreas administrativas de apoyo.",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Desarrollo de capacidades internas en soluciones digitales",
    description: "fortaleciendo el conocimiento del equipo para diseñar, desarrollar y mantener herramientas propias con arquitectura frontend y backend, reduciendo la dependencia de terceros.",
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
