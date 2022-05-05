import React from 'react';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import axios from 'axios';
import RecipeModal from './RecipeModal.jsx';

const Infolist = styled.ol`
list-style-type: none;
`;

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleTClick = this.handleTClick.bind(this);
    this.handleMClose = this.handleMClose.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  handleTClick(e) {
    e.preventDefault();
    this.setState({ active: true });
  }

  handleMClose(e) {
    e.preventDefault();
    this.setState({ active: false });
  }

  // ingredients: this.props.recipe.extendedIngredients,
  // steps: this.props.recipe.analyzedInstructions[0].steps
  //  const { title, image, time, servings, summary, ingredients, steps } = req.query;
  addFavorite(e) {
    e.preventDefault();
    const { id, title, readyInMinutes, servings, summary, image } = this.props.info;
    const ingredients = this.props.info.extendedIngredients;
    const steps = this.props.info.analyzedInstructions[0].steps;
    axios.post('/favorites', {
      params: {
        title: title,
        image: image,
        time: readyInMinutes,
        servings: servings,
        summary: summary,
        ingredients: ingredients,
        steps: steps
      }
    })
      .then(() => {
        alert('Added to Favorites');
      })
      .catch((err) => {
        console.error(err);
        alert('Problem with your request');
      });
  }

  render() {
    const { id, title, readyInMinutes, servings, summary, image} = this.props.info;
    const cleanSumm = DOMPurify.sanitize(summary);
    return (
      <div key={id}>
        <h3 onClick={this.handleTClick}>{title}</h3>
        <img src={image} alt={title} />
        <Infolist>
          <li>Time to cook: {readyInMinutes} min</li>
          <li>servings: {servings}</li>
        </Infolist>
        <p dangerouslySetInnerHTML={{__html: cleanSumm}}/>
        <RecipeModal active={this.state.active} close={this.handleMClose} recipe={this.props.info} add={this.addFavorite} />
      </div>
    );
  }
}

export default RecipeCard;
