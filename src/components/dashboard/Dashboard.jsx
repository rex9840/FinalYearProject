import ResultChart from "./ResultChart";
import AttendanceChart from "./AttendanceChart";
import {
  LayoutDashboard,
  UserIcon,
  School,
  GraduationCap,
  BookType,
} from "lucide-react";

function Dashboard() {
  const datas = [
    {
      name: "Total Students",
      value: "1500",
      icon: <UserIcon />,
    },
    {
      name: "Total Teachers",
      value: "120",
      icon: <BookType />,
    },
    {
      name: "Course",
      value: "10+",
      icon: <School />,
    },
    {
      name: "Passed Students",
      value: "1488",
      icon: <GraduationCap />,
    },
    {
      name: "Daily Attendance",
      value: "1440",
      icon: <LayoutDashboard />,
    },
  ];

  return (
    <div>
      <div className="flex ">
        {datas.map(({ name, value, icon }) => (
          <div
            key={name}
            className="flex flex-wrap w-full  h-32 justify-between items-center border rounded-md m-1 px-2 bg-[#4e5adb] text-white"
          >
            <div className="">{icon}</div>
            <div className="flex flex-col ">
              <div className="text-lg font-semibold">{name}</div>
              <div className="text-2xl font-bold">{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex ">
        <AttendanceChart />
        <ResultChart />
      </div>
    </div>
  );
}

export default Dashboard;
