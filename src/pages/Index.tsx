
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Trophy, TrendingUp, Play, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Advanced JavaScript Concepts",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 1247,
      duration: "12 hours",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=200&fit=crop",
      category: "Programming",
      level: "Advanced"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Chen",
      rating: 4.9,
      students: 892,
      duration: "8 hours",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop",
      category: "Design",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Dr. Emily Davis",
      rating: 4.7,
      students: 654,
      duration: "15 hours",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=200&fit=crop",
      category: "Data Science",
      level: "Intermediate"
    }
  ];

  const stats = [
    { title: "Active Students", value: "12,847", icon: Users, trend: "+12%" },
    { title: "Courses Available", value: "342", icon: BookOpen, trend: "+8%" },
    { title: "Completion Rate", value: "89%", icon: Trophy, trend: "+5%" },
    { title: "Monthly Growth", value: "23%", icon: TrendingUp, trend: "+15%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-gray-300">CourseIQ</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Elevate your skills with expert-led courses. Learn at your own pace and unlock your potential.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Start Learning
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses taught by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow border border-gray-200">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary">
                      <Play className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                    <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>by {course.instructor}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {course.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with CourseIQ
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/courses">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
