import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// This is a simplified example. In a real app, you'd fetch departments from your database.
const departments = ["Computer Science", "Physics", "Mathematics", "Chemistry"];

const FacultyForm = ({ open, onOpenChange, faculty, onSave }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    designation: '',
    department: '',
    email: '',
  });

  useEffect(() => {
    if (faculty) {
      setFormData(faculty);
    } else {
      setFormData({ full_name: '', designation: '', department: '', email: '' });
    }
  }, [faculty]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, department: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{faculty ? "Edit Faculty" : "Add Faculty"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div>
            <Label htmlFor="full_name">Full Name</Label>
            <Input id="full_name" value={formData.full_name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="designation">Designation</Label>
            <Input id="designation" value={formData.designation} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="department">Department</Label>
            <Select onValueChange={handleSelectChange} defaultValue={formData.department}>
              <SelectTrigger>
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FacultyForm;
