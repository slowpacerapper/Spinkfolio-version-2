import { Box, Button, Grid, Paper, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  animeSettings,
  defaultSettings,
  Header,
  HeaderLabel,
} from "../About/About";
import { MyTextTwo } from "../Introduction/Introduction";
import { SkillsDb } from "../../Utils/SkillsData";

export const SkillsHead = styled.h3`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  flex: 4;
  color: var(--primary-text-color);
  padding-right: 1rem;
`;

const Skills = () => {
  const matchesHeight = useMediaQuery("(max-height: 500px)");
  const matches = useMediaQuery("(max-width: 768px)");
  const mySkills = useRef();
  const [inView, setInView] = useState(false);
  const [show, setShow] = useState(false);
  const [some, setSome] = useState(4);
  let someSkills = [];

  const loadFour = () => {
    for (let i = 0; i < some; i++) {
      someSkills.push(SkillsDb[i]);
    }
  };

  loadFour();

  const handleShowMore = () => {
    some === 4 ? setSome(SkillsDb.length) : setSome(4);
    setShow(!show);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting && setInView(true);
      },
      {
        threshold: !matches && !matchesHeight ? 0.2 : 0.1,
      }
    );

    observer.observe(mySkills.current);
  }, []);

  return (
    <Box
      id="skills"
      ref={mySkills}
      mb={0}
      width={!matches ? 0.8 : 0.95}
      sx={!inView ? defaultSettings : animeSettings}
    >
      <Grid container>
        <Header style={{ marginBottom: "2rem" }}>
          <HeaderLabel>03.</HeaderLabel> Core Techs
        </Header>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          sx={{ minHeight: "500px" }}
        >
          {someSkills.map((skills) => {
            return (
              <Grid
                sx={{
                  "&:hover": {
                    transform: "translateY(-2%)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                item
                md={6}
                key={skills.id}
              >
                <Box sx={{ margin: "1rem" }}>
                  <SkillsHead>
                    {skills.skil}
                    {skills.logo}
                  </SkillsHead>
                  <Paper
                    sx={{
                      padding: "2rem",
                      border: "0.5px solid var(--fancy-color)",
                      bgcolor: "transparent",
                      minHeight: "175px",
                      boxShadow: "2px 5px 5px rgba(0,0,0,0.4)",
                    }}
                  >
                    <MyTextTwo>{skills.def}</MyTextTwo>
                  </Paper>
                </Box>
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

export default Skills;
