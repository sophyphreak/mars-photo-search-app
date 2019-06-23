import React from 'react';
import { Field } from 'formik';
import { Input, Label } from 'reactstrap';
import Select from './select';

const SelectInput = ({ sectionLabel, selections, componentName }) => (
  <>
    <Label for={componentName}>{sectionLabel}</Label>
    <br />
    <Input tag={Field} component="select" name={componentName}>
      {selections.map(({ label, value }, index) => (
        <Select key={index} label={label} value={value} />
      ))}
    </Input>
  </>
);

export default SelectInput;
