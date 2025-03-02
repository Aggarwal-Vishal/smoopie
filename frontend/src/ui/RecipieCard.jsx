import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RECIPIE_API } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RecipieCard = () => {
  const navigate = useNavigate();
  const recipieId = useParams();
  console.log(recipieId);

  useEffect(() => {
    try {
      const res = axios.get(`${RECIPIE_API}/get`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="flex items-center justify-center ">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardTitle className="text-center mt-2 text-xl">
                    <h1>Mango Shake</h1>
                  </CardTitle>
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <span className="text-4xl font-semibold">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="food"
                        className="rounded-lg shadow-md"
                      />
                    </span>
                  </CardContent>
                  <div className="flex p-2 items-center justify-center">
                    <Button
                      onClick={() => navigate(`/recipie/${recipieId._id}`)}
                      className=" "
                    >
                      Read Recipe
                    </Button>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RecipieCard;
