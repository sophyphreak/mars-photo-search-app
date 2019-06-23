import React from 'react';

const Photo = ({ sol, camera, imgSrc, earthDate }) => (
  <>
    <img src={imgSrc} alt="from mars" />
    <p>{`Taken on sol ${sol} (approximate Earth date: ${earthDate}) with ${camera} camera`}</p>
    <hr />
    <br />
  </>
);

export default Photo;
