import React from 'react';
import styled from 'styled-components';

const Steplist = styled.li`
font-weight: bolder;
font-size: large;
`;

function Steps({ step }) {
  return (
    <Steplist>{step}</Steplist>
  );
}

export default Steps;
