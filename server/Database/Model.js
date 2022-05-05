// const Recipe = require('./RecipesSchema');

// const addARecipe = async (nTitle, nImage, nTime, nServings, nSummary, nIngredients, nSteps) => {
//   try {
//     const result = await Recipe.create({
//       title: nTitle,
//       image: nImage,
//       time: nTime,
//       servings: nServings,
//       summary: nSummary,
//       ingredients: nIngredients,
//       steps: nSteps,
//     });
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const getFavorites = async () => {
//   try {
//     const result = await Recipe.find({});
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// };

// module.exports = addARecipe;
