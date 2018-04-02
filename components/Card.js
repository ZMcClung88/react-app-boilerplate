import React from 'react';
import ImageInfo from './ImageInfo';
import Form from './Form';

class Card extends React.Component {
  render() {
    return (
      <div className="landing-main">
        <Form />
        {/* <ImageInfo /> */}
      </div>
    );
  }
}
export default Card;
