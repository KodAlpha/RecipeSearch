import React from 'react';
import Select from 'react-select';
import { intolerance } from './AllOptions.js';

function Intolerances({ onchange }) {
  return (
    <Select
      options={intolerance}
      isMulti
      placeholder="Diet Intolerances"
      name="Options"
      onChange={onchange}
    />
  );
}

export default Intolerances;
