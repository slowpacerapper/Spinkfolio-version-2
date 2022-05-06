import { Box, Grid, Paper, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MyTextTwo } from "../Introduction/Introduction";
import Picture from "../assets/images/bak4.png";

export const MyImage = styled.img`
  width: 120%;
  max-height: 120%;
  object-fit: cover;
  transform: translate(-15px, -59px);
`;

export const Header = styled.h3`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  flex: 4;
  color: var(--primary-text-color);
  padding-right: 1rem;
  &::after {
    content: "";
    height: 0.5px;
    width: 100%;
    left: 200px;
    flex: 1;
    top: 50%;
    background-color: var(--primary-text-color);
  }
`;

export const HeaderLabel = styled.div`
  font-size: 24px;
  margin-right: 1rem;
  color: var(--fancy-color);
`;

export const animeSettings = {
  transform: "translateY(0%)",
  opacity: 1,
  margin: "8rem auto",
  transition: "all 0.3s ease-in",
};

export const defaultSettings = {
  transform: "translateY(20%)",
  opacity: 0,
  margin: "8rem auto",
};

const About = () => {
  const matchesWidth = useMediaQuery("(max-width: 768px)");
  const matchesHeight = useMediaQuery("(max-height: 500px)");
  const aboutMe = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting && setInView(true);
      },
      {
        threshold: !matchesWidth || !matchesHeight ? 0.4 : 0.05,
      }
    );

    observer.observe(aboutMe.current);
  }, []);

  return (
    <Box
      id="about"
      ref={aboutMe}
      width={!matchesWidth ? 0.8 : 0.95}
      sx={!inView ? defaultSettings : animeSettings}
      mb={0}
    >
      <Grid
        direction="column"
        p={3}
        sx={{ margin: "0rem auto" }}
        container
        item
        xs={!matchesWidth ? 11 : 12}
      >
        <Header>
          <HeaderLabel>02.</HeaderLabel>About Me
        </Header>
        <Grid container item xs={!matchesWidth ? 11 : 12}>
          <Grid container item md={8} xs={12} mb={matchesWidth && 5}>
            <MyTextTwo>
              I am a self motivated individual who is able to work in a busy
              environment and produce high standards of work. I am an excellent
              team worker and build up good working relationships with my
              colleagues. I am flexible, reliable and adaptive to all
              challenging situations. I am able to work well both in a team
              environment as well as using own initiative. I love challenges. I
              like to tackle problems on my own first before seeking help.
            </MyTextTwo>
          </Grid>
          <Grid container item md={4} xs={12} position="relative">
            <Paper
              elevate={12}
              sx={{
                position: "absolute",
                left: "-10px",
                top: "10px",
                maxWidth: "300px",
                height: "300px",
                opacity: 0.2,
                overflow: "hidden",
                bgcolor: "var(--primary-text-color)",
              }}
            ></Paper>
            <Paper
              elevate={12}
              sx={{
                width: "300px",
                maxHeight: "300px",
                overflow: "hidden",
                bgcolor: "white",
                zIndex: 50,
              }}
            >
              <MyImage src={Picture} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
