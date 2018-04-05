import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>This is the card component</h1>
        <p>
          testin... {this.props.formData.name}
        </p>
      </div>
    );
  }
}

export default Card;
