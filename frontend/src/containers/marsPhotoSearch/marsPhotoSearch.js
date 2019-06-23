import React from 'react';
import getMarsData from './getMarsData';
import initialValues from './initalValues';
import FormikForm from '../../components/formikForm/formikForm';
// search for photos
// inputs:
//    Sol (mission day)
//    Camera (select or radio buttons)
// user clicks "find photos"
//

const MarsPhotoSearch = () => (
  <FormikForm
    initialValues={initialValues}
    onSubmit={({ sol, camera }, { setSubmitting }) =>
      getMarsData({ sol, camera }) && setSubmitting(false)
    }
  />
);

export default MarsPhotoSearch;
