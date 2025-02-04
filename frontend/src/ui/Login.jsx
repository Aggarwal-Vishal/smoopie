import { USER_API } from "@/utils/constant";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API}/login`, loginInput, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        console.log("Login Response", res.data);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Navbar />
      <Tabs defaultValue="SignIn" className="w-[400px]">
        <TabsList className="grid items-center justify-between w-full grid-cols-2 ">
          <TabsTrigger value="SignIn" className="w-full text-center">
            Sign In
          </TabsTrigger>
        </TabsList>
        <TabsContent value="SignIn">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Already a user kindly Sign In👇</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) =>
                    setLoginInput({ ...loginInput, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) =>
                    setLoginInput({ ...loginInput, password: e.target.value })
                  }
                />
              </div>
              <span className="pt-2">
                <p>
                  New User Kindly SignUp ➡️{" "}
                  <Link className="hover:bg-blue-600 " to="/register">
                    SignUp
                  </Link>
                </p>
              </span>
            </CardContent>
            <CardFooter className="">
              <Button onClick={loginHandler} type="button" className="w-full">
                Sign In
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
