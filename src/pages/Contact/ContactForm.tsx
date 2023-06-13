import React, { useRef } from "react";
import "./ContactForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema } from "./contactValidation";

const initialValues = {
  name: "",
  age: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  gender: "",
  agreeTerms: false,
};

const ContactForm: React.FC = () => {
  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form-container">
        <div className="input-field">
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>

        <div className="input-field">
          <label htmlFor="age">Age:</label>
          <Field type="number" id="age" name="age" />
          <ErrorMessage name="age" component="div" className="error-message" />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-field">
          <label htmlFor="phone">Phone:</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage
            name="phone"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-field">
          <label htmlFor="address">Address:</label>
          <Field as="textarea" id="address" name="address" />
          <ErrorMessage
            name="address"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-field">
          <label htmlFor="gender">Gender:</label>
          <Field as="select" id="gender" name="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage
            name="gender"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-field">
          <label htmlFor="agreeTerms">
            <Field type="checkbox" id="agreeTerms" name="agreeTerms" />
            Agree to terms and conditions
          </label>
          <ErrorMessage
            name="agreeTerms"
            component="div"
            className="error-message"
          />
        </div>

        <Field as="button" type="submit" className="contact-submit">
          Submit
        </Field>
      </Form>
    </Formik>
  );
};

export default ContactForm;
