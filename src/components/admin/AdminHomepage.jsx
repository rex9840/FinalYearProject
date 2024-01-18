import Navbar from "../home/Navbar";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  MessageCircle,
  UserIcon,
  BookCheck,
  NotebookPen,
  School,
  GraduationCap,
  BookType,
  Calendar,
  User2Icon,
} from "lucide-react";

function AdminHomepage() {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
    { name: "Class", link: "/class", icon: School },
    { name: "Subject", link: "/subject", icon: MessageCircle },
    { name: "Student", link: "/student", icon: User2Icon },
    { name: "Teacher", link: "/teacher", icon: BookType },
    { name: "Routine ", link: "/routine", icon: UserIcon },
    { name: "Result", link: "/result", icon: GraduationCap },
    { name: "Complain", link: "/complain", icon: BookCheck },
    { name: "Attendance", link: "/attendance", icon: BookCheck },
    { name: "Assignment", link: "/assignment", icon: NotebookPen },
    { name: "Notice", link: "/events", icon: Calendar },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <section className="flex gap-6 ">
        <div
          className={`bg-[#0e0e0e] min-h-screen ${
            open ? "w-60" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <Menu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={`/admin${menu?.link}`}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="flex-1 flex flex-col gap-2">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminHomepage;
