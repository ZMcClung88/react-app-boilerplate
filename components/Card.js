import React from 'react';
import BioInfo from './Bio';

class Card extends React.Component {
  render() {
    return (
      <div className="landing-main">
        <h1>Hello World</h1>
        <p>Welcome to my world</p>
        <BioInfo />
      </div>
    );
  }
}
export default Card;
