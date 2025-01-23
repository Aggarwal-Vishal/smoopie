import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { USER_API } from "@/utils/constant";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignUp = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signInInput, setSignInInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API}/register`, signupInput, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        console.log(res.data);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API}/login`, signInInput, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Tabs defaultValue="SignUp" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="SignUp">Sign Up</TabsTrigger>
          <TabsTrigger value="SignIn">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="SignUp">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>New users kindly Sign Up👇</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) =>
                    setSignupInput({ ...signupInput, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) =>
                    setSignupInput({ ...signupInput, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) =>
                    setSignupInput({ ...signupInput, password: e.target.value })
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="">
              <Button
                onClick={registerHandler}
                type="button"
                className="w-full"
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="SignIn">
          <Card>
            <CardHeader>
              <CardTitle className="">Sign In</CardTitle>
              <CardDescription className="">
                Already Have an account? Login In👇
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={signInInput.email}
                  onChange={(e) =>
                    setSignInInput({ ...signInInput, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={signInInput.password}
                  onChange={(e) =>
                    setSignInInput({ ...signInInput, password: e.target.value })
                  }
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={loginHandler} className="w-full">
                Sign In
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SignUp;
