import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, PlusCircle, LayoutGrid, List, Mail, Phone, User, Building } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardLayout from "@/layouts/DashboardLayout";
import FacultyForm from "@/components/forms/FacultyForm";

// Mock data
const initialFaculty = [
  { id: 1, full_name: "Dr. Evelyn Reed", designation: "Professor", department: "Computer Science", email: "evelyn.reed@university.edu", phone: "+1-202-555-0181", avatar: "/avatars/01.png" },
  { id: 2, full_name: "Dr. Marcus Chen", designation: "Associate Professor", department: "Physics", email: "marcus.chen@university.edu", phone: "+1-202-555-0195", avatar: "/avatars/02.png" },
  { id: 3, full_name: "Dr. Anya Sharma", designation: "Assistant Professor", department: "Mathematics", email: "anya.sharma@university.edu", phone: "+1-202-555-0142", avatar: "/avatars/03.png" },
  { id: 4, full_name: "Dr. Leo Kim", designation: "Senior Lecturer", department: "Computer Science", email: "leo.kim@university.edu", phone: "+1-202-555-0167", avatar: "/avatars/04.png" },
  { id: 5, full_name: "Dr. Sofia Garcia", designation: "Professor", department: "Physics", email: "sofia.garcia@university.edu", phone: "+1-202-555-0113", avatar: "/avatars/05.png" },
];

const FacultyPage = () => {
  const [faculty, setFaculty] = useState(initialFaculty);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'table'

  const handleAddFaculty = () => {
    setSelectedFaculty(null);
    setIsFormOpen(true);
  };

  const handleEdit = (facultyMember) => {
    setSelectedFaculty(facultyMember);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setFaculty(faculty.filter(f => f.id !== id));
  };

  const handleSave = (formData) => {
    if (formData.id) {
      setFaculty(faculty.map(f => f.id === formData.id ? { ...f, ...formData } : f));
    } else {
      const newFaculty = { ...formData, id: Math.max(...faculty.map(f => f.id), 0) + 1, avatar: `/avatars/new.png` };
      setFaculty([...faculty, newFaculty]);
    }
    setIsFormOpen(false);
  };

  const renderFacultyGrid = () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {faculty.map((member) => (
        <Card key={member.id} className="group flex flex-col overflow-hidden rounded-2xl border-border/50 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
            <CardHeader className="flex flex-col items-center justify-center p-6 text-center">
                <Avatar className="h-24 w-24 border-4 border-background transition-all group-hover:border-primary/30">
                    <AvatarImage src={member.avatar} alt={member.full_name} />
                    <AvatarFallback className="text-3xl">{member.full_name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-xl font-bold">{member.full_name}</CardTitle>
                <CardDescription>{member.designation}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
                <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center"><Building className="mr-3 h-4 w-4"/> {member.department}</div>
                    <div className="flex items-center"><Mail className="mr-3 h-4 w-4"/> <a href={`mailto:${member.email}`} className="hover:text-primary">{member.email}</a></div>
                    <div className="flex items-center"><Phone className="mr-3 h-4 w-4"/> {member.phone}</div>
                </div>
            </CardContent>
            <CardFooter className="p-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="ml-auto h-8 w-8 p-0 text-muted-foreground transition-colors hover:text-primary"><MoreHorizontal/></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(member)}>Edit Profile</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(member.id)} className="text-destructive">Delete Profile</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardFooter>
        </Card>
      ))}
    </div>
  );

  const renderFacultyTable = () => (
    <Card className="rounded-2xl border-border/50 shadow-sm">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {faculty.map((member) => (
                <TableRow key={member.id}>
                    <TableCell>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={member.avatar} alt={member.full_name} />
                                <AvatarFallback>{member.full_name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{member.full_name}</div>
                                <div className="text-sm text-muted-foreground">{member.designation}</div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0 text-muted-foreground transition-colors hover:text-primary"><MoreHorizontal/></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleEdit(member)}>Edit</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDelete(member.id)} className="text-destructive">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 className="text-4xl font-bold tracking-tight">Faculty Directory</h1>
                <p className="mt-2 text-lg text-muted-foreground">Browse and manage all faculty members.</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="rounded-full bg-background/60 p-1 shadow-inner backdrop-blur-sm">
                    <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')} className="rounded-full"><LayoutGrid/></Button>
                    <Button variant={viewMode === 'table' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('table')} className="rounded-full"><List/></Button>
                </div>
                <Button size="lg" className="rounded-full shadow-md" onClick={handleAddFaculty}>
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Add Faculty
                </Button>
            </div>
        </div>

        {viewMode === 'grid' ? renderFacultyGrid() : renderFacultyTable()}

        <FacultyForm open={isFormOpen} onOpenChange={setIsFormOpen} faculty={selectedFaculty} onSave={handleSave} />
      </div>
    </DashboardLayout>
  );
};

export default FacultyPage;
