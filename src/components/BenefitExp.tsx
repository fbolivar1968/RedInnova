import { Clock, Truck, Workflow, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Registrar formalmente los traslados de inventario",
    description: "Implementar una solución digital para registrar todos los movimientos de inventario en planta.",
  },
  {
    icon: <Workflow className="h-10 w-10" />,
    title: "Mejorar la trazabilidad y visibilidad en tiempo real",
    description: "Habilitar consulta y seguimiento de traslados pendientes y ejecutados.",
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Reducir discrepancias y mejorar la confiabilidad",
    description: "Minimizar errores de inventario, reducir reprocesos y eliminar movimientos no registrados.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Mejora del Nivel de Servicio (OTIF)",
    description: "Alineación operativa para asegurar entregas a tiempo y en cantidades exactas, elevando la satisfacción del cliente.",
  },
];

const BenefitExp = () => {
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

export default BenefitExp;
