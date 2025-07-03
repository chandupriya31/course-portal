
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, Star, Clock, Users, Play } from "lucide-react";
import Navbar from "@/components/Navbar";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      instructor: "John Smith",
      rating: 4.9,
      students: 2847,
      duration: "18 hours",
      price: "$89",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=200&fit=crop",
      category: "Programming",
      level: "Beginner",
      description: "Learn JavaScript from scratch to advanced concepts"
    },
    {
      id: 2,
      title: "React.js Complete Course",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 1923,
      duration: "24 hours",
      price: "$129",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop",
      category: "Programming",
      level: "Intermediate",
      description: "Master React.js with real-world projects"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Chen",
      rating: 4.7,
      students: 1456,
      duration: "12 hours",
      price: "$79",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=200&fit=crop",
      category: "Design",
      level: "Beginner",
      description: "Learn the principles of user interface and experience design"
    },
    {
      id: 4,
      title: "Advanced Node.js Development",
      instructor: "Emily Davis",
      rating: 4.9,
      students: 987,
      duration: "20 hours",
      price: "$149",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=200&fit=crop",
      category: "Programming",
      level: "Advanced",
      description: "Build scalable backend applications with Node.js"
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      instructor: "Alex Rodriguez",
      rating: 4.6,
      students: 2134,
      duration: "15 hours",
      price: "$99",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=200&fit=crop",
      category: "Marketing",
      level: "Intermediate",
      description: "Master digital marketing techniques and strategies"
    },
    {
      id: 6,
      title: "Data Science with Python",
      instructor: "Dr. Lisa Wang",
      rating: 4.8,
      students: 1678,
      duration: "25 hours",
      price: "$159",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop",
      category: "Data Science",
      level: "Advanced",
      description: "Comprehensive data science course using Python"
    }
  ];

  const categories = ["all", "Programming", "Design", "Marketing", "Data Science"];
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">All Courses</h1>
          <p className="text-gray-600">Discover courses to advance your skills</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map(level => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
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
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-black font-semibold">
                    {course.price}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                  <Badge variant={
                    course.level === 'Beginner' ? 'secondary' : 
                    course.level === 'Intermediate' ? 'default' : 'destructive'
                  }>
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>by {course.instructor}</CardDescription>
                <p className="text-sm text-gray-600 mt-2">{course.description}</p>
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

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLevel("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
