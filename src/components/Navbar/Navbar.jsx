import React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Paper, Stack } from "@mui/material";
import styled from "styled-components";

export const MySpan = styled.b`
  font-size: 14px;
  margin-right: 5px;
`;

export const MyButtons = {
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  color: "var(--primary-text-color)",
  textTransform: "Capitalize",
  fontFamily: "Rajdhani",
  fontWeight: "500",
  borderColor: "var(--fancy-color)",
};

export const MyButtonCustom = {
  fontSize: "16px",
  color: "var(--fancy-color)",
  textTransform: "Capitalize",
  fontFamily: "Rajdhani",
  fontWeight: "500",
  borderColor: "var(--fancy-color)",
};

const Navbar = () => {
  return (
    <Box
      sx={{ top: 0, backdropFilter: "blur(5px)", zIndex: 100 }}
      position="fixed"
      width={1}
    >
      <Paper
        sx={{
          height: "max-content",
          padding: 0,
          bgcolor: "var(--primary-background-color)",
          opacity: 0.8,
          borderRadius: "0",
        }}
        elevation={8}
      >
        <Grid
          pt={2}
          pb={2}
          sx={{ margin: "0 auto" }}
          width={0.9}
          container
          direction="row"
          justifyContent="space-between"
        >
          <Stack>
            <Button href="/" variant="outlined" sx={MyButtonCustom}>
              Spink
            </Button>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Button href="#intro" sx={MyButtons}>
              Intro.
            </Button>
            <Button href="#about" sx={MyButtons}>
              About
            </Button>
            <Button href="#skills" sx={MyButtons}>
              Skills
            </Button>
            <Button href="#projects" sx={MyButtons}>
              Projects
            </Button>
            <Button href="#contact" sx={MyButtons}>
              Contact
            </Button>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Navbar;
