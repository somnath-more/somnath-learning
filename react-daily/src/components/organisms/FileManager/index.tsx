import React, { useState } from "react";
import { FILE_MANAGER_Data } from "../../constants";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

// Styled Components
const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "12.5rem",
  height: "auto",
  margin: "1rem",
  background: "black",
  color: "white",
});

const FILEDIV = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  cursor: "pointer",
  padding: "5px",
  "&:hover": {
    background: "#333",
  },
});

// Component
const FileManager = () => {
  const [fileData, setFileData] = useState(FILE_MANAGER_Data);
  const [expandedFolders, setExpandedFolders] = useState(new Set()); // Track expanded folders

  // Toggle folder visibility
  const handleClick = (id) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id); // Collapse if already expanded
      } else {
        newSet.add(id); // Expand otherwise
      }
      return newSet;
    });
  };

  // Recursive rendering for nested files/folders
  const renderFileTree = (data) => {
    return data.map((item) => (
      <div key={item.id}>
        <FILEDIV onClick={() => item.isFolder && handleClick(item.id)}>
          {item.isFolder ? "📁" : "📄"} {item.name}
        </FILEDIV>
        {item.isFolder &&
          expandedFolders.has(item.id) && // Render children if folder is expanded
          item.children &&
          renderFileTree(item.children)}
      </div>
    ));
  };

  return <Container>{renderFileTree(fileData)}</Container>;
};

export default FileManager;
