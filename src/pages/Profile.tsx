
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, Award } from "lucide-react";

const Profile = () => {
  const achievements = [
    { name: "Course Completion Master", description: "Completed 10+ courses" },
    { name: "Quick Learner", description: "Finished course in record time" },
    { name: "Community Helper", description: "Helped 50+ students" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Change Picture
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" className="border-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" className="border-gray-300" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" className="border-gray-300" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" className="border-gray-300" />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="New York, NY" className="border-gray-300" />
                </div>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border border-gray-200 mt-6">
          <CardHeader>
            <CardTitle className="text-black flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <Badge className="bg-black text-white mb-2">{achievement.name}</Badge>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
