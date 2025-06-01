import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] h-full">
      <div className="bg-primary-100 p-2 sm:p-3 rounded-full w-fit mb-4">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-500" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-secondary-800 mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-secondary-600">{description}</p>
    </div>
  );
};

export default FeatureCard;