import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ProgressCircleProps {
  teamName: string;
  initialProgress?: number;
}

const ProgressCircle = ({ teamName, initialProgress = 0 }: ProgressCircleProps) => {
  const [progress, setProgress] = useState(initialProgress);
  
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };
  
  const decrementProgress = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg className="w-40 h-40 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
            style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary)))" }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-primary">{progress}%</span>
        </div>
      </div>
      
      {/* Control buttons*/}
      <div className="flex gap-2">
        {/*<Button
          size="sm"
          variant="outline"
          onClick={decrementProgress}
          disabled={progress === 0}
        >

          <ChevronDown className="h-4 w-4" />
        </Button>*/}
        {/*
        <Button
          size="sm"
          variant="outline"
          onClick={incrementProgress}
          disabled={progress === 100}
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        */}
      </div>
    </div>
  );
};

export default ProgressCircle;
