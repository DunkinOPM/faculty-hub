import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building, Users, Mail } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";

// Mock data
const initialFaculty = [
    { id: 1, full_name: "Dr. Evelyn Reed", designation: "Professor", department: "Computer Science", email: "evelyn.reed@university.edu", avatar: "/avatars/01.png" },
    { id: 2, full_name: "Dr. Marcus Chen", designation: "Associate Professor", department: "Physics", email: "marcus.chen@university.edu", avatar: "/avatars/02.png" },
    { id: 3, full_name: "Dr. Anya Sharma", designation: "Assistant Professor", department: "Mathematics", email: "anya.sharma@university.edu", avatar: "/avatars/03.png" },
    { id: 4, full_name: "Dr. Leo Kim", designation: "Senior Lecturer", department: "Computer Science", email: "leo.kim@university.edu", avatar: "/avatars/04.png" },
    { id: 5, full_name: "Dr. Sofia Garcia", designation: "Professor", department: "Physics", email: "sofia.garcia@university.edu", avatar: "/avatars/05.png" },
    { id: 6, full_name: "Dr. Ben Carter", designation: "Professor", department: "Mathematics", email: "ben.carter@university.edu", avatar: "/avatars/06.png" },
];

const DepartmentsPage = () => {
  const [faculty] = useState(initialFaculty);

  const departments = useMemo(() => {
    const grouped = faculty.reduce((acc, member) => {
      acc[member.department] = acc[member.department] || [];
      acc[member.department].push(member);
      return acc;
    }, {});
    return Object.entries(grouped).map(([name, members]) => ({ name, members, count: members.length }));
  }, [faculty]);

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">University Departments</h1>
          <p className="mt-2 text-lg text-muted-foreground">Explore faculty members organized by department.</p>
        </div>

        <div className="space-y-6">
            {departments.map((dept) => (
                <Card key={dept.name} className="overflow-hidden rounded-2xl border-border/50 shadow-sm">
                    <Accordion type="single" collapsible>
                        <AccordionItem value={dept.name} className="border-b-0">
                            <AccordionTrigger className="flex w-full items-center justify-between p-6 hover:no-underline">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-secondary p-3 text-secondary-foreground">
                                        <Building className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{dept.name}</h3>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Users className="mr-2 h-4 w-4"/> {dept.count} Members
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-6 pt-0">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {dept.members.map((member) => (
                                    <Card key={member.id} className="rounded-xl shadow-inner">
                                        <CardHeader className="flex flex-row items-center gap-4 p-4">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={member.avatar} alt={member.full_name} />
                                                <AvatarFallback>{member.full_name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{member.full_name}</p>
                                                <p className="text-sm text-muted-foreground">{member.designation}</p>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DepartmentsPage;
