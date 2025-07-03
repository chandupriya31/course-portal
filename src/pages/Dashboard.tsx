
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy, TrendingUp, Play, Users, Calendar, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";

const Dashboard = () => {
  const stats = [
    { title: "Courses Enrolled", value: "12", icon: BookOpen, trend: "+2" },
    { title: "Hours Learned", value: "87", icon: Clock, trend: "+15" },
    { title: "Certificates", value: "5", icon: Trophy, trend: "+1" },
    { title: "Streak Days", value: "23", icon: Target, trend: "+5" }
  ];

  const recentCourses = [
    {
      title: "Advanced React Patterns",
      progress: 75,
      nextLesson: "Context API Deep Dive",
      timeLeft: "2h 30m",
      instructor: "Sarah Johnson"
    },
    {
      title: "Node.js Backend Development",
      progress: 45,
      nextLesson: "Express Middleware",
      timeLeft: "4h 15m",
      instructor: "Mike Chen"
    },
    {
      title: "UI/UX Design Principles",
      progress: 90,
      nextLesson: "Final Project Review",
      timeLeft: "30m",
      instructor: "Emily Davis"
    }
  ];

  const upcomingEvents = [
    { title: "Live Q&A Session", time: "Today 3:00 PM", type: "Live Session" },
    { title: "Project Submission", time: "Tomorrow", type: "Deadline" },
    { title: "Webinar: AI in Web Dev", time: "Friday 2:00 PM", type: "Webinar" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Courses */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
            <div className="space-y-4">
              {recentCourses.map((course, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>by {course.instructor}</CardDescription>
                      </div>
                      <Badge variant="outline">{course.progress}%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Progress value={course.progress} className="w-full" />
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Next: {course.nextLesson}</span>
                        <span>{course.timeLeft} left</span>
                      </div>
                      <Button size="sm" className="w-full bg-black text-white hover:bg-gray-800">
                        <Play className="w-4 h-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse New Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Join Study Group
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" />
                  View Certificates
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-xs text-gray-600">{event.time}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Goal */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Weekly Goal</CardTitle>
                <CardDescription>5 hours of learning</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={68} className="w-full mb-2" />
                <p className="text-sm text-gray-600">3.4 / 5 hours completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
