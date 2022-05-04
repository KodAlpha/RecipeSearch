const diet = [
  { value: '', label: 'None' },
  { value: 'Gluten Free', label: 'Gluten Free' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Ovo-Vegetarian', label: 'Ovo-Vegetarian' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'Pescetarian', label: 'Pescetarian' },
  { value: 'Whole30', label: 'Whole30' },
];

const intolerance = [
  { value: 'Dairy', label: 'Dairy' },
  { value: 'Egg', label: 'Egg' },
  { value: 'Gluten', label: 'Gluten' },
  { value: 'Grain', label: 'Grain' },
  { value: 'Peanut', label: 'Peanut' },
  { value: 'Seafood', label: 'Seafood' },
  { value: 'Sesame', label: 'Sesame' },
  { value: 'Shellfish', label: 'Shellfish' },
  { value: 'Soy', label: 'Soy' },
  { value: 'Sulfite', label: 'Sulfite' },
  { value: 'Tree Nut', label: 'Tree Nut' },
  { value: 'Wheat', label: 'Wheat' },
];

const sortBy = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'healthiness', label: 'Healthiness' },
  { value: 'time', label: 'Time Taken' },
];

export {
  diet, intolerance, sortBy,
};
