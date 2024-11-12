import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "../../atoms/TextField";
import { Stack, Typography, Button as MuiButton, Grid } from "@mui/material";
import emailjs from "emailjs-com";

// Styled container for the contact form
const ContactContainer = styled(Grid)({
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px",
  borderRadius: "12px",
  // boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
});

const Heading = styled(Typography)({
  fontSize: "2.2rem",
  fontWeight: "700",
  textAlign: "center",
  color: "#333",
  marginBottom: "20px",
});

const FormField = styled(TextField)({
  width: "100%",
  borderRadius: "50px",
  "& .MuiInputLabel-root": {
    color: "#666",
  },
  "& .MuiInputBase-input": {
    color: "#333",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#888",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3f51b5",
    },
  },
});

const SubmitButton = styled(MuiButton)({
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "1rem",
  fontWeight: "600",
  color: '#fff',
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#2e7d32",
    transform: "scale(1.05)",
  },
   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,135,116,1) 44%, rgba(0,212,255,1) 100%)'
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

  const handleChange =
    (field: keyof ContactFormType) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContact({ ...contact, [field]: e.target.value });
    };

  const contactUs = () => {
    const templateParams = {
      name: contact.name,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      message: contact.message,
    };

    emailjs
      .send(
        "service_p35u6aq",
        "template_e05ql2a",
        templateParams,
        "l0_wm2nmQjDtrKmXR"
      )
      .then((response) => {
        alert("Email sent successfully!");
        setContact({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      })
      .catch((err) => {
        alert("Failed to send email!");
      });
  };

  return (
    <ContactContainer container spacing={4}>
      <Grid item xs={12}>
        <Heading>Have Some Questions for Me?</Heading>
      </Grid>

      {/* Left Side - Image Section */}
      <Grid item xs={12} md={6}>
        <Stack alignItems="center">
          <img src="image.png" alt="Contact" style={{ width: "100%", borderRadius: "10px" }} />
        </Stack>
      </Grid>

      {/* Right Side - Form Section */}
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <FormField
            placeholder="Enter your name"
            label="Name"
            value={contact.name}
            onChange={handleChange("name")}
          />
          <FormField
            placeholder="Enter your email"
            label="Email"
            value={contact.email}
            onChange={handleChange("email")}
          />
          <FormField
            placeholder="Enter your phone number"
            label="Phone Number"
            value={contact.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
          <FormField
            placeholder="Enter your message"
            label="Message"
            multiline
            rows={4}
            value={contact.message}
            onChange={handleChange("message")}
          />
          <SubmitButton variant="contained" color="primary" onClick={contactUs}>
            Submit
          </SubmitButton>
        </Stack>
      </Grid>
    </ContactContainer>
  );
};

export default Contact;
