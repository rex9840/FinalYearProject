import { BellDot, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

function Navbar() {
  return (
    <div className="bg-[#0e0e0e] p-4 min-w-full flex h-16 justify-between items-center">
      {/*Logo*/}
      <div className="text-white text-xl font-bold ">LMS-Logo</div>

      {/* Navigation links */}
      <div className="flex items-center gap-6">
        <Link to="" className="">
          <BellDot className=" hover:bg-gray-800 text-white rounded-full p-2 w-10 h-10" />
        </Link>
        <Select>
          <SelectTrigger className="border-0 outline-none focus:ring-0">
            <UserCheck className=" hover:bg-gray-800 text-white rounded-full p-2 w-10 h-10" />
          </SelectTrigger>
          <SelectContent className="bg-[#0e0e0e] text-white">
            <SelectItem className=" hover:bg-gray-800" value="light">
              Admin
            </SelectItem>
            <SelectItem className=" hover:bg-gray-800" value="dark">
              Logout
            </SelectItem>
            
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Navbar;
