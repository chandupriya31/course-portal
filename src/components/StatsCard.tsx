
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

const StatsCard = ({ title, value, icon: Icon, trend }: StatsCardProps) => {
  const isPositive = trend.startsWith('+');
  
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-gray-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-black">{value}</div>
        <p className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'} flex items-center mt-1`}>
          {trend}
          <span className="text-gray-500 ml-1">from last month</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
