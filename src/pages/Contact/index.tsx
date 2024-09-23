import React from "react";
import {
  Container,
  Header,
  Address,
  AddressMessage,
  Message,
  Section,
  Title,
  ContactInput,
} from "./styles";
import { Field, ErrorMessage, Formik, Form } from "formik";
import * as yup from "yup";
import MessageAPI, { MessageType } from "@/services/message";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

const Contact = (): JSX.Element => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const submitMessage = async (formValues: MessageType): Promise<void> => {
    try {
      const resp = await MessageAPI.SendMessage(formValues);
      console.log(resp.data);
    } catch (e) {
      console.error("error", e);
    }
  };

  return (
    <Container>
      <Header>contact-us</Header>
      <Section>
        <Title>
          <h1>we are here for you</h1>
          <p data-testid="contact-title">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </Title>
        <AddressMessage>
          <Address>
            <p data-testid="contact-address">
              497 Evergreen Rd. Roseville, <br />
              CA 95673
            </p>
            <Link
              target="_blank"
              to="https://maps.app.goo.gl/q9NmbMYdT55rz8wK9"
              data-testid="view-map-button"
            >
              View Map <EastIcon />
            </Link>
            <span data-testid="contact-phone">Phone: +44 345 678 903</span>
            <span data-testid="contact-email">
              Email: luxury_hotels@gmail.com
            </span>
          </Address>
          <Message>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={submitMessage}
            >
              {({ errors, touched }) => (
                <Form>
                  <ContactInput
                    style={errors.name == null ? {} : { borderColor: "red" }}
                  >
                    <label>Name</label>
                    <Field data-testid="name-input" type="text" name="name" />
                    <span className="error-message">
                      <ErrorMessage name="name" />
                    </span>
                  </ContactInput>
                  <ContactInput
                    style={errors.email == null ? {} : { borderColor: "red" }}
                  >
                    <label>Email</label>
                    <Field
                      data-testid="email-input"
                      type="email"
                      name="email"
                    />
                    <span className="error-message">
                      <ErrorMessage name="email" />
                    </span>
                  </ContactInput>
                  <ContactInput
                    style={
                      errors.message == null ? {} : { borderColor: "#fff" }
                    }
                  >
                    <label>Message</label>
                    <Field
                      data-testid="message-input"
                      as="textarea"
                      name="message"
                    />
                    <span className="error-message">
                      <ErrorMessage name="message" />
                    </span>
                  </ContactInput>
                  <Button text="Submit" type="submit" testid="submit-message" />
                </Form>
              )}
            </Formik>
          </Message>
        </AddressMessage>
      </Section>
    </Container>
  );
};

export default Contact;
