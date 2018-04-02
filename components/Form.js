import React, { Component } from 'react';
import styles from '../public/style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
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
        <form onSubmit={event => this.handleSubmit(event)} className="form">
          <div className="form_top">
            <div className="image_select">
              <div className="image-preview">
                {$imagePreview}
              </div>
              <input
                className="pic_search"
                placeholder="Image"
                type="file"
                onChange={event => this.handleImageChange(event)}
              />
              {/* <button type="submit" onClick={event => this.handleSubmit(event)}>
                Upload Image
              </button> */}
            </div>
          </div>
          <div className="form_bottom">
            <div className="personal_info">
              <input placeholder="Name" />
              <input placeholder="Occupation" />
              <input placeholder="Email" />
            </div>
            <div className="social_media_links">
              <input placeholder="Linkedin" />
              <input placeholder="Facebook" />
              <input placeholder="Twitter" />
              <input placeholder="Github" />
              <input placeholder="Instagram" />
            </div>
          </div>
          <div className="form_submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
