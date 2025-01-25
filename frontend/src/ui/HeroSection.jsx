import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="text-center mt-32">
      <span>Your Ultimate guide to make smoothies</span>
      <p>
        A place where you can find recipies of all smoothies also if you want to
        add you own recipie you can add it easily
      </p>
      <div>
        <input
          className=" border border-gray-600 w-96 rounded-full mt-2 text-center"
          type="text"
          placeholder="Find your smoothie recipie"
        />
        <Button className="rounded-full m-2 h-7 bg-[#6A38C2] hover:bg-gray-600">
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
