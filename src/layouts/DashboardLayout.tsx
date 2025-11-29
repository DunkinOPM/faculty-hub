import { Button } from "@/components/ui/button";
import { LogOut, Settings, User, Users, Building, Book } from "lucide-react";
import { NavLink } from "react-router-dom";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r bg-card p-6 flex flex-col justify-between">
        <div>
          <h1 className="mb-8 font-display text-2xl font-bold text-primary">FEIMS</h1>
          <nav>
            <ul className="space-y-2">
              <li>
                <NavLink to="/dashboard" end>
                  {({ isActive }) => (
                    <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/faculty">
                  {({ isActive }) => (
                    <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Faculty
                    </Button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/departments/1">{/* Placeholder link */}
                  {({ isActive }) => (
                    <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                      <Building className="mr-2 h-4 w-4" />
                      Departments
                    </Button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/publications">
                  {({ isActive }) => (
                    <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                      <Book className="mr-2 h-4 w-4" />
                      Publications
                    </Button>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
