import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import styled from "@emotion/styled";
import { PROJECT_DATA } from "../../Constants";

// Styling components
const AccordionSummaryBox = styled(AccordionSummary)({
  display: "flex",
  width: "100%",
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(111,46,155,1) 44%, rgba(0,212,255,1) 100%)",
  color: "#ffffff",
  alignItems: "center",
  borderRadius: "50px",
  padding: "10px 30px",
  gap: "auto",
});

const IconContainer = styled(Box)({
  display: "flex",
  gap: "15px",
  "& a": {
    color: "#ffffff",
    "&:hover": {
      color: "#61dafb",
    },
  },
});

const AccordionDetailsContainer = styled(AccordionDetails)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  padding: "20px",
  animation: "fadeSlideIn 0.5s ease forwards",
  opacity: 0, // Start hidden, fade in with animation
  transform: "translateY(-10px)",

  "@keyframes fadeSlideIn": {
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
});

const ProjectImage = styled("img")({
  width: "100%",
  maxWidth: "300px",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
});

const ProjectBox = styled(Box)({
  width: "100%",
  backgroundColor: "transparent",
  borderRadius: "8px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

const Projects = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <ProjectBox>
      {PROJECT_DATA.map((project) => (
        <Accordion
          key={project.id}
          expanded={expanded === `panel${project.id}`}
          onChange={handleChange(`panel${project.id}`)}
        >
          <AccordionSummaryBox
            aria-controls={`panel${project.id}-content`}
            id={`panel${project.id}-header`}
          >
            <Typography variant="h6" fontWeight="bold" style={{ flex: 1 }}>
              {project.name}
            </Typography>
            <IconContainer>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <LinkIcon fontSize="large" />
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" />
              </a>
            </IconContainer>
          </AccordionSummaryBox>

          <AccordionDetailsContainer>
            <ProjectImage src={project.image} alt={`${project.name} screenshot`} />
            <Typography variant="body1" color="textSecondary" align="center">
              Tools: {project.tools.join(", ")}
            </Typography>
            <Typography variant="body2" align="center">
              <a href={project.link}>Link</a>
            </Typography>
            <Typography variant="body2" align="center">
              {project.details}
            </Typography>

          </AccordionDetailsContainer>
        </Accordion>
      ))}
    </ProjectBox>
  );
};

export default Projects;
