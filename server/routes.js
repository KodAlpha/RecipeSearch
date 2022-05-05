/* eslint-disable comma-dangle */
const express = require('express');
const axios = require('axios');
// const addARecipe = require('./Database/Model');
// const get = require('./Database/Model');
require('dotenv').config();

const router = express.Router();

router.get('/random', (req, res) => {
  axios.get('https://api.spoonacular.com/recipes/complexSearch', {
    params: {
      apiKey: process.env.KEY,
      sort: 'random',
      number: 10,
      limitLicense: true,
      addRecipeInformation: true,
      instructionsRequired: true,
      fillIngredients: true,
    }
  })
    .then(({ data }) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error('err', err);
      res.sendStatus(400);
    });
});

router.get('/specified', (req, res) => {
  const { diet, intolerance, sort } = req.query;
  axios.get('https://api.spoonacular.com/recipes/complexSearch', {
    params: {
      apiKey: process.env.KEY,
      number: 20,
      limitLicense: true,
      addRecipeInformation: true,
      sort: sort,
      diet: diet,
      intolerances: intolerance,
      instructionsRequired: true,
      fillIngredients: true
    }
  })
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

// router.post('/favorites', async (req, res) => {
//   const { title, image, time, servings, summary, ingredients, steps } = req.query;
//   try {
//     const result = await addARecipe(title, image, time, servings, summary, ingredients, steps);
//     console.log(result);
//     result === null ? res.sendStatus(404) : res.sendStatus(201);
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(400);
//   }
// });

// router.get('/favorites', async (req, res) => {
//   try {
//     const result = await get();
//     return result;
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(404);
//   }
// });
module.exports = router;
