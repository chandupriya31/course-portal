
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare, Users, Star, Clock } from "lucide-react";

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Best practices for React performance optimization",
      author: "Sarah Johnson",
      avatar: "SJ",
      replies: 24,
      likes: 45,
      time: "2 hours ago",
      tags: ["React", "Performance"],
    },
    {
      id: 2,
      title: "How to implement authentication in Node.js?",
      author: "Mike Chen",
      avatar: "MC",
      replies: 18,
      likes: 32,
      time: "4 hours ago",
      tags: ["Node.js", "Authentication"],
    },
    {
      id: 3,
      title: "Database design patterns for scalable applications",
      author: "Emily Davis",
      avatar: "ED",
      replies: 31,
      likes: 67,
      time: "6 hours ago",
      tags: ["Database", "Architecture"],
    },
  ];

  const topContributors = [
    { name: "Alex Rivera", points: 2450, avatar: "AR" },
    { name: "Jamie Taylor", points: 1890, avatar: "JT" },
    { name: "Casey Morgan", points: 1654, avatar: "CM" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Community</h1>
          <p className="text-gray-600">Connect with fellow learners and share knowledge</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input 
                    placeholder="Search discussions..." 
                    className="pl-10 border-gray-300"
                  />
                </div>
                <Button className="bg-black text-white hover:bg-gray-800">
                  New Discussion
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback>{discussion.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-black mb-2 hover:underline cursor-pointer">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {discussion.time}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {discussion.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="border-gray-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {discussion.replies}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {discussion.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-black flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">12,450</div>
                  <div className="text-sm text-gray-600">Total Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">3,289</div>
                  <div className="text-sm text-gray-600">Active Discussions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">89</div>
                  <div className="text-sm text-gray-600">Online Now</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-sm font-medium text-gray-600">#{index + 1}</div>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">{contributor.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-black">{contributor.name}</div>
                      <div className="text-xs text-gray-600">{contributor.points} points</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
