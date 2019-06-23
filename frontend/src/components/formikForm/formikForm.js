import React from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Col, Button } from 'reactstrap';
import SolInput from './solInput/solInput';
import CameraInput from './cameraInput/cameraInput';

const FormikForm = props => (
  <Formik
    initialValues={props.initialValues}
    validationSchema={props.validationSchema}
    onSubmit={props.onSubmit}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form>
        <FormGroup>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <input type="hidden" value="for disrupting autocomplete" />
            <SolInput error={errors.sol} touched={touched.sol} />
            <br />
            <CameraInput />
            <br />
            <Button
              type="submit"
              style={{ backgroundColor: 'rebeccapurple' }}
              disabled={isSubmitting}
            >
              find
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
