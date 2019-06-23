import React from 'react';

import Photo from './photo/photo';

const PhotoList = ({ photoList }) => {
  return (
    photoList &&
    photoList.map(({ sol, camera, img_src, earth_date }, index) => (
      <Photo
        sol={sol}
        camera={camera.full_name}
        imgSrc={img_src}
        earthDate={earth_date}
        key={index}
      />
    ))
  );
};

export default PhotoList;
