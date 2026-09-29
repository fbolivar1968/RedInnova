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
    title: "Centralización de Órdenes de Compra",
    description: "Consolidación de órdenes de compra y  soportes en un repositorio único, estructurado y versionado.",
  },
  {
    icon: <Calculator className="h-10 w-10" />,
    title: "Automatización de Órdenes de Compra",
    description: "Automatizar validación, consulta y fusión documental reduciendo hasta en 30% el tiempo operativo.",
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "Detectar y alertar fallas de consolidación",
    description: "Evitar duplicidad de procesos y mitigar riesgos legales por datos incompletos.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Cero reprocesos en validaciones",
    description: "Registro diario y alertas al Líder de Compras por medio de Log automático del Bot Gatekeeper.",
  },
];

const BenefitCertOC = () => {
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

export default BenefitCertOC;
