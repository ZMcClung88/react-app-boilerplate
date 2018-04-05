import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card_wrapper">
        <div className="display">
          <div className="display_left">
            <img src={this.props.formData.imagePreviewUrl} />
            <h1>
              {this.props.formData.name}
            </h1>
            <p>
              {this.props.formData.occupation}
            </p>
            <p>
              {this.props.formData.email}
            </p>
          </div>
          <div className="display_right">
            <p>
              {this.props.formData.linkedin}
            </p>
            <p>
              {this.props.formData.facebook}
            </p>
            <p>
              {this.props.formData.twitter}
            </p>
            <p>
              {this.props.formData.github}
            </p>
            <p>
              {this.props.formData.instagram}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
