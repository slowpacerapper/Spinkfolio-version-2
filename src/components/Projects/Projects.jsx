import { Box, Button, Grid, Paper, Stack, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  animeSettings,
  defaultSettings,
  Header,
  HeaderLabel,
} from "../About/About";
import { SkillsHead } from "../Skills/Skills";
import { BsFolder } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { MyTextTwo } from "../Introduction/Introduction";
import { projectsDb } from "../../Utils/ProjectsData";
import styled from "styled-components";

const Techs = styled.h3`
  color: #7389a1;
  font-size: 14px;
  font-weight: 400;
  margin: 1rem 0;
`;

const Projects = () => {
  const matchesHeight = useMediaQuery("(max-height: 500px)");
  const matches = useMediaQuery("(max-width: 768px)");
  const [inView, setInView] = useState(false);
  const myProjects = useRef();
  const [show, setShow] = useState(false);
  const [some, setSome] = useState(3);
  let someSkills = [];

  const loadFour = () => {
    for (let i = 0; i < some; i++) {
      someSkills.push(projectsDb[i]);
    }
  };

  loadFour();

  const handleShowMore = () => {
    some === 3 ? setSome(projectsDb.length) : setSome(3);
    setShow(!show);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting && setInView(true);
      },
      {
        threshold: !matchesHeight ? 0.15 : 0.1,
      }
    );

    observer.observe(myProjects.current);
  }, []);

  return (
    <Box
      id="projects"
      ref={myProjects}
      mb={0}
      width={!matches ? 0.8 : 0.95}
      sx={!inView ? defaultSettings : animeSettings}
    >
      <Grid container>
        <Header style={{ marginBottom: "2rem" }}>
          <HeaderLabel>04.</HeaderLabel> Projects
        </Header>
        <Grid container item xs={12}>
          {someSkills.map((project) => {
            return (
              <Grid m={1} key={project.id} item md={3.8} xs={12}>
                <Paper
                  elevate={8}
                  sx={{
                    bgcolor: "#103052",
                    padding: "1.5rem",
                    minHeight: "300px",
                  }}
                >
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <BsFolder style={{ fontSize: "30px" }} />
                      <Box>
                        <Button href={project.gitlink}>
                          <AiOutlineGithub
                            style={{
                              color: "white",
                              fontSize: "25px",
                              margin: "0.5rem",
                            }}
                          />
                        </Button>
                        <Button href={project.weblink}>
                          <FiExternalLink
                            style={{
                              fontSize: "25px",
                              margin: "0.5rem",
                            }}
                          />
                        </Button>
                      </Box>
                    </Stack>
                    <SkillsHead>{project.title}</SkillsHead>
                    <MyTextTwo>{project.description}</MyTextTwo>
                    <Techs>{project.tech}</Techs>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Button
          onClick={handleShowMore}
          sx={{
            margin: "1rem auto",
            border: "0.5px solid var(--fancy-color)",
            color: "var(--fancy-color)",
            fontSize: "12px",
          }}
          variant="outlined"
        >
          {!show ? "Show More" : "Show Less"}
        </Button>
      </Grid>
    </Box>
  );
};

export default Projects;
