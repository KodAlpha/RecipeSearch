import React from 'react';
import Select from 'react-select';
import { diet } from './AllOptions.js';

function DietRestrict({ onchange }) {
  return (
    <Select
      options={diet}
      placeholder="Diet Restrictions"
      name="Options"
      onChange={onchange}
    />
  );
}

export default DietRestrict;
