import { Card, CardDescription, CardTitle } from "../ui/card";

type StatsCardProps = {
  title: string;
  count: number;
};

function StatsCard({ title, count }: StatsCardProps) {
  return (
    <Card className="flex flex-row justify-between items-center p-6">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{count}</CardDescription>
    </Card>
  );
}
export default StatsCard;
