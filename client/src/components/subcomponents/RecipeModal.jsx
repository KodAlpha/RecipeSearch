import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import Steps from './Steps.jsx';
import Ingredients from './Ingredients.jsx';

const Modalborder = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #00b4d8;
  padding: 50px;
  height: 800px;
  width: 800px;
  z-index: 999;
  font-family: Comfortaa;
  border-radius: 12px;
`;

const Modalbackground = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.75;
`;

class RecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: {},
      steps: [],
      ingredients: [],
    };
  }

  componentDidMount() {
    if (!this.props.recipe.analyzedInstructions.length) {
      this.setState({
        currentRecipe: this.props.recipe,
        ingredients: this.props.recipe.extendedIngredients,
      });
    } else {
      this.setState({
        currentRecipe: this.props.recipe,
        ingredients: this.props.recipe.extendedIngredients,
        steps: this.props.recipe.analyzedInstructions[0].steps
      });
    }
  }

  render() {
    if (!this.props.active) {
      return null;
    }
    let { ingredients, steps, currentRecipe } = this.state;
    if (!steps.length) {
      steps = <p>No Instructions Available</p>;
    } else {
      steps = (
        <ol>
          {steps.map((st) =>
            <Steps step={st.step} />
          )}
        </ol>
      );
    }
    return ReactDom.createPortal(
      <>
        <Modalbackground />
        <Modalborder>
          <button onClick={this.props.close}>X</button>
          <button onClick={this.props.add}>Favorite</button>
          <h1>{currentRecipe.title}</h1>
          <ul>
            {ingredients.map((ingre) =>
              <Ingredients  id={ingre.id} name={ingre.original} />
            )}
          </ul>
          {steps}
          );
        </Modalborder>
      </>
      , document.getElementById('Recipe')
    );
  }
}

export default RecipeModal;
