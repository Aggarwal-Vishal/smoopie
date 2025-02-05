import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { RECIPIE_API } from "@/utils/constant";
import { useParams } from "react-router-dom";

const Recipie = () => {
  const [recipie, setRecipie] = useState(null);

  const params = useParams();
  const id = params.id;
  console.log("recipie id", id);

  useEffect(() => {
    console.log("params", params);

    const fetchApi = async () => {
      try {
        const res = await axios.get(`${RECIPIE_API}/get/${id}`);
        setRecipie(res.data.recipie);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [id]);

  if (!id) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center">
      <Navbar />
      <div className="border mt-56 w-96 h-96 p-4 m-4 items-center justify-center rounded-lg shadow-md">
        <h3 className="text-xl font-bold">
          Smoothie Name : {recipie?.recipieName}
        </h3>
        <ul>
          <h4 className="font-semibold">Ingredients: {recipie?.ingredients}</h4>
          <p>Procedure : {recipie?.procedure}</p>
        </ul>
      </div>
    </div>
  );
};

export default Recipie;
