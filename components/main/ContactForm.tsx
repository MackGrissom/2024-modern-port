import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  // Validation Schema
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
  });

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting }) => {
    // Here you would handle sending the data to your email,
    // but sending emails directly from the front end is not typical.
    // You would usually send the data to a backend service or serverless function.
    
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Your Name" />
          <ErrorMessage name="name" component="div" />

          <Field type="email" name="email" placeholder="Your Email" />
          <ErrorMessage name="email" component="div" />

          <Field as="textarea" name="message" placeholder="Your Message" />
          <ErrorMessage name="message" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
