import { Button, Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import { MyButtonCustom, MyButtons, MySpan } from "./Navbar";
import Emoji from "../assets/images/open.png";
import { BsMenuApp } from "react-icons/bs";

const MenuIcn = styled(BsMenuApp)`
  position: fixed;
  z-index: 100;
  left: 20px;
  top: 15px;
  font-size: 20px;
  cursor: pointer;
  animation: shake 1.5s ease-in-out alternate forwards infinite;
  @keyframes shake {
    0% {
      transform: translateX(0%);
    }

    25% {
      transform: translateX(0%);
    }

    75% {
      transform: translateX(10%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;

const BoxCustomStyle = {
  position: "fixed",
  zIndex: "100",
  top: 0,
  backdropFilter: "blur(15px)",
  clipPath: "Circle(25px at 35px 30px)",
  transition: "all .8s ease-in-out",
  backgroundColor: "var(--fancy-color)",
};

const BoxCustomStyleTwo = {
  top: 0,
  position: "fixed",
  zIndex: "100",
  backdropFilter: "blur(15px)",
  clipPath: "Circle(200% at 15px 15px)",
  transition: "all .8s ease-in-out",
};

const NavbarMobile = () => {
  const [animateNav, setAnimateNav] = useState(false);

  const handleRemoveNavbar = () => {
    setAnimateNav(!animateNav);
  };

  return (
    <Box
      sx={!animateNav ? BoxCustomStyle : BoxCustomStyleTwo}
      width={300}
      height={1}
    >
      <Button
        sx={{ position: "fixed", zIndex: "100" }}
        onClick={() => setAnimateNav(!animateNav)}
      >
        <MenuIcn style={{ fontSize: "30px" }} />
      </Button>
      <Paper
        sx={{
          height: "100vh",
          overflow: "auto",
          padding: "4rem 1.5rem",
          bgcolor: "var(--primary-background-color)",
          opacity: 0.9,
          borderRadius: "0",
        }}
        elevation={12}
      >
        <Grid
          container
          height={1}
          direction="column"
          justifyContent="space-between"
        >
          <Stack justifyContent="center" alignItems="start" spacing={3}>
            <Button onClick={handleRemoveNavbar} href="#intro" sx={MyButtons}>
              <MySpan>01.</MySpan> Home
            </Button>
            <Button onClick={handleRemoveNavbar} href="#about" sx={MyButtons}>
              <MySpan>02.</MySpan> About
            </Button>
            <Button onClick={handleRemoveNavbar} href="#skills" sx={MyButtons}>
              <MySpan>03.</MySpan> Skills
            </Button>
            <Button
              onClick={handleRemoveNavbar}
              href="#projects"
              sx={MyButtons}
            >
              <MySpan>04.</MySpan> Projects
            </Button>
            <Button onClick={handleRemoveNavbar} href="#contact" sx={MyButtons}>
              <MySpan>05.</MySpan> Contact
            </Button>
          </Stack>
          <Stack>
            <Button href="/" variant="outlined" sx={MyButtonCustom}>
              Spink
            </Button>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NavbarMobile;
