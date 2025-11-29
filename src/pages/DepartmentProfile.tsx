import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Building, UserCheck } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";

const facultyMembers = [
  {
    name: "Dr. John Doe",
    designation: "Professor & Head",
    email: "john.doe@university.edu",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Dr. Jane Smith",
    designation: "Associate Professor",
    email: "jane.smith@university.edu",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
  },
  {
    name: "Dr. Robert Brown",
    designation: "Assistant Professor",
    email: "robert.brown@university.edu",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
  },
  {
    name: "Dr. Emily White",
    designation: "Assistant Professor",
    email: "emily.white@university.edu",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
  },
];

const DepartmentProfile = () => {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Department Profile</h1>
          <div className="text-muted-foreground text-sm mt-1">Home &gt; Departments &gt; Computer Science</div>
        </div>

        <Card className="shadow-lg rounded-xl mb-8">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold text-primary">Computer Science</h2>
                <p className="text-muted-foreground mt-1">
                  Exploring the frontiers of computing and digital innovation.
                </p>
              </div>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-muted-foreground" />
                  <div>
                    <div className="font-bold">Head of Department</div>
                    <div className="text-sm text-muted-foreground">Dr. John Doe</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-muted-foreground" />
                  <div>
                    <div className="font-bold">Faculty</div>
                    <div className="text-sm text-muted-foreground">{facultyMembers.length} Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Users className="w-5 h-5 mr-3 text-primary" />
            Faculty Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6 flex flex-col items-center text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-lg"
                  />
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{member.designation}</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Mail className="w-3 h-3 mr-1.5" />
                    {member.email}
                  </div>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DepartmentProfile;
