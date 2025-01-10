import { recipie } from "../models/recipe.model.js";

export const addRecipie = async (req, res) => {
  try {
    const { recipieName, ingredients, procedure } = req.body;

    if (recipieName || ingredients || procedure) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const recipe = await recipie.create({
      recipieName,
      ingredients,
      procedure,
    });
    return res.status(201).json({
      recipe,
      message: "Recipie Created Succesfully",
      success: false,
    });
  } catch (error) {
    console.log(error);
  }
};

// search any recipie

export const getAllRecipie = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { recipieName: { $regex: keyword, $options: "i" } },
        { ingredients: { $regex: keyword, $options: "i" } },
      ],
    };

    const recipies = await recipie.find(query).sort({ createdAt: -1 });

    if (!query) {
      return res.status(400).json({
        message: "No Recipies Found",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
