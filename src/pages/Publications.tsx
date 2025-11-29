import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardLayout from "@/layouts/DashboardLayout";

// Mock data
const facultyPublications = [
  { name: "Dr. Reed", publications: 12 },
  { name: "Dr. Chen", publications: 19 },
  { name: "Dr. Sharma", publications: 8 },
  { name: "Dr. Kim", publications: 15 },
  { name: "Dr. Garcia", publications: 23 },
  { name: "Dr. Carter", publications: 11 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-1">
            <span className="text-[0.70rem] uppercase text-muted-foreground">Name</span>
            <span className="font-bold text-muted-foreground">{label}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-[0.70rem] uppercase text-muted-foreground">Publications</span>
            <span className="font-bold">{payload[0].value}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const PublicationsPage = () => {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Publications Analysis</h1>
          <p className="mt-2 text-lg text-muted-foreground">Visualizing research output across faculty.</p>
        </div>

        <Card className="rounded-2xl border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Publication Counts by Faculty</CardTitle>
            <CardDescription>A comparative bar chart of publications for the current academic year.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
                <ResponsiveContainer>
                    <BarChart data={facultyPublications} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                            dataKey="name" 
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis 
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip cursor={{ fill: '#f1f5f9' }} content={<CustomTooltip />} />
                        <Bar dataKey="publications" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PublicationsPage;
