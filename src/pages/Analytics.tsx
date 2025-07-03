
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const Analytics = () => {
  const learningData = [
    { month: "Jan", hours: 45, courses: 3 },
    { month: "Feb", hours: 62, courses: 4 },
    { month: "Mar", hours: 38, courses: 2 },
    { month: "Apr", hours: 75, courses: 5 },
    { month: "May", hours: 58, courses: 4 },
    { month: "Jun", hours: 82, courses: 6 },
  ];

  const progressData = [
    { name: "Completed", value: 65, color: "#000000" },
    { name: "In Progress", value: 25, color: "#666666" },
    { name: "Not Started", value: 10, color: "#cccccc" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Learning Analytics</h1>
          <p className="text-gray-600">Track your learning progress and performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Learning Hours & Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={learningData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#000000" name="Hours" />
                  <Bar dataKey="courses" fill="#666666" name="Courses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={progressData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {progressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-black">Learning Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={learningData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#000000" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
