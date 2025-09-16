const yup = require('yup');

export const validationSchema = yup.object().shape({
  fname: yup.string().required('First name is required.'),
  lname: yup.string().required('Last name is required.'),
  email: yup
    .string()
    .email('Invalid email format.')
    .required('Email is required.'),
  phone: yup.string().required('Phone number is required.'),
  asset: yup.string().required('Asset is required.'),
  message: yup.string().required('Message is required.'),
});

export const newsletterSchema = yup.object().shape({
  fname: yup.string().required('First name is required.'),
  email: yup
    .string()
    .email('Invalid email format.')
    .required('Email is required.'),
  referred: yup.string().required('Phone number is required.'),
  asset: yup.string().required('Asset is required.'),
});
