import {
  LayoutDashboard,
  MessageCircle,
  UserIcon,
  BookCheck,
  NotebookPen,
  School,
  GraduationCap,
  BookType,
} from "lucide-react";
function Dashboard() {
  const datas = [
    { name: "Total Students", value: "1500", icon: <UserIcon/> },
    { name: "Total Teachers", value: "120", icon: <BookType/>},
    { name: "Course", value: "10+", icon: <School/> },
    { name: "Class", value: "PG-10", icon: <NotebookPen/> },
    { name: "Employees", value: "300", icon: <BookCheck/> },
    { name: "Passed Students", value: "1488", icon: <GraduationCap/> },
    { name: "Daily Average Attendance", value: "1440", icon: <LayoutDashboard/> },
    { name: "Events Orgnized", value: "40+", icon: <MessageCircle/> },
  ];

  return (
    <div>
      {datas.map(({name, value, icon}) => (
        <div key={name} className="flex justify-between bg-black text-white">
          <div>{icon}</div>
          <div className="flex flex-col">
            <div>{name}</div>
            <div>{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
