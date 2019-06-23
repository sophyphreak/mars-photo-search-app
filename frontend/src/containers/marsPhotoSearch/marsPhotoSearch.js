import React, { useState } from 'react';
import getMarsPhotos from './getMarsPhotos';
import initialValues from './initalValues';
import validationSchema from './validationSchema';
import FormikForm from '../../components/formikForm/formikForm';
import PhotoList from '../../components/photoList/photoList';
// search for photos
// inputs:
//    Sol (mission day)
//    Camera (select or radio buttons)
// user clicks "find photos"
//

const MarsPhotoSearch = () => {
  const [photoList, setPhotoList] = useState([]);
  return (
    <>
      <FormikForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async ({ sol, camera }, { setSubmitting }) => {
          const newPhotoList = await getMarsPhotos({ sol, camera });
          setPhotoList(newPhotoList);
          setSubmitting(false);
        }}
      />
      <PhotoList photoList={photoList} />
    </>
  );
};

export default MarsPhotoSearch;
