import React from 'react';
import Select from 'react-select';
import { sortBy } from './AllOptions.js';

function Sort({ onchange }) {
  return (
    <Select
      options={sortBy}
      placeholder="Sort By"
      name="Options"
      onChange={onchange}
      isClearable="true"
    />
  );
}

export default Sort;
