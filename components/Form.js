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
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="image-preview">
            {$imagePreview}
          </div>
          <input placeholder="Image" type="file" onChange={event => this.handleImageChange(event)} />
          <button type="submit" onClick={event => this.handleSubmit(event)}>
            Upload Image
          </button>
          <input placeholder="Name" />
          <input placeholder="Occupation" />
          <input placeholder="linkedin" />
          <input placeholder="facebook" />
          <input placeholder="twitter" />
          <input placeholder="github" />
          <input placeholder="instagram" />
        </form>
      </div>
    );
  }
}

export default Form;
