import React, { FC } from "react";
import "./Contact.css"
import ContactForm from "./ContactForm";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="contact">
      <h1>Contact Form</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
