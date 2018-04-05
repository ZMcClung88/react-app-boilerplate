import React, { Component } from 'react';
import styles from '../public/style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      name: '',
      occupation: '',
      email: '',
      linkedin: '',
      facebook: '',
      twitter: '',
      github: '',
      instagram: ''
    };

    this.handleName = this.handleName.bind(this);
    this.handleOccupation = this.handleOccupation.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleLinkedin = this.handleLinkedin.bind(this);
    this.handleFacebook = this.handleFacebook.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);
    this.handleGithub = this.handleGithub.bind(this);
    this.handleInstagram = this.handleInstagram.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('handle uploading- ', this.state.file);
  }

  handleImageChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  handleName(event) {
    let value = event.target.value;
    this.setState({ name: value });
    // console.log(this.state);
  }

  handleOccupation(event) {
    let value = event.target.value;
    this.setState({ occupation: value });
    // console.log(this.state);
  }

  handleEmail(event) {
    let value = event.target.value;
    this.setState({ email: value });
    // console.log(this.state);
  }

  handleLinkedin(event) {
    let value = event.target.value;
    this.setState({ linkedin: value });
    // console.log(this.state);
  }

  handleFacebook(event) {
    let value = event.target.value;
    this.setState({ facebook: value });
    // console.log(this.state);
  }

  handleTwitter(event) {
    let value = event.target.value;
    this.setState({ twitter: value });
    // console.log(this.state);
  }

  handleGithub(event) {
    let value = event.target.value;
    this.setState({ github: value });
    // console.log(this.state);
  }

  handleInstagram(event) {
    let value = event.target.value;
    this.setState({ instagram: value });
    // console.log(this.state);
  }

  handleSubmit(event) {
    console.log(event);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.onClick(this.state);
  }
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = <div className="">Please select an Image for preview</div>;
    }
    return (
      <div className="form_wrapper">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form_top">
            <div className="form_submit">
              <div className="image_select">
                <div className="image-preview">
                  {$imagePreview}
                </div>
                <input
                  onChange={this.handleChange}
                  className="pic_search"
                  placeholder="Image"
                  type="file"
                  onChange={event => this.handleImageChange(event)}
                />
                {/* <button type="submit" onClick={event => this.handleSubmit(event)}>
                  Upload Image
                </button> */}
              </div>
              <div className="personal_info_links">
                <div className="links_left">
                  <input onChange={this.handleName} type="text" placeholder="Name" />
                  <input onChange={this.handleOccupation} type="text" placeholder="Occupation" />
                  <input onChange={this.handleEmail} type="text" placeholder="Email" />
                  <input onChange={this.handleLinkedin} type="text" placeholder="Linkedin" />
                </div>
                <div className="links_right">
                  <input onChange={this.handleFacebook} type="text" placeholder="Facebook" />
                  <input onChange={this.handleTwitter} type="text" placeholder="Twitter" />
                  <input onChange={this.handleGithub} type="text" placeholder="Github" />
                  <input onChange={this.handleInstagram} type="text" placeholder="Instagram" />
                </div>
              </div>
            </div>
          </div>
          <div className="form_bottom">
            <button type="text" onClick={this.handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
