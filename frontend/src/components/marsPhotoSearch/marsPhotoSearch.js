import React, { Component } from 'react';
import queryString from 'query-string';

// search for photos
// inputs:
//    Sol (mission day)
//    Camera (select or radio buttons)
// user clicks "find photos"
//

class MarsPhotoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        sol: undefined,
        camera: 'any'
      }
    };
  }
  async componentDidMount() {
    const query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${queryString.stringify(
      { sol: 2438, camera: 'fhaz' }
    )}`;
    console.log(query);
    const res = await fetch(query);
    const data = await res.json();
    console.log(data);
  }
  render() {
    return <h1>imma component</h1>;
  }
}

export default MarsPhotoSearch;
