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
    console.log(obj.name + ' this is in the parent!!!');
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
      }
      // function() {
      //   console.log('attempt2', this.state);
      // }
    );
  }

  handleClick2() {
    let imagePreviewUrl = localStorage.getItem('imagePreviewUrl').replace(/\"/g, '');
    let name = localStorage.getItem('name').replace(/\"/g, '');
    let occupation = localStorage.getItem('occupation').replace(/\"/g, '');
    let email = localStorage.getItem('email').replace(/\"/g, '');
    let linkedin = localStorage.getItem('linkedin').replace(/\"/g, '');
    let facebook = localStorage.getItem('facebook').replace(/\"/g, '');
    let twitter = localStorage.getItem('twitter').replace(/\"/g, '');
    let github = localStorage.getItem('github').replace(/\"/g, '');
    let instagram = localStorage.getItem('instagram').replace(/\"/g, '');

    this.setState({
      imagePreviewUrl: imagePreviewUrl,
      name: name,
      occupation: occupation + '123',
      email: email + '123',
      linkedin: linkedin,
      facebook: facebook,
      twitter: twitter,
      github: github,
      instagram: instagram
    });
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
