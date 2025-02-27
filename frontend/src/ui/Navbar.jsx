/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { USER_API } from "@/utils/constant";
import axios from "axios";
import { Edit, LogIn } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    toast.success("Logged Out of Successfully");
    navigate("/login");
    try {
      const res = axios.post(
        `${USER_API}/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="bg-[#0c264adb] fixed top-0 w-full p-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <Link to="/">
              Smoo<span className="text-[#8633c9]">pie</span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <Link to="/add-recipie">
                  <Button className="bg-[#8e2bf1] hover:bg-[#6A38C2]">
                    Add Smoothie
                  </Button>
                </Link>
                <Popover className="">
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        className="h-10 w-10 rounded-full"
                        src="https://github.com/shadcn.png"
                        alt="Profile Pic"
                      />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-60 px-2 border border-gray-200">
                    <div className="">
                      <div className="flex gap-4 px-2 space-y-2">
                        <Avatar className="cursor-pointer">
                          <AvatarImage
                            className="h-10 w-10 rounded-full"
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                        </Avatar>
                      </div>
                      <div className="flex flex-col my-2 text-gray-600 ">
                        <div className="flex mt-2 w-fit items-center cursor-pointer">
                          <Edit />
                          <Button className="" variant="link">
                            Edit Recipie
                          </Button>
                        </div>
                        <div className="flex w-fit items-center cursor-pointer">
                          <LogIn />
                          <Button onClick={logoutHandler} variant="link">
                            Logout
                          </Button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-[#6A38C2] hover:bg-[#6A38C2]">
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
