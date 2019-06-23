import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  sol: Yup.number()
    .positive('Please enter a positive integer')
    .max(2500, 'Please enter a smaller integer')
    .integer('Must be an integer')
});

export default validationSchema;
