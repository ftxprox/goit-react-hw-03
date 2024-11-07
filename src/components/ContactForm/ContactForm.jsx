import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ onAddContact }) {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm(); 
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {() => (
        <Form className={s.formContact}>
          <label className={s.labelContact}>Name</label>
          <ErrorMessage name="name" component="div" className={s.errorMessage}/>
          <Field
            className={s.field}
            type="text"
            name="name" 
          />

          <label className={s.labelContact}>Number</label>
          <ErrorMessage name="number" component="div" className={s.errorMessage}/>
          <Field
            className={s.field}
            type="tel"
            name="number" 
          />

          <button className={s.buttonAdd} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}