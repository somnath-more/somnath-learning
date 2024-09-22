import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "../../atoms/TextField";
import { Stack, Typography, Button as MuiButton } from "@mui/material";
import emailjs from 'emailjs-com';

// Styled container for the contact form
const ContactForm = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "600px", // Set a max-width for better readability
  margin: "0 auto",
  backgroundColor: "#f5f5f5", // Light gray background for the form
  borderRadius: "10px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)", // Enhanced shadow for depth
  padding: "30px",
  gap: "20px",
  height: "100%",
});

const Heading = styled(Typography)({
  fontSize: "2.2rem",
  fontWeight: "700",
  textAlign: "center",
  color: "#333", // Darker color for text
  marginBottom: "20px",
});

const FormField = styled(TextField)({
  width: "100%", // Full width for text fields
  '& .MuiInputLabel-root': {
    color: "#666", // Subtle label color
  },
  '& .MuiInputBase-input': {
    color: "#333", // Input text color
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: "8px", // Rounded corners
    '& fieldset': {
      borderColor: "#ccc", // Light border color
    },
    '&:hover fieldset': {
      borderColor: "#888", // Darker border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: "#3f51b5", // Blue border color when focused
    },
  },
});

const SubmitButton = styled(MuiButton)({
  alignSelf: "flex-end",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "600",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "background-color 0.3s, transform 0.3s",
  '&:hover': {
    backgroundColor: "#2r51b7",
    transform: "scale(1.05)",
  },
});

interface ContactFormType {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const Contact = () => {
  const [contact, setContact] = useState<ContactFormType>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (field: keyof ContactFormType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [field]: e.target.value });
  };

  const contactUs = () => {
    console.log("Your contact received!");
    console.log(contact);

    const templateParams = {
      name: contact.name,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      message: contact.message,
    };

    emailjs.send(
      'service_p35u6aq', // Replace with your EmailJS service ID
      'template_e05ql2a', // Replace with your EmailJS template ID
      templateParams,
      'l0_wm2nmQjDtrKmXR' // Replace with your EmailJS public key
    ).then((response) => {
      console.log("Success! Response:", response.status, response.text);
      alert("Email sent successfully!");
      setContact({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }).catch((err) => {
      console.log("Error! Response:", err);
      alert("Failed to send email!");
    });
  };

  return (
    <ContactForm>
      <Heading>Contact Us</Heading>
      <Typography variant="body1" color="textSecondary">Name</Typography>
      <FormField
        placeholder="Enter your name"
        label="Name"
        value={contact.name}
        onChange={handleChange('name')}
      />
      <Typography variant="body1" color="textSecondary">Email</Typography>
      <FormField
        placeholder="Enter your email"
        label="Email"
        value={contact.email}
        onChange={handleChange('email')}
      />
      <Typography variant="body1" color="textSecondary">Phone Number</Typography>
      <FormField
        placeholder="Enter your phone number"
        label="Phone Number"
        value={contact.phoneNumber}
        onChange={handleChange('phoneNumber')}
      />
      <Typography variant="body1" color="textSecondary">Message</Typography>
      <FormField
        placeholder="Enter your message"
        multiline
        rows={4}
        label="Message"
        value={contact.message}
        onChange={handleChange('message')}
      />
      <SubmitButton variant="contained" color="primary" onClick={contactUs}>
        Submit
      </SubmitButton>
    </ContactForm>
  );
};

export default Contact;
