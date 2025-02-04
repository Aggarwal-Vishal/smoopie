import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { RECIPIE_API } from "@/utils/constant";
import { useParams } from "react-router-dom";

const Recipie = () => {
  const [recipie, setRecipie] = useState(null);

  const { id } = useParams();
  console.log("recipie id", id);

  useEffect(() => {
    if (id) {
      const fetchApi = async () => {
        try {
          const res = await axios.get(`${RECIPIE_API}get/${id}`);
          console.log(res.data);
          setRecipie(res.data.recipie);
        } catch (error) {
          console.log(error);
        }
      };

      fetchApi();
    }
  }, [id]);
  if (!id) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center">
      <Navbar />
      <div className="border mt-56 w-96 h-96 p-4 m-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{recipie?.recipieName}</h3>
        <p>{recipie?.procedure}</p>
        <ul>
          <h4 className="font-semibold">Ingredients:</h4>
          <li>{recipie?.ingredients}</li>
        </ul>
      </div>
    </div>
  );
};

export default Recipie;
