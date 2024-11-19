import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import TextField from "../../atoms/TextField";
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import { fadeIn, NOTES_DATA } from "../../Constants";
//  Defining the constant Data for notes

const NoteStackBox = styled(Stack)({
  width: "100%",
  // backgroundColor: "#f7f7f7", // Light background color
  borderRadius: "10px",
  padding: "20px",
  margin: "20px 0",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for the container
});

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
});

const NoteBox = styled(Box)({
  // backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)", // Slightly enlarge on hover
    backgroundColor: "#e3f2fd", // Light blue background on hover
  },
});

const Title = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
});

const NoteContent = styled(Typography)({
  color: "#555",
  fontSize: "1rem",
  lineHeight: "1.6",
});

const NoteType = styled(Typography)({
  fontSize: "0.9rem",
  color: "#888",
  fontStyle: "italic",
});

const CustomButton = styled(Button)({
  display: 'flex',
  padding: "10px 20px",
  width: "20%",
  backgroundColor: "#3f51b5",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1a237e",
    color: "#fff",
  },
});

const SearchTextField = styled(TextField)({
  width: "40%",
  "& .MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "5px",
    // padding: '10px',
  },
});

// Animation for smooth fade-in effect when notes load
const noteStyle = {
  backgroundColor: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
  position: "relative",
};
const Notes = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <style>{fadeIn}</style>
      <NoteStackBox>
        <ButtonBox>
          <CustomButton
            size="small"
            endIcon={<AddIcon />}
             sx={noteStyle}
            onClick={() => navigate("/add-notes")}
          >
            Add Note
          </CustomButton>
          <SearchTextField
            size="small"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            placeholder="Search based on title and noteType"
            label="SearchNote"
          />
        </ButtonBox>
        <h1>All Notes</h1>
        {NOTES_DATA.filter((data) =>
          data.title.toLowerCase().includes(searchValue)
        ).map((note) => (
          <NoteBox key={note.title} style={{ animation: "fadeIn 1s ease" }}>
            <Title>{note.title}</Title>
            <NoteType>{note.noteType}</NoteType>
            <NoteContent>{note.content}</NoteContent>
          </NoteBox>
        ))}
      </NoteStackBox>
    </>
  );
};

export default Notes;
