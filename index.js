import React, { Component } from 'react';
import { render } from 'react-dom';
import uuid from "uuid";
import apiData from './apiData';
import instructionData from './instructionData';
import './style.css';

class App extends Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    const apiKey = '3e8c96b394444c7ae9f0e5f7ac46b5'
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar,+cinnamon,+butter,+salt,+baking powder,+milk&number=20&apiKey=${apiKey}`)
    .then(res=>res.json())
    .then(fetchedApiData => {
      // this.setState({apiData: fetchedApiData})
    })
  }


  render() {

    // const apiDetais = this.state.apiData.map(data => (
    const apiDetais = apiData.map(data => (
      data.missedIngredientCount === 0 ? 
      <div key={uuid.v4()}>
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.title} height="250" width="300"/>
        <p>recipeId: {data.id}</p>
        <hr/>
      </div> :
      null 
    ))

    const recipe = instructionData[0];
    console.log('preparationMinutes: ',recipe.preparationMinutes)
    console.log('cookingMinutes: ', recipe.cookingMinutes)
    console.log('# of ingredients: ', recipe.extendedIngredients.length)
    console.log('servings: ', recipe.servings)
    console.log('dish type: ', recipe.dishTypes[0])
    console.log('instructions: ', recipe.instructions)



    const ingredientData = recipe.extendedIngredients.map(ingr => {
      return (
        <div>
          <p>ingr.original</p>
          <img src={`https://spoonacular.com/cdn/ingredients_500x500/${ingr.image}`} alt={ingr.name} height="150" width="200"/>
        </div>
      )
    })

    const instructions = recipe.analyzedInstructions.map(instr => {

    })





    
    return (
      <React.Fragment>
        {apiDetais}
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
