import { useMediaQuery } from "@mui/material";
import React, { Fragment } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Introduction from "../components/Introduction/Introduction";
import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Home = () => {
  const matches = useMediaQuery("(max-width: 600px)");
  return (
    <Fragment>
      {!matches ? <Navbar /> : <NavbarMobile />}
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Home;
