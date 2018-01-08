import React from 'react';

class Recipe extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <img src="#" />
        </div>
        <div className="right">
          <form className="recipe">
            <h2 className="recipe-title" />
            <h3 className="recipe-author" />
            <p className="ingredients-title">Ingredients</p>
            <ul className="ingredients-list">
              <li className="ingredient" />
              <li className="ingredient" />
              <li className="ingredient" />
              <li className="ingredient" />
              <li className="ingredient" />
            </ul>
            <p className="directions-title">Directions</p>
            <ol className="directions-list">
              <li className="direction" />
              <li className="direction" />
              <li className="direction" />
              <li className="direction" />
              <li className="direction" />
            </ol>
          </form>
        </div>
      </div>
    );
  }
}

export default Recipe;
