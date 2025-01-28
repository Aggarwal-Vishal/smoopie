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
import Navbar from "./Navbar";
import axios from "axios";
import { RECIPIE_API } from "@/utils/constant";
import { toast } from "sonner";
import { useState } from "react";

const AddRecipie = () => {
  const [recipieName, setRecipieName] = useState();
  const [ingredients, setIngredients] = useState();
  const [procedure, setProcedure] = useState();

  const recipieHandler = async (e) => {
    e.preventDefault();

    const recipieData = {
      recipieName,
      ingredients,
      procedure,
    };
    try {
      const res = await axios.post(`${RECIPIE_API}/add-recipie`, recipieData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-center mt-24 p-12">
      <Navbar />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add Recipie</CardTitle>
          <CardDescription>
            Add the steps to create the smoothie
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name of Smoothie</Label>
                <Input
                  type="text"
                  value={recipieName}
                  onChange={(e) => setRecipieName(e.target.value)}
                  placeholder="Oreo Shake"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ingredients">Ingredients</Label>
                <Input
                  type="text"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="Milk,Oreo Biscuits, Ice"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="procedure">Procedure</Label>
                <Input
                  type="text"
                  value={procedure}
                  onChange={(e) => setProcedure(e.target.value)}
                  placeholder="First, Pour the milk in the jar"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button onClick={recipieHandler}>Blend</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddRecipie;
