import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, GraduationCap, Book, Building, Calendar, Edit, Copy } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";

const FacultyProfile = () => {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Faculty Profile</h1>
          <div className="text-muted-foreground text-sm mt-1">Home &gt; Faculty &gt; John Doe</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Main Profile Card */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-lg rounded-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
                <div className="flex items-center space-x-6">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    alt="Faculty Name"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">Dr. John Doe</h2>
                    <p className="text-muted-foreground">Professor & Head of Department</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center text-sm">
                  <Building className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="font-semibold mr-2">Department:</span>
                  <Badge variant="secondary">Computer Science</Badge>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="font-semibold mr-2">Email:</span>
                  <span className="text-primary hover:underline cursor-pointer">john.doe@university.edu</span>
                  <Button variant="ghost" size="icon" className="w-7 h-7 ml-2">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="font-semibold mr-2">Experience:</span>
                  <span>15 Years</span>
                </div>
              </div>
              <div className="p-6 border-t">
                <Button className="w-full">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg rounded-xl">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-3 text-primary" />
                  About
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. John Doe is a distinguished professor in the Computer Science department with over 15 years of experience in academia and research. His work focuses on artificial intelligence and machine learning, with a passion for mentoring the next generation of innovators.
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg rounded-xl">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-3 text-primary" />
                    Qualifications
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold w-1/3">Ph.D. in AI</span>
                      <span className="w-2/3">MIT, 2008</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold w-1/3">M.S. in CS</span>
                      <span className="w-2/3">Stanford, 2005</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold w-1/3">B.S. in CS</span>
                      <span className="w-2/3">UC Berkeley, 2003</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="shadow-lg rounded-xl">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Book className="w-5 h-5 mr-3 text-primary" />
                    Recent Publications
                  </h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="hover:text-primary cursor-pointer">The Future of Neural Networks</li>
                    <li className="hover:text-primary cursor-pointer">Ethical Considerations in AI</li>
                    <li className="hover:text-primary cursor-pointer">A Novel Approach to NLP</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyProfile;
