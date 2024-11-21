import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import React from "react";
import { useNavigate } from "react-router";
import { CustomSkillCompProps } from "../../Types";
import { fadeIn, SKILL_DATA } from "../../Constants";
import { useTheme } from "../../../contexts";

// Styled Components
const SkillBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "20px",
});

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
});

const MuiStack = styled(Stack)({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  alignItems: "center",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  padding: "20px",
  // backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  transition: "all 0.3s ease",
  transformOrigin: "center", // Center scaling origin
  animation: `${fadeIn} 1s ease`, // Apply fade-in animation
  "&:hover": {
    transform: "translateY(-5px)",
    backdropFilter: "blur(10px)", // Blurring the background on hover
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Slightly stronger shadow on hover
  },
});

const Title = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "10px",
});

const Container = styled(Box)({
  // maxHeight: "90vh", // makes the container scrollable
  height: "auto",
  overflowY: "auto",
  paddingBottom: "20px",
  width: "100%",
  // backgroundColor: "#ebeded"
});


const CustomSkillComp: React.FC<CustomSkillCompProps> = ({ skillList }) => {
  const navigate = useNavigate();
  const handleButtonClick = (name: string) => {
    alert(`View projects and notes for ${name}`);
    switch (name) {
      case "Notes":
        navigate("/notes");
        break;
      case "Projects":
        navigate("/projects");
        break;
      default:
        break;
    }
  };

  return (
    <SkillBox>
      {skillList.map((skill) => (
        <MuiStack
          key={skill.id}
          m={1}
          gap={2}
          style={{ animation: `${fadeIn} 1s ease` }}
        >
          <Typography variant="h6">{skill.name}</Typography>
          <CircularProgress size="lg" determinate value={skill.proficiency}>
            <Typography variant="body2">{skill.proficiency}%</Typography>
          </CircularProgress>
          <ButtonBox>
            <button
              onClick={() => handleButtonClick("Notes")}
              className="button-86"
            >
              {skill.name} Projects
            </button>
            <button
              onClick={() => handleButtonClick("Projects")}
              className="button-86"
            >
              View Notes
            </button>
          </ButtonBox>
        </MuiStack>
      ))}
    </SkillBox>
  );
};

// Main Component
const Skills = () => {
  const { theme } = useTheme();
  return (
    <Container
      className={theme === "dark" ? "text-light bg-dark" : "text-dark bg-light"}
    >
      <Title>Frontend</Title>
      <CustomSkillComp
        skillList={SKILL_DATA.filter((value) => value.skillType === "Frontend")}
      />

      <Title>Backend</Title>
      <CustomSkillComp
        skillList={SKILL_DATA.filter((value) => value.skillType === "Backend")}
      />

      <Title>Devops</Title>
      <CustomSkillComp
        skillList={SKILL_DATA.filter((value) => value.skillType === "Devops")}
      />

      <Title>Database</Title>
      <CustomSkillComp
        skillList={SKILL_DATA.filter((value) => value.skillType === "Database")}
      />

      <Title>Others</Title>
      <CustomSkillComp
        skillList={SKILL_DATA.filter(
          (value) =>
            value.skillType !== "Database" &&
            value.skillType !== "Devops" &&
            value.skillType !== "Backend" &&
            value.skillType !== "Frontend"
        )}
      />
    </Container>
  );
};

export default Skills;
