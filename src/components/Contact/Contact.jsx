import { Button, ButtonGroup, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import { HeaderLabel } from "../About/About";
import { MyTextTwo } from "../Introduction/Introduction";
import Resumee from "../assets/Resumee.pdf";

const MyContactStyles = {
  transform: "translateY(0%)",
  opacity: 1,
  marginTop: "8rem",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "1rem",
  transition: "all 0.3s ease-in",
};

const ContactHead = styled.h3`
  display: flex;
  align-items: center;
  width: max-content;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-text-color);
`;

const MyContactText = styled.p`
  font-size: 14px;
  color: var(--fancy-color);
`;

const ContactHeadTwo = styled.h3`
  display: flex;
  align-items: center;
  width: max-content;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: var(--primary-text-color);
`;

const Contact = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Box id="contact" width={0.95} sx={MyContactStyles} mb={0}>
      <Grid container direction="column">
        <Box sx={{ margin: " 0 auto" }}>
          <ContactHead>
            <HeaderLabel>05.</HeaderLabel>
            Satisfied?
          </ContactHead>
        </Box>
        <Box sx={{ margin: " 0 auto" }}>
          <ContactHeadTwo>Get in Touch</ContactHeadTwo>
        </Box>
        <Box sx={{ margin: " 0 auto" }}>
          <MyTextTwo style={{ textAlign: "center" }}>
            I am currently looking for job opportunities. Very much available if
            you want to hire me or ask me any questions concerning any of my
            projects or collaborations.
          </MyTextTwo>
        </Box>
        <Box sx={{ margin: " 1rem auto" }}>
          <Button
            onClick={() => setShowInfo(!showInfo)}
            sx={{ margin: "0.25rem", fontSize: "12px" }}
            variant="contained"
          >
            Hire Me
          </Button>
          <Button
            sx={{
              margin: "0.25rem",
              border: "1px solid var(--fancy-color)",
              color: "var(--fancy-color)",
              fontSize: "12px",
            }}
            variant="outlined"
            download
            href={Resumee}
          >
            Resume
          </Button>
        </Box>

        <Grid
          container
          item
          direction="column"
          sx={
            !showInfo
              ? {
                  transform: "translateY(-30%)",
                  opacity: 0,
                  transition: "all 0.3s ease-in-out",
                }
              : {
                  transform: "translateY(0%)",
                  opacity: 1,
                  transition: "all 0.3s ease-in-out",
                }
          }
        >
          <Box sx={{ margin: " 0rem auto" }}>
            <Button
              variant="outlined"
              href="mailto:ayodeji.bakare994@gmail.com"
              sx={{
                color: "var(--fancy-color)",
                textTransform: "lowercase",
              }}
            >
              ayodeji.bakare994@gmail.com
            </Button>
          </Box>
          <Box sx={{ margin: " 0rem auto", marginBottom: "0.5rem" }}>
            <Button sx={{ color: "var(--fancy-color)", padding: 0 }}>
              +2348134117444
            </Button>
          </Box>
        </Grid>

        <Box sx={{ margin: " 2rem auto", marginBottom: "0.5rem" }}>
          <MyContactText>Inspired By Brittany Chiang</MyContactText>
        </Box>
        <Box
          sx={{
            margin: " 0 auto",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyContactText>&copy; Copyright Spink 2022</MyContactText>

          <ButtonGroup sx={{ color: "white" }} variant="none">
            <Button href="http://github.com/slowpacerapper">
              <BsGithub />
            </Button>
            <Button href="https://web.facebook.com/Marthrixe92/">
              <BsFacebook />
            </Button>
            <Button href="https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/">
              <BsLinkedin />
            </Button>
            <Button href="https://twitter.com/BakareAyodeji14">
              <BsTwitter />
            </Button>
          </ButtonGroup>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
