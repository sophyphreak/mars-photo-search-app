import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import getMarsData from './getMarsData';
// search for photos
// inputs:
//    Sol (mission day)
//    Camera (select or radio buttons)
// user clicks "find photos"
//

const MarsPhotoSearch = () => {
  const [sol, setSol] = useState(1000);
  const [camera, setCamera] = useState('navcam');
  const onSolChange = e => {
    const sol = e.target.value;
    setSol(sol);
  };
  const onCameraChange = e => {
    const camera = e.target.value;
    setCamera(camera);
  };
  return (
    <>
      <Label>Sol</Label>
      <Input value={sol} onChange={onSolChange} />
      <Label>Camera</Label>
      <Input value={camera} onChange={onCameraChange} />
      <Button onClick={() => getMarsData({ sol, camera })}>GET!</Button>
    </>
  );
};

export default MarsPhotoSearch;
