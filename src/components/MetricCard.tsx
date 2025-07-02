import * as React from "react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="space-y-2">
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {change && (
          <p
            className={`flex items-center gap-1 text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            <span className={`${isPositive ? "" : "mt-[7px]"} text-xs leading-none`}>
              {isPositive ? "▲" : "▼"}
            </span>
            {change}
          </p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
