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
import { useTheme } from "../../../contexts";
import { keyframes } from "@emotion/react";

// Animations
const bounce = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0.2;
  }
  50% {
    transform: translateX(10px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components
const AccordionSummaryBox = styled(AccordionSummary)({
  display: "flex",
  width: "100%",
  background: "linear-gradient(90deg, #020024 0%, #6f2e9b 44%, #00d4ff 100%)",
  color: "#ffffff",
  alignItems: "center",
  borderRadius: "50px",
  padding: "10px 30px",
  gap: "auto",
  animation: `${bounce} 0.5s ease-in-out`,
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
});

const IconContainer = styled(Box)({
  display: "flex",
  gap: "15px",
  "& a": {
    color: "#ffffff",
    transition: "color 0.3s ease",
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
  animation: `${fadeSlideIn} 0.5s ease`,
});

const ProjectImage = styled("img")({
  width: "100%",
  maxWidth: "300px",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ProjectBox = styled(Box)({
  width: "100%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  height: "90vh",
});

const StyledAccordion = styled(Accordion)({
  borderRadius: "50px",
  transition: "transform 0.3s ease",
  "&.Mui-expanded": {
    animation: `${scaleIn} 0.3s ease`,
  },
});

const Projects = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { theme } = useTheme();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <ProjectBox
      className={
        theme === "dark" ? "text-light bg-dark" : "text-dark bg-light"
      }
    >
      {PROJECT_DATA.map((project) => (
        <StyledAccordion
          key={project.id}
          style={{borderRadius:'50px'}}
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
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </IconContainer>
          </AccordionSummaryBox>

          <AccordionDetailsContainer>
            <ProjectImage
              src={project.image}
              alt={`${project.name} screenshot`}
            />
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
        </StyledAccordion>
      ))}
    </ProjectBox>
  );
};

export default Projects;
