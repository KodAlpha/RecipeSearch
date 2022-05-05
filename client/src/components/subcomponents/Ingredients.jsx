import React from 'react';

function Ingredients({ id, name }) {
  return (
    <li key={id}>{name}</li>
  );
}

export default Ingredients;
