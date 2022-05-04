import React from 'react';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

const Infolist = styled.ol`
list-style-type: none;
`

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { id, title, readyInMinutes, servings, summary, image} = this.props.info;
    const cleanSumm = DOMPurify.sanitize(summary);
    return (
      <div key={id}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <Infolist>
          <li>Time to cook: {readyInMinutes} min</li>
          <li>servings: {servings}</li>
        </Infolist>
        <p dangerouslySetInnerHTML={{__html: cleanSumm}}/>
      </div>
    );
  }
}

export default RecipeCard;
