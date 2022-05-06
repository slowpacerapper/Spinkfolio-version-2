import { DiJavascript1, DiCss3Full, DiReact } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiNextdotjs, SiStyledcomponents, SiMaterialui } from "react-icons/si";
import styled from "styled-components";

const MyJavascriptIcon = styled(DiJavascript1)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyAiOutlineHtml5 = styled(AiOutlineHtml5)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyDiCss3Full = styled(DiCss3Full)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyDiReact = styled(DiReact)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MySiNextdotjs = styled(SiNextdotjs)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MySiStyledcomponents = styled(SiStyledcomponents)`
  font-size: 40px;
  margin-left: 0.5rem;
`;

const MySiMaterialui = styled(SiMaterialui)`
  font-size: 40px;
  margin-left: 0.5rem;
`;

let idValue = 0;
export const SkillsDb = [
  {
    id: ++idValue,
    skil: "Javascript",
    logo: <MyJavascriptIcon />,
    def: "A programming language that is one of the core technologies of the World Wide Web.",
  },
  {
    id: ++idValue,
    skil: "Html 5",
    logo: <MyAiOutlineHtml5 />,
    def: "A standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web.",
  },
  {
    id: ++idValue,
    skil: "CSS",
    logo: <MyDiCss3Full />,
    def: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  },
  {
    id: ++idValue,
    skil: "React",
    logo: <MyDiReact />,
    def: "A free and open-source front-end JavaScript library for building user interfaces based on UI components.",
  },
  {
    id: ++idValue,
    skil: "Next",
    logo: <MySiNextdotjs />,
    def: "A React framework that gives you building blocks to create web applications.",
  },
  {
    id: ++idValue,
    skil: "Styled Components",
    logo: <MySiStyledcomponents />,
    def: "A library built for React and React Native developers. It allows you to use component-level styles in your applications.",
  },
  {
    id: ++idValue,
    skil: "Material UI",
    logo: <MySiMaterialui />,
    def: "An open-source project that features React components that implement Google's Material Design.",
  },
];
