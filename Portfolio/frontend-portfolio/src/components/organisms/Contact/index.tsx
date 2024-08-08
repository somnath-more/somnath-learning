import styled from "@emotion/styled";
import React from "react";
import TextField from "../../atoms/TextField";
import { Stack, Typography } from "@mui/material";
import Button from "../../atoms/Button";
const ContactForm = styled(Stack)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "20px",
  gap: "5px",
});
const Contact = () => {
  const contactUs = () => {
    console.log("Your contact Received!");
  };
  return (
    <ContactForm>
      <Typography variant="body1" color="white" children={"Name"} />
      <TextField placeholder="Enter your name" label={"Enter your name"} />
      <Typography variant="body1" color="white" children={"Email"} />
      <TextField placeholder="Enter your email" label={"Enter your email"} />
      <Typography variant="body1" color="white" children={"Phone Number"} />
      <TextField
        placeholder="Enter your phone number"
        label={"Enter your phone number"}
      />
      <Typography variant="body1" color="white" children={"Message"} />
      <TextField
        placeholder="Enter your message"
        multiline
        rows={4}
        label={"Enter your message"}
      />
      <Button variant="outlined" onClick={contactUs} text={"Submit"} />
    </ContactForm>
  );
};

export default Contact;
