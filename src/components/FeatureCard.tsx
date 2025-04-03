
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon,
  className
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-lg border border-gray-800 bg-gray-900 transition-all hover:bg-gray-800 flex flex-col items-center text-center", 
      className
    )}>
      <div className="mb-4 p-3 rounded-full bg-gray-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
