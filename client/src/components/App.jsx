import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DietRestrict from './Options/DietRestrictions.jsx';
import Intolerances from './Options/Intolerances.jsx';
import Sort from './Options/SortBy.jsx';
import obj from './MoreExamples.js';
import RecipeCard from './subcomponents/RecipeCards.jsx';

const Title = styled.h1`
font-weight: bold;
display: flex;
background-color: wheat;
justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diet: '',
      Intolerance: '',
      sort: '',
      objarr: [],
    };
    this.handleDChange = this.handleDChange.bind(this);
    this.handleIChange = this.handleIChange.bind(this);
    this.handleSChange = this.handleSChange.bind(this);
    this.handleCClick = this.handleCClick.bind(this);
  }

  componentDidMount() {
    axios.get('/random')
      .then(({ data }) => {
        this.setState({ objarr: data.results });
      })
      .catch((err) => {
        console.error(err);
        alert('problem with request');
      });
  }

  handleDChange(e) {
    this.setState({ diet: e ? e.value : '' });
  }

  handleIChange(e) {
    this.setState({ Intolerance: e ? e.map(x => x.value) : '' });
  }

  handleSChange(e) {
    this.setState({ sort: e ? e.value : '' });
  }

  handleCClick(e) {
    e.preventDefault();
    const { diet, sort } = this.state;
    const Intolerance = this.state.Intolerance.join();
    axios.get('/specified', {
      params: {
        diet: diet,
        intolerance: Intolerance,
        sort: sort,
      }
    })
      .then(({ data }) => {
        this.setState({ objarr: data.results });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { objarr } = this.state;
    return (
      <>
        <Title>Recipe Search</Title>
        {/* <button onClick={this.hanc}>home</button>
        <button>Favorites</button> */}
        <DietRestrict onchange={this.handleDChange} />
        <Intolerances onchange={this.handleIChange} />
        <Sort onchange={this.handleSChange} />
        <button onClick={this.handleCClick}>Apply Changes</button>
        {objarr.map((recipeinfo) => <RecipeCard info={recipeinfo} />)}
      </>
    );
  }
}

export default App;
