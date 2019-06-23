import React from 'react';
import SelectInput from '../selectInput/selectInput';
import cameraSelections from './cameraSelections';

const CameraInput = props => (
  <SelectInput
    sectionLabel="camera"
    componentName="camera"
    selections={cameraSelections}
    {...props}
  />
);

export default CameraInput;
