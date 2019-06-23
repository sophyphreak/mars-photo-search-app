import React from 'react';
import { Field } from 'formik';
import { Label, Input } from 'reactstrap';

const BasicInput = ({
  componentName,
  label = '',
  type = 'text',
  autoFocus = false,
  placeholder = ''
}) => (
  <>
    <Label for={componentName}>{label}</Label>
    <Input
      autoFocus={autoFocus}
      type={type}
      name={componentName}
      tag={Field}
      autoComplete="off"
      placeholder={placeholder}
    />
  </>
);

export default BasicInput;
