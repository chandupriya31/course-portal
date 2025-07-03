
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, Bell, Shield, Eye, Globe } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and privacy settings</p>
        </div>

        <div className="space-y-6">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-black flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-gray-600">Receive course updates via email</p>
                </div>
                <Switch id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-gray-600">Receive browser notifications</p>
                </div>
                <Switch id="push-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="course-reminders">Course Reminders</Label>
                  <p className="text-sm text-gray-600">Get reminded about upcoming deadlines</p>
                </div>
                <Switch id="course-reminders" />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-black flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <p className="text-sm text-gray-600">Make your profile visible to other users</p>
                </div>
                <Switch id="profile-visibility" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="activity-status">Activity Status</Label>
                  <p className="text-sm text-gray-600">Show when you're online</p>
                </div>
                <Switch id="activity-status" />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-black flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="w-full border-gray-300">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="est">
                  <SelectTrigger className="w-full border-gray-300">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="cst">Central Time</SelectItem>
                    <SelectItem value="mst">Mountain Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-black flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="border-gray-300" />
              </div>
              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" className="border-gray-300" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" className="border-gray-300" />
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                Update Password
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
