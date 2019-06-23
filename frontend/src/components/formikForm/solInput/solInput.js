import React from 'react';
import BasicInput from '../basicInput/basicInput';

const NameInput = props => (
  <BasicInput
    componentName="sol"
    label="sol"
    type="text"
    autoFocus={true}
    {...props}
  />
);

export default NameInput;
