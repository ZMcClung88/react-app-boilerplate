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
            {/* <p>
              <a href={this.props.formData.linkedin}>
                {this.props.formData.linkedin}
              </a>
            </p>
            <p>
              <a href={this.props.formData.facebook}>
                {this.props.formData.facebook}
              </a>
            </p>
            <p>
              <a href={this.props.formData.twitter}>
                {this.props.formData.twitter}
              </a>
            </p>
            <p>
              <a href={this.props.formData.github}>
                {this.props.formData.github}
              </a>
            </p>
            <p>
              <a href={this.props.formData.instagram}>
                {this.props.formData.instagram}
              </a>
            </p> */}
            <ul>
              {this.props.formData.links.map(
                link =>
                  link === null
                    ? null
                    : <li key={link}>
                        <a href={link}>
                          {link}
                        </a>
                      </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
