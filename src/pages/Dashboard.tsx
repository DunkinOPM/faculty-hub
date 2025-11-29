import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, FileText, Search, PlusCircle, Building, BookOpen } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import DashboardLayout from "@/layouts/DashboardLayout";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/auth");
      else setUser(session.user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/auth");
      else setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const stats = [
    { label: "Total Faculty", value: "5", icon: Users, bgColor: "bg-blue-100", textColor: "text-blue-700", path: "/faculty" },
    { label: "Departments", value: "4", icon: Building, bgColor: "bg-purple-100", textColor: "text-purple-700", path: "/departments" },
    { label: "Publications", value: "23", icon: BookOpen, bgColor: "bg-green-100", textColor: "text-green-700", path: "/publications" },
  ];

  const handleCardClick = (path) => {
    if (path) navigate(path);
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Welcome Back!</h1>
          <p className="mt-2 text-lg text-muted-foreground">Here's a snapshot of your university's faculty data.</p>
        </div>

        {/* Search and Actions */}
        <div className="mb-8 flex items-center justify-between gap-4">
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="Search for faculty, departments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 w-full rounded-full bg-background/60 pl-12 pr-4 text-base shadow-inner backdrop-blur-sm"
                />
            </div>
            <Button size="lg" className="rounded-full shadow-md" onClick={() => navigate("/faculty")}>
                <PlusCircle className="mr-2 h-5 w-5" />
                Add New Faculty
            </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className="group overflow-hidden rounded-2xl border-border/50 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                onClick={() => handleCardClick(stat.path)}
              >
                <CardContent className="p-6">
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`rounded-full p-4 ${stat.bgColor} ${stat.textColor} transition-colors group-hover:bg-primary/20`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-4xl font-bold tracking-tighter">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
