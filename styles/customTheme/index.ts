import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "56em",
  //lg: "64em",
 
});

const customTheme = extendTheme({
  fonts,
  colors,
  breakpoints,
  components: {
    Button,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px"
  },
  
});

export default customTheme;
