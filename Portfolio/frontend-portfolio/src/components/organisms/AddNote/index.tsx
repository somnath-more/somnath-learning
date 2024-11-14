import React, { useState } from "react";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 500px;
  margin: 2rem auto;
`;

const Heading = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-size: 1rem;
  resize: vertical;
`;

const Dropdown = styled.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const ResetButton = styled(Button)`
  background-color: #f44336;
  color: white;
`;

const SubmitButton = styled(Button)`
  background-color: #4caf50;
  color: white;
`;

const AddNote = () => {
  const [noteType, setNoteType] = useState("");

  const handleTypeChange = (e:any) => {
    setNoteType(e.target.value);
  };

  return (
    <FormContainer>
      <Heading>Add Note</Heading>
      <StyledForm>
        <Label htmlFor="title">Title:</Label>
        <Input type="text" id="title" name="title" />

        <Label htmlFor="content">Content:</Label>
        <TextArea id="content" name="content" rows={5} />

        <Label htmlFor="noteType">Note Type:</Label>
        <Dropdown id="noteType" name="noteType" value={noteType} onChange={handleTypeChange}>
          <option value="">Select Type</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="reminder">Reminder</option>
        </Dropdown>

        <ButtonContainer>
          <SubmitButton type="submit">Add Note</SubmitButton>
          <ResetButton type="reset">Reset</ResetButton>
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};

export default AddNote;
