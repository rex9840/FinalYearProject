
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


const AttendanceChart = () => {
  
  const attendanceData = [
    { name: "Class 7", students: 68 },
    { name: "Class 8", students: 82 },
    { name: "Class 9", students: 50 },
    { name: "Class 10", students: 94 },
  ];

  return (
    // Container for responsive layout
    <ResponsiveContainer width="100%" height={360} style={{ marginTop: 12 }}>
      <BarChart data={attendanceData} margin={{ top: 40, right: 30, left: 20, bottom: 5 }}>

        {/* Chart title */}
        <text x="20" y="20" fontSize="24" fontWeight="bold" fill="#333">
          Daily Attendance
        </text>

        {/* Render attendance bars */}
        <Bar dataKey="students" fill="green" />

        {/* Grid lines for readability */}
        <CartesianGrid stroke="#ccc" />

        {/* X-axis representing class names */}
        <XAxis dataKey="name" />

        {/* Y-axis representing student count */}
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
