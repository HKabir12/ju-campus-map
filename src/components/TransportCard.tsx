import { ReactNode } from 'react';

interface TransportCardProps {
  title: string;
  time: string;
  icon: ReactNode;
  bgColor: string;
  borderColor: string;
}

export default function TransportCard({
  title,
  time,
  icon,
  bgColor,
  borderColor,
}: TransportCardProps) {
  return (
    <div className={`p-3 rounded-lg border ${bgColor} ${borderColor} flex items-center space-x-3 shadow-xs`}>
      <div className="p-2 rounded-full bg-white text-gray-700 shadow-xs">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium">{title}</p>
        <p className="text-sm font-bold text-gray-800">{time}</p>
      </div>
    </div>
  );
}