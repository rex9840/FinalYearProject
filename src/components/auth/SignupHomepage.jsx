import { UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignupHomepage() {
  const navigate = useNavigate();

  const logindetails = [
    {
      role: "Student",
      description:
        " Login as a student to explore course materials and assignments.",
      icon: <UserIcon />,
      link: "/student",
    },
    {
      role: "Teacher",
      description:
        "  Login as a teacher to create courses, assignments, and track student progress.",
      icon: <UserIcon />,
      link: "/teacher",
    },
    {
      role: "Admin",
      description:
        "  Login as an administrator to access the dashboard to manage app data.",
      icon: <UserIcon />,
      link: "/admin",
    },
  ];

  return (
    <div className="flex  justify-center ">
      {logindetails.map(({ role, description, icon, link }) => (
        <div
          key={role}
          className=" flex flex-col justify-around items-center w-56 h-40 border rounded-md m-1 p-2 bg-[#4e5adb] text-white cursor-pointer"
          onClick={() => navigate(`/signup${link}`)}
        >
          <div className="">{icon}</div>
          <div className="flex flex-col  items-center">
            <div className="text-lg font-bold">{role}</div>
            <div
              className="text-center 
              text-sm font-semibold"
            >
              {description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
