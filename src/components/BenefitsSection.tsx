import { Brain, Lightbulb, Rocket, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Benefit {
  icon: React.ReactNode;
  title: string;
}

const benefits: Benefit[] = [
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Experiencia en desarrollo de proyectos de mejora de procesos",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Aprender el uso y aplicación de metodologías ágiles y de mejora continua",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Utilización de IA para agilidad en la aplicación de proyectos, prototipado",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Aumento de creatividad y resolución de problemas",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        ¿Qué vas a aprender?
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
            <p className="text-sm font-medium text-white">{benefit.title}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
