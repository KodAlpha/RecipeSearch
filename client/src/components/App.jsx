import React from 'react';
import styled from 'styled-components';
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
      diet: [],
      Intolerance: [],
      sort: '',
      objarr: [],
    };
    this.handleDChange = this.handleDChange.bind(this);
    this.handleIChange = this.handleIChange.bind(this);
    this.handleSChange = this.handleSChange.bind(this);
    this.objmap = this.objmap.bind(this);
  }

  componentDidMount() {
    this.setState({objarr: obj.recipes});
  }

  handleDChange(e) {
    this.setState({ diet: e ? e.value : [] });
  }

  handleIChange(e) {
    this.setState({Intolerance: e ? e.map(x => x.value) : [] });
  }

  handleSChange(e) {
    if (!e) {
      this.setState({sort: ''});
    } else {
      console.log(e.value);
      this.setState({sort: e.value});
    }
  }

  objmap(e) {
    e.preventDefault();
    obj.recipes.map(x => console.log(x.title));
  }

  render() {
    const { objarr } = this.state;
    return (
      <>
        <Title>hello</Title>
        <button>home</button>
        <button>Favorites</button>
        <DietRestrict onchange={this.handleDChange} />
        <Intolerances onchange={this.handleIChange} />
        <Sort onchange={this.handleSChange} />
        <button onClick={this.objmap}>Apply Changes</button>
        {objarr.map((recipeinfo) => {
        return   (
            <RecipeCard info={recipeinfo} />
          )
        }
        )}
        <div></div>
        <div></div>
      </>
    );
  }
}

export default App;
