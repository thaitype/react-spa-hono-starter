import { createTheme, type MantineColorsTuple } from "@mantine/core";

/**
 * Sky colors from Mantine
 * From https://mantinehub.com/
 */
const skyColors: MantineColorsTuple = ["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#075985","#0c4a6e","#082f49","#0EA5E9"];

const theme = createTheme({
  defaultRadius: "md",
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  colors: {
    primary: skyColors,
  },
});

export default theme;
