import { BookOpen, Calculator, Bot, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Centralización del Conocimiento Técnico",
    description: "Consolidación de 300–500 normas oficiales (ASTM, SAE, DIN, ISO, ANSI) en un repositorio único, estructurado y versionado.",
  },
  {
    icon: <Calculator className="h-10 w-10" />,
    title: "Automatización de Cálculos Parametrizados",
    description: "Reducción de tiempos de cálculo de 10–60+ min a 3–5 min para chavetas, tolerancias, roscas, pines, resortes y transmisiones.",
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "Asistente NLP/RAG con Citas a Fuentes",
    description: "Búsqueda semántica en lenguaje natural que localiza y explica normas técnicas con citas exactas, derivando a algoritmos validados.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Cero Reprocesos y Memorias Trazables",
    description: "Generación automática de memorias de cálculo en PDF con trazabilidad completa de norma, versión, fórmulas, usuario y fecha.",
  },
];

const BenefitBInt = () => {
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
            <p className="text-sm text-muted-foreground">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BenefitBInt;
