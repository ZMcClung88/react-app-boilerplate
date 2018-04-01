import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props) {
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
    }
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
    }

    reader.readAsDaraURL(file)
  }
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if(imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className=''>Please select an Image for preview</div>)
    }
    return (
      <div>
        <input placeholder="Image" type="file" />
        <input placeholder="Name" />
        <input placeholder="Occupation" />
        <input placeholder="linkedin" />
        <input placeholder="facebook" />
        <input placeholder="twitter" />
        <input placeholder="github" />
        <input placeholder="instagram" />
      </div>
    );
  }
}

export default Form;
