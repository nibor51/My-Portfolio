import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ProjectType from "../prop-types/ProjectType";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Project({ project }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <li>
      <Button type="button" onClick={handleOpen}>
        <figure>
          <img src={project.image} alt={project.name} />
          <figcaption>{project.name}</figcaption>
        </figure>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-title">{project.name}</h2>
          <img src={project.image} alt={project.name} />
          <p id="modal-description">{project.description}</p>
          <a href={project.url}>{project.url}</a>
        </Box>
      </Modal>
      <style jsx="true">
        {`
          #project li {
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 1rem;
          }
          #project p {
            text-align: center;
          }
          #project img {
            width: 100%;
            height: auto;
          }
          #project a {
            text-decoration: none;
            color: #000;
          }
        `}
      </style>
    </li>
  );
}

Project.propTypes = {
  project: ProjectType.isRequired,
};
