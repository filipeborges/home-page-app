import React from "react";
import HeaderTitle from "../HeaderTitle";
import './EmailContact.css';

interface EmailContactProps {
  email: string;
  title: string;
}

const EmailContact: React.FC<EmailContactProps> = (props) => {
  return (
    <div className="email-contact-container">
      <HeaderTitle type="h1">{props.title}</HeaderTitle>
      <p className="email-contact-p">
        {props.children}
      </p>
      <a href={`mailto:${props.email}`}>{props.email}</a>
    </div>
  );
}

export default EmailContact;