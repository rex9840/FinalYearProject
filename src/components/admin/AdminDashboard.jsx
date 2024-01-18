import AttendanceChart from "../dashboard/AttendanceChart";
import ResultChart from "../dashboard/ResultChart";

import {
  LayoutDashboard,
  UserIcon,
  School,
  GraduationCap,
  BookType,
} from "lucide-react";

function AdminDashboard() {
  const datas = [
    {
      name: "Total Class",
      value: "10+",
      icon: <School />,
    },
    {
      name: "Total Subjects",
      value: "50+",
      icon: <GraduationCap />,
    },
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

export default AdminDashboard;
