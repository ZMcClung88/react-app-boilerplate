import React from 'react';
import Form from './Form';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      imagePreviewUrl: null,
      name: null,
      occupation: null,
      email: null,
      linkedin: null,
      facebook: null,
      twitter: null,
      github: null,
      instagram: null,
      links: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick(obj) {
    console.log(obj + ' this is in the parent!!!');
    this.setState(
      {
        imagePreviewUrl: obj.imagePreviewUrl,
        name: obj.name,
        occupation: obj.occupation,
        email: obj.email,
        linkedin: obj.linkedin,
        facebook: obj.facebook,
        twitter: obj.twitter,
        github: obj.github,
        instagram: obj.instagram,
        links: obj.links.concat(obj.linkedin, obj.facebook, obj.twitter, obj.github, obj.instagram)
      },
      function() {
        console.log('attempt2', this.state);
      }
    );
  }

  handleClick2() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="landing-main">
        {/* <Form onClick={this.handleClick} />
        <button onClick={this.handleClick2}>State</button>
        <Card formData={this.state} /> */}
        {this.state.name === null ? <Form onClick={this.handleClick} /> : <Card formData={this.state} />}
      </div>
    );
  }
}
export default App;
